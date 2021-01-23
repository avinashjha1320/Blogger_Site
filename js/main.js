const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2500);
    })

    AOS.init();

});