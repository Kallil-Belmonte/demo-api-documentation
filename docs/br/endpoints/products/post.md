# POST

## Add Product

Descrição aqui.

### Endpoint

```sh
POST /add-product
```

[Enviar requisição](https://hopp.sh/r/SXbZnB4HffzH '/add-product')

### Body

Tipo: `ProductToAdd`

| Name        | Type     | Default     | Usage       | Description     |
| ----------- | -------- | ----------- | ----------- | --------------- |
| propertyOne | `string` |             | Obrigatório | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Optional    | Descrição aqui. |

### Resposta

::: details 200: Sucesso

Tipo `boolean`

```json
true
```

:::
