
let listaDeNumerosSorteados = [];
let numeroLimit = 10;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}




function verificarChute() {
  chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
    let mensagemTentativas = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if ( chute > numeroSecreto) {
      exibirTextoNaTela('p', 'número secreto é menor ');
      
    } else {
      exibirTextoNaTela('p', 'o número secreto é maior');
    }
    //tentativas = tentativas +1 
    tentativas ++;
    limparCampo();
  }
}


function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimit + 1);
  let quantidadeDeElementos = listaDeNumerosSorteados.length;

  if (quantidadeDeElementos == numeroLimit){
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();

  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value=''; 

}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true) 
  
}