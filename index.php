<?php

session_start();
if (!isset($_SESSION['id'])) {
		header("Location: login.php");
		exit();
	}

include("head.php");

?>

	<body>
		<div class="load-screen">
		    <div class="tm-loader"><div class="spinner"></div></div>
		</div>

		<div class="home-container">

			<nav>
				<div class="divider">
				</div>
				<ul>
					<li class="navItem"><a href="#home">Home</a></li>
					<li class="navItem"><a href="#portfolio">Portfolio</a></li>
					<li class="navItem"><a href="#about">About</a></li>
					<li class="navItem"><a href="#contact">Contact</a></li>
				</ul>
			</nav>

			<div class="section-container">
				<div class="section" id="home">
					<img class="hero-1" src="img/logo.png"/>
				</div>


					<div id="wave">
					</div>

				<div id="portfolio" class="section">
					<div id="portfolio-nav">
						<a class="filter al" data-filter=".mix">All</a>
						<a class="filter" data-filter=".ux">UX</a>
						<a class="filter" data-filter=".ui">UI/Graphic</a>
						<a class="filter" data-filter=".fr">Front-End</a>
					</div>
					<div class="portfolio-container reg-container grid">
							<div class="gridItem mix ux">
								<a class="gallery" href="Kasa.php">
									<img src="img/portfolio/kasa.png"/></a>
									<h3>TP-Link Kasa</h3>
									<h4>UX Design</h4>
							</div>

							<div class="gridItem mix ui">
								<a class="gallery" href="http://www.dribbble.com/colinchen" target="_blank">
									<img src="img/portfolio/dribbble.png"/></a>
									<h3>Graphic/UI Work</h3>
									<h4>Collection of Work</h4>
							</div>

							<div class="gridItem mix ux">
								<a class="gallery" href="Mend.php">
									<img src="img/portfolio/mend.png"/></a>
									<h3>Mend</h3>
									<h4>UX Design</h4>
							</div>

							<div class="gridItem mix ux">
								<a class="gallery" href="Ryce.php">
									<img src="img/portfolio/ryce.png"/></a>
									<h3>Ryce</h3>
									<h4>UX Design</h4>
							</div>

							<div class="gridItem mix ux">
								<a class="gallery" href="Post.php">
									<img src="img/portfolio/postitplus.png"/></a>
									<h3>Post-it Plus</h3>
									<h4>UX Research</h4>
							</div>

							<div class="gridItem mix ux">
								<a class="gallery" href="Pixu.php">
									<img src="img/portfolio/pixup.png"/></a>
									<h3>PixUp</h3>
									<h4>UX Design</h4>
							</div>

							<div class="gridItem mix ui fr">
								<a class="gallery" href="http://www.colinchen.net/creative/" target="_blank">
									<img src="img/portfolio/creative.png"/></a>
									<h3>Former Portfolio</h3>
									<h4>Frontend</h4>
							</div>

							<div class="gridItem mix fr">
								<a class="gallery" href="http://www.colinchen.net/opis" target="_blank">
									<img src="img/portfolio/opis.png"/></a>
									<h3>Opis</h3>
									<h4>Front/Backend</h4>
							</div>

					</div>

				<div id="floatContent">

				</div>
				<div id="inTrigger">

				</div>
				<div id="about">
					<div class="about-container">
						<div class="about-content reg-container">
							<div id="fadeBox">
									<img id="portrait" src="img/portrait.png"/>
									<p class="aboutText1">I try to be a "detective": discovering usability problems, knowing the tools you have and using the right one to solve the right problem. That's what I believe a UX designer should be. Designers are designers because we create and design solutions to problems, rather than opening a manual and repeat the exact same thing over and over again. <br><br>

									I am a first-year Master's student at the University of Michigan studying Human-Computer Interaction. I value simplicity, feasibility and creativity in my work. Aside from being a UX designer, I am a classical musician. I play the piano and the violin.
									<span><a href="Chen_Resume.pdf" target="_blank">View Resume</a></span>
									</p>

							</div>

						</div>
						<div id="fadeTrigger">
						</div>
						<div id="contact">
							<p class="contact-container"><img src="img/logo_gray.png"/><br>
								Welcome to my portfolio, 100% hand-crafted. <br><br>
								cchent [at] umich.edu<br>
								②06 · 307 · 1269<br><br>
								<a href="http://www.dribbble.com/colinchen" target="_blank"><i class="fa fa-dribbble" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
								<a href="https://www.linkedin.com/in/colintychen" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>&nbsp;&nbsp;&nbsp;
								<a href="https://www.github.com/colczr" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
							</p>

						</div>
						<div class="gray-bg">
						</div>
					</div>

				</div>




				</div>




			</div>
		</div>




		<?php
			include('foot.php');
		 ?>
		<script type="text/javascript" src="js/mainScMa.js"></script>
	</body>
</html>
