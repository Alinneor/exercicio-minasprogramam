/*let soma = 0;
let numero = 0;

while (numero !==-1){
    numero = parseInt(prompt("Digi"te um número: "));
    soma = soma + numero;
    alert("A soma é: " + soma);
}*/

/*let soma = 0;
let numero = -1;
do{
    numero = parseInt(prompt("Digite um numero: "));
    soma = soma + numero;
    alert("A soma é: "+ soma) ;
}while(numero !== -1)*/

const arrayNumero = []
let numero;

do {
    numero = parseInt(prompt("Digite um número: "));
    arrayNumero.push(numero);
    
}while(numero > 0)
alert("Voce digitou: " + arrayNumero.length + " numeros");