# GET

## Get Product

Description here.

### Endpoint

```sh
GET /get-product
```

[Send request](https://hopp.sh/r/KC6zbfBzNX44 '/get-product')

### Parameters

Type: `GetProductParams`

| Name     | Type              | Default | Usage    | Description       |
| -------- | ----------------- | ------- | -------- | ----------------- |
| property | `string` `number` |         | Required | Description here. |

### Response

::: details 200: Success

Type: `Product`

```json
{
  "property": "value"
}
```

:::

## Get Products

Description here.

### Endpoint

```sh
GET /get-products
```

[Send request](https://hopp.sh/r/H2O26ilPwJLs '/get-products')

### Parameters

Type: `GetProductsParams`

| Name        | Type     | Default     | Usage    | Description       |
| ----------- | -------- | ----------- | -------- | ----------------- |
| propertyOne | `string` |             | Required | Description here. |
| propertyTwo | `number` | `undefined` | Optional | Description here. |

### Response

::: details 200: Success

Type: `Product[]`

```json
[
  {
    "property": "value"
  }
]
```

:::
