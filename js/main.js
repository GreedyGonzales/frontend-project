$(document).ready(function(){
    var $container_left = $('#container-left');
    var $container_right = $('#container-right');
    var $container_left_Height = $container_left.outerHeight();
    var $container_right_Height = $container_right.outerHeight();
    var top_1 = 0;
    var top_2 = 0;

    var scrollerLeft = function(event) {
        top_1 += $container_left_Height * (($(this).scrollTop() > top_1) ? 1 : -1);
        $container_left.animate({
            scrollTop: top_1
        }, 500, 'linear', function() {
            $(this).clearQueue().one("scroll", function() {
                // nesting eats the last event so it doesn't self-trigger
                $(this).one("scroll", scrollerLeft);
            });
        });

        top_2 += $container_right_Height * (($(this).scrollTop() > top_2) ? 1 : -1);
        $container_right.animate({
            scrollTop: top_2
        }, 500, 'linear');

        return;
    }

    $container_left.one("scroll", scrollerLeft);

    $(window).on('resize', function(){
        $container_left_Height = $container_left.outerHeight();
        $container_right_Height = $container_right.outerHeight();
        console.log("Container Height after resize:" + $container_left_Height);
    });
});