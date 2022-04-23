# PUT

## Edit Product

Descrição aqui.

### Endpoint

```sh
PUT /edit-product
```

[Enviar requisição](https://hopp.sh/r/dGrjfpNoepNK '/edit-product')

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
