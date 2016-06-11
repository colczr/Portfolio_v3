

    <nav class="pnav">
      <div class="divider">
      </div>
      <ul style="padding-right: 0.2rem;">
        <a href="index.html#portfolio"><img id="logo_small" src="img/logo_small.png"/></a>
        <li style="margin-bottom: 1.5rem;"><a href="index.html#portfolio">Portfolio</a></li>

        <?php

          $id = substr($_SERVER['REQUEST_URI'], -8, 4);
          $addr = array("grap" => "https://dribbble.com/colinchen",
                        "opis" => "opis/index.html");

          $li = array("kasa" => "Kasa",
                      "grap" => "Graphic/UI",
                      "mend" => "Mend",
                      "ryce" => "Ryce",
                      "post" => "Post-it Plus",
                      "pixu" => "PixUp",
                      "opis" => "Opis");

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
