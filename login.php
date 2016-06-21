<?php
	session_start();
	unset($_SESSION['id']);
	if (isset($_POST['submit'])){

		if ($_POST['password'] == "wolfie"){
			$_SESSION['id'] = 1;
			header("Location: index.php");
		} else {
			header("Location: login.php");
		}
	}




 ?>
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

		<div id="container">

			<nav>
				<ul>
					<a href="#home"><img  style="opacity: 1" id="logo_small" src="img/logo_small.png"/></a>
				</ul>
			</nav>

			<div class="section-container">
				<div class="section" id="home">
					<p class="hero-1">&nbsp;&nbsp;Please enter password
						<form method="POST"><br><input class="hero-1" type="text" name="password">
						<br><input type="submit" class="hero-1" style="display:block; width: 10rem;" name="submit"></form>
					</p>
				</div>


					<div id="wave">
					</div>


	</body>
</html>
