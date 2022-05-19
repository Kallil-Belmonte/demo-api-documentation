# POST

## User

Método responsável por adicionar um usuário.

### Endpoint

```sh
POST /user
```

[Send request](https://hopp.sh/r/ikyHoc3Ey7wq '/user')

### Body

Tipo: `UserToAdd`

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
