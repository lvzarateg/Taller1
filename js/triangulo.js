let cosi=document.getElementById("saber");

cosi.addEventListener('click',(e)=>{
    let nume1=parseInt(document.getElementById("nume1").value);
    let nume2=parseInt(document.getElementById("nume2").value);
    let nume3=parseInt(document.getElementById("nume3").value);
    let resp=document.getElementById("respu");

    if(num1 == num2 && num1 == num3){
        let texto=`Es un triangulo equilatero`;
        resp.innerHTML=texto;

    }else if(num1== num2 || num1== num3 || num2== num3){
        let texto=`Es in triangulo isoseles`;
        resp.innerHTML=texto;

    }else {
        let texto=`Es in triangulo escaleno`;
        resp.innerHTML=texto;
    }
})