$(document).ready(function() {
    $('.overlaytrabaja').on('click', function () {
        $('.overlaytrabaja').removeClass('active');
        $("#wrapper").toggleClass("toggled");
        $("#wrapperInterna").toggleClass("toggled");
    });
});

function flickity(){
    $('.main-gallery').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });
}
