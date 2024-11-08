new WOW().init();

$(document).scroll(function () {
  "use strict";
    var y = $(this).scrollTop();
    if (y > 135) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }

    var header = $('.top-bar.fixed-header');

    if (y >= 135) {
        // $('.top-bar').css('opacity','0');
        $(".header-main").addClass("showmenu");
        $(".top-banner-section .logo-dark").css("display","block");
        $(".top-banner-section").css("padding-top","128px");
        $(".top-margin").css("margin-top","9%");
        $(".top-banner-section .logo-light").css("display","none");
        $(".top-bar .top-info-list .phnenmbr").addClass("black");
        $(".top-bar .top-info-list .phnenmbr").removeClass("white");
        $(".header-main .othermenu").addClass("light");
        $(".header-main .othermenu").removeClass("dark");
        $(".custom-website-design-development-page .second-bar").css("background","#1a9dbb");
        $('.top-bar').css('transform','matrix(1, 0, 0, 1, 0, -300)');
        header.css('transform','matrix(1, 0, 0, 1, 0, 0)');
        //  header.css('opacity','1');
      

    } else {
        // $('.top-bar').css('opacity','1');
        $('.top-bar').css('transform','matrix(1, 0, 0, 1, 0, 0)');
        $(".top-bar .top-info-list .phnenmbr").addClass("white");
        $(".top-banner-section").css("padding-top","0%");
        $(".top-bar .top-info-list .phnenmbr").removeClass("black");
        $(".header-main").removeClass("showmenu");
        $(".top-margin").css("margin-top","0%");
        $(".header-main .othermenu").addClass("dark");
        $(".header-main .othermenu").removeClass("light");
        $(".top-banner-section .logo-dark").css("display","none");
        $(".top-banner-section .logo-light").css("display","block");
        $(".custom-website-design-development-page .second-bar").css("background","#390184");
        // $('.top-bar').animate({'height': '135px'},"slow");
        // $('.top-bar').css('height','135px');
          

    } 

}); 
// sticky social end



$(document).ready(function() {
"use strict";




    //*****************************
    // Sale Black Friday and Cyber Monday
    //*****************************
    $('.salecrcle-btn').click(function() {
        $('.sale-blckfriday, .salecrcle-btn, .sale-box, .uppersale-bx').toggleClass('open');
    });
    window.setTimeout(function(){
           $('.salecrcle-btn, .salecrcle-btn, .sale-box, .uppersale-bx').toggleClass("open");
       }, 6000);
    ////// end


   //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
    });


    $('.firstlevel li a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('ul').slideUp();
        }else{
            $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown();
        }
    });

    $('.mainnav > li > a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp();
        }else{
            $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp();
        }
    }); 

     

$(".cs-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
    
    });
$(".portslider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    slide:'li',
    adaptiveHeight: true
    });
    

////// main slider
 $(".home-slider").slick({
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });


 $(".partnerslider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true
    
    });

 

// progress bar
 var time = 4;
 var $bar, $slick, isPause, tick, percentTime;
$slick = $('.home-slider'); 
$bar = $('.slider-progress .progress');   
$('.slider-wrapper').on({
mouseenter: function() { isPause = true; },
mouseleave: function() { isPause = false; }
});
 function startProgressbar() { resetProgressbar(); percentTime = 0; isPause = false; tick = setInterval(interval, 10); }
  function interval() {
    if(isPause === false) { percentTime += 1 / (time+0.1); $bar.css({ width: percentTime+"%" }); if(percentTime >= 100)
        { $slick.slick('slickNext'); startProgressbar(); }
    }
  }
function resetProgressbar() { $bar.css({ width: 0+'%' }); clearTimeout(tick); }
startProgressbar();  
////// main slider end

////// number slider
 var slickOpts = {
    dots: true,
    arrows: true,
    infinite: !0,
    speed: 1000,
    slidesToShow: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    adaptiveHeight: !0,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),

    customPaging: function(slick,index) {
        return '<a> 0' + (index + 1) + '</a>';
    }
  };

  $('.number-slider').slick(slickOpts);
////// number slider end

////// mob slider
    $(".sliderxs").slick({
        arrows: false,
        dots: true,
        autoplay: true,
    adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });
////// mob slider end


