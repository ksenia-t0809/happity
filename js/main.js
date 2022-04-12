$(document).ready(function(){

    // Mobile Menu
    $('header .menu-btn').on('click', function(e){
        $('.header').addClass('menu-open');
        e.preventDefault();
    });
    $('header .btn-close').on('click', function(e){
        $('.header').removeClass('menu-open');
        e.preventDefault();
    })

    // Sidebar
    $('.sidebar .item-button').on('click', function(){
        $(this).parent('.sidebar-item').toggleClass('active');
    })

    // Logos Mobile Slider
    if ( $(window).width() <= 767 ){
        $('.block-logos .owl-carousel').owlCarousel({
            loop:true,
            margin:50,
            nav:false,
            dots: false,
            autoWidth:true,
            responsive:{
                0:{
                    items:3,
                    center: true,
                }
            }
        })
    }
    else {
        stopCarousel();
    }
    $(window).resize(function() {
        if ( $(window).width() <= 767 ) {
            $('.block-logos .owl-carousel').owlCarousel({
                loop:true,
                margin:50,
                nav:false,
                dots: false,
                autoWidth:true,
                responsive:{
                    0:{
                        items:3,
                        center: true,
                    }
                }
            });
        } else {
            stopCarousel();
        }
    });
    function stopCarousel() {
        var owl = $('.block-logos .owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    }
})