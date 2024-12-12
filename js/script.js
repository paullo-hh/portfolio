window.addEventListener('scroll', function (){
    let header = document.querySelector('#header')
    header.classList.toggle('scrolling', window.scrollY > 0)
})

// window.addEventListener('scroll', function (){
//     let btntop = document.querySelector('#button-top')
//     btntop.classList.toggle('scrolling-down', window.scrollY < 200)
// })