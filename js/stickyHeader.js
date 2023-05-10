$(document).ready(function () {
    
    var fixedHeader = $('.fixed-header')

    
    window.onscroll = function() {
        var y2 = window.scrollY;
        
        if (y2 > 250) {
            fixedHeader.css('margin-top',0);
        };
        if (y2 < 200) {
            fixedHeader.css('margin-top','-68px');
        };
    };
    


});