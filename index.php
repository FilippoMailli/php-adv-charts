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
        </div>

        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
