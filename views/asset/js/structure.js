$(document).ready(function() {
    $('nav').hover(
        function() {
            $(this).stop().animate({
                width: "10%",
            }, 100);

            $(this).find('.navLi1').stop().animate({
                marginLeft: "5%",
            }, 100);
        },
        function() {
            $(this).stop().animate({
                width: "5%",
            }, 100);

            $(this).find('.navLi1').stop().animate({
                marginLeft: "16%",
            }, 90);
        }
    );
});
s