/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

    - Passo 1: dar um jeito de pegar o elemento HTML dos botões

    - Passo 2: dar um jeito de identificar o clique do usuario no botão

    - Passo 3: desmarcar o botão selecionado anterior

    - Passo 4: marcar o botao clicado como se estivesse selecionado

    - Passo 5: esconder a imagem ativa anterior

    - Passo 6: fazer aparecer a imagem correspondente ao botao clicado
*/

// Passo 1
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// Passo 2

botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', () => {
        // Passo 3
        desativarBotaoSelecionado();

        // Passo 4
        selecionarBotaoCarrossel(botao);

        // Passo 5
        esconderImagemAtiva();

        // Passo 6
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
