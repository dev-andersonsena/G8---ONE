alert ('Boas vindas ao nosso site');

let nome = 'lua';

const idade = 25;
const numeroDeVendas = 50;
const saldoDisponivel = 1000;
let mensagemDeErro = 'Erro preencha todos os campos'

if (idade && numeroDeVendas && saldoDisponivel) {
    alert(mensagemDeErro)
}

let nomeUsuario = prompt('Qual seu nome: ')
let idadeUsuario = prompt('Qual sua idade: ')

if (idadeUsuario >= 18){
    alert('pode tirar a carteira de motorista')
}
//alteração 
