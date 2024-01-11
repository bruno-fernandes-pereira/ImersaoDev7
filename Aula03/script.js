var lista =
    [
        "https://imgs.jusbr.com/publications/images/0f3802bc441384314eb9ba76df96d09e",
        "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg",
        "https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg",
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
        "https://lumiere-a.akamaihd.net/v1/images/EP6_POS_21_R-RESIZED_2873dc04.jpeg?region=0%2C0%2C1394%2C2160",
        "https://lumiere-a.akamaihd.net/v1/images/au_starwars_thephantommenace_movie_poster_cbe72014.jpeg?region=0,0,540,810"
    ]


window.onload = () => {

    for (let i = 0; i < lista.length; i++) {
        $(`<div class="swiper-slide">
                <img src="${lista[i]}">
            </div>`).appendTo(".swiper-wrapper")
    }

    var swiper = new Swiper(".mySwiper", {
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        loop: true,
        slidesPerView: 4,
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