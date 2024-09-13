# Bulário Digital || Bulário Eletrônico || API 🇧🇷

Essa API realiza uma pesquisa de bulas de medicamentos, foi utilizado uma biblioteca que eu também criei que por sua vez realiza a busca no portal da ANVISA

---
API eclusiva para testes e trabalhos acadêmicos;
Para versão comercial, entre em contato comigo através das minhas redes.

___Esta API não foi feita para fins comerciais, pois pode conter bugs e indisponibilidades devido o servidor ser grátis e de uso limitado!___

---

- Biblioteca utilizada: https://github.com/iuryLandin/bulario

> No presente momento a ANVISA / Governo Brasileiro não disponibiliza alguns dados para serem utilizados por programadores e pesquisadores. Sendo assim, utilizando técnicas de WebCrawler é realizada a busca desses dados.


## Documentação

> Dentro da pasta `docs` possui o arquivo `insomnia.json`, você poderá importar dentro do software `insomnia` e testar as rotas

___Eu removi a API online pois estavam utilizando para "minerar" as bulas e assim consumindo todo o recurso gratis do servidor e outras pessoas que queriam testar não conseguiam!___


## Funcionalidades
- Pesquisar medicamentos (busca simples pelo nome)
- Pesquisa avançada de medicamentos (filtro pela categoria e nome)
- Obter informações do medicamento
- Obter url para baixar o PDF da bula do medicamento

Obs.: As funcionalidades são limitadas pois no momento é o que o portal da anvisa oferece

## Infraestrutura da API

É uma API simples de fácil entendimento, foi utilizado o padrão REST

**Tecnologias Utilizadas**
- NodeJs - Linguagem de Programação
- Vercel - Serverless


> Fiz dessa API como um projeto de estudos para entender mais sobre as Serverless functions, caso você não saiba o que é, vou deixar um link de um artigo que achei legal, ele está em pt-br.
>
> https://serverless-stack.com/chapters/pt/what-is-serverless.html

----
Caso tenha dúvidas ou sugestões para API ou Biblioteca, entre em contato comigo através das seguintes redes sociais:

[![Telegram Badge](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/iurylandin) 

[![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/iury.landin/) 

[![Instagram Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iury-landin-b94b74133/)


- Lembre-se de deixar uma ⭐ e se possível me siga, pois estarei trazendo mais novidades OpenSource por aqui 😊✌
----


### Mini Documentação


**Pesquisar Medicamento**

`[GET] https://bula.vercel.app/pesquisar?nome=dipirona&pagina=1`

Definição dos Parâmetros:
- nome -> nome do remédio (obrigatório)
- pagina -> pagina da pesquisa (não obrigatorio)


**Retornar Medicamento**

`[GET] https://bula.vercel.app/medicamento/123456789`

Definição dos Parâmetros:
- (123456789) -> refere-se ao número do processo, que pode ser adquirido no resultado da pesquisa do medicamento, esse endpoint retorna diversas informações sobre o medicamento selecionado


**Listar Categorias**

`[GET] https://bula.vercel.app/categorias` 

(não precisa informar parâmetros)

**Listar Medicamentos por Categoria**

`[GET] https://bula.vercel.app/medicamentos?categoria=5` 

Definição dos Parâmetros:
- categoria -> id da categoria de medicamentos (obrigatório) -> o vaor poderá ser adquirido na lista de categorias;

**Retornar Link para o PDF da bula**

`[GET] https://bula.vercel.app/bula?id=XxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx`

Definição dos Parâmetros:
- id -> (obrigatório)<br />
ATENÇÃO: O id que será passado por parâmetro é uma hash que é adquirida na pesquisa ou no retorno do medicamento. O nome dessa hash é: `idBulaPacienteProtegido` e `idBulaProfissionalProtegido`


### Até mais!!!

----
Caso tenha dúvidas ou sugestões para API ou Biblioteca, entre em contato comigo através das seguintes redes sociais:

[![Telegram Badge](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/iurylandin) 

[![Instagram Badge](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/iury.landin/) 

[![Instagram Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/iury-landin-b94b74133/)

- Lembre-se de deixar uma ⭐ e se possível me siga, pois estarei trazendo mais novidades OpenSource por aqui 😊✌
----
