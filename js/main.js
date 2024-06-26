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

    // Dropdown
    $('.dropdown-btn').on('click', function(){
        $(this).siblings('.dropdown-menu').toggleClass('show');
        $(this).toggleClass('active')
    })

    // Sidebar
    $('.sidebar .item-button').on('click', function(){
        $(this).parent('.sidebar-item').toggleClass('active');
    })

    $('.btn-sidebar').on('click', function(e){
        $('.sidebar').addClass('sidebar-open');
        $('body').addClass('overflow');
        e.preventDefault();
    })

    $('.sidebar .btn-close').on('click', function(e){
        $('.sidebar').removeClass('sidebar-open');
        $('body').removeClass('overflow');
        e.preventDefault();
    })

    // Modal
    $('.btn-modal').on('click', function(e){
        // $('.modal').addClass('show');
        // $('body').addClass('overflow');
        var id = $(this).data('id');
        $('.modal[data-id="modal' + id + '"]').addClass('show');
        e.preventDefault();
    });

    $('.modal .btn-close').on('click', function(e){
        $('.modal').removeClass('show');
        $('body').removeClass('overflow');
        e.preventDefault();
    })
    
    
    if ( $(window).width() >= 992 ){
        var stickyOffset = $('.sidebar').offset().top;
        var blockPost = $('.block-postcode-search');
        $(window).scroll(function(){
            var sticky = $('.sidebar'),
            scroll = $(window).scrollTop();
    
            if (scroll >= stickyOffset) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
            
            if (scroll >= blockPost.height() - 620) sticky.addClass('scroll-end');
            else sticky.removeClass('scroll-end');
        });
    };

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

    // User Sidebar
    $('.user-sidebar-button').on('click', function(e){
        $(this).siblings('.user-sidebar').addClass('sidebar-open')
        e.preventDefault();
    })
    $('.user-sidebar .btn-close').on('click', function(e){
        $(this).parent('.user-sidebar').removeClass('sidebar-open')
        e.preventDefault();
    })

})