// $(".package-slider").slick({
//         dots: true,
//         arrows: false,
//         infinite: false,
//         speed: 600,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         adaptiveHeight: true,
//     responsive: [
//             {
//                 breakpoint: 991,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     }); 



////// testimonial slider
$(".testwraper").slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
    breakpoint: 776,
    settings: {
     vertical:false,
     arrows: false
    }
  }
]
}); 
////// testimonial slider end

//*****************************
    // Responsive Slider
    //*****************************
    var respsliders = {
      1: {slider : '.packslider'},
      2: {slider : '.boxwrap'}
      // 3: {slider : '.partnerslider'}
      


    };

    //*****************************
    // Function for Responsive Slider 767
    //*****************************

    $.each(respsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: false,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });  

////// mob slider tab system
    $(".m-sliderxs").slick({
        arrows: false,
        dots: false,
        autoplay: true,
    adaptiveHeight: true,
    slidesToShow: 2,
  centerMode: true,
  variableWidth: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
            },
            {
              breakpoint: 767,
              settings: {
                unslick: true
              }
            }
        ]
    });

////// Package mob slider tab system
    $(".m-sliderx-pkg").slick({
        arrows: false,
        dots: true,
        autoplay: true,
    adaptiveHeight: true,
    slidesToShow: 1,
        responsive: [
            {
              breakpoint: 100000,
              settings: "unslick"
            },
            {
              breakpoint: 769,
              settings: {
                unslick: true
              }
            }
        ]
    });




////// product gallery slider
$(".product-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.product-gallery-nav'
    });  
$('.product-gallery-nav').slick({
  dots: false,
  arrows: true,  
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  verticalSwiping:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.product-slider-gallery',
  responsive: [
      {
      breakpoint: 991,
      settings: {
      vertical:false,
      }
    },
    {
    breakpoint: 776,
    settings: {
     vertical:false,
    }
  },
    {
      breakpoint: 480,
      settings: {
        vertical:false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
]
}); 
////// product gallery slider end





$('.thumb-slider').slick({
centerMode: true,
centerPadding: '0px',
arrows: true,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 3
}
},
{
breakpoint: 767,
settings: {
arrows: false,
dots:false,
centerMode: false,
centerPadding: '10px',
slidesToShow: 1
}
},
{
breakpoint: 480,
settings: {
arrows: false,
dots:false,
centerMode: true,
centerPadding: '10px',
slidesToShow: 1
}
}
]
});

///// gallery simple
$('.slider-for').slick({
dots: true,
arrows:false,
infinite: true,
speed: 500,
slide: 'li',
fade: false,
cssEase: 'linear',
centerMode: true,
slidesToShow: 1,
variableWidth: true,
autoplay: true,
autoplaySpeed: 4000,
responsive: [{
  breakpoint: 800,
  settings: {
    arrows: false,
    centerMode: false,
    centerPadding: '40px',
    variableWidth: false,
    slidesToShow: 1,
    dots: true
  },
  breakpoint: 1200,
  settings: {
    arrows: false,
    centerMode: false,
    centerPadding: '40px',
    variableWidth: false,
    slidesToShow: 1,
    dots: true
  }
}],
customPaging: function (slider, i) {
  return '<button class="tab">' + $('.thumbsmain li:nth-child(' + (i + 1) + ')').html() + '</button>';
}
});
///// gallery simple end

////// gallery slider
$(".gallery-slider-main").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',    
   asNavFor: '.gallery-nav-main'
    });  
$('.gallery-nav-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  //vertical:true,
  asNavFor: '.gallery-slider-main',
  dots: true,
  //centerMode: true,
  focusOnSelect: true
}); 
////// gallery slider end



////// thumb gallery slider
$(".bid-slider-gallery").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  //fade: true,
  //cssEase: 'linear',    
   asNavFor: '.bid-gallery-nav'
    });  
$('.bid-gallery-nav').slick({
  dots: false,
  arrows: false,  
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3000,
  vertical:true,
  focusOnSelect: true,
  //centerMode: true,
  asNavFor: '.bid-slider-gallery',
  responsive: [
{
breakpoint: 767,
settings: {
 vertical:false,
}
}
]
});




$('.testi-slides').slick({
    dots: false,
    arrows:true,
    infinite: false,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots:false
        }
    }, {
        breakpoint: 600,
        settings: {
            dots: true,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            dots: true,
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});









// my custom slider starts

