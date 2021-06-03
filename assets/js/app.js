// sign in pop up form
$(document).ready(function(){
  $(".sign-in").click(function(){
    $(".sign-in-box").toggle();
  });
});

// hero carousel
$(document).ready(function(){
  $(".hero-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    autoplaySpeed:true,
    autoplayTimeout: 3000,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
    responsive:{
        0:{
            items:1
        },
    }
  });
});

// property section
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('.properties-nav').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.properties-nav').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// trending carousel
$(document).ready(function(){
  $(".trending-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
    }
  });
});

// testimonial carousel

$('.testimonial-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:20,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },

      990:{
          items:2,
      }
  }
})