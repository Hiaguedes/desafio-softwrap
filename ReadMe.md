# Desafio técnico da SoftWrap

![Banner Softwrap](https://softwrap.com.br/img/logo/logo-softwrap.png)

## Desenvolvido com

![Badge React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Badge Bootstrap](	https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white)
![Firebase Logo](https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png?hl=pt-br)

## Para rodar o projetos

Vá no seu terminal favorito e clone o projeto na pasta que você quiser com o

```cmd
git clone https://github.com/Hiaguedes/desafio-softwrap.git
```

Vá a pasta do projeto com

```cmd
cd conta-simples-web
```

Instale as dependencias do projeto com o node (necessário o node instalado)

```npm
npm install
```

Aí você poderá ver a aplicação rodando com

```npm
npm start
```

Ou simplesmente vá no site onde o projeto está deployado e que está nesse link [aqui](https://desafio-softwrap.web.app/)

Aí você se deparará com os inputs e os dados puxados do servidor do firebase dispostos em uma tabela. Insira dados normalmente mas atente que todos eles possuem uma verificação antes de poder entrar na tabela, então digite em todos os campos.

Caso não queira dar o seu cpf use esse [site](https://www.4devs.com.br/gerador_de_cpf) (gere um cpf sem pontuação)

## O desafio

Realizar uma pequena aplicação Front-End e Back-End,
essa que possua uma tabela e seja possível as seguintes ações:

1- Inserir conteúdo na tabela

2- Editar o conteúdo da tabela.

3- Remover conteúdo da tabela.

4- Paginar a tabela (Pode ser paginação do pelo front-end), aqui foi usada a paginação do bootstrap-react

5- Visualizar de forma clara os dados apresentados.

Os dados devem ser salvos em um servidor, quando um for inserido na
tabela, uma requisição para o servidor é acionada, dessa forma
incluindo o dado na tabela. Isso deve acontecer com todas as ações.
Não devem existir inclusões apenas pelo front-end. Todos os dados
devem estar em um instância de banco de dados no servidor.

## MUST DO

Testes: Infelizmente não foi possível colocar os testes para as funcionalidades e para os comportamentos da função. Confesso que o que sei de testes é insuficiente para testar toda essa aplicação

Coloquei as regras do servidor como qualquer um pode ler e qualquer um pode escrever dados nela, mas como foi um app teste não pesei na segurança

## TODO (coisas a mais que melhorariam a usabilidade)

- Implementar um alerta para quando fosse adicionada, removida e editada algum elemento da tabela

- separar uma seção da página para mostrar as mensagens de validação para os inputs de edição dos dados da tabela

- Input para perguntar ao usuário quantas linhas ele quer na tabela

- Fazer com que os botões da paginação sejam diferentes para quando se tenha uma 8 páginas de tabela para que fique mais ou menos parecido com os botões de paginação [dessa tabela](https://examples.bootstrap-table.com/)

- Fazer uso de alguma api que me retorna quais cidades eu tenho em cada estado selecionado para termos uma maior conformidade dos dados

## Link para o relatório da aplicação

Um relatório completo da aplicação pode ser visto nesse [link](https://docs.google.com/document/d/19wnAeMt_OzBYNY8uUB4JR-5P_qkZG4_njl1O18_FapQ/edit?usp=sharing)
