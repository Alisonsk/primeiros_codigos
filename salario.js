var salario=0;
var salariobase=parseFloat (prompt("digite o valor do salario"));
var horasemanaltrabalhada = parseFloat(prompt("digite a carga horaria"));
var hora=salariobase/160;//160==40 carga trabalhada * 4 semana do mes(aproximado)
var horaextra=hora*1.5;
if(horasemanaltrabalhada>=40){
salario=salariobase+(horaextra*(horasemanaltrabalhada-40));
alert("salario bruto: "+salario+"\n salario liquido:"+salario*0.975);//ISS calculado 2,5%
}
else{
    salario =salariobase-(horasemanaltrabalhada*hora);
    alert("salario bruto: "+salario+"\n salario liquido:"+salario*0.975);//ISS calculado 2,5% 
    alert (salario); // alert("R$"+salario.tofixed(2));
}



