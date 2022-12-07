var nome, n
nome=prompt("Qual o seu nome?")
n=parseFloat(prompt(nome+" digite um valor: "))

if (n%3==0) {
    alert(nome+" o número digitado é divisível por 3")
}
else{
    alert(nome+" o número digitado não é divisível por 3")
}

if (n%7==0) {
    alert(nome+" o número digitado é divisível por 7")
}
else{
    alert(nome+" o número digitado não é divisível por 7")
}