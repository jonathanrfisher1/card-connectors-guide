## JSON schema

The connector JSON response schema is defined using the json-schema.org syntax as follows:
```javascript
{
  "$schema": "http://json-schema.org/schema#",
  "title": "Roswell Hero Card response schema",

  "type": "object",
  "properties": {
    "cards": {"type": "array", "items": {"$ref": "#/definitions/CARD"}},
    "connector_statuses": {"type": "array"}
  },
  "additionalProperties": false,


  "definitions": {
    "CARD": {
      "type": "object",
      "properties":     {
        "id":           {"type": "string", "pattern": "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"},
        "connector_id": {"type": "string"},
        "name":         {"type": "string"},
        "creation_date": {"type": "string", "format": "date-time"},
        "expiration_date" :{"type": "string", "format": "date-time"},
        "template":     {"$ref": "#/definitions/LINK"},
        "header":       {"$ref": "#/definitions/CARD_HEADER"},
        "body":         {"$ref": "#/definitions/CARD_BODY"},
        "actions":      {"type": "array", "items": {"$ref": "#/definitions/CARD_ACTION"}}
      },
      "additionalProperties": false
    },

    "LINK": {
      "type": "object",
      "properties": {
        "href": {"type": "string"}
      },
      "required": ["href"],
      "additionalProperties": false
    },

    "CARD_HEADER": {
      "type": "object",
      "properties": {
        "title":    {"type": "string"},
        "subtitle": {"type": "string"}
      },
      "additionalProperties": false
    },

    "CARD_BODY": {
      "type": "object",
      "properties": {
        "description": {"type": "string"},
        "fields":      {"type": "array", "items": {"$ref": "#/definitions/CARD_BODY_FIELD"}}
      },
      "additionalProperties": false
    },

    "CARD_BODY_FIELD": {
      "type": "object",
      "properties": {
        "type":        {"type": "string"},
        "title":       {"type": "string"},
        "description": {"type": "string"},
        "content":     {"type": "array", "items": {"type": "object"}}
      },
      "additionalProperties": false
    },

    "CARD_ACTION": {
      "type": "object",
      "properties": {
        "id":         {"type": "string", "pattern": "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"},
        "action_key": {"type": "string"},
        "label":      {"type": "string"},
        "url":        {"$ref": "#/definitions/LINK"},
        "type":       {"$ref": "#/definitions/HTTP_METHODS"},
        "user_input": {"type": "array", "items": {"$ref": "#/definitions/CARD_ACTION_USER_INPUT"}},
        "request":    {"type": "object"}
      },
      "additionalProperties": false
    },

    "CARD_ACTION_USER_INPUT": {
      "type": "object",
      "properties": {
        "id":         {"type": "string"},
        "label":      {"type": "string"},
        "format":     {"type": "string"},
        "options":    {"type": "object"},
        "min_length": {"type": "integer", "minimum": 0},
        "max_length": {"type": "integer", "minimum": 0}
      },
      "required": ["id", "label"],
      "additionalProperties": false
    },

    "HTTP_METHODS": {
      "type": "string",
      "enum": ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]
    }

  }
}
```

## Example response

```javascript
{
  "cards": [{
    "id" : "00000000-0000-0000-0000-000000000000",
    "connector_id": "salesforce",
    "name": "Salesforce",
    "creation_date":"1970-01-01T00:00:00.000+00:00",
    "template": {
      "href": "/connectors/salesforce/templates/generic.hbs"
    },
    "header": {
      "title": "Add a contact in Salesforce?"
    },
    "body": {
      "description": "The sender's address, john.doe@abc.com, might be related to your Salesforce account named 'Georce Michael'. Would you like to add the sender as a contact?"
    },
    "actions": [{
      "id" : "00000000-0000-0000-0000-000000000000",
      "label": "Add contact",
      "url": {
        "href": "/connectors/salesforce/accounts/001Q0000012gRPoIAM/contacts"
      },
      "type": "POST",
      "action_key": "USER_INPUT",
      "request": {
        "contact_email": "john.doe@abc.com"
      },
      "user_input": [
        {
          "id": "first_name",
          "label": "First name",
          "min_length": 1
        },
        {
          "id": "last_name",
          "label": "Last name",
          "min_length": 1
        },
        {
          "id": "opportunity_ids",
          "label": "Opportunity",
          "format": "select",
          "options": {
            "0064100000CgHW1AAN": "Hero selling opportunity",
            "0064100000BU5dOAAT": "MEM selling opp"
          }
        }
      ]
    }]
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "connector_id": "salesforce",
    "name": "Salesforce",
    "template": {
      "href": "/connectors/salesforce/templates/generic.hbs"
    },
    "header": {
      "title": "Add a contact in Salesforce?"
    },
    "body": {
      "description": "The sender's address, john.doe@abc.com, might be related to your Salesforce account named 'Leo DCaprio'. Would you like to add the sender as a contact?"
    },
    "actions": [{
      "id" : "00000000-0000-0000-0000-000000000000",
      "label": "Add contact",
      "url": {
        "href": "/connectors/salesforce/accounts/001Q0000012gkPHIAY/contacts"
      },
      "type": "POST",
      "action_key": "USER_INPUT",
      "request": {
        "contact_email": "john.doe@abc.com"
      },
      "user_input": [
        {
          "id": "first_name",
          "label": "First name",
          "min_length": 1
        },
        {
          "id": "last_name",
          "label": "Last name",
          "min_length": 1
        },
        {
          "id": "opportunity_ids",
          "label": "Opportunity",
          "format": "select",
          "options": {
            "0064100000BU5bCAAT": "MDM selling opportunity"
          }
        }
      ]
    }]
  }, {
    "id" : "00000000-0000-0000-0000-000000000000",
    "connector_id": "salesforce",
    "name": "Salesforce",
    "template": {
      "href": "/connectors/salesforce/templates/generic.hbs"
    },
    "header": {
      "title": "Add a contact in Salesforce?"
    },
    "body": {
        "description": "The sender's address, john.doe@abc.com, might be related to your Salesforce account named 'Word  Howard'. Would you like to add the sender as a contact?"
    },
    "actions": [{
      "id" : "00000000-0000-0000-0000-000000000000",
      "label": "Add contact",
      "url": {
        "href": "/connectors/salesforce/accounts/001Q0000012glcuIAA/contacts"
      },
      "type": "POST",
      "action_key": "USER_INPUT",
      "request": {
        "contact_email": "john.doe@abc.com"
      },
      "user_input": [
        {
          "id": "first_name",
          "label": "First name",
          "min_length": 1
        },
        {
          "id": "last_name",
          "label": "Last name",
          "min_length": 1
        }
      ]
    }]
  }]
}
```