// $(".partner-slider").slick({
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 991,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1
//         }
//     }, {
//         breakpoint: 767,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }]
// });

//*****************************
    // Tabbing 
    //*****************************
    
    $('[data-targetit]').on('click',function () {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.'+target).siblings('[class^="tabs"]').removeClass('current');
        $('.'+target).addClass('current');
        $('.slick-slider').slick('setPosition', 0);

    });


////// thumb gallery slider end

// function getURLParameter(name) {
//     return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))
// }


function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var val = getURLParameter('pack');
// $('#packages').val(val);  


if(val == '1') {
        $('#packages').val('Startup Website Package - £230.00');
    }
if(val == '2') {
        $('#packages').val('Professional Website Package - £409.99');
    }    
if(val == '3') {
        $('#packages').val('Elite Website Package - £709.99');
    }
if(val == '4') {
        $('#packages').val('E-Commerce Website Package - £1004.99');
    }
if(val == '5') {
        $('#packages').val('Silver Website Package - £1609.99');
    }


if(val == '6') {
        $('#packages').val('Revamp logo Package - £19.99');
    }
if(val == '7') {
        $('#packages').val('Startup logo Package - £49.99');
    }
if(val == '8') {
        $('#packages').val('Professional Logo Package - £114.99');
    }
if(val == '9') {
        $('#packages').val('Identity Logo Package - £164.99');
    }
if(val == '10') {
        $('#packages').val('Corporate Logo Package - £214.99');
    }
if(val == '11') {
        $('#packages').val('Elite Logo Package - £414.99');
    }



if(val == '12') {
        $('#packages').val('E-Commerce Startup Package - £600.00');
    }
if(val == '13') {
        $('#packages').val('E-Commerce Professional Package - £1,394.00');
    }
if(val == '14') {
        $('#packages').val('E-Commerce Elite Package - £3,694.00');
    }



if(val == '15') {
        $('#packages').val('Stationery Package - £74.99');
    }
if(val == '16') {
        $('#packages').val('Infographic Package - £139.99');
    }
if(val == '17') {
        $('#packages').val('Brochure/Flyer Package - £134.99');
    }



if(val == '18') {
        $('#packages').val('Startup Video Package - £209.99');
    }
if(val == '19') {
        $('#packages').val('Classic Video Package - £409.99');
    }
if(val == '20') {
        $('#packages').val('Premium Video Package - £809.99');
    }
if(val == '21') {
        $('#packages').val('Unlimited Animation Package - £1409.99');
    }
if(val == '22') {
        $('#packages').val('Professional 3D VFX Animation Package - £2009.99');
    }
if(val == '23') {
        $('#packages').val('Elite 3D VFX Animation Package - £2509.99');
    }



if(val == '24') {
        $('#packages').val('Business Website Package - £1999.00');
    }
if(val == '25') {
        $('#packages').val('Automated/Interactive Conferencing Portal Package - £3999.00');
    }
if(val == '26') {
        $('#packages').val('Automated/Interactive E-Commerce Website Package - £4999.00');
    }



if(val == '27') {
        $('#packages').val('Seo Booster Package - £200.00');
    }
if(val == '28') {
        $('#packages').val('Seo Value Package - £400.00');
    }
if(val == '29') {
        $('#packages').val('Seo Pro Package - £600.00');
    }



if(val == '30') {
        $('#packages').val('Professional Illustrative Logo Package - £299.99');
    }
if(val == '31') {
        $('#packages').val('3D Logo Package - £399.99');
    }    
if(val == '32') {
        $('#packages').val('Basic Illustrative Logo Package - £99.99');
    }
if(val == '33') {
        $('#packages').val('Startup Illustrative Logo Package - £199.99');
    }  
if(val == '34') {
        $('#packages').val('Startup Illustrative Logo Package - £199.99');
    }



if(val == '35') {
        $('#packages').val('Basic Combo Package - £444.00');
    }
if(val == '36') {
        $('#packages').val('Startup Combo Package - £794.00');
    }
if(val == '37') {
        $('#packages').val('Professional Combo - £1,044.99');
    }       
if(val == '38') {
        $('#packages').val('Corporate Combo Package - £1,344.99');
    }    
if(val == '39') {
        $('#packages').val('Elite Combo Package - £1,994.99');
    }



