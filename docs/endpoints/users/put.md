# PUT

## User

Method responsible for editing a user.

### Endpoint

```sh
PUT /user
```

[Send request](https://hopp.sh/r/2lUSclVS0hUL '/user')

### Body

Type: `UserToEdit`

| Name        | Type     | Default     | Usage    | Description       |
| ----------- | -------- | ----------- | -------- | ----------------- |
| propertyOne | `string` | `undefined` | Optional | Description here. |
| propertyTwo | `number` | `undefined` | Optional | Description here. |

### Response

::: details 200: OK

Type: `User`

```json
{
  "property": "value"
}
```

:::
