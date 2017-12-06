$(document).ready(function(){
    var $container_left = $('#container-left');
    var $container_right = $('#container-right');
    var $container_left_Height = $container_left.outerHeight();
    var $container_right_Height = $container_right.outerHeight();
    var top_1 = 0;

    console.log("Jquery imported");
    console.log("Container Height at start:" + $container_left_Height);

    var scrollerLeft = function(event) {
        console.log("scroller Left called");
        top_1 += $container_left_Height * (($(this).scrollTop() > top_1) ? 1 : -1);
        $container_left.animate({
            scrollTop: top_1
        }, 500, 'linear', function() {
            $(this).clearQueue().one("scroll", function() {
                // nesting eats the last event so it doesn't self-trigger
                $(this).one("scroll", scrollerLeft);
            });
        });

        return;
    }

    var scrollerRight = function(event) {
        console.log("scroller Right called");
        top_1 += $container_right_Height * (($(this).scrollTop() > top_1) ? 1 : -1);
        $container_right.animate({
            scrollTop: top_1
        }, 500, 'linear', function() {
            $(this).clearQueue().one("scroll", function() {
                // nesting eats the last event so it doesn't self-trigger
                $(this).one("scroll", scrollerRight);
            });
        });
        return;
    }


    $container_left.one("scroll", scrollerLeft);
    $container_right.one("scroll", scrollerRight);

    $(window).on('resize', function(){
        console.log("Screen was resized");
        $container_left_Height = $container_left.outerHeight();
        $container_right_Height = $container_right.outerHeight();
        console.log("Container Height after resize:" + $container_left_Height);
    });
});