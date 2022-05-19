# GET

## Product

Método responsável pela obtenção de um produto.

### Endpoint

```sh
GET /product
```

[Send request](https://hopp.sh/r/0VyWsU5VDBGW '/product')

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

## Products

Método responsável pela obtenção dos produtos.

### Endpoint

```sh
GET /products
```

[Send request](https://hopp.sh/r/qXUy4cDL5ArW '/products')

### Parâmetros

Tipo: `GetProductsParams`

| Name        | Type     | Default     | Usage       | Description     |
| ----------- | -------- | ----------- | ----------- | --------------- |
| propertyOne | `string` |             | Obrigatório | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Opcional    | Descrição aqui. |

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
