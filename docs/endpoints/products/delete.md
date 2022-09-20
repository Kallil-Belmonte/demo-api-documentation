# DELETE

## Product

Method responsible for deleting a product.

### Endpoint

```sh
DELETE /product
```

[Send request](https://hopp.sh/r/EKdsDkqKxZli '/product')

### Parameters

Type: `DeleteProductParams`

| Name     | Type     | Default | Usage    | Description       |
| -------- | -------- | ------- | -------- | ----------------- |
| property | `string` |         | Required | Description here. |

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
