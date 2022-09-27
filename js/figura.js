/*Circulo*/

//Perimetro

let botoncirculo = document.getElementById('boton-circulo')
function perimetroCirculo(){
    let radio = parseInt(document.getElementById('radio').value)
    let resultado =  2*3.1416*radio
    alert(`El perimetro del circulo es ${resultado}`)   
}
botoncirculo.addEventListener('click',perimetroCirculo)

//Area

let botoncirculoarea = document.getElementById('boton-circulo-area')
function areaCirculo(){
    let radio = parseInt(document.getElementById('radio-area').value)
    let resultado =  (radio*radio)*3.1416
    alert(`El area del circulo es ${resultado}`)
}
botoncirculoarea.addEventListener('click',areaCirculo)

/*Triangulo*/

//Perimetro

let botontriangulo = document.getElementById('boton-triangulo')
function perimetroTriangulo(){
    let lado1 = parseInt(document.getElementById('triangulo-lado1').value)
    let lado2 = parseInt(document.getElementById('triangulo-lado2').value)
    let lado3 = parseInt(document.getElementById('triangulo-lado3').value)
    let resultado =  lado1+lado2+lado3
    alert(`El perimetro del triangulo es ${resultado}`)
}
botontriangulo.addEventListener('click',perimetroTriangulo)

//Area

let botontrianguloarea = document.getElementById('boton-triangulo-area')
function areaTriangulo(){
    let base = parseInt(document.getElementById('base-triangulo').value)
    let altura = parseInt(document.getElementById('altura-triangulo').value)
    let resultado =  (base*altura)/2
    alert(`El area del triangulo es ${resultado}`)
}
botontrianguloarea.addEventListener('click',areaTriangulo)

/*Rectangulo*/

//Perimetro

let botonrectangulo = document.getElementById('boton-rectangulo')
function perimetroRectangulo(){
    let base = parseInt(document.getElementById('rectangulo-base').value)
    let altura = parseInt(document.getElementById('rectangulo-altura').value)
    let resultado =  (base*2)+(altura*2)
    alert(`El perimetro del rectangulo es ${resultado}`)
}
botonrectangulo.addEventListener('click',perimetroRectangulo)

//Area

let botonrectanguloarea = document.getElementById('boton-rectangulo-area')
function areaRectangulo(){
    let base = parseInt(document.getElementById('rectangulo-base-area').value)
    let altura = parseInt(document.getElementById('rectangulo-altura-area').value)
    let resultado =  base*altura
    alert(`El area del rectangulo es ${resultado}`)
}
botonrectanguloarea.addEventListener('click',areaRectangulo)

/*Cuadrado*/

//Perimetro

let botoncuadrado = document.getElementById('boton-cuadrado')
function perimetroCuadrado(){
    let lado = parseInt(document.getElementById('cuadrado-lado').value)
    let resultado = lado*4
    alert(`El perimetro del cuadrado es ${resultado}`)
}
botoncuadrado.addEventListener('click',perimetroCuadrado)

//Area

let botoncuadradoarea = document.getElementById('boton-cuadrado-area')
function areaCuadrado(){
    let base = parseInt(document.getElementById('cuadrado-base').value)
    let altura = parseInt(document.getElementById('cuadrado-altura').value)
    let resultado = base*altura
    alert(`El area del cuadrado es ${resultado}`)
}
botoncuadradoarea.addEventListener('click',areaCuadrado)