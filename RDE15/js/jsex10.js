var v=[81,100,88,40]

//alert(v)

v[1]=150
//alert(v[2])

lista=["zeca",80,"Rua A","Irati","Pr",1900,true]
alert(lista)
for(var i=0;i<lista.length;i++)
{
    document.write("<h2>"+lista[i]+"</h2>")
}

lista.push("84500-000")//adiciona elemento na última posição
alert(lista)

lista.pop()//remove
alert(lista)