$(document).ready(function() {
  if ($(window).width() < 768) {
    $('.nav-bar__menu').hide();
    $( '.toggler-button' ).prop( "checked", false );
  }
});

$(window).resize(function() {
  if ($(window).width() < 768) {
    $('.nav-bar__menu').hide();
    $( '.toggler-button' ).prop( "checked", false );
  } else {
    $('.nav-bar__menu').show();
  }
});

$( '.toggler-button' ).change(function() {
  if ($(window).width() < 768) {
    if( $(this).is(':checked') ) {
        $('.nav-bar__menu').slideDown('slow');
    } else {
        $('.nav-bar__menu').slideUp('slow');
    }
  }
});

$(window).scroll(function() {
  if ($(window).width() >= 992) {
    if($(window).scrollTop() >= 10) {
      $( ".nav-container" ).css( "background-color", "#121619" );
      if($(window).scrollTop() >= $( ".gallery__body" ).offset().top) {
        $( ".nav-container" ).css( {"background-color":"transparent","padding":"0 1rem"} );
        $( ".menu-item" ).css( "opacity", "0" );
        $( ".nav-bar__brand" ).on( "mouseenter", function() {
          $( ".nav-container" ).css( {"background-color":"#121619","padding":"0 5rem"} );
          $( ".menu-item" ).css( "opacity", "1" );
        });
        $( ".nav-container" ).on( "mouseleave", function() {
          $( ".nav-container" ).css( {"background-color":"transparent","padding":"0 1rem"} );
          $( ".menu-item" ).css( "opacity", "0" );
        });
      } else {
        $( ".nav-container" ).css( {"background-color":"#121619","padding":"0 5rem"} );
        $( ".menu-item" ).css( "opacity", "1" );
        $( ".nav-bar__brand" ).off();
        $( ".nav-container" ).off();
      }
    } else {
      $( ".nav-container" ).css( "background-color", "transparent" );
    }
  }
});
