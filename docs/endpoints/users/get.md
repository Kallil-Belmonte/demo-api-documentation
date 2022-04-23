# GET

## Get User

Description here.

### Endpoint

```sh
GET /get-user
```

[Send request](https://hopp.sh/r/JBh9Te5UcEqv '/get-user')

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

## Get Users

Description here.

### Endpoint

```sh
GET /get-users
```

[Send request](https://hopp.sh/r/Mfa0Arg3zIqz '/get-users')

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
