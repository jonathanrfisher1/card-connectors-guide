A connector is registered with the Hero Card Service by adding a discovery URL. This URL might point to the connector itself, or it might point to static web content (for example, Amazon S3).

Discovery tells the Hero Card Service where to submit card requests, which headers to pass, etc.

The content behind the discovery URL must be in [HAL](http://stateless.co/hal_specification.html) format. 

Here is an example:
```
{
  "_links": {
    "metadata": {
      "href": "http://acme.com/connectors/weather/discovery/metadata.json"
    },
    "cards":{
      "href": "http://acme.com/connectors/weather/cards/requests"
    }
  }
}
```   
Here, the `cards` link tells Hero where to submit card requests. The `metadata` link tells Hero where to retrieve additional information.

In our example, the `metadata` endpoint returns the following:
```
{
  "authorization_header": "x-weather-authorization",
  "backend_base_url_header": "x-weather-base-url",
  "fields": {
    "zip": {
      "regex": "^\d{5}(?:[-\s]\d{4})?$"
    }
  }
}
```
`authorization_header` is telling Hero the header to pass for any backend authentication. Hero will pass the token in `x-weather-authorization` and it is the connector's responsibility to copy it into the `Authorization` header before making calls to the backend. This won't be required if the backend uses the same authentication scheme as the connector.

Similarly, `backend_base_url_header` is telling Hero the header to pass to indicate the base URL of the backend. This won't be required if the connector is tied to a single backend instance.

The `fields` object is telling Hero what to pass for the `tokens` in a card request. In our example, the connector is requesting `zip`, which will be extracted from some text using the supplied regular expression.