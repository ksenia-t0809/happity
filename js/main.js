$(document).ready(function(){
    // Sidebar
    $('.sidebar .item-button').on('click', function(){
        $(this).parent('.sidebar-item').toggleClass('active');
    })

    // Logos Mobile Slider
    if ( $(window).width() <= 767 ){
        $('.block-logos .owl-carousel').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            dots: false,
            responsive:{
                0:{
                    items:1,
                    center: true
                }
            }
        })
    }
    else {
        stopCarousel();
    }
    $(window).resize(function() {
        if ( $(window).width() <= 992 ) {
            $('.block-logos .owl-carousel').owlCarousel({
                loop:false,
                margin:10,
                nav:false,
                dots: false,
                responsive:{
                    0:{
                        items:1,
                        center: true
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