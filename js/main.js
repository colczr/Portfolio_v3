  //ScrollMagic
  var controller = new ScrollMagic.Controller();

  var smscene1 = new ScrollMagic.Scene({duration: 1500})
    .setTween("#wave", {y:800})
    .addTo(controller);



  var tweenHeroFade = new TweenMax.fromTo(".hero-1", 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone});

  var tweenHeroSlow = new TweenMax.fromTo(".hero-1", 1, {y: 0}, {y:250, ease: Linear.easeNone});


  // build scene
  var smscene3 = new ScrollMagic.Scene({duration: 400})
    .setTween(tweenHeroFade)
    .addTo(controller);

  var smscene3a = new ScrollMagic.Scene({duration: 400})
    .setTween(tweenHeroSlow)
    .addTo(controller);



  var tweenPort = new TimelineMax ()
  	.add([
  		TweenMax.fromTo(".portfolio-container", 1, {y:0}, {y:250, ease: Linear.easeNone})
  	]);

  // build scene
  var smscene3 = new ScrollMagic.Scene({triggerElement: "#about", triggerHook: "onEnter", duration: 600})
    .setTween(tweenPort)
    .addTo(controller);

  var changeColor = new TimelineMax ()
    .add([
      TweenMax.fromTo(".portfolio-container", 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone}),
      TweenMax.to('.navItem', 1.5, {color: '#ccc'})
    ]);

  var smsceneChangeColor = new ScrollMagic.Scene({triggerElement: "#about", duration: 300})
    .setTween(changeColor)
    .addTo(controller);

  var portraitFade = new TimelineMax ()
    .add([
      TweenMax.to("#fadeBox", 1, {autoAlpha: 1, ease: Linear.easeNone}),
    ]);

  var smscenePortraitFade = new ScrollMagic.Scene({triggerElement: "#about", triggerHook: 'onLeave', offset: -200, duration: 200})
    .setTween(portraitFade)
    .addTo(controller);

  var portraitFadeOut = new TweenMax.to("#fadeBox", 1, {autoAlpha: 0});

  var smsenePortraitFadeOut = new ScrollMagic.Scene({triggerElement: "#fadeTrigger", duration: 200})
    .setTween(portraitFadeOut)
    .addTo(controller);

  var contactIn = new TimelineMax ()
    .add([
      TweenMax.fromTo(".contact-container", 1, {autoAlpha: 0}, {autoAlpha: 1}),
      TweenMax.to("#logo_small", 1, {autoAlpha: 0, duration: 100})

    ]);

  var smseneContactIn = new ScrollMagic.Scene({triggerElement: "#contact", duration: 200, reverse:true})
    .setTween(contactIn)
    .addTo(controller);




  var smsceneLogo = new ScrollMagic.Scene({triggerElement: ".portfolio-container"})
    // trigger a velocity opaticy animation
    .setVelocity("#logo_small", {opacity: 1}, {duration: 200, easing:Elastic})
    .addTo(controller);

  var smsceneDivider2 = new ScrollMagic.Scene({triggerElement: "#portfolio", duration:50})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "31rem"})
    .addTo(controller);

  var smsceneDivider3 = new ScrollMagic.Scene({triggerElement: "#about", duration: 50})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "61rem"})
    .addTo(controller);

  var smsceneDivider4 = new ScrollMagic.Scene({triggerElement: "#contact", duration: 50})
    // trigger a velocity opaticy animation
    .setTween(".divider", {y: "91rem"})
    .addTo(controller);



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
    } else if (portW < 720 && portW > 400) {
      $(".gridItem").css({'width': portW / 2.4, 'margin': portW / 80, 'display':'inline-block'});
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
    } else {
      $('canvas').fadeIn("slow");
    }
  });

  $(".gallery img").on('mouseenter', function(){
    $(this).fadeTo('fast',0.3);

  });

  $(".gallery img").on('mouseleave', function(){
    $(this).fadeTo('fast',1);

  });


  $(".filter").on('click', function(){
    $(".filter").css({'border-bottom':'none'});
    $(this).css({'border-bottom':'1px solid #c33'});
  });



  $(function(){
    $('#Container').mixItUp();
  });
