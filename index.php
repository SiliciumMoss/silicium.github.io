<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Gallery</title>
  <style>
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      padding: 20px;
    }
    .gallery-item {
      text-align: center;
    }
    .gallery-item img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .caption {
      margin-top: 8px;
      font-size: 14px;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="gallery">
    <?php
      $dir = "gallery";
      $images = array_diff(scandir($dir), array('.', '..'));

      foreach ($images as $image) {
        $file_path = "$dir/$image";
        $caption = pathinfo($image, PATHINFO_FILENAME);
        $caption = ucwords(str_replace("_", " ", $caption));
        echo "
          <div class='gallery-item'>
            <img src='$file_path' alt='$caption'>
            <div class='caption'>$caption</div>
          </div>
        ";
      }
    ?>
  </div>
</body>
</html>
