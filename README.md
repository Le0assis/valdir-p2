
# Projeto Front-end com Vue Router e Tailwind CSS

#### Nome: Leonardo Ribeiro de Assis  
#### RA: 1995764  
[Vídeo de apresentação no YouTube](https://youtu.be/aiyZmeZU7A8?si=rs2S55vMr2Juee73)

---

## Descrição

O projeto consiste em um sistema que simula um e-commerce utilizando a API DummyJSON.  
Neste trabalho foi utilizado o **Vue Router** para navegação entre as páginas, e o **axios** para realizar chamadas à API.  
Na parte visual, o framework **Tailwind CSS** foi responsável pela estilização responsiva do projeto, facilitando a construção de um design moderno e adaptável a diferentes tamanhos de tela.

---

## Funcionalidades

- **Listagem**  
  A aplicação realiza uma chamada à API para buscar todos os produtos. Os itens retornados são exibidos em uma lista de cards, sendo que cada card é um componente separado em Vue.

- **Paginação**  
  Após a busca dos produtos, uma função divide os itens em páginas. A navegação entre páginas altera os limites de exibição com base na quantidade definida, permitindo avançar ou voltar.

- **Pesquisa de produtos**  
  Um campo de busca permite filtrar os produtos conforme o usuário digita. A pesquisa usa `v-model` para vincular o valor do input à variável `search`, que controla o filtro em tempo real.

- **Filtro por categoria**  
  Através de um menu, o usuário pode selecionar uma categoria e visualizar apenas os produtos correspondentes. Para isso, a aplicação faz uma chamada separada à API para obter a lista de categorias disponíveis.

- **Detalhes do produto**  
  Ao clicar em um produto, o usuário é redirecionado para uma nova rota com informações detalhadas sobre aquele item. Esse redirecionamento funciona tanto a partir da listagem quanto da paginação.

---

## Rodando o código localmente
```bash

### 1. Instale as dependências

npm install

### 2. Inicie o servidor de desenvolvimento

`npm run dev` 

### 3. Acesse no navegador

Abra o navegador e vá até:

`http://localhost:5173`
```

## Puxando do GitHub
```
### Entre no diretório certo:

	cd Desktop

## Cole o link:
    git clone https://github.com/Le0assis/valdir-p2

## Entre no projeto:

    cd valdir-p2
    code .