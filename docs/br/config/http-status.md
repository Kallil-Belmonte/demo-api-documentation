# Status HTTP

Aqui estão todos os status HTTP disponíveis da API.

| Status             | Name              | Description                                                                                                      |
| ------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| 200                | OK                | Tudo funcionou como esperado.                                                                                    |
| 400                | Bad Request       | A solicitação foi inaceitável, geralmente devido à falta de um parâmetro obrigatório.                            |
| 401                | Unauthorized      | Nenhuma chave de API válida fornecida.                                                                           |
| 402                | Request Failed    | Os parâmetros foram válidos, mas a solicitação falhou.                                                           |
| 403                | Forbidden         | A chave de API não tem permissões para realizar a solicitação.                                                   |
| 404                | Not Found         | O recurso solicitado não existe.                                                                                 |
| 406                | Not Acceptable    | A requisição não é suportada/aceita.                                                                             |
| 409                | Conflict          | A solicitação está em conflito com outra solicitação (talvez devido ao uso da mesma chave idempotente).          |
| 429                | Too Many Requests | Muitas solicitações atingem a API muito rapidamente. Recomendamos uma retirada exponencial de suas solicitações. |
| 500, 502, 503, 504 | Server Errors     | Algo deu errado do lado da API.                                                                                  |
