<?php
ini_set( 'error_reporting', E_ALL );
ini_set( 'display_errors', true );
include("authentication.php");

include("head.php");
?>
?>

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




		<?php
			include('foot.php');
		 ?>
	</body>
</html>

<?php
