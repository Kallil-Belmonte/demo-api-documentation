# POST

## Product

Method responsible for adding a product.

### Endpoint

```sh
POST /product
```

[Send request](https://hopp.sh/r/PHI70JlGmxl4 '/product')

### Body

Type: `ProductToAdd`

| Name        | Type     | Default     | Usage    | Description       |
| ----------- | -------- | ----------- | -------- | ----------------- |
| propertyOne | `string` |             | Required | Description here. |
| propertyTwo | `number` | `undefined` | Optional | Description here. |

### Response

::: details 200: OK

Type `boolean`

```json
true
```

:::
