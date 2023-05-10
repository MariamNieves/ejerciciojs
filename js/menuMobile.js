$(document).ready(function () {
    
    var boton = $('#btnMenu');
    var desplegable = $('.menu-mobile .menu-principal');
    var opciones = $('.menu-mobile .menu-principal a');
    var show = 0

    function mostrarOcultar(e) {
        e.preventDefault
        if (show == 0) {
            desplegable.animate({right: '0%'},500);
            show = 1;
        } else{
            desplegable.animate({right: '-100%'},500);
            show = 0;
        }
    }

    function ocultar() {
        desplegable.animate({right: '-100%'},500);
            show = 0;
    }

    opciones.on('click',ocultar);

    boton.on('click', mostrarOcultar);

    









});