

    <nav class="pnav">

      <ul style="padding-right: 0.2rem;">
          <a href="index.php#portfolio"><img id="logo_small" style="opacity: 1" src="img/logo_small.png"/></a>

        <?php

          $id = substr($_SERVER['REQUEST_URI'], -8, 4);
<<<<<<< HEAD
          $addr = array("Grap" => "https://dribbble.com/colinchen",
                        "Opis" => "opis/index.html");

          $li = array("Kasa" => ["Kasa", "0.7rem"],
                      "Grap" => ["Graphic/UI"],
                      "Mend" => ["Mend", "6.7rem"],
                      "Ryce" => ["Ryce", "9.7rem"],
                      "Post" => ["Post-it Plus", "12.7rem"],
                      "Pixu" => ["PixUp", "15.7rem"],
                      "Opis" => ["Opis"]);
=======
          $addr = array("grap" => "https://dribbble.com/colinchen",
                        "opis" => "opis/index.html");

          $li = array("kasa" => "Kasa",
                      "grap" => "Graphic/UI",
                      "mend" => "Mend",
                      "ryce" => "Ryce",
                      "post" => "Post-it Plus",
                      "pixu" => "PixUp",
                      "opis" => "Opis");
>>>>>>> origin/master

          foreach ($li as $key => $item){

            echo '<li class="navItem">';
            echo '<a href="';
            if (isset($addr[$key])){
              echo $addr[$key].'" target="_blank"';
            } else {
              echo $key.'.php"';
            };
            echo '>'.$item[0].'</a></li>';
          }

          echo '</ul>';
          echo '<div class="divider" style="top:'.$li[$id][1].'"></div>'
          ?>



    </nav>

<?php
