let dinero, marranito=0, cont=0
let resp=true;
while (resp==true){
    dinero=prompt("ingrese la cantidad que desea guardar");
    marranito=parseInt (marranito) +parseInt (dinero);
    console.log("El total de tu marranito es");
    cont=parseInt(cont) + 1;


    resp=confirm ("Desea Ingresar otro valor");
}
alert(`el resultado es ${marranito}`);
alert(`el valor acumulado es ${cont}`);