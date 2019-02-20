jQuery(document).ready(function($) {
    $('#main-nav #toggle-button').on('click', function () {
        console.log($('#main-nav .collapse').hasClass('active'));
        if($('#main-nav .collapse').hasClass('active')) {
            $('#main-nav .collapse').removeClass('active');
        } else {
            $('#main-nav .collapse').addClass('active');
        }
    });
});
