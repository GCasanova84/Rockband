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
//NAVBAR LAPTOP
$(window).scroll(function() {
  if ($(window).width() >= 992) {
    if($(window).scrollTop() >= 10) {
      $( ".nav-container" ).css( "background-color", "#121619" );
      if($(window).scrollTop() >= $( ".gallery__body" ).offset().top) {
        $( ".nav-container" ).css( {"background-color":"transparent","padding":"0 1rem","pointer-events":"none"} );
        $( ".menu-item" ).css( "opacity", "0" );
        $( ".nav-bar__brand" ).on( "mouseenter", function() {
          $( ".nav-container" ).css( {"background-color":"#121619","padding":"0 5rem","pointer-events":"auto"} );
          $( ".menu-item" ).css( "opacity", "1" );
        });
        $( ".nav-container" ).on( "mouseleave", function() {
          $( ".nav-container" ).css( {"background-color":"transparent","padding":"0 1rem","pointer-events":"none"} );
          $( ".menu-item" ).css( "opacity", "0" );
        });
      } else {
        $( ".nav-container" ).css( {"background-color":"#121619","padding":"0 5rem","pointer-events":"auto"} );
        $( ".menu-item" ).css( "opacity", "1" );
        $( ".nav-bar__brand" ).off();
        $( ".nav-container" ).off();
      }
    } else {
      $( ".nav-container" ).css( "background-color", "transparent" );
    }
  }
});

//GALLERY
$(document).ready(function() {
  var t=false;
  $( ".start, .stop" ).on( "click", function() {
    if (t) {
      t=false;
      $(this).css( {"opacity":"0","pointer-events":"none"} );
      $( ".start" ).css( {"opacity":"1","text-shadow":"-0.75px 0.5px 0.1px rgba(170,170,170,0.3)"} );
      $( "#pic1, #pic2, #pic3, #pic4, #pic5, #pic6" ).off();
    } else {
      t=true;
      $(this).css( {"top":"6.25rem","right":"-6rem","opacity":"0"} );
      $( ".stop" ).css( {"top":"6.25rem","right":"-6rem","opacity":"1","pointer-events":"auto","text-shadow":"-0.75px 0.5px 0.1px rgba(170,170,170,0.3)"} );
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 2000, function() {
          window.location.hash = hash;
        });
      }
    }
    if ($(window).width() >= 992 && t) {
      var currentClass=null;
      $( "#pic1, #pic2, #pic3, #pic4, #pic5, #pic6" ).on( "mouseenter", function() {
        if (currentClass==null) {
            currentClass=$(this).attr('id');
            $( "div.hidden-gallery" ).addClass( currentClass ).css( "opacity", "1" );
        } else {
          var newClass=$(this).attr('id');
          $( "div.hidden-gallery" ).removeClass( currentClass ).addClass( newClass ).css( "opacity", "1" );
          currentClass=newClass;
        }
      });
      $( "#pic1, #pic2, #pic3, #pic4, #pic5, #pic6" ).on( "mouseleave", function() {
        $( ".hidden-gallery" ).css( {"opacity":"0","transition-delay":"0s"} );
      });
    }
  });
});
