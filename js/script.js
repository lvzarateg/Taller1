console.log("Hola mundo"); 

// let numero = 25;
// console.log("El numero es: ",numero);
// console.log(`El numero es: ${numero}`);

// let nombre = "Veronica";
// console.log(`El nombre es: ${nombre}`);

// let boolean = true;
// console.log(`Es boleano: ${boolean}`);

// let vacia;
// console.log(`Es vacia: ${vacia}`); 

//let res = numero + 5;
//console.log(`El resultado es: ${res}`);
//console.log(`El resultado es: ${numero+5}`);

//window.alert("Esto es una alerta");
let estado = window.confirm("Estas seguro de que bla bla bla");
console.log(`la ventaa arrojo ${estado}`);

// let num1 = prompt("Digite el primer numero");
// //let res = numero + parseInt(num1);
// let num2 = prompt("Digite el segundo numero");
//let res =  parseInt(num1) + parseInt(num2);
//console.log(`El resultado es: ${res}`);

//console.log("hola como estas te quiero un monton y es una dino promesa :3");

//condicionales
//  if (num1 > num2) {
//      console.log(`El primer numero: ${num1} es mayor que el segundo numero: ${num2}`);
//  } else if(num1 == num2) {
//      console.log(`El primer numero: ${num1} es igual que el segundo numero: ${num2}`);
//  } else{
//      console.log(`El primer numero: ${num1} es menor que el segundo numero: ${num2}`);
//  }
// if(num1>num2){
//     console.log(`El numero mayor es: ${num1}`)
// }
// else{
//     console.log(`El numero mayor es: ${num2}`)
// }

//operador ternario

// let nummayor=(num1 > num2)
// ?"El numero mayor es el primero"
// :"El numero mayor es el segundo"
// console.log(nummayor); 

//condicionales con condicion compuesta

// let usu = prompt("Digite el usuario");
// let pass = prompt("Digite la contraseña");

// if (usu == "Vero" && pass=="1234") {
//     alert("Bienvenido");
// }else if (usu == "Vero" && pass !== "1234") {
//     alert("Verifique su contraseña");
// } else if(usu !== "Vero" && pass == "1234") {
//     alert("Verifique su usuario");
// } else if (usu !== "Vero" && pass !== "1234") {
//     alert("Credenciales de acceso incorrectas");
// }

//Condicion multiple 

    let num1 = prompt("Digite el primer numero");
    let num2 = prompt("Digite el segundo numero");
    let opc = prompt("Digite una opcion");

    switch (opc) {
        case "suma":
            let sum =  parseInt(num1) + parseInt(num2);
            alert(`La suma es: ${sum}`);
        break;

        case "resta":
            let res =  parseInt(num1) - parseInt(num2);
            alert(`La resta es: ${res}`);        
        break;

        case "multiplicacion":
            let mul =  parseInt(num1) * parseInt(num2);
            alert(`La multiplicacion es: ${mul}`);       
        break;

        case "division":
            let div =  parseInt(num1) / parseInt(num2);
            alert(`La division es: ${div.toFixed(2)}`);  
        break;

        case "potencia":
            let pot =  Math.pow(parseInt(num1),parseInt(num2))
            alert(`La potencia es: ${pot.toFixed(2)}`);  
        break;

        case "raiz":
            let rai =  Math.sqrt(num1);
            alert(`La raiz es: ${rai.toFixed(2)}`);  
        break;
    
        default:
            alert("no es opcion valida");        
        break;
    }