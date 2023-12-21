/*captura o botao hamburguer pelo nome da classe */
const hamburguer = document.querySelector(".hamburguer")
const nav = document.querySelector("nav")

/* adiciona o evento onclick no botao hamburguer */
hamburguer.addEventListener('click', () =>{
    

    nav.classList.toggle("active")
    console.log(nav.classList.value)

}

)





