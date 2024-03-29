# GET

## User

Method responsible for getting a user.

### Endpoint

```sh
GET /user
```

[Send request](https://hopp.sh/r/HXfKJxCf0DjD '/user')

### Parameters

Type: `GetUserParams`

| Name     | Type              | Default | Usage    | Description       |
| -------- | ----------------- | ------- | -------- | ----------------- |
| property | `string` `number` |         | Required | Description here. |

### Response

::: details 200: OK

Type: `User`

```json
{
  "property": "value"
}
```

:::

## Users

Method responsible for getting the users.

### Endpoint

```sh
GET /users
```

[Send request](https://hopp.sh/r/dmHHFAtVoQXM '/users')

### Parameters

Type: `GetUsersParams`

| Name        | Type     | Default     | Usage    | Description       |
| ----------- | -------- | ----------- | -------- | ----------------- |
| propertyOne | `string` |             | Required | Description here. |
| propertyTwo | `number` | `undefined` | Optional | Description here. |

### Response

::: details 200: OK

Type: `User[]`

```json
[
  {
    "property": "value"
  }
]
```

:::
