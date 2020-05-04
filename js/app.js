$(document).ready(function(){
    $.fn.resize();
});

$(window).on('resize', function(){
    
    $.fn.resize();
});

$.fn.resize = function(){ 
    var cw = $('.content-box').width();
    $('.content-box').css({
        'height': cw + 'px'
    });
}