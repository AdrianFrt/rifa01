var ul = document.getElementById('ul')

var rifa = document.querySelectorAll('.rifa')
var carrosel = document.querySelectorAll('.carrosel')

var animarEobservar = new IntersectionObserver((elemento1) => {

    elemento1.forEach((elemento2) => {

        if(elemento2.isIntersecting === true){
            elemento2.target.classList.add('ativar')
        }else {
            elemento2.target.classList.remove('ativar')
        }
    })
})

rifa.forEach((finalizar) => {
    animarEobservar.observe(finalizar)
})
function menu(){

    ul.classList.toggle('ativar')
}




