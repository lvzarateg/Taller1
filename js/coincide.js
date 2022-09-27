let cosi=document.getElementById("coincidir");

cosi.addEventListener('click',(e)=>{
    let nomb=parseInt(document.getElementById("nomb").value);
    let apell=parseInt(document.getElementById("apell").value);
    let mate=parseInt(document.getElementById("mate").value);
    let resp=document.getElementById("respu");

    if(nomb=="1" && apell=="1" && mate=="1"){
        let texto=`Has Coincidido en la eleccion :)`;
        resp.innerHTML=texto;

    }else if(nomb=="2" && apell=="2" && mate=="2"){
        let texto=`Has Coincidido en la eleccion :)`;
        resp.innerHTML=texto;

    }else if(nomb=="3" && apell=="3" && mate=="3"){
        let texto=`Has Coincidido en la eleccion :)`;
        resp.innerHTML=texto;

    }else if(nomb=="4" && apell=="4" && mate=="4"){
        let texto=`Has Coincidido en la eleccion :)`;
        resp.innerHTML=texto;

    }else if(nomb=="5" && apell=="5" && mate=="5"){
        let texto=`Has Coincidido en la eleccion :)`;
        resp.innerHTML=texto;

    }else if(nomb=="6" && apell=="6" && mate=="6"){
        let texto=`Has Coincidido en la eleccion :)`;
        resp.innerHTML=texto;

    }else if(nomb=="7" && apell=="7" && mate=="7"){
        let texto=`Has Coincidido en la eleccion :)`;
        resp.innerHTML=texto;

    }else {
        let texto=`Intenatlo de nuevo :(`;
        resp.innerHTML=texto;
    }

})
