# GET

## Get Product

Descrição aqui.

### Endpoint

```sh
GET /get-product
```

[Enviar requisição](https://hopp.sh/r/KC6zbfBzNX44 '/get-product')

### Parâmetro

Tipo: `GetProductParams`

| Name     | Type              | Default | Usage       | Description     |
| -------- | ----------------- | ------- | ----------- | --------------- |
| property | `string` `number` |         | Obrigatório | Descrição aqui. |

### Resposta

::: details 200: Sucesso

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

### Parâmetro

Tipo: `GetProductsParams`

| Name        | Type     | Default     | Usage       | Description     |
| ----------- | -------- | ----------- | ----------- | --------------- |
| propertyOne | `string` |             | Obrigatório | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Optional    | Descrição aqui. |

### Resposta

::: details 200: Sucesso

Tipo: `Product[]`

```json
[
  {
    "property": "value"
  }
]
```

:::
