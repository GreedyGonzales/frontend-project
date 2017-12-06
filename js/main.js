$(document).ready(function(){
    var $container_left = $('#container-left');
    var $container_left_Height = $container_left.outerHeight();
    var top_1 = 0;

    console.log("Jquery imported");
    console.log("Container Height at start:" + $container_left_Height);

    var scroller = function(event) {
        console.log("scroller called");
        top_1 += $container_left_Height * (($(this).scrollTop() > top_1) ? 1 : -1);
        $container_left.animate({
            scrollTop: top_1
        }, 150, 'linear', function() {
            $(this).clearQueue().one("scroll", function() {
                // nesting eats the last event so it doesn't self-trigger
                $(this).one("scroll", scroller);
            });
        });
        return;
    }


    $container_left.one("scroll", scroller);

    $(window).on('resize', function(){
        console.log("Screen was resized");
        $container_left_Height = $container_left.outerHeight();
        console.log("Container Height after resize:" + $container_left_Height);
    });
});