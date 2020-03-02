$(document).ready(function () {
    let mainBtn =  $('.main_btna'),
        modal = $('.modal'),
        body = $('body'),
        overlay = $('.overlay'),
        close = $('.close');

    mainBtn.on('click', function () {

        modal.animate({
            height: 'toggle'
        },3000);
        modal.css('display', 'block');
        body.css('overflow','hidden');
        overlay.css('display', 'block');
    });

    close.on('click', function () {
        modal.css('display', 'none');
        overlay.css('display', 'none');
        body.css('overflow','auto');
    });
});