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
        fade: true,
        infinite: true,
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

    $('section#tours .slider-for .single-weath').on('click', function (e) {
        e.preventDefault();
        let allElShow =  $('section#tours .slider-for .slick-active .single-weath').removeClass('active');
    });

    function changeDateTextStart (text) {
        $('#tours .container-form .date .start').text(text);
    }

    function changeDateTextEnd (text) {
        $('#tours .container-form .date .end').text(text);
    }

    function changeDateInputStart (text) {
        $('#tours .container-form .input-date .input-date-text-start').text(text);
    }

    function changeDateInputEnd (text) {
        $('#tours .container-form .input-date .input-date-text-end').text(text);
    }

    const monthNames = ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер",
        "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"];
    const monthFullNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
        "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

    let date = new Date();
    let dateNow = date.getDate();
    let monthNow = date.getMonth();
    let yearNow = date.getFullYear();

    changeDateTextStart(dateNow + ' ' +  monthNames[monthNow]);
    changeDateTextEnd(dateNow + ' ' +  monthNames[monthNow]);
    changeDateInputStart(monthFullNames[monthNow] + ' ' + dateNow + ', ' + yearNow);
    changeDateInputEnd(monthFullNames[monthNow] + ' ' + dateNow + ', ' + yearNow);

    $('#tours .filter-button').on('click', function (e) {
        console.log(e);
    });

    $('#tours .container-form .type img').on('click', function (e) {
        let choosedType = e.target.attributes['alt'].value;
        $('#tours .container-form .type-tour').text(choosedType);
    });


    $.fn.datepicker.dates['en'] = {
        days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
        daysShort: ["Нд", "Пн", "Вт", "Сер", "Чт", "Пт", "Сб"],
        daysMin: ["Нд", "Пн", "Вт", "Сер", "Чт", "Пт", "Сб"],
        months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
            "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
        today: "Сьогодні",
        clear: "Очистити",
        format: "mm/dd/yyyy",
        titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
        weekStart: 0
    };

    var direction = '';

    $('#tours .container-form .input-date>div.click').on('click', function (e) {
        $('#tours .container-form .input-date>div.click').removeClass('active');
        e.target.classList.add('active');
        direction = e.target.attributes['data-dir'].value;
    });

    $('#tours .container-form .calendar').datepicker({
        todayHighlight: true,
        toggleActive: true,
        format: "yyyy-mm-dd",
    }).on('changeDate', function(e) {
        let choosed = $('#tours .container-form .calendar').data('datepicker').getFormattedDate('yyyy-mm-dd');
        console.log(choosed);
        if(direction == 'start') {
            changeDateInputStart(monthFullNames[monthNow] + ' ' + dateNow + ', ' + yearNow);
        }
    });
});
