const btnDismiss=document.querySelector(".dismiss-button");
const navBar=document.querySelector(".dismissable");

btnDismiss.addEventListener("click",()=>{
    if(navBar.style.display==='none'){
        navBar.style.display="block"
    }else{
        navBar.style.display="none"
    }  
})

//modal drawer script
const btnModal=document.querySelector(".Modal-button");
const navbarModal=document.querySelector(".Modal");
btnModal.addEventListener("click",()=>{
    if(navbarModal.style.display ==='none'){
        navbarModal.style.display="block"
    }else{
        navbarModal.style.display="none"
    }  
})