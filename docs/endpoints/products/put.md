# PUT

## Edit Product

Description here.

### Endpoint

```sh
PUT /edit-product
```

[Send request](https://hopp.sh/r/dGrjfpNoepNK '/edit-product')

### Body

Type: `ProductToEdit`

| Name        | Type     | Default     | Usage    | Description       |
| ----------- | -------- | ----------- | -------- | ----------------- |
| PropertyOne | `string` | `undefined` | Optional | Description here. |
| PropertyTwo | `number` | `undefined` | Optional | Description here. |

### Response

::: details 200: Success

Type: `Product`

```json
{
  "property": "value"
}
```

:::
