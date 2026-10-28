const menuHamburguer = document.getElementById('menuHamburguer')
const navLink = document.querySelectorAll('.cabecalho-nav-anchor')
const nav = document.getElementById('navigation')

menuHamburguer.addEventListener('click', () => {
    menuHamburguerFunction()
})

navLink.forEach(anchor => {
    anchor.addEventListener('click', () => {
        menuHamburguerFunction()
    })
})

function menuHamburguerFunction(){
    if (nav.classList.contains('close')){
        nav.classList.remove('close')
    }else{
        nav.classList.add('close-animation')
        setTimeout(() =>{
            nav.classList.add('close')
            nav.classList.remove('close-animation')
        }, 300)
    }
}