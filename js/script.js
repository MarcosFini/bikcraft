//ativar links do menu

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);


//ativar itens do orçamento 

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
    elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes 

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget; //puxa o elemento que estou clicando
    const controls = pergunta.getAttribute('aria-controls') //puxa o aria controls que é igual ao ID da resposta que cadastramos
    const resposta = document.getElementById(controls); // O controls é o ID da resposta igual ao aria-CONTROLS que cadastramos 

    resposta.classList.toggle('ativa'); //Adicionar uma classe na resposta - Lembrando que cadastramos o 'ativa' no css em perguntas dd ativa para display block (aparecer a resposta)
    const ativa = resposta.classList.contains("ativa") // verifica se contem a constante ativa, para ela não continuar como true depois de ser tirada a seleção dela 
    pergunta.setAttribute('aria-expanded', ativa); //mudar o valor dele, passa o primeiro parametro e o segundo com o valor dele 'true', - ele transforma o segundo parametro para string, por isso passamos a função acima.
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
   const media = matchMedia("(min-width: 1000px)").matches;
   console.log(media);
   if(media) {
    galeriaContainer.prepend(img)
   }

}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);


// Animação 

if (window.SimpleAnime) {
new SimpleAnime();
}