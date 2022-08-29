let cantApos, cara=1, sello=2, numaleat, general, desic
let rta=true;

while (rta==true){
    cantApos=prompt("ingrese la cantidad que desea apostar");
    numaleat=Math.round(Math.random()*2);
    desic=prompt("Ingrese si quiere jugar con cara=1 o sello=2")
    
    if(numaleat==1 && desic==1){
        cara=alert("Se ha elegido cara has ganado :)");
}
    else if(numaleat==2 && desic==1){
        sello=alert("Se ha elegido sello has perdido ):");
    }
    else if(numaleat==1 && desic==2){
        sello=alert("Se ha elegido cara has perdido ):");
    }
    else if(numaleat==2 && desic==2){
        sello=alert("Se ha elegido sello has ganado :)");
    }
}