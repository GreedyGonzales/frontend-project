$(document).ready(function(){
    var $container_left = $('#container-left');
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


        //  setTimeout(hideSection,810)

        $(".images-section").removeClass("fadeIn");
        setTimeout(displayImages,810)
    };

    function checkVisibility() {
        console.log("Funktionstest - checkVisibility");
        var visibleSection = "";

        $('#container-left').find('.step-section').each(function(){
            var sectionToCheck = $(this);

            var element_position = sectionToCheck.offset().top;
            var element_height = sectionToCheck.height();
            var scroll_position = $(window).scrollTop();
            var viewport_height = $(window).height();

            if(((scroll_position + viewport_height) > element_position) &&
                ((element_position + element_height) > scroll_position)){
                console.log("Visible Element is detected");
                console.log("Visible Element is: " + sectionToCheck.attr('id'));
                visibleSection = sectionToCheck.attr('id');
            }
        });

        return visibleSection;
    }


    var displayImages = function() {
        console.log("Funktionstest - displayImages");
        //      console.log(checkVisibility());

        var rightSection = $("#" + (checkVisibility() + '-images'));

        showSection(rightSection);


    };

    function showSection(section) {
        $(section).addClass("fadeIn");
    }



    $container_left.one("scroll", scrollerLeft);

    $(window).on('resize', function(){
        $container_left_Height = $container_left.outerHeight();
    });
});