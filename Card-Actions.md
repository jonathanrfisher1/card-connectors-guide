Actions are invoked on a connector by POSTing form data to one of its action endpoints.

For example, in our Weather sample, the action to update the current temperature is invoked thus:

```
curl -i -X POST \
   -H "Authorization:Bearer eyJ0eXAiO" \
   -d "zip=30360" \
   -d "temperature=90" \
 'http://localhost:3000/reports'
```