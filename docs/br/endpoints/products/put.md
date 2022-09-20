# PUT

## Product

Método responsável pela edição de um produto.

### Endpoint

```sh
PUT /product
```

[Send request](https://hopp.sh/r/T7rXLI0BlpzK '/product')

### Body

Tipo: `ProductToEdit`

| Name        | Type     | Default     | Usage    | Description     |
| ----------- | -------- | ----------- | -------- | --------------- |
| propertyOne | `string` | `undefined` | Opcional | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Opcional | Descrição aqui. |

### Resposta

::: details 200: OK

Tipo: `Product`

```json
{
  "property": "value"
}
```

:::
