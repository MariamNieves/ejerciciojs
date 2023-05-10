$(document).ready(function () {
    
    var scrollBtn = $('.btn-volver-arriba')

    
    window.onscroll = function() {
        var y = window.scrollY;
        
        if (y > 600) {
            scrollBtn.css('margin-right','0');
        };
        if (y < 600) {
            scrollBtn.css('margin-right','-60px');
        };
    };

    //movimiento suave de scroll de Inicio y Volver arriba

    $('a.volver-arriba').on('click',function (e) {
        e.preventDefault();

        if ($(window).scrollTop() != 0) {
            $('html, body').stop().animate({scrollTop:0}, 1000)
        }
    })

    //Demás botones de scroll
    $('a.scroll-suave').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop}, 1000)
    })

    $('a.scroll-acercaDe').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop-200}, 1000)
    })
    
    $('a.scroll-equipo').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop-50}, 1000)
    })

    $('a.scroll-contacto').on('click',function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({scrollTop:seccionOffsetTop+85}, 1000)
    })



});