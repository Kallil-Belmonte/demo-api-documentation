# PUT

## User

Método responsável por editar um usuário.

### Endpoint

```sh
PUT /user
```

[Send request](https://hopp.sh/r/LDZC2r3Ptg8I '/user')

### Body

Tipo: `UserToEdit`

| Name        | Type     | Default     | Usage    | Description     |
| ----------- | -------- | ----------- | -------- | --------------- |
| propertyOne | `string` | `undefined` | Opcional | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Opcional | Descrição aqui. |

### Resposta

::: details 200: OK

Tipo: `User`

```json
{
  "property": "value"
}
```

:::
