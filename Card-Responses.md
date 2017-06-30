The [JSON schema](http://json-schema.org/) for a card response can be found [here](https://vmwaresamples.github.io/card-connectors-guide/#schema/herocard-response-schema.json).

Here is an example response:

```javascript
{
  "cards": [{
    "id" : "ed05c962-9a5b-46d1-ae3a-4f4da6fbe6b0",
    "connector_id": "salesforce",
    "name": "Salesforce",
    "creation_date":"2017-01-01T00:00:00.000+00:00",
    "template": {
      "href": "/connectors/salesforce/templates/generic.hbs"
    },
    "header": {
      "title": "Add a contact in Salesforce?"
    },
    "body": {
      "description": "The sender's address, john.doe@abc.com, might be related to your Salesforce account named 'Tom Smith'. Would you like to add the sender as a contact?"
    },
    "actions": [{
      "id" : "186ee70f-07c6-4a38-81b1-2d9776b841ff",
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
    "id" : "665c98a4-c60d-4d1d-8366-55fc9f98136c",
    "connector_id": "salesforce",
    "name": "Salesforce",
    "template": {
      "href": "/connectors/salesforce/templates/generic.hbs"
    },
    "header": {
      "title": "Add a contact in Salesforce?"
    },
    "body": {
      "description": "The sender's address, john.doe@abc.com, might be related to your Salesforce account named 'Brian Wilson'. Would you like to add the sender as a contact?"
    },
    "actions": [{
      "id" : "26f39b09-1ee5-4c67-b1ff-ffd40d31e820",
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
    "id" : "0546d815-7106-49e4-ba97-75c5d573d14e",
    "connector_id": "salesforce",
    "name": "Salesforce",
    "template": {
      "href": "/connectors/salesforce/templates/generic.hbs"
    },
    "header": {
      "title": "Add a contact in Salesforce?"
    },
    "body": {
        "description": "The sender's address, john.doe@abc.com, might be related to your Salesforce account named 'Ward  Howard'. Would you like to add the sender as a contact?"
    },
    "actions": [{
      "id" : "23726efd-d714-4836-8d12-e588f5b26f51",
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