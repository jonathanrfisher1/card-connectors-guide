A card request consists of one or more tokens. These tokens might be pulled from the text of an email, or they might be from the client's environment &mdash; for example, the user's email address.

## JSON schema

The connector JSON request schema is defined using the [json-schema.org](http://json-schema.org/) syntax as follows:

```javascript
{
  "$schema": "http://json-schema.org/schema#",
  "title": "Roswell Hero Card Request schema",

  "properties": {
    "id":     {"type": "string"},
    "tokens": {"type": "object",
               "patternProperties": {
                 "[a-z0-9_-]*": {"type": "array", "items": {"type": "string"}}
               }
    }
  },
  "additionalProperties": false
}
```
## Example request
```javascript
{
   "id":"weather",
   "tokens":{
     "zip":["30360", "30338"]
   }
}
``` 