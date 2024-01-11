var lista = []
var trailer = []

function adicionarFilme() {
    let filme = $("#filme")
    let trailer = $("#trailer")

    // ADICIONA O FILME E TRAILER NOS SEUS RESPECTIVOS ARRAYS
    lista.push(filme.val())
    trailer.push(trailer.val())

    // LIMPA AS DUAS URLS E SETA FOCO NO PRIMEIRO INPUT (IMAGEM)
    filme.val("")
    trailer.val("")
    filme.focus()

    // CONTA A QUANTIDADE TOTAL DE ELEMENTOS DENTRO DO ARRAY (TAMANHO)
    let qtdLista = lista.length
    let qtdTrailer = trailer.length

    // ADICIONA O ELEMENTO, QUE ACABOU DE SER INSERIDO NO ARRAY, NA DIV DO SWIPER
    $(`<div class="swiper-slide">
            <a href="${trailer[qtdTrailer-1]}" target="_blank">
                <img src="${lista[qtdLista-1]}">
            </a>
        </div>`).appendTo(".swiper-wrapper")

    /* VERIFICA O TAMANHO DO ARRAY:
        SE MAIOR QUE 5 ADICIONA O SWIPER COM SLIDE  */
    if (lista.length > 5)
    {
        var swiper = new Swiper(".mySwiper", {
            // navigation: {
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // },
            loop: true,
            slidesPerView: 5,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }
    else
    {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            spaceBetween: 30,
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },
        });
    }
}