# GET

## Product

Method responsible for getting a product.

### Endpoint

```sh
GET /product
```

[Send request](https://hopp.sh/r/0AS9TzAtYVi4 '/product')

### Parameters

Type: `GetProductParams`

| Name     | Type              | Default | Usage    | Description       |
| -------- | ----------------- | ------- | -------- | ----------------- |
| property | `string` `number` |         | Required | Description here. |

### Response

::: details 200: OK

Type: `Product`

```json
{
  "property": "value"
}
```

:::

## Products

Method responsible for getting the products.

### Endpoint

```sh
GET /products
```

[Send request](https://hopp.sh/r/XXIo3et4pOSO '/products')

### Parameters

Type: `GetProductsParams`

| Name        | Type     | Default     | Usage    | Description       |
| ----------- | -------- | ----------- | -------- | ----------------- |
| propertyOne | `string` |             | Required | Description here. |
| propertyTwo | `number` | `undefined` | Optional | Description here. |

### Response

::: details 200: OK

Type: `Product[]`

```json
[
  {
    "property": "value"
  }
]
```

:::
