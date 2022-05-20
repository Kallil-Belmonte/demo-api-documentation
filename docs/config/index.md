---
sidebar: auto
---

# Config

## Getting Started

Add to the `header` of the requests:

```json
{
  "Accept": "application/json",
  "Authorization": "Bearer ...",
  "Content Type": "application..."
}
```

## Environments

Production:

```curl
https://api.domain.com
```

Development:

```curl
https://dev-api.domain.com
```

## HTTP Verbs

Here are all the available API HTTP verbs.

| Verb   | Description                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------------------- |
| POST   | Submits an entity to the specified resource, often causing a change in state or side effects on the server. |
| PUT    | Replaces all current representations of the target resource with the request payload.                       |
| GET    | Requests a representation of the specified resource.                                                        |
| DELETE | Deletes the specified resource.                                                                             |

## HTTP Status

Here are all the available API HTTP status.

| Status             | Name              | Description                                                                                      |
| ------------------ | ----------------- | ------------------------------------------------------------------------------------------------ |
| 200                | OK                | Everything worked as expected.                                                                   |
| 400                | Bad Request       | The request was unacceptable, often due to missing a required parameter.                         |
| 401                | Unauthorized      | No valid API key provided.                                                                       |
| 402                | Request Failed    | The parameters were valid but the request failed.                                                |
| 403                | Forbidden         | The API key doesn't have permissions to perform the request.                                     |
| 404                | Not Found         | The requested resource doesn't exist.                                                            |
| 406                | Not Acceptable    | The request is not supported/accepted.                                                           |
| 409                | Conflict          | The request conflicts with another request (perhaps due to using the same idempotent key).       |
| 429                | Too Many Requests | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 | Server Errors     | Something went wrong on the API's end.                                                           |
