$(document).ready(function() {
    $('.overlaytrabaja').on('click', function () {
        $('.overlaytrabaja').removeClass('active');
        $("#wrapper").toggleClass("toggled");
        $("#wrapperInterna").toggleClass("toggled");
    });
});
