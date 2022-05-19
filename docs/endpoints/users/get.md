# GET

## User

Method responsible for getting an user.

### Endpoint

```sh
GET /user
```

[Send request](https://hopp.sh/r/lMkTHboeeOOb '/user')

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

[Send request](https://hopp.sh/r/j2PzSwoe0Bmp '/users')

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
