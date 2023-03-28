$(document).ready(function(){
     $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          navText:['<i class="fa-solid fa-caret-left"></i>','<i class="fa-solid fa-caret-right"></i>'],
          dots:true,
          autoplay:true,
          animateOut:'fadeOut',
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:1
              }
          }
      })
     var owl = $('.owl-carousel');
     owl.owlCarousel();
     owl.on('changed.owl.carousel', function(event) {
          new WOW().init();
     })
     wow = new WOW(
          {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:       0,          // default
          mobile:       true,       // default
          live:         true        // default
        }
        )
        wow.init();
});
