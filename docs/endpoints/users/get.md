# GET

## User

Description here.

### Endpoint

```sh
GET /user
```

[Send request](https://hopp.sh/r/JBh9Te5UcEqv '/user')

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

Description here.

### Endpoint

```sh
GET /users
```

[Send request](https://hopp.sh/r/Mfa0Arg3zIqz '/users')

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
