

    <nav class="pnav">
      <div class="divider">
      </div>
      <ul style="padding-right: 0.2rem;">
        <a href="index.html#portfolio"><img id="logo_small" src="img/logo_small.png"/></a>
        <li style="margin-bottom: 1.5rem;"><a href="index.html#portfolio">Portfolio</a></li>

        <?php

          $id = substr($_SERVER['REQUEST_URI'], -8, 4);
          $addr = array("Grap" => "https://dribbble.com/colinchen",
                        "Opis" => "opis/index.html");

          $li = array("Kasa" => "Kasa",
                      "Grap" => "Graphic/UI",
                      "Mend" => "Mend",
                      "Ryce" => "Ryce",
                      "Post" => "Post-it Plus",
                      "Pixu" => "PixUp",
                      "Opis" => "Opis");

          foreach ($li as $key => $item){
            if ($key == $id){
              echo '<li class="navItem" style="color: #c42128; font-family: Gzb">';
            } else {
              echo '<li class="navItem">';
            };
            echo '<a href="';
            if (isset($addr[$key])){
              echo $addr[$key].'" target="_blank"';
            } else {
              echo $key.'.php"';
            };
            echo '>'.$item.'</a></li>';
          }
          ?>

      </ul>
    </nav>

<?php
