<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Adv Charts</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>

        <div class="container">
            <?php include 'data.php'; ?>
            <h1>Milestone 1</h1>
            <canvas id="line-chart"></canvas>
            <h1>Milestone 2</h1>
            <canvas id="line-chart-2"></canvas>
            <canvas id="pie-chart-2"></canvas>
            <h1>Milestone 3</h1>
            <?php include 'dataMil3.php'; ?>
            <?php $utente = $_GET['level']; ?>

            <?php if($utente == 'guest') {
                echo '<canvas id="line-chart-3"></canvas>;';
            } elseif ($utente == 'employee') {
                echo '<canvas id="pie-chart-3"></canvas>;';
            } elseif ($utente == 'clevel') {
                echo '<canvas id="line-3"></canvas>';
            } else {
                echo '<h1>Utente non identificato!</h1>';
            } ?>
        </div>

        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
