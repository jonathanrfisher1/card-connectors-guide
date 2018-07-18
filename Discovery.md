A connector is registered with the Hero Card Service by adding a discovery URL. This URL might point to the connector itself, or it might point to static web content (for example, Amazon S3).

Discovery tells the Hero Card Service where to submit card requests, which headers to pass, etc.

The content behind the discovery URL MUST be in [HAL](http://stateless.co/hal_specification.html) format and its `Content-Type` MUST be set to `application/hal+json`.

All discovery resources MUST be available to unauthenticated clients.

Here is an example:
```
{
  "_links": {
    "metadata": {
      "href": "http://acme.com/connectors/weather-connector-id/discovery/metadata.json"
    },
    "objects": {
      "href": "http://acme.com/connectors/weather-connector-id/cards/requests"
    },
    "image": {
      "href": "http://acme.com/connectors/weather-connector-id/images/connector.png"
    },
    "test_auth": {
      "href": "http://acme.com/connectors/weather-connector-id/test-auth"
    },
    "self": {
      "href": "http://acme.com/connectors/weather-connector-id"
    }
  }
}
```   
Here, the `objects` link tells Hero where to submit card requests. The `metadata` link tells Hero where to retrieve additional information. 

The `image` link tells Hero where to find an image to be displayed within cards.  The image should be a png.

The `test_auth` link offers an endpoint for testing the backend authorization. This is useful where BASIC authentication is used, and the authorization value is derived from (possibly mistyped) user input. The endpoint will be accessed with a GET request with the same headers as would be used with a card request.

In our example, the `metadata` endpoint returns the following:
```
{
  "authorization_header": "x-weather-authorization",
  "backend_base_url_header": "x-weather-base-url",
  "object_type": "card",
  "fields": {
    "zip": {
      "capture_group": 1,
      "regex": "([0-9]{5})(?:[- ][0-9]{4})?"
    }
  }
}
```
`authorization_header` is telling Hero the header to pass for any backend authentication. Hero will pass the token in `x-weather-authorization` and it is the connector's responsibility to copy it into the `Authorization` header before making calls to the backend. This won't be required if the backend uses the same authentication scheme as the connector.

Similarly, `backend_base_url_header` is telling Hero the header to pass to indicate the base URL of the backend. This won't be required if the connector is tied to a single backend instance.

The `object_type` is telling Hero that the results will be card objects.

The `fields` object is telling Hero what to pass for the `tokens` in a card request. In our example, the connector is requesting `zip`, which will be extracted from some text using the supplied regular expression.

Fields can also be used to request the value of environment variables. For example:
```
"fields": {
  "user_email": {"env": "USER_EMAIL"} 
}
```
Here, the connector is requesting a token, `user_email`, which is taken from the the `USER_EMAIL` environment variable.
The full list of available environment variables is below:

| Variable | Description|
-----------|------------------------|
| USER_EMAIL | The user's email address|
| ENROLLMENT_IDENTIFIER | MDM unique enrollment identifier |
| ENROLLMENT_USERNAME | MDM enrollment username |
| ENROLLMENT_GROUP_IDENTIFIER | MDM enrollment group |
| ENROLLMENT_DEVICE_UDID | MDM enrollment device unique identifier |
| DEVICE_IDENTIFIER | Operating system device unique identifier |
| DEVICE_MODEL | Operating system device model |
| DEVICE_NAME | Operating system device name |
| DEVICE_SYSTEM_NAME | Operating system system name (‘iOS’) |
| DEVICE_SYSTEM_VERSION | Operating system version (‘10.0’) |
| DEVICE_UI_IDIOM | Operating system device idiom (‘tablet’)|