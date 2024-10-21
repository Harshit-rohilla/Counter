const counter=document.querySelector(".counter");
const buttonm=document.querySelector(".imageminus");
const buttonp=document.querySelector(".imageplus");
buttonm.addEventListener("click",function(e){
    if(parseInt(counter.innerText)===0){
        
        
    }
    else{
        counter.innerText=parseInt(counter.innerText)-1;
    }
})
buttonp.addEventListener("click",function(e){
    if(parseInt(counter.innerText)===100){
        
        
    }
    else{
        counter.innerText=parseInt(counter.innerText)+1;
    }
})

