const nav=document.getElementsByTagName("nav")[0];
const toponav=nav.offsetTop;

window.onscroll=function(){
    FixarMenuNoTopo(;)
} 

function FixarMenuNoTopo(){
    if(window.pageYOffset >= toponav){
        nav.classList.add("navbar navbar-expand-lg navbar-light cor1");
    
    }else{
        nav.classList.add("navbar navbar-expand-lg navbar-light cor1")
    }

}