let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
exibirMensagemInicial();


function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas); // Html não interpreta mto bem template String.
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        tentativas++;
        limparCampo();
        chute > numeroSecreto ? exibirTextoNaTela('p', 'O número secreto é menor!') : exibirTextoNaTela('p', 'O número secreto é maior!'); 
    }
}

function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * 10 + 1); 
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

 if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
 }

 if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();}
        else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            return numeroEscolhido;
        }
}

function limparCampo(){
   chute  = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}