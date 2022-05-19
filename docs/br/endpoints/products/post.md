# POST

## Product

Método responsável por adicionar um produto.

### Endpoint

```sh
POST /product
```

[Send request](https://hopp.sh/r/PHI70JlGmxl4 '/product')

### Body

Tipo: `ProductToAdd`

| Name        | Type     | Default     | Usage       | Description     |
| ----------- | -------- | ----------- | ----------- | --------------- |
| propertyOne | `string` |             | Obrigatório | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Opcional    | Descrição aqui. |

### Resposta

::: details 200: OK

Tipo: `boolean`

```json
true
```

:::
