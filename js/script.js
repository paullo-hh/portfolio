window.addEventListener('scroll', function (){
    let header = document.querySelector('#header')
    header.classList.toggle('scrolling', window.scrollY > 0)
})

function formatarCelular(celular) {
    celular = celular.replace(/\D/g, ""); // Remove qualquer coisa que não seja número
    celular = celular.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3"); // Formata o celular
    return celular;
}

document.addEventListener("DOMContentLoaded", function () {
    const celularInput = document.querySelector("input[name='fone']");

    celularInput.addEventListener("input", function () {
        this.value = formatarCelular(this.value);
    });
});

// window.addEventListener('scroll', function (){
//     let btntop = document.querySelector('#button-top')
//     btntop.classList.toggle('scrolling-down', window.scrollY < 200)
// })