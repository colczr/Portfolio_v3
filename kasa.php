<?php
ini_set( 'error_reporting', E_ALL );
ini_set( 'display_errors', true );
include("authentication.php");
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

		<div class="project-container">

		<?php
			include "nav.php";


		?>
			<div class="content">
				<div class="caption-bg-gray">
				</div>
					<div class="caption-bg" style="background-image: url(img/bg4.png);">

					</div>

				<div class="caption">
					<h2>Kasa</h2>
					<p>Mobile App UX Design for the Smart Home<br><br>
						PixUp is a peer-to-peer platform that connects vehicle owners (drivers) with people who need delivery service (users). Drivers accept delivery requests from the users and in return get paid for their service.</p>
				</div>



				<div class="caption2" style="padding-top: 100vh;">
					<h2>Design what you would buy.</h2>
					<p>Mobile App UX Design<br><br>
						Client: PixUp (Ann Arbor Startup)<br>Timeline: 4 months<br>Team size: 5<br>My role: UX Designer / UX Researcher / Graphic Designer<br>Skills: <img src="img/divider.png" width="100%"/></p>
					<p>- "You said there are other apps that offer the same thing, <span>what distinguishes your app from theirs?</span>" <br>It was the first question that we asked our client. <br>
						- "We want to stand out by having best user experience and we would like your help. Well, also most of those companies haven't come to Ann Arbor yet and we want to start local first."
					</p>
				</div>


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
		<script type="text/javascript" src="js/pixup.js"></script>
	</body>
</html>

<?php
