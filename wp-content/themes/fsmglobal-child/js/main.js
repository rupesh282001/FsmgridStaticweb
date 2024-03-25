jQuery(document).ready(function($) {
    $(".mobilemenu").click(function() {
        if ($(this).hasClass('menu-close')) {
            $('.sidebar').addClass('open');
            $('.backdrop').addClass('open');
            $("body").css("overflow", "hidden");
            setTimeout(function() {
                $('.mobilemenu').removeClass('menu-close');
                $('.mobilemenu').addClass('menu-open');
            }, 500);
        }
        if ($(this).hasClass('menu-open')) {
            $('.sidebar').removeClass('open');
            $('.backdrop').removeClass('open');
            $("body").css("overflow", "");
            setTimeout(function() {
                $('.mobilemenu').removeClass('menu-open');
                $('.mobilemenu').addClass('menu-close');
            }, 500);
        }
    });
    $(".searchicon").click(function() {        
        if ($(this).hasClass('sclose')) {
            $(this).parent().find('.headersearch-form').addClass('opensearch');
            var $thiselement = $(this);            
            setTimeout(function() {
                $thiselement.removeClass('sclose');
                $thiselement.addClass('open');
            }, 500);
        }
        if ($(this).hasClass('open')) {
            $(this).parent().find('.headersearch-form').removeClass('opensearch'); 
            var $thiselement = $(this);            
            setTimeout(function() {
                $thiselement.removeClass('open');
                $thiselement.addClass('sclose');
            }, 500);
        }
    });
    $(".close-search-toggle").click(function() {        
        $(this).parents(".header-search").find('.headersearch-form').removeClass('opensearch');
        $(this).parents(".header-search").find('.headersearch-form .search-form .search-field').val("");
        var $thiselement = $(this).parents(".header-search");
        setTimeout(function() {
            $thiselement.find('.searchicon').removeClass('open');
            $thiselement.find('.searchicon').addClass('sclose');            
        }, 500);
    });
    
    $('.blog-carousel').owlCarousel({
        loop: false,
        margin: 25,
        nav: true,
        navText: ["<i class='icon-left-arrow1'></i>", "<i class='icon-right-arrow1'></i>"],
        dots: false,        
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1
            },
            600: {
                items: 2,
                slideBy: 2
            },
            1000: {
                items: 3,
                slideBy: 3
            },
            2000: {
                items: 4,
                slideBy: 4
            }
        }
    });
    $('.clsUseCases').owlCarousel({
        loop: false,
        margin:0,
        nav: true,
        navText: false,
        dots: true,        
        responsiveClass: true,
        touchDrag:true,
        mouseDrag:true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            600: {
                items: 2,
                slideBy: 2
            },
            1000: {
                items: 3,
                slideBy: 3
            },
            2000: {
                items: 4,
                slideBy: 4
            }
        }
    });
    $('.clsRecentEvents').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        navText: false,
        dots: true,
        responsiveClass: true,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            600: {
                items: 1,
                slideBy: 1
            },
            1000: {
                items: 2,
                slideBy: 2
            },
            2000: {
                items: 2,
                slideBy: 2
            }
        }
    });
    $('.gartner-owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        navText: false,
        dots: true,
        responsiveClass: true,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },            
            1000: {
                items: 2,
                slideBy: 1,
            }
        }
    });
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay: true,
        autoplayHoverPause:true,
        nav: false,
        dots: true,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        smartSpeed: 500
    });

    $('.recentproject').owlCarousel({
        loop:false,
        margin:0,
        items:1,
        mouseDrag: false,
        nav:true,
        dots:false,
        navText:["<i class='icon-left-arrow1'></i>","<i class='icon-right-arrow1'></i>"],
        //animateOut: 'fadeOutLeft',
        animateIn: 'fadeInDown',
        smartSpeed:500
    });
    // $('.parallax-link li a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //       $(".parallax-link li a").removeClass("active");
    //       if (target.length) {
    //         $(this).addClass("active");
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 700);
    //         return false;
    //       }
    //     }
    // });
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $('.newheader').addClass('fixed-header');
            $('.headerwhitepaper').addClass('fixed-headerwhitepaper');
        } else {
            $('.newheader').removeClass('fixed-header');
            $('.headerwhitepaper').removeClass('fixed-headerwhitepaper');
        }
    });
    // on focus
    $(".getdemo-contactform .wpcf7-form input").focus(function() {
            $(this).parent().siblings('label').addClass('focus');
            var country = $(".intl-tel-input .selected-flag").attr('title');
            if(country === ''){
                $('.intl-tel-input').parents(".form-group").find('label').removeClass('focus');
            }else{
                $('.intl-tel-input').parents(".form-group").find('label').addClass('focus');
            }
        })
        // blur input fields on unfocus + if has no value
        .blur(function() {
            var text_val = $(this).val();
            if (text_val === "") {
                $(this).parent().siblings('label').removeClass('focus');
            }
            var country = $(".intl-tel-input .selected-flag").attr('title');
            if(country === ''){
                $('.intl-tel-input').parents(".form-group").find('label').removeClass('focus');
            }else{
                $('.intl-tel-input').parents(".form-group").find('label').addClass('focus');
            }
        });
    $(".getdemo-contactform .wpcf7-form-control-wrap input").focus(function() {
            $(this).parent().parent().siblings('label').addClass('focus');
            var country = $(".intl-tel-input .selected-flag").attr('title');
            if(country === ''){
                $('.intl-tel-input').parents(".form-group").find('label').removeClass('focus');
            }else{
                $('.intl-tel-input').parents(".form-group").find('label').addClass('focus');
            }
        })
        // blur input fields on unfocus + if has no value
        .blur(function() {
            var text_val = $(this).val();
            if (text_val === "") {
                $(this).parent().parent().siblings('label').removeClass('focus');
            }
            var country = $(".intl-tel-input .selected-flag").attr('title');
            if(country === ''){
                $('.intl-tel-input').parents(".form-group").find('label').removeClass('focus');
            }else{
                $('.intl-tel-input').parents(".form-group").find('label').addClass('focus');
            }
        });
    $(".getdemo-contactform .wpcf7-form select").click(function() {
            $(this).parent().siblings('label').addClass('focus');
        })
        // blur input fields on unfocus + if has no value
        .blur(function() {
            var text_val = $(this).val();
            if (text_val === "") {
                $(this).parent().siblings('label').removeClass('focus');
            }
        });

        var country = $(".intl-tel-input .selected-flag").attr('title');
        if(country === ''){
            $('.intl-tel-input').parents(".form-group").find('label').removeClass('focus');
        }else{
            $('.intl-tel-input').parents(".form-group").find('label').addClass('focus');
        }


    // features script start
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 400) {
            $('.filter-list').addClass('fixed-filter');
            $('.portfoli-wrapper').addClass('active');
        } else {
            $('.filter-list').removeClass('fixed-filter');
            $('.portfoli-wrapper').removeClass('active');
        }
    });
    


    $('.reset').click(function () { 
        $('.gartnerInner form')[0].reset();        
        $('form label').removeClass('focus');        
    });

    $(".requestcallback").click(function(){
        $(".wpcf7-response-output").hide();
        // if((".model .thankyou-messagecontent").hasClass(".show")){
        //     $(".model .thankyou-messagecontent").removeClass("show");
        //     $(".model .thankyou-messagecontent").addClass("hide");
        // }        
    });

    
    $("#close-sidebar").click(function() {
        $(".site").removeClass("toggled");
        $("html,body").css({"overflow":""});
    });
    $("#show-sidebar").click(function() {
        $(".site").addClass("toggled");
        $("html,body").css({"overflow":"hidden"});
    });

    $(".sidebarmenu > ul > li.menu-item-has-children > a").click(function() {
        $(".sub-menu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
          $(".sidebarmenu > ul > li.menu-item-has-children").removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          $(".sidebarmenu > ul > li.menu-item-has-children").removeClass("active");
          $(this).parent().children(".sub-menu").slideDown(200);
          $(this).parent().addClass("active");
        }
    });
    $(".sidebarmenu > ul > li ul > li.menu-item-has-children > a").click(function() {
        $(".sidebarmenu > ul > li > ul > li .sub-menu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
          $(".sidebarmenu > ul > li ul > li.menu-item-has-children").removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          $(".sidebarmenu > ul > li ul > li.menu-item-has-children").removeClass("active");
          $(this).parent().children(".sub-menu").slideDown(200);
          $(this).parent().addClass("active");
        }
    });  
    
    $(".intl-tel-input input").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
           return false;
       }
      });

    
    $("#empowervideo-modal button.close").click(function(){
        //$("#fsmempower").get(0).stopVideo();
        $('#fsmempower').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });    
    });

    $("#webminarmodel button.close").click(function(){
        //$("#fsmempower").get(0).stopVideo();
        $('#fsmempower1').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });    
    });

    $(".clsVideoClose button.close").click(function(){
        //$("#fsmempower").get(0).stopVideo();
        $('#videoiframe').each(function(index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });    
    });
    var templateUrl = object_name.templateUrl;
    $("#empowervideo").click(function(){  
        $.ajax({
            method: "POST",
            url: templateUrl + "/ajax/empower-video.php",
            success: function( html ) {       
                $("#empowervideo-modal .modal-body").html(html);
            }
        });   
    });

    $("#webminar-video").click(function(){          
        $.ajax({
            method: "POST",
            url: templateUrl + "/ajax/webminar-video.php",
            success: function( html ) {       
                $("#webminarmodel .modal-body").html(html);
            }
        });   
    });
    
    $("#insightvideo").click(function(){ 
        $.ajax({
            method: "POST",
            url: templateUrl + "/ajax/insight-video.php",
            success: function( html ) {       
                $("#insightvideo-modal .modal-body").html(html);
            }
        });   
    });
    //$("#insightvideo-modal button.close").click(function(){
    $( document ).on( "click", "#insightvideo-modal button.close", function() {
       $("#insight_Video_Ele").get(0).pause();            
    }); 

    $(".menu-item-has-children").click (function(e){
        $('.menu-item-has-children').removeClass('clsSubMenu');                
        $(this).toggleClass("clsSubMenu");
        if($( ".megamenu" ).hasClass( "clsShow" )){
            $('.megamenu').removeClass('clsShow')
        }
        e.stopPropagation();
      });
      
      $(document).click(function (e) {
          if (!$(e.target).closest('.clsSubMenu a').length) {
              $('.menu-item-has-children').removeClass('clsSubMenu');              
          } 
      }); 

      $(".productmenu-link").click (function(){
        $(".megamenu").toggleClass("clsShow");
      });
  
      $(document).click(function (event) {
          if (!$(event.target).closest('.productmenu-link, .megamenu').length) {
              $('.megamenu').removeClass('clsShow')
          }
      });
      
      $(".clsOurProductSelection").attr({
        title:"Select Products"
      });
      
    // if ( window.innerWidth < 1199 ) {
    //     document.querySelector(".clsRemoveclass").classList.add('clsMobileArrow');
    // }

    // $(".clsMobileArrow").click (function(){
    //     $(".clsMobileNewMenu").toggleClass("clsShow");
    //     $(".clsMobileArrow").toggleClass("clsShow");
    //   });
    //   $(document).click(function (event) {
    //       if (!$(event.target).closest('.clsMobileArrow, .clsMobileNewMenu').length) {
    //           $('.clsMobileNewMenu').removeClass('clsShow')
    //       }
    //   });
      

    // VideoPause

    $(".clsVideoClose button.close").click(function () {
        $(this).parents(".modal-content").find("video").get(0).pause();       
    });
      
});
// $(window).load(function(){
//     $(".clsOurProductSelection .dropdown-menu.inner li:first-child").removeClass('selected')

