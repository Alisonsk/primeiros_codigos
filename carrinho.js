alert("Supermercado do Torquato");
let produtos=0,preco=0,precoTotal=0;
while(preco!=-1){
    preco = parseFloat(prompt("preco R$"));
    precoTotal += preco;
    produtos ++;
}
precoTotal += 1
produtos -=1
alert(" quantidade "+ produtos +" R$ "+ precoTotal);
