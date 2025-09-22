//topBanWrap
$(function () {
    $(".topBanSlider").slick({
        arrows: true,
        autoplay: true,
        adaptiveHeight: true,
        dots: false,
        slidesToShow: 2,
                
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    });
});




//top_voice_slide
$(function () {
    $('.top_voice_slide').slick({
        //autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        //slidesToScroll: 1,
        //centerMode: true,
        variableWidth: true,
        infinite: true,
        dots: true,
        swipe: true,
        swipeToSlide: true,
        //centerPadding: "40px",
        draggable: true,
        touchMove: true,
        dotsClass: 'dots-wrap',
        appendDots: '.dots-box',
        arrows: true,
        appendArrows: '.ar_box',
        prevArrow: '<div class="slide_ar prev_ar"></div>',
        nextArrow: '<div class="slide_ar next_ar"></div>',
        
        responsive: [
            {
                breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: "30px",
                        variableWidth: false,
                        appendArrows: '.ar_box_sp',
                        prevArrow: '<div class="slide_ar_sp prev_ar_sp"></div>',
                        nextArrow: '<div class="slide_ar_sp next_ar_sp"></div>',
                },
            },
        ],
        
    });
});