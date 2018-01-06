$(document).ready(function(){
    var $container_left = $('#container-left');
    var $container_right = $('#container-right');
    var $container_left_Height = $container_left.outerHeight();
    var top_1 = 0;

    var scrollerLeft = function() {
        top_1 += $container_left_Height * (($(this).scrollTop() > top_1) ? 1 : -1);
        $container_left.animate({
            scrollTop: top_1
        }, 800, 'linear', function() {
            $(this).clearQueue().one("scroll", function() {
                // nesting eats the last event so it doesn't self-trigger
                $(this).one("scroll", scrollerLeft);
            });
        });
    };

    var displayImages = function() {
        console.log("Funktionstest");
    };

    $container_left.one("scroll", scrollerLeft);
    $container_left.one("scroll", displayImages);

    $(window).on('resize', function(){
        $container_left_Height = $container_left.outerHeight();
    });
});