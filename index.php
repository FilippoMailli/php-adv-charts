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
            <canvas id="line-chart" data-database="<?php echo $database; ?>"></canvas>
        </div>


        <script>
        /*
        $(document).ready(function () {
            var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
            < ?php include 'data.php'; ?>
            var data = < ?php echo $database ?> ;
            var ctx = $('#line-chart');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: mesi,
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: data
                    }]
                }
            });
        });
        */
        </script>
        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
