var Boid = function() {

  var vector = new THREE.Vector3(),
  _acceleration, _width = 500, _height = 500, _depth = 200, _goal, _neighborhoodRadius = 100,
  _maxSpeed = 4, _maxSteerForce = 0.1, _avoidWalls = false;

  this.position = new THREE.Vector3();
  this.velocity = new THREE.Vector3();
  _acceleration = new THREE.Vector3();

  this.setGoal = function ( target ) {

    _goal = target;

  };

  this.setAvoidWalls = function ( value ) {

    _avoidWalls = value;

  };

  this.setWorldSize = function ( width, height, depth ) {

    _width = width;
    _height = height;
    _depth = depth;

  };

  this.run = function ( boids ) {

    if ( _avoidWalls ) {

      vector.set( - _width, this.position.y, this.position.z );
      vector = this.avoid( vector );
      vector.multiplyScalar( 5 );
      _acceleration.add( vector );

      vector.set( _width, this.position.y, this.position.z );
      vector = this.avoid( vector );
      vector.multiplyScalar( 5 );
      _acceleration.add( vector );

      vector.set( this.position.x, - _height, this.position.z );
      vector = this.avoid( vector );
      vector.multiplyScalar( 5 );
      _acceleration.add( vector );

      vector.set( this.position.x, _height, this.position.z );
      vector = this.avoid( vector );
      vector.multiplyScalar( 5 );
      _acceleration.add( vector );

      vector.set( this.position.x, this.position.y, - _depth );
      vector = this.avoid( vector );
      vector.multiplyScalar( 5 );
      _acceleration.add( vector );

      vector.set( this.position.x, this.position.y, _depth );
      vector = this.avoid( vector );
      vector.multiplyScalar( 5 );
      _acceleration.add( vector );

    }/* else {

      this.checkBounds();

    }
    */

    if ( Math.random() > 0.5 ) {

      this.flock( boids );

    }

    this.move();

  };

  this.flock = function ( boids ) {

    if ( _goal ) {

      _acceleration.add( this.reach( _goal, 0.005 ) );

    }

    _acceleration.add( this.alignment( boids ) );
    _acceleration.add( this.cohesion( boids ) );
    _acceleration.add( this.separation( boids ) );

  };

  this.move = function () {

    this.velocity.add( _acceleration );

    var l = this.velocity.length();

    if ( l > _maxSpeed ) {

      this.velocity.divideScalar( l / _maxSpeed );

    }

    this.position.add( this.velocity );
    _acceleration.set( 0, 0, 0 );

  };

  this.checkBounds = function () {

    if ( this.position.x >   _width ) this.position.x = - _width;
    if ( this.position.x < - _width ) this.position.x =   _width;
    if ( this.position.y >   _height ) this.position.y = - _height;
    if ( this.position.y < - _height ) this.position.y =  _height;
    if ( this.position.z >  _depth ) this.position.z = - _depth;
    if ( this.position.z < - _depth ) this.position.z =  _depth;

  };

  //

  this.avoid = function ( target ) {

    var steer = new THREE.Vector3();

    steer.copy( this.position );
    steer.sub( target );

    steer.multiplyScalar( 1 / this.position.distanceToSquared( target ) );

    return steer;

  };

  this.repulse = function ( target ) {

    var distance = this.position.distanceTo( target );

    if ( distance < 150 ) {

      var steer = new THREE.Vector3();

      steer.subVectors( this.position, target );
      steer.multiplyScalar( 0.5 / distance );

      _acceleration.add( steer );

    }

  };

  this.reach = function ( target, amount ) {

    var steer = new THREE.Vector3();

    steer.subVectors( target, this.position );
    steer.multiplyScalar( amount );

    return steer;

  };

  this.alignment = function ( boids ) {

    var boid, velSum = new THREE.Vector3(),
    count = 0;

    for ( var i = 0, il = boids.length; i < il; i++ ) {

      if ( Math.random() > 0.6 ) continue;

      boid = boids[ i ];

      distance = boid.position.distanceTo( this.position );

      if ( distance > 0 && distance <= _neighborhoodRadius ) {

        velSum.add( boid.velocity );
        count++;

      }

    }

    if ( count > 0 ) {

      velSum.divideScalar( count );

      var l = velSum.length();

      if ( l > _maxSteerForce ) {

        velSum.divideScalar( l / _maxSteerForce );

      }

    }

    return velSum;

  };

  this.cohesion = function ( boids ) {

    var boid, distance,
    posSum = new THREE.Vector3(),
    steer = new THREE.Vector3(),
    count = 0;

    for ( var i = 0, il = boids.length; i < il; i ++ ) {

      if ( Math.random() > 0.6 ) continue;

      boid = boids[ i ];
      distance = boid.position.distanceTo( this.position );

      if ( distance > 0 && distance <= _neighborhoodRadius ) {

        posSum.add( boid.position );
        count++;

      }

    }

    if ( count > 0 ) {

      posSum.divideScalar( count );

    }

    steer.subVectors( posSum, this.position );

    var l = steer.length();

    if ( l > _maxSteerForce ) {

      steer.divideScalar( l / _maxSteerForce );

    }

    return steer;

  };

  this.separation = function ( boids ) {

    var boid, distance,
    posSum = new THREE.Vector3(),
    repulse = new THREE.Vector3();

    for ( var i = 0, il = boids.length; i < il; i ++ ) {

      if ( Math.random() > 0.6 ) continue;

      boid = boids[ i ];
      distance = boid.position.distanceTo( this.position );

      if ( distance > 0 && distance <= _neighborhoodRadius ) {

        repulse.subVectors( this.position, boid.position );
        repulse.normalize();
        repulse.divideScalar( distance );
        posSum.add( repulse );

      }

    }

    return posSum;

  }

}


