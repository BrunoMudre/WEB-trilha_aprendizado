var nome, n1, n2, soma, subtracao, multiplicacao, divisao
nome=prompt("Qual o seu nome?")
n1=parseFloat(prompt(nome+" digite um valor: "))
n2=parseFloat(prompt(nome+" digite outro valor: "))

soma=n1+n2
subtracao=n1-n2
multiplicacao=n1*n2

alert(nome+" a soma é "+ soma)
alert(nome+" a subtração é "+ subtracao)
alert(nome+" a multiplicação é "+ multiplicacao)

if (n2==0) {
    alert("Não é possível realizar divisão por 0")
}

else{
    divisao=n1/n2
    alert(nome+" a divisão é "+ divisao)
}