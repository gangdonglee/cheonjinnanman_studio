/*Trigger*/
$(function(){
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active')
    })


    $('section, .menu a').click(function () {
        $('.trigger').removeClass('active')
        $('.gnb').removeClass('active')
    })

    /* Smooth Scrolling */
    $('.menu a, .gototop').click(function (e) {
        $.scrollTo(this.hash || 0, 900)
    })

    //slick.js
    $('.history-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
    })


})