var SCREEN_WIDTH = window.innerWidth,
SCREEN_HEIGHT = window.innerHeight,
SCREEN_WIDTH_HALF = SCREEN_WIDTH  / 2,
SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

var camera, scene, renderer,
birds, bird;

var boid, boids;

var stats;

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
  camera.position.z = 450;

  scene = new THREE.Scene();

  birds = [];
  boids = [];
//change number of birds

  for ( var i = 0; i < 25; i ++ ) {

    boid = boids[ i ] = new Boid();
    boid.position.x = Math.random() * 400 - 200;
    boid.position.y = Math.random() * 400 - 200;
    boid.position.z = Math.random() * 400 - 200;
    boid.velocity.x = Math.random() * 2 - 1;
    boid.velocity.y = Math.random() * 2 - 1;
    boid.velocity.z = Math.random() * 2 - 1;
    boid.setAvoidWalls( true );
    boid.setWorldSize( 500, 500, 400 );

    bird = birds[ i ] = new THREE.Mesh( new Bird(), new THREE.MeshBasicMaterial( { color:Math.random() * 0xffffff, side: THREE.DoubleSide } ) );
    bird.phase = Math.floor( Math.random() * 62.83 );
    scene.add( bird );


  }

//set size of canvas

  renderer = new THREE.CanvasRenderer();
  renderer.setClearColor( 0xffffff );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT);

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.body.appendChild( renderer.domElement );

  stats = new Stats();




  //

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

  var vector = new THREE.Vector3( event.clientX - SCREEN_WIDTH_HALF, - event.clientY + SCREEN_HEIGHT_HALF, 0 );

  for ( var i = 0, il = boids.length; i < il; i++ ) {

    boid = boids[ i ];

    vector.z = boid.position.z;

    boid.repulse( vector );

  }

}

//

function animate() {

  requestAnimationFrame( animate );

  stats.begin();
  render();
  stats.end();

}

function render() {

  for ( var i = 0, il = birds.length; i < il; i++ ) {

    boid = boids[ i ];
    boid.run( boids );

    bird = birds[ i ];
    bird.position.copy( boids[ i ].position );
//chagne bird color

    color = bird.material.color;
    color.r = ( 700 - bird.position.z ) / 1000;
    color.g = ( 700 - bird.position.z ) / 1000;
    color.b = ( 700 - bird.position.z ) / 1000;
    
    // color.r = ( 1300 - bird.position.z ) / 1000;
    // color.g = ( 800 - bird.position.z ) / 1000;
    // color.b = ( 300 - bird.position.z ) / 1000;

    bird.rotation.y = Math.atan2( - boid.velocity.z, boid.velocity.x );
    bird.rotation.z = Math.asin( boid.velocity.y / boid.velocity.length() );

    bird.phase = ( bird.phase + ( Math.max( 0, bird.rotation.z ) + 0.1 )  ) % 62.83;
    bird.geometry.vertices[ 5 ].y = bird.geometry.vertices[ 4 ].y = Math.sin( bird.phase ) * 5;

  }

  renderer.render( scene, camera );

}
// 
// $(window).resize(function(){
//   document.getElementsByTagName("CANVAS")[0].style.cssText="width: 99vw; height: 99vh;";
// })
// 
// $(window).ready(function(){
//   document.getElementsByTagName("CANVAS")[0].style.cssText="width: 99vw; height: 99vh;";
// })


  function resizePortrait(){
    if (parseFloat($(window).height()) / $(window).width() < 0.75){
      $('#portrait').css({'height':'80vh', 'width':'auto', 'left':'7vw'});
      console.log("asdfsaffsa");
    } else {
      $('#portrait').css({'height':'auto', 'width':'40vw', 'left':'0'});
      console.log("bbb");
    }
  };
  
  function verticalAlignText(element){
    height = parseFloat($(window).height() - $(element).height())/2.0;
    $(element).css('top', height);
  }

  $(window).ready(function(){
    document.getElementsByTagName("CANVAS")[0].style.cssText="width: 99vw; height: 99vh;";
    resizePortrait();
    verticalAlignText('.aboutText1');
  })
  
  $(window).on('resize', function(){
    resizePortrait();
    verticalAlignText('.aboutText1');
    
  });


  $( window ).on( 'load', function(){
      $( '.load-screen' ).fadeOut( 'slow', function(){
          $( this ).remove();
      });
  });


//ScrollMagic
var controller = new ScrollMagic.Controller();