if(val == '40') {
        $('#packages').val('Complete Branding Solution Package - 2299.99');
    } 
    
if(val == '41') {
        $('#packages').val('Beginner Website Package - 139.99');
    }     
    





// var val = location.href.match(/[?&]days=(.*?)(?:$|&)/)[1];   // get params from URL
// $('#days').val(val); 



////// tabs generic (nav and tabs in main div)
$('.tab-custom .tab-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs generic end

////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs custom end

////// Accordion 
$('.accordion .quest-title.active1').addClass('active');
// $('#accordion-1').slideDown(300).addClass('open');
function close_accordion_section() {
jQuery('.accordion .quest-title').removeClass('active');
jQuery('.accordion .quest-content').slideUp(300).removeClass('open');
}
jQuery('.quest-title').click(function(e) {
// Grab current anchor value
var currentAttrValue = jQuery(this).attr('href');
if(jQuery(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
jQuery(this).addClass('active');
// Open up the hidden content panel
jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
}
e.preventDefault();
});
////// Accordion end 

////// fancybox
$('[data-fancybox="swf-file"]').fancybox({
  iframe : {
    css : {
      width : '336px',
      height : '280px'
    }
  }
});

$('[data-fancybox="video-file"]').fancybox({
  iframe : {
    css : {
      width : '580px',
      height : '340px'
    }
  }
});   
////// fancybox end



// intel Tel Input
let ip; 
let ip_value;
 $("#phone-country,#phone-coun").intlTelInput({
     
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
    geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
              ip=resp.ip;
            
              
            });
          },
       initialCountry: "auto",
       nationalMode: true,
       separateDialCode: true,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
     // utilsScript: "<?php echo $basesurl;?>js/utils.js"
    });

setTimeout(function(){
    $('input[name="pc"]').val($('.selected-dial-code').text());
    $('input[name="cip"]').val(ip);
    $('input[name="ctry"]').val( $('.country-list .country.active .country-name').text());
}, 3000);


$('body').delegate('.country','click',function(){
$('input[name="pc"]').val($(this).find('.dial-code').text());
$('input[name="cip"]').val(ip);
$('input[name="ctry"]').val($(this).closest("form").find('.country-list .country.active .country-name').text());

/*var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);*/
 });


 

// car scroll top
var $scrolltop = jQuery('.car-top');
jQuery(window).scroll(function() {
    if (jQuery(window).scrollTop() >= 200) {
        $scrolltop.addClass("show");
        $scrolltop.addClass("car-down");
    } else {
        $scrolltop.removeClass("show");
        setTimeout(function() {
            $scrolltop.removeClass('car-down');
        }, 300);
    }
});
$scrolltop.on('click', function() {
jQuery('html,body').animate({
    scrollTop: 0
}, 800);
jQuery(this).addClass("car-run");
setTimeout(function() {
    $scrolltop.removeClass('car-run');
}, 1000);
return false;
});
// car scroll top end

}); // document ready end
 
 ////// slick gallery counter
var $gallery = $('.gallery-slider-main');
var slideCount = null;

