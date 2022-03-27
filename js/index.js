$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('.color-theme-green');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-base").css('background-color', 'rgb(20 131 10 / 89%)');

            } else {
                $('.navbar-base').css('background-color', 'transparent');
            }
            check_width()
        });
    }
    check_width()

});

function check_width() {
    if (window.innerWidth > 992) {
        $('#navbar-item').addClass('navbar-base')
        console.log("here working o1")

    } else {
        $('#navbar-item').removeClass('navbar-base')
        console.log("here working 111")

    }
}