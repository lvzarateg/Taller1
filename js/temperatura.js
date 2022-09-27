function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let de=document.getElementById("de").value;
    let a=document.getElementById("a").value;
    
    if(de==1 && a==1){
        alert(`Ya en grados Fahrenheit `);

    }else if(de==1 && a==2){
        let res=(num1-32)*5/9;
        alert(`De grados Fahrenheit A Celsius la CONVERSION es ${res}`);

    }else if(de==1 && a==3){
        let res=(num1 - 32) * 5/9 + 273.15;
        alert(`Des grados Fahrenheit A Kelvin la CONVERSION es ${res}`);
    }

    if(de==2 && a==2){
        alert(`Ya en grados Celsius `);

    }else if(de==2 && a==1){
        let res=(num1 * 9/5) + 32;
        alert(`De grados Celsius A Fahrenheit la CONVERSION es ${res}`);

    }else if(de==2 && a==3){
        let res= num1 + 273.15;
        alert(`Des grados Celsius A Kelvin la CONVERSION es ${res}`);
    }

    if(de==3 && a==3){
        alert(`Ya en grados Kelvin `);

    }else if(de==3 && a==1){
        let res= (num1 - 273.15) * 9/5 + 32;
        alert(`De grados Kelvin A Fahrenheit la CONVERSION es ${res}`);

    }else if(de==3 && a==2){
        let res= num1  - 273.15 ;
        alert(`Des grados Kelvin A Celsius la CONVERSION es ${res}`);
    }
    
}