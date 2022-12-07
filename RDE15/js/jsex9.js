var n, cont, tabuada

n=parseInt(prompt("Digite a tabuada desejada: "))

cont=0
while(cont<11)
{
    tabuada=n*cont
    document.write("<h2>"+tabuada+"</h2>")
    cont++
}