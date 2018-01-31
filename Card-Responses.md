The [JSON schema](http://json-schema.org/) for a card response can be found [here](https://vmwaresamples.github.io/card-connectors-guide/#schema/herocard-response-schema.json).

Here is an example response:

```javascript
    {
      "cards": [
        {
          "body": {
            "fields": [
              {
                "type": "GENERAL",
                "title": "Temperature",
                "description": "75"
              },
              {
                "type": "GENERAL",
                "title": "Conditions",
                "description": "Sunny"
              }
            ],
            "description": "The weather is rather nice at the moment"
          },
          "id": "583ff582-0c09-40ab-b8ae-d366a7b95958",
          "header": {
            "title": "Weather forecast for 30332"
          },
          "template": {
            "href": "http://acme.com/connectors/weather-connector-id/templates/generic.hbs"
          },
          "actions": [
            {
              "url": {
                "href": "http://acme.com/connectors/weather-connector-id/reports"
              },
              "id": "75befd7f-99f0-4980-90a6-8daf6270770f",
              "user_input": [
                {
                  "id": "temperature",
                  "label": "Please enter temperature for 30332"
                }
              ],
              "request": {
                "zip": "30332"
              },
              "label": "Report weather",
              "type": "POST",
              "completed_label": "Weather reported successfully",
              "action_key": "USER_INPUT"
            }
          ]
        },
        {
          "body": {
            "fields": [
              {
                "type": "GENERAL",
                "title": "Temperature",
                "description": "75"
              },
              {
                "type": "GENERAL",
                "title": "Conditions",
                "description": "Sunny"
              }
            ],
            "description": "The weather is rather nice at the moment"
          },
          "id": "f299ea76-1f71-4ec0-af12-8caced30aff5",
          "header": {
            "title": "Weather forecast for 30067"
          },
          "template": {
            "href": "http://acme.com/connectors/weather-connector-id/templates/generic.hbs"
          },
          "actions": [
            {
              "url": {
                "href": "http://acme.com/connectors/weather-connector-id/reports"
              },
              "id": "6d8caf05-e93d-4521-b603-c5a4dffc5176",
              "user_input": [
                {
                  "id": "temperature",
                  "label": "Please enter temperature for 30067"
                }
              ],
              "request": {
                "zip": "30067"
              },
              "label": "Report weather",
              "type": "POST",
              "completed_label": "Weather reported successfully",
              "action_key": "USER_INPUT"
            }
          ]
        },
        {
          "body": {
            "fields": [
              {
                "type": "GENERAL",
                "title": "Temperature",
                "description": "75"
              },
              {
                "type": "GENERAL",
                "title": "Conditions",
                "description": "Sunny"
              }
            ],
            "description": "The weather is rather nice at the moment"
          },
          "id": "c046c0ab-3dc7-4c5a-905e-8b3cdde4d9a1",
          "header": {
            "title": "Weather forecast for 00100"
          },
          "template": {
            "href": "http://acme.com/connectors/weather-connector-id/templates/generic.hbs"
          },
          "actions": [
            {
              "url": {
                "href": "http://acme.com/connectors/weather-connector-id/reports"
              },
              "id": "5ede58dc-c479-46e0-a70e-03b772fb78fd",
              "user_input": [
                {
                  "id": "temperature",
                  "label": "Please enter temperature for 00100"
                }
              ],
              "request": {
                "zip": "00100"
              },
              "label": "Report weather",
              "type": "POST",
              "completed_label": "Weather reported successfully",
              "action_key": "USER_INPUT"
            }
          ]
        },
        {
          "body": {
            "fields": [
              {
                "type": "GENERAL",
                "title": "Temperature",
                "description": "75"
              },
              {
                "type": "GENERAL",
                "title": "Conditions",
                "description": "Sunny"
              }
            ],
            "description": "The weather is rather nice at the moment"
          },
          "id": "2a9531c4-3cf3-4494-af30-21c9a99cd636",
          "header": {
            "title": "Weather forecast for 30080"
          },
          "template": {
            "href": "http://acme.com/connectors/weather-connector-id/templates/generic.hbs"
          },
          "actions": [
            {
              "url": {
                "href": "http://acme.com/connectors/weather-connector-id/reports"
              },
              "id": "2274b789-7179-44e9-8c11-941cfa58c9b0",
              "user_input": [
                {
                  "id": "temperature",
                  "label": "Please enter temperature for 30080"
                }
              ],
              "request": {
                "zip": "30080"
              },
              "label": "Report weather",
              "type": "POST",
              "completed_label": "Weather reported successfully",
              "action_key": "USER_INPUT"
            }
          ]
        }
      ],
      "connector_id": "weather-connector-id"
    }

``` 