<?php
$config = [
    'jumpDuration' => 1500,
    'fadeInDuration' => '2s',

    'baseMoveObstacleDuration' => '5s',
    'durationFactorDesktop' => 1,
    'durationFactorMobile' => 2,

    'moveGroundDuration' => '0.8s',
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capi</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="src/css/style.css">
    <style>
        :root {
            --fade-in-duration: <?= $config['fadeInDuration']; ?>;
            --base-move-obstacle-duration: <?= $config['baseMoveObstacleDuration']; ?>;
            --duration-factor-desktop: <?= $config['durationFactorDesktop']; ?>;
            --duration-factor-mobile: <?= $config['durationFactorMobile']; ?>;
            --move-ground-duration: <?= $config['moveGroundDuration']; ?>;
        }
    </style>
    <script>
            const config = <?= json_encode($config); ?>;
    </script>
</head>
<body>
    <div class="game-container">
        <div class="row justify-content-center">
            <div class="highscore"></div>
            <div class="counter"></div>
        </div>
   
        <div class="player"></div>
        <div class="ground"></div>
    </div>
    <script type="module" src="src/js/app.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>