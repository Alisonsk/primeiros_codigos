var op = prompt("1.Desconto\n 2.lucro");

var produto = prompt("valor do produto");

var porcentagem = prompt("porcentagem(sem o simbolo)");

switch(op){

case '1':
    alert(produto*(1-(porcentagem/100))); break;
case '2':
    alert(produto*(1+(porcentagem/100)));break;

default:
    alert("opção inválida");
}