




var tab=document.querySelectorAll(".card");
var fleche1=document.querySelector(".left");
var fleche2=document.querySelector(".right");
var slide=document.querySelector(".animation");
var indice_element_active=3;
function augmenter(variable) {
        variable.style="z-index:2;transform: scale(1.2);width:calc(3*100%)  "; 
}
function diminuer(variable) {
    variable.style="z-index:1; transform: scale(1);";
    
}

window.onload=()=>{
    augmenter(tab[indice_element_active]);
}

fleche1.onclick=()=>{
    if(indice_element_active!=3){
    diminuer(tab[indice_element_active]);
    augmenter(tab[indice_element_active-1]);
    slide.scrollBy(-210,0);
    indice_element_avtive=indice_element_active-1;
    }
 }

fleche2.onclick=()=>{
   if(indice_element_active!=8){
   
    diminuer(tab[indice_element_active]);
    augmenter(tab[indice_element_active+1]);
    slide.scrollBy(210,0);
    indice_element_active=indice_element_active+1;
   }
   
   
}