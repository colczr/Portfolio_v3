<?php
ini_set( 'error_reporting', E_ALL );
ini_set( 'display_errors', true );

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Colin Chen</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<meta property="og:image" content="img/logo.png">
		<meta property="og:site_name" content="Colin Chen Portfolio"/>
		<meta property="og:description" content="Welcome to my portfolio. I'm a Master's student in HCI at the University of Michigan"/>
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,600,700,800' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>

		<link href='css/font-awesome.min.css' rel='stylesheet' type='text/css'>
		<script src="js/lib/jquery.min.js"></script>
		<!-- Css -->
		<link rel="stylesheet" href="css/grid/normalize.css" />
		<link rel="stylesheet" href="css/grid/skeleton.css" />
		<link rel="stylesheet" href="css/style.css" />
		<link rel=icon href="img/favicon.png" sizes="16x16" type="image/png">

	</head>
	<body>
		<div class="load-screen">
		    <div class="tm-loader"><div class="spinner"></div></div>
		</div>

		<div id="container">

		<?php
			include "nav.php";


	  ?>

			<div class="section-container">
			</div>
		</div>




		<script type="text/javascript" src="js/lib/highlight.pack.js"></script>
		<script type="text/javascript" src="js/lib/modernizr.custom.min.js"></script>
		<script type="text/javascript" src="js/lib/velocity.min.js"></script>
		<script type="text/javascript" src="js/lib/greensock/TweenMax.min.js"></script>

		<script type="text/javascript" src="scrollmagic/uncompressed/ScrollMagic.js"></script>
		<script type="text/javascript" src="scrollmagic/uncompressed/plugins/animation.gsap.js"></script>
		<script type="text/javascript" src="scrollmagic/uncompressed/plugins/animation.velocity.js"></script>
		<script type="text/javascript" src="scrollmagic/uncompressed/plugins/debug.addIndicators.js"></script>
		<script type="text/javascript" src="js/libs/jquery.smooth-scroll.js"></script>

		<script type="text/javascript" src="js/three.min.js"></script>
		<script type="text/javascript" src="js/jquery.mixitup.min.js"></script>
		<script type="text/javascript" src="js/libs/stats.min.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	</body>
</html>

<?php
