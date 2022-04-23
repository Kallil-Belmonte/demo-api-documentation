# GET

## Get Product

Descrição aqui.

### Endpoint

```sh
GET /get-product
```

[Enviar requisição](https://hopp.sh/r/KC6zbfBzNX44 '/get-product')

### Parâmetros

Tipo: `GetProductParams`

| Name     | Type              | Default | Usage       | Description     |
| -------- | ----------------- | ------- | ----------- | --------------- |
| property | `string` `number` |         | Obrigatório | Descrição aqui. |

### Resposta

::: details 200: OK

Tipo: `Product`

```json
{
  "property": "value"
}
```

:::

## Get Products

Descrição aqui.

### Endpoint

```sh
GET /get-products
```

[Enviar requisição](https://hopp.sh/r/H2O26ilPwJLs '/get-products')

### Parâmetros

Tipo: `GetProductsParams`

| Name        | Type     | Default     | Usage       | Description     |
| ----------- | -------- | ----------- | ----------- | --------------- |
| propertyOne | `string` |             | Obrigatório | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Optional    | Descrição aqui. |

### Resposta

::: details 200: OK

Tipo: `Product[]`

```json
[
  {
    "property": "value"
  }
]
```

:::
