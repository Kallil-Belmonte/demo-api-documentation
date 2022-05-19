# DELETE

## User

Método responsável por excluir um usuário.

### Endpoint

```sh
DELETE /user
```

[Send request](https://hopp.sh/r/C9uo9Ezvrj5x '/user')

### Parâmetros

Tipo: `DeleteUserParams`

| Name     | Type     | Default | Usage       | Description     |
| -------- | -------- | ------- | ----------- | --------------- |
| property | `string` |         | Obrigatório | Descrição aqui. |

### Resposta

::: details 200: OK

Tipo: `User[]`

```json
[
  {
    "property": "value"
  }
]
```

:::
