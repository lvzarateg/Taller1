const ops=document.getElementById("ops");
ops.addEventListener('click',(e)=>{
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    const resp=document.getElementById("respuesta");

    if (e.target.id=="suma"){
    let texto=`<p> 
    <img src='img/correcto.png'> 
    </p>`;
    let res=num1+num2;
    alert(`El primer numero es ${num1} y el segundo numero ${num2} la suma es ${res}`);
    resp.innerHTML=texto;
    resp.style.setProperty('color', 'green');
    }

    if (e.target.id=="resta"){
        let texto=`<p> 
        <img src='img/incorrecto.png'> 
        </p>`;
        let res=num1-num2;
        alert(`El primer numero es ${num1} y el segundo numero ${num2} la resta es ${res}`);
    resp.innerHTML=texto;
    resp.style.setProperty('color', 'blue');
    }
})

const btn=document.getElementById("cal");
    btn.addEventListener('click',function calcular(){
    
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value);
        let op=document.getElementById("operacion").value;
        if(op==1){
            let res=num1+num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la suma es ${res}`);
    
        }else if(op==2){
            let res=num1-num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la resta es ${res}`);
    
        }else if(op==3){
            let res=num1*num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la multiplicacion es ${res}`);
    
        }else if(op==4){
            let res=num1/num2;
            alert(`El primer numero es ${num1} y el segundo numero ${num2} la division es ${res}`);
        }
    });