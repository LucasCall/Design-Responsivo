// let botao = document.querySelector('.menu-principal__btn');
// let menuPrincipal = document.querySelector('.menu-principal')
// botao.addEventListener("click", abreFechaMenu);

// function abreFechaMenu(evento) {
//     menuPrincipal.classList.toggle('menu-principal--fechado')
// }

// jquery
$(document).ready(function () {
    // Botão do menu
    $('.menu-principal__btn').click(function () {
        $('.menu-principal').toggleClass('menu-principal--fechado')
    })

    // Slide depoimentos
    $('.depoimentos__caixa').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });

    // Validação do formulário

    $('.formulario').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            mensagem: 'required'
        },
        messages: {
            nome: {
                required: "Campo obrigatório"
            },
            email: {
                required: "Por favor preencha o e-mail.",
                email: "Insira um endereço de e-mail válido.",
            },
            mensagem: "Por favor preencha o campo Mensagem"
        }
    });

    // Carregar o cabeçalho
    $("#cabecalho-placeholder").load("partes/cabecalho.html");

    // Carregar o rodapé
    $("#rodape-placeholder").load("partes/rodape.html");
})