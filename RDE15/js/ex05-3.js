var nome, idade, cpf

nome=prompt("Qual o seu nome?")
idade=parseFloat(prompt(nome+" digite sua idade: "))

alert("Bem vindo "+nome+"! Você tem "+idade+" anos")

if (idade>17) {
    cpf=prompt(nome+" insira seu CPF: ")
    alert(nome+" seu CPF é: "+cpf)
}
else{
    alert(nome+" você é menor de idade")
}