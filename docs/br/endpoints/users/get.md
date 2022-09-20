# GET

## User

Método responsável por obter um usuário.

### Endpoint

```sh
GET /user
```

[Send request](https://hopp.sh/r/HXfKJxCf0DjD '/user')

### Parâmetros

Tipo: `GetUserParams`

| Name     | Type              | Default | Usage       | Description     |
| -------- | ----------------- | ------- | ----------- | --------------- |
| property | `string` `number` |         | Obrigatório | Descrição aqui. |

### Resposta

::: details 200: OK

Tipo: `User`

```json
{
  "property": "value"
}
```

:::

## Users

Método responsável por obter os usuários.

### Endpoint

```sh
GET /users
```

[Send request](https://hopp.sh/r/dmHHFAtVoQXM '/users')

### Parâmetros

Tipo: `GetUsersParams`

| Name        | Type     | Default     | Usage       | Description     |
| ----------- | -------- | ----------- | ----------- | --------------- |
| propertyOne | `string` |             | Obrigatório | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Opcional    | Descrição aqui. |

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
