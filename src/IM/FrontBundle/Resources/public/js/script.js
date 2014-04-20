(function($){
    // slider init
    var slider = new Slider($('.if-slider'));
    var photos = [];
    $('.slider-image').each(function(){
        photos.push({
            'src': $(this).attr('src')
        });
        $(this).hide();
    });
    slider.setPhotos(photos)
        .setTheme('no-control')
        .setSize(1000, 196)
        .setTransitionFunction(SliderTransitionFunctions.squares)
        .start();

    // menu hover
    $('.menu ul').each(function(){
        $(this)
            .attr('data-height', $(this).height())
            .attr('data-width', $(this).width())
            .css({height:50,width:50,opacity:0,visibility:'visible'});
    });
    $('.menu li').hover(
        function(){
            var submenu = $(this).find('ul');
            submenu.animate({height: submenu.attr('data-height'), width: submenu.attr('data-width'), opacity: 1}, {duration:200,queue: false});
            $(this).addClass('hover');
        },
        function(){
            var submenu = $(this).find('ul');
            submenu.animate({height: 50, width: 50, opacity: 0}, {duration:200,queue: false});
            $(this).removeClass('hover');
        }
    );

})(jQuery);
