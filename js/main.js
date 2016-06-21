
  //MISC FUNCTIONS

  function resizePortrait(){
    if (parseFloat($(window).height()) / $(window).width() < 0.75){
      $('#portrait').css({'height':'80vh', 'width':'auto', 'left':'7vw'});
    } else {
      $('#portrait').css({'height':'auto', 'width':'40vw', 'left':'0'});
    }
  };

  function verticalAlignText(element){
    height = parseFloat($(window).height() - $(element).height())/2.0;
    $(element).css('top', height);
  }

  function sizePortWidth(){
    portW = $(".portfolio-container").width();
    if (portW >= 720) {
      $(".gridItem").css({'width': portW / 3.4, 'margin': portW / 80, 'display':'inline-block'});
    } else if (portW < 720) {
      $(".gridItem").css({'width': portW / 2.2, 'margin': portW / 80, 'display':'inline-block'});
    } else {
      $(".gridItem").css({'width': '50vw', 'display':'block', 'margin': 'auto'});
    }
  }

  //WINDOW AND DOCUMENT FUNCTIONS

  $( window ).on( 'load', function(){
    $( '.load-screen' ).fadeOut( 'slow', function(){
      $( this ).remove();
    });
  });

  $(document).ready(function(){
    $('body').smoothScroll({
      delegateSelector: 'ul a'
    });
    sizePortWidth();
    resizePortrait();
    verticalAlignText('.aboutText1');
  });

  $(window).on('resize', function(){
    sizePortWidth();
    resizePortrait();
    verticalAlignText('.aboutText1');
  });


  $(window).scroll(function(){
    if($(document).scrollTop() > 300){
      $('#wave').css({'display': 'none'});
    } else {
      $('#wave').css({'display': 'inherit'});
    };

    if($(document).scrollTop() > 200){
      $('canvas').fadeOut("slow");
    } else{
      $('canvas').fadeIn("slow");
    }
  });

  $(".gallery img").on('mouseenter', function(){
    $(this).stop().fadeTo('fast',0.3);

  });

  $(".gallery img").on('mouseleave', function(){
    $(this).stop().fadeTo('fast',1);

  });


  $(".filter").on('click', function(){
    $(".filter").css({'border-bottom':'none'});
    $(this).css({'border-bottom':'1px solid #c33'});
  });



  $(function(){
    $('#Container').mixItUp();
  });
