var formel=0;
var svar=0;


oksygen = document.getElementById("oksygen");
nitrogen = document.getElementById("nitrogen");
karbon = document.getElementById("karbon");

oksygen.addEventListener("click",oksygenklikk, klikk);
nitrogen.addEventListener("click",nitrogenklikk);
karbon.addEventListener("click",karbonklikk);

function klikk(){

}

function oksygenklikk(){
    formel=1;
    form.style.display = "block"
}

function nitrogenklikk(){
    formel=2;
    form.style.display = "block"
}

function karbonklikk(){
    formel=3;
    form.style.display = "block"
}


form = document.getElementById("form");
form.addEventListener("submit", regn);

function regn(e){
    e.preventDefault();
    tall = parseInt(form.atomer.value)
    console.log(form.atomer.value)
    if(formel==1){
        svar = 2
    }
    else if(formel==2){
        svar = tall + 2
    }
    else if(formel==2){
        svar = 2*tall + 2
    }
    
    document.getElementById("form").innerHTML=svar
}