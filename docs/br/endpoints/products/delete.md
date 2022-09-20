# DELETE

## Product

Método responsável por excluir um produto.

### Endpoint

```sh
DELETE /product
```

[Send request](https://hopp.sh/r/EKdsDkqKxZli '/product')

### Parâmetros

Tipo: `DeleteProductParams`

| Name     | Type     | Default | Usage       | Description     |
| -------- | -------- | ------- | ----------- | --------------- |
| property | `string` |         | Obrigatório | Descrição aqui. |

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