var smscene1 = new ScrollMagic.Scene({duration: 1500})
  .setTween("#wave", {y:800})
	.addTo(controller);
  


var tweenHeroFade = new TimelineMax ()
	.add([
		TweenMax.fromTo(".hero-1", 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone})
	]);

// build scene
var smscene3 = new ScrollMagic.Scene({duration: 400})
				.setTween(tweenHeroFade)
				.addTo(controller);

var tweenHeroFade = new TimelineMax ()
	.add([
		TweenMax.fromTo(".hero-1", 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone})
	]);

// build scene
var smscene3 = new ScrollMagic.Scene({triggerElement: '#fadeTrigger', duration: 400})
				.setTween(tweenHeroFade)
				.addTo(controller);


var tweenPort = new TimelineMax ()
	.add([
		TweenMax.fromTo(".portfolio-container", 1, {top:400}, {top:50, ease: Linear.easeNone})
	]);

// build scene
var smscene3 = new ScrollMagic.Scene({duration: 600})
				.setTween(tweenPort)
				.addTo(controller);



var portHeight = $(".portfolio-container").height();
var aboutHeight = $(".about-container").height();

$("#contact").css('top', portHeight + aboutHeight + $("#home").height() + 25);

//so that the section never overlapses with port section
$(window).on('resize', function(portHeight, aboutHeight, controller){
  portHeight = getPortHeight();
  aboutHeight = getAboutHeight();
  home = $('#home').height();
  abc = portHeight + aboutHeight + home;
  $("#contact").css('top', abc + 25);
  

});

function getPortHeight(){
  portH = $(".portfolio-container").height();
  return portH;
}

function getAboutHeight(){
  aboutH = $(".about-container").height();
  return aboutH;
}




  var waveUp = new TimelineMax ()
  	.add([
  		TweenMax.fromTo(".about-container", 1, {top:portHeight + 850}, {top:portHeight + 300, ease: Linear.easeNone})
  	]);

  // build scene
  var smsceneWaveUp = new ScrollMagic.Scene({triggerElement: "#about", duration: 500})
  				.setTween(waveUp)
  				.addTo(controller);

  var waveUp = new TimelineMax ()
  	.add([
  		TweenMax.fromTo(".portfolio-container", 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone}),
      TweenMax.to('.navItem', 1.5, {color: '#aaa'})
  	]);

  var smscene1 = new ScrollMagic.Scene({triggerElement: "#about", duration: 200})
    .setTween(waveUp)
  	.addTo(controller);
    
  var portraitFade = new TimelineMax ()
  	.add([
  		TweenMax.to("#fadeBox", 1, {autoAlpha: 1, ease: Linear.easeNone}),
  	]);
    
  var smscenePortraitFade = new ScrollMagic.Scene({triggerElement: "#about", offset: "150vh", duration: 200})
    .setTween(portraitFade)
    .addTo(controller);
    
  var portraitFadeOut = new TweenMax.to("#fadeBox", 1, {autoAlpha: 0});
    
  var smsenePortraitFadeOut = new ScrollMagic.Scene({triggerElement: "#fadeTrigger", duration: 200})
    .setTween(portraitFadeOut)
    .addTo(controller);
  
  var contactIn = new TimelineMax ()
  	.add([
      TweenMax.fromTo(".contact-container", 1, {autoAlpha: 0}, {autoAlpha: 1}),
      TweenMax.fromTo("#logo_small", 1, {autoAlpha: 1}, {autoAlpha: 0})
      
  	]);

  var smseneContactIn = new ScrollMagic.Scene({triggerElement: "#contact", duration: 200})
    .setTween(contactIn)
    .addTo(controller);


  $(window).scroll(function(){
    if($(document).scrollTop() > 200){
      $('canvas').fadeOut("slow");
    } else {
      $('canvas').fadeIn("slow");
    }
    
  });
  
  var smsceneDivider = new ScrollMagic.Scene({triggerElement: "#portfolio", duration:50})
  					// trigger a velocity opaticy animation
  					.setTween(".divider", {y: "31rem"})
  					.addTo(controller);
            
  var smsceneDivider2 = new ScrollMagic.Scene({triggerElement: "#about", duration: 50})
  					// trigger a velocity opaticy animation
  					.setTween(".divider", {y: "61rem"})
            .addTo(controller);
  
  var smsceneDivider2 = new ScrollMagic.Scene({triggerElement: "#contact", duration: 50})
  					// trigger a velocity opaticy animation
  					.setTween(".divider", {y: "91rem"})
            .addTo(controller);
  
  
  var smsceneDivider = new ScrollMagic.Scene({triggerElement: ".portfolio-container"})
  					// trigger a velocity opaticy animation
  					.setVelocity("#logo_small", {opacity: 1}, {duration: 200, easing:Elastic})
  					.addTo(controller);
    
          
          
          
  
  $(window).scroll(function(){
    if($(document).scrollTop() > 300){
      $('#wave').css({'display': 'none'});
    } else {
      $('#wave').css({'display': 'inherit'});
    }
  });
  
  $(document).ready(function(portheight){
    $('body').smoothScroll({
      delegateSelector: 'ul a'
    });
  });
