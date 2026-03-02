// Seletores principais
const form = document.querySelector('#form-post');
const titulo = document.querySelector('#titulo-post');
const conteudo = document.querySelector('#conteudo-post');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

const mensagemStatus = document.querySelector('#mensagem-status');

// Evento de submit
form.addEventListener('submit', function (event) {

    event.preventDefault();

    // Estrutura obrigatória do objeto
    const data = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {

        // Renderização do post
        tituloRenderizar.innerHTML = data.title;
        conteudoRenderizar.innerHTML = data.body;

        // Mensagem de sucesso
        mensagemStatus.innerHTML = "Post publicado com sucesso!";
        mensagemStatus.className = "sucesso";

        // Limpa formulário
        form.reset();

        // Remove mensagem após 3 segundos
        setTimeout(() => {
            mensagemStatus.innerHTML = "";
            mensagemStatus.className = "";
        }, 3000);

    })
    .catch(error => {

        // Mensagem de erro
        mensagemStatus.innerHTML = "Erro ao publicar o post.";
        mensagemStatus.className = "erro";

        console.error("Erro:", error);
    });

});