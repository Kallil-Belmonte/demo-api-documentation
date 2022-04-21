# GET

## Get User

Descrição aqui.

### Endpoint

```sh
GET /get-user
```

[Enviar requisição](https://hopp.sh/r/JBh9Te5UcEqv '/get-user')

### Parâmetro

Tipo: `GetUserParams`

| Name     | Type              | Default | Usage       | Description     |
| -------- | ----------------- | ------- | ----------- | --------------- |
| property | `string` `number` |         | Obrigatório | Descrição aqui. |

### Resposta

::: details 200: Sucesso

Tipo: `User`

```json
{
  "property": "value"
}
```

:::

## Get Users

Descrição aqui.

### Endpoint

```sh
GET /get-users
```

[Enviar requisição](https://hopp.sh/r/Mfa0Arg3zIqz '/get-users')

### Parâmetro

Tipo: `GetUsersParams`

| Name        | Type     | Default     | Usage       | Description     |
| ----------- | -------- | ----------- | ----------- | --------------- |
| propertyOne | `string` |             | Obrigatório | Descrição aqui. |
| propertyTwo | `number` | `undefined` | Optional    | Descrição aqui. |

### Resposta

::: details 200: Sucesso

Tipo: `User[]`

```json
[
  {
    "property": "value"
  }
]
```

:::
