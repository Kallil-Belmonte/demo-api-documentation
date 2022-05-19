# PUT

## Product

Method responsible for editing a product.

### Endpoint

```sh
PUT /product
```

[Send request](https://hopp.sh/r/dGrjfpNoepNK '/product')

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