$gallery.on('init', function(event, slick){
  "use strict";
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  "use strict";
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  "use strict";
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  "use strict";
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}
////// slick gallery counter end
 

// validate contact form on keyup and submit
    $("#banform").validate({
      rules: {
        username: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        agree: "required"
      },
      messages: {
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        email: "Please enter a valid email address"
      }
    });

    $("#contactForm").validate();



////// footer year
$(function(){
"use strict";
var theYear = new Date().getFullYear();
$('#year').html(theYear);
}); 


function setButtonURL(){
 javascript:$zopim.livechat.window.show();
 }

$(function(){
//Slim Scroller
    
        $.mCustomScrollbar.defaults.theme="light-1"; //set "light-2" as the default theme
        $(".list-scroll, .subscription-list").mCustomScrollbar({
            scrollButtons:{
                enable:true
            },
            callbacks:{
                onTotalScroll:function(){ addContent(this) },
                onTotalScrollOffset:100,
                alwaysTriggerOffsets:false
            }
        });

    
}); 


//=========== BLINK POPUP STARTS

$(".book-call-now").click(function(){
        $('.book-call-ys-layer').fadeIn();
        $('.book-call-ys-container').fadeIn();
        $('.book-call-ys-popup-content').fadeIn();
    });

$(".book-callbtn").click(function(){
        $('.book-call-ys-layer').fadeIn();
        $('.book-call-ys-container').fadeIn();
        $('.book-call-ys-popup-content').fadeIn();
    });

    $(".book-call-ys-popup-close").click(function(){
        $('.book-call-ys-layer').fadeOut();
        $('.book-call-ys-container').fadeOut();
        $('.book-call-ys-popup-content').fadeOut();
    });

//=========== BLINK POPUP ENDS



//=========== FLOATING FORM STARTS
  $(".clickbutton").click(function(){
   $('.floatbutton').toggleClass("active");
   //$('.crossplus').toggleClass("rotate");
});
//=========== FLOATING FORM ENDS



 //=========== BANNER IMAGE MOVE STARTS

var windowWidth = $(window).width();
$('.banner').mousemove(function(event) {
    var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
    // console.log(event.pageX,"pagex");
    // var moveX1 = (($(window).width() / 1) - event.pageX) * 0.1;
    var moveY = (($(window).height() / 2) - event.pageY) * 0.1;
    // $('.object1').css('margin-right', moveX1 + 'px');
    $('.object1').css('margin-top', moveY + 'px');

    $('.object2').css('margin-right', -moveX + 'px');
    $('.object2').css('margin-bottom', -moveY + 'px');

    $('.object3').css('margin-right', moveX + 'px');
    $('.object3').css('margin-top', moveY + 'px');
    $('.object4').css('margin-left', -moveX + 'px');
    $('.object4').css('margin-top', -moveY + 'px');
});

//=========== BANNER IMAGE MOVE ENDS



//=========== HEADER SCROLL FUNCTION STARTS

$(window).scroll(function(){
    if ($(window).scrollTop() >= 135) {
        // $('.top-bar').css('opacity','0');
        $('.top-bar').addClass('fixed-header');
       
    }
    else {
        $('.top-bar').removeClass('fixed-header');
        // $('.tphead').slideDown(100);
        // $('.tphead div').removeClass('visible-title');
    }
});

//=========== HEADER SCROLL FUNCTION END


//=========== our-clients-slider FUNCTION STARTS
$(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: false
            }

        }, {

            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: false
            }

        }]
    });

//=========== our-clients-slider FUNCTION ENDS


 $('.client-slides').slick({
      dots: false,
      arrows: false,
      slidesToShow: 4,
      pauseOnHover:true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 9000,
      cssEase: 'linear',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots:false
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
  })
  
  
  $(".banslidee").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 1000,
    cssEase: 'linear'

});


$('.cmplte-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$(".sldrtstmnl").slick({
    dots: false,
    arrows: true,
    centerMode:true,
    centerPadding:'290px 0 0',
    speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 769,
      settings: {
    dots: true,
        centerPadding:'0',
        arrows: false,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
    });
    
    
$(".sldrtstmnl2").slick({
    dots: false,
    arrows: true,
    // centerMode:true,
    // centerPadding:'290px 0 0',
    // speed: 1000,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    });


$("#content-2, #content-3").mThumbnailScroller({theme:"hover-classic"});




$.each(respsliders, function() {

        $(this.slider).slick({
            arrows: false,
            dots: false,
            autoplay: true,
            settings: "unslick",
            responsive: [
                {
                  breakpoint: 2000,
                  settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        unslick: true
                    }
                }
            ]
        });
    });



    // Responsive Slider
    //*****************************
    var respsliders = {
      1: {slider : '.packslider'},
      2: {slider : '.boxwrap'}
      // 3: {slider : '.partnerslider'}
    };


$( document ).ready(function() {

 


    
});



    




$(".pckgslidersec").slick({
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    infinite:false,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        dots: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

    });

  // starty counter
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
      viewed = true;
      $('.value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 1000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}

// end counter

var a = $(".container").width();
var b = $( window ).width();
var c = (b-a)/2;
$(".testimnl .txt-wrp").css("padding-left",c+'px');

$( window ).resize(function() {
var a = $(".container").width();
var b = $( window ).width();
var c = (b-a)/2;
$(".testimnl .txt-wrp").css("padding-left",c+'px');
});


var f = $(".inner-img-box").width();
$(".inner-img-box").css("height",f);


$( window ).resize(function() {

var f = $(".inner-img-box").width();
$(".inner-img-box").css("height",f);
console.log(f);

});