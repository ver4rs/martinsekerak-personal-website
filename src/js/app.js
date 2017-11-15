var hello = 'look im grunting!';

var test = 'Yes';

var awesome = 'yes it is awesome!';


/**
 * Parallel website by item of name navigation with animation
 * Scroll down/up by correct item of name navigation
 */
parallelWebsite = function () {
    var t=0;
    t = $(".navbar-fixed-top").height()-20;
    $(".js_nav-item a").bind("click",function(o){
        var a = $($(this).attr("href")).offset().top;
        $("html, body").stop().animate({scrollTop:a-t},+700);
        o.preventDefault();
    });
    $("body").scrollspy({target:".navbar-fixed-top",offset: t+2});
    $(".navbar-collapse.in").collapse("hide");
};


/**
 * Show popup window after click button with hide button
 */
albumsPopup = function () {
    var t=$(".popup-overlay"),
        o=$(".popup-close"),
        a=$(".album .image-popup .image-caption #link");
    a.on("click",function(){
        var currentElement = $(this).closest('.album');
        currentElement.find(".popup-overlay").removeClass("popup-overlay-show");
        currentElement.find(".popup-overlay").addClass("popup-overlay-show");
    });

    o.on("click",function(o){
        o.stopPropagation();
        t.removeClass("popup-overlay-show")
    })
};

$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    //  Fixed navigation panel
    wScroll > 60 ? $("body").addClass("page-on-scroll") : $("body").removeClass("page-on-scroll");

    if (wScroll > 60) {
        $('.header button').addClass('navbar-toogle-scroll');
        $('.logo').addClass('logo-scroll');
        $('.nav').addClass('nav-scroll');
        $('.header h1').addClass('black-color');
    } else {
        $('.header button').removeClass('navbar-toogle-scroll');
        $('.logo').removeClass('logo-scroll');
        $('.nav').removeClass('nav-scroll');
        $('.header h1').removeClass('black-color');
    }


    $(".navbar").offset().top > 150 && $(".navbar-fixed-top").addClass("top-nav-collapse");
    $(".navbar").offset().top > 150 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse");




    if (wScroll < 500) {
        var size =  (wScroll / 2) + 10;
        var a = $('.slider-image').offset().top + -size;

        $('.slider-image').css({
            'transform' :  'translate(0px,-' + wScroll / 3 + 'px)'
            // 'top' : '-' + a + 'px'
        });

        $('.promo-block').css({
            'transform' : 'translate(0px,' + wScroll / 25 + '%)'
        })
    }


    //  Parallel scrolling website
    parallelWebsite();


    //albumsPopup() - I changed architecture for popup
});