$(document).ready(function() {

    $(window).resize(function() {
        if($(window).width() < 990) {
            $('.navbar-collapse').addClass('skew');
        }    
    })
    
    if($(window).width() < 990) {
        $('.navbar-collapse').addClass('skew');
    }
    $(document).on('click', '.hamburger', function() {
        $(this).toggleClass('expanded');
        $('.main-header .header-content').toggle()
    });



    $('.navbar ul li').click(function() {
        var id = $(this).data('id');
        $('html, body').animate({
            scrollTop : $("#"+id).offset().top
        }, 1000)
    })



    var lastScrollTop = 0;
    $(window).scroll(function() {
 
        var st = $(this).scrollTop();

        if($(window).scrollTop() > 250) {
            if (st > lastScrollTop) {

                $('.fixed-navbar').removeClass('fixed-navbar');

            } else {

                $('.navbar').addClass('fixed-navbar')
            }
            lastScrollTop = st;

        } else {
            $('.fixed-navbar').removeClass("fixed-navbar");

        }

   
    })



    $('.navbar .nav-link').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active')
    })




})
