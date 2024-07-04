/*
    OBJETIVO 1: Mostrar o próximo cartão da lista

    - Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar

    -Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar

    -Passo 3 - Fazer aparecer o próximo cartão da lista

    -Passo 4 - Buscar o cartão que esta selecionado e esconder
*/
/*VARIÁVEIS*/
const btnVoltar = document.getElementById('btn-voltar');
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add(".selecionado");
}
/*VARIÁVEIS FIM*/

/*Objetivo 1 inicio */
btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length -1) return;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});
/*Objetivo 1 fim */

/*Objetivo 2 incio */
btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
/*Objetivo 2 fim */