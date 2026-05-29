var ul = document.getElementById('ul')

var menu = document.querySelector('.menu')

menu.addEventListener('click', () => {

    ul.classList.toggle('ativar')

})



var rifa = document.querySelectorAll('.rifa')

var animarEobservar = new IntersectionObserver((elementos) => {

    elementos.forEach((elemento) => {

        if(elemento.isIntersecting === true){

            elemento.target.classList.add('ativar')

        }else{

            elemento.target.classList.remove('ativar')

        }

    })

})

rifa.forEach((item) => {

    animarEobservar.observe(item)

})



