let homePage=document.querySelector(".container.home")
let contactPage=document.querySelector(".container.contact")
let thanksPage=document.querySelector(".container.thanks")


let stars=document.querySelectorAll(".fa-star")

stars.forEach((star,index)=>{
    star.onmouseenter=()=>{
        for(let i=0; i<=index; i++){
            stars[i].classList.add("icon-active")
        }
    }
    star.onmouseleave=()=>{
        for(star of stars){
            star.classList.remove("icon-active")
        }
    }
    star.onclick=()=>{
        switch (index<3){
            case true :homePage.style.display="none"
                       contactPage.style.display="flex"
                break;
            case false :homePage.style.display="none"
                        thanksPage.style.display="flex"
        }
    }
})