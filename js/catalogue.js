jQuery(document).ready(function ($) {
    $('#tours .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('#tours .slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev slick-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next slick-arrow"></i>'
    });

    $('#our-gids .container-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left slick-prev slick-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right slick-next slick-arrow"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: false,
                    autoplay: true,
                }
            },
        ]
    });
});

jQuery(window).on('load',function () {
    jQuery('section#tours .slider-for .slick-active .single-weath').on('click', function (e) {
        e.preventDefault();
        var curentId = e.target.attributes['data-id'].value;
        var allElShow =  jQuery('section#tours .slider-for .slick-active .single-weath');
        console.log(allElShow)
        for(let i = 0; allElShow.length; i++) {
        }
    });
});
