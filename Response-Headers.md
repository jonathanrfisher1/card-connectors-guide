# Status codes
Connectors should return status codes in line with the HTTP spec. 
Here are some examples:

Code   | Meaning
-------|------
200    | The connector was able to satisfy the request successfully.
400    | The request was invalid. 
401    | The value provided in the Authorization header was invalid or missing.
404    | The requested resource was not found.
500    | The connector failed to satisfy the request through no fault of the client.

# Headers

Header | Description
------ | ---------
Content-Type | Always `application/json`.
X-Backend-Status | The status code returned by the backend if not a 2xx code.