// })
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)          
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


document.addEventListener( 'wpcf7submit', function( event ) {
    $(".wpcf7 input").change(function() {
        var inputvalue = $(this).val();
        if(inputvalue){
            $(this).parents(".wpcf7-form-control-wrap").children('.wpcf7-not-valid-tip').hide();
            $(".wpcf7-response-output").hide();
        }        
    });
}, false );

function getHashFilter() {
    // get filter=filterName
    var matches = location.hash.match( /filter=([^&]+)/i );
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent( hashFilter );
  }
  
  // init Isotope
  var $grid = $('.portfoli-wrapper');
  
  // bind filter button click
  var $filterButtonGroup = $('.filter-button-group');
  $filterButtonGroup.on( 'click', 'a', function() {
    var filterAttr = $( this ).attr('data-filter');
    // set filter in hash
    location.hash = 'filter=' + encodeURIComponent( filterAttr );
  });
  
  var isIsotopeInit = false;
  
  function onHashchange() {
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;
    // filter isotope
    $grid.isotope({
      itemSelector: '.resourceitem',
      //layoutMode: 'fitRows',   
      percentPosition: true, 
      filter: hashFilter
    });
    // set selected class on button
    if ( hashFilter ) {
      $filterButtonGroup.find('.is-checked').removeClass('is-checked');
      $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
    }
  }
  
  $(window).on( 'hashchange', onHashchange );
  
  // trigger event handler to init Isotope
  onHashchange();



