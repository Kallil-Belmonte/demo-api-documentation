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
| propertyOne | `string` | `undefined` | Optional | Description here. |
| propertyTwo | `number` | `undefined` | Optional | Description here. |

### Response

::: details 200: OK

Type: `Product`

```json
{
  "property": "value"
}
```

:::
