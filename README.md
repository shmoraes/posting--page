# Projeto de certificação (Trilha 2. HTML, CSS e JavaScript)
# Projeto de certificação 2 – Postagem de blog
# Autor: Sandro Henrique Silveira de Moraes
# Turma: DEVStart BA

# 📝 Minha Rede Social - Projeto de Certificação 2

Projeto feito como parte do desafio de certificação do curso, com foco em integração entre **HTML, CSS e JavaScript**, realizando comunicação com uma **API externa**.

---

## Sobre o Projeto

Simula a criação de um post semelhante ao Facebook ou LinkedIn.

O usuário pode:

- Inserir um título
- Escrever um conteúdo
- Publicar o post
- Visualizar o conteúdo renderizado na tela
- Receber feedback de sucesso ou erro

O projeto realiza uma requisição **POST** para uma API pública utilizando `fetch`.

---

## Tecnologias Utilizadas

- HTML5 (estrutura semântica)
- CSS3 (estilização e responsividade)
- JavaScript (DOM + Fetch API)
- JSONPlaceholder API

---

## API Utilizada

- https://jsonplaceholder.typicode.com/posts

## Como Executar

- Baixe os arquivos
- Abra o arquivo index.html no navegador
- Preencha o título e o conteúdo
- Clique em Publicar
- Visualize o post renderizado

## POST

Configuração da requisição:

```javascript
const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
};


