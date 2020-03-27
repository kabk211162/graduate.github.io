var count = 0;
var aaa = $("nav").height();
var bbb = $("").height();

$(document).ready(function () {
    $("#menu").click(function () {
        if ($(window).width() <= 575) {
            //執行項目
            $('#ico').animate({ 'opacity': '1' }, 500);
            $('ol').toggle('drop', { direction: 'up' }, 300);
            
            if (count == 0) {
                $("nav").animate({height:"100vh"},1000);
                // $("nav").attr('style','height:100vh');
                count++;
            }else{
                $("nav").animate({height:"10vh"},300);
                count--;
            }
        }
        else {
            //執行項目
            $('ol').toggle('drop', { direction: 'up' }, 1000);
        }
    });
});

$(document).ready(function () {
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('#ico').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 500);
            }

        });

    });

});
