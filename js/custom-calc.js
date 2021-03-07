 $(document).ready(function() {
       $(".slider-wrapper").owlCarousel({
    loop:true,
	autoplay: true,
	slideSpeed: 800,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 2500,
    items:1,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
     
     
   
     
    /*--------------------------------
    Testimonial Carousel
--------------------------------- */

     
     
     
     
     
     
     
     
//     $('.owl-carousel').owlCarousel({
//    loop:true,
//    margin:10,
//    nav:false,
//    responsive:{
//        0:{
//            items:1
//        },
//        600:{
//            items:3
//        },
//        1000:{
//            items:5
//        }
//    }
//});
     
     
     
     
     
     	$('.testmonial-wrapper').owlCarousel({
		loop:true,
		margin:0,
        items:1,
        dots: true,
		nav:false,
		autoplay:true,
		smartSpeed:500,
        mouseDrag:false,
            loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
		 responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
        
        
	  }); 
     
   
     
     
         $(".final_plan ul li").click(function(){
       $("html, body").delay(500).animate({
        scrollTop: $('.para').offset().top - 250
       }, 500);
   });
     
             
      $( "#nav-toggle" ).click(function(e){
        e.preventDefault();
        $(this).toggleClass("current_page_item");
        $(".navigation").slideToggle(); 
        });
     
     
        $(".navigation ul li.listeditem").click(function() {   
         $(this).toggleClass("listeditem1").siblings().removeClass("listeditem1");
        });
     
     
      if ( ($(window).width() < 767) && ($.trim($(".btm").html())=='') ){
          $(".navigation ul li").click(function() {
          $(this).find('ul').slideToggle().parents('li').siblings().find('ul').slideUp();
         });
        }
     else {
}
     
     $(".links").click(function(e) {
        $(".links").removeClass("active");
         $(this).addClass("active");    
        $('.para p').hide();
       $('#' + $(this).data('rel')).show();
     }); 
     
     
     
});  


    $(window).scroll(function(){
	 if ($(this).scrollTop() >100) {
	    $('.btntoTop').fadeIn();
	    } else {
	      $('.btntoTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	    $('.btntoTop').click(function(){
	    $('html, body').animate({scrollTop : 0},1000);
	    return false;
	   });


 