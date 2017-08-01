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
Here, the `cards` link
