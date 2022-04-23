---
sidebar: auto
---

# Configuração

## Começando

Adiciona ao `header` das requisições:

```json
{
  "Accept": "application/json",
  "Authorization": "Bearer ...",
  "Content Type": "application..."
}
```

## Ambientes

Produção:

```curl
https://api.domain.com
```

Desenvolvimento:

```curl
https://dev-api.domain.com
```

## Verbos HTTP

Aqui estão todos os verbos HTTP da API.

| Verb   | Description                                                                                                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | Submete uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor. |
| PUT    | Substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.                                         |
| GET    | Solicita a representação de um recurso específico.                                                                                        |
| DELETE | Exclui o recurso especificado.                                                                                                            |

## Status HTTP

Aqui estão todos os status HTTP disponíveis da API.

| Status             | Name              | Description                                                                                                      |
| ------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| 200                | OK                | Tudo funcionou como esperado.                                                                                    |
| 400                | Bad Request       | A solicitação foi inaceitável, geralmente devido à falta de um parâmetro obrigatório.                            |
| 401                | Unauthorized      | Nenhuma chave de API válida fornecida.                                                                           |
| 402                | Request Failed    | Os parâmetros foram válidos, mas a solicitação falhou.                                                           |
| 403                | Forbidden         | A chave de API não tem permissões para realizar a solicitação.                                                   |
| 404                | Not Found         | O recurso solicitado não existe.                                                                                 |
| 409                | Conflict          | A solicitação está em conflito com outra solicitação (talvez devido ao uso da mesma chave idempotente).          |
| 429                | Too Many Requests | Muitas solicitações atingem a API muito rapidamente. Recomendamos uma retirada exponencial de suas solicitações. |
| 500, 502, 503, 504 | Server Errors     | Algo deu errado do lado da API.                                                                                  |
