alert ('boas vinda ao site')

let NumeroSecreto = 5;
console.log(NumeroSecreto);
let chute;
let tentativas = 1;

// quando o chute não for igual ao número secreto
while (chute!=NumeroSecreto){
    chute = prompt('Esolha o número entre 1 a 10: ');

    if (chute == NumeroSecreto) {
        console.log (`Isso ai, voçê descobriu o número secret ${NumeroSecreto} com tentativas = ${tentativas}`)
    } else {
        if (chute > NumeroSecreto) {
            alert (`o número secreto é menor que o ${chute}`);
            
        } else {
            alert(`o número secreto é maior que o ${chute}`);
        }
        tentativas++;
    }

}