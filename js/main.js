$(document).ready(function () {

    $.ajax({
        url: 'server.php',
        method: 'GET',
        success: function (data) {
            var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
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
        },
        error: function(error) {
            alert('Errore generico');
        }
    });







/* CON DATABASE
    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    // var data = [1000, 1322, 1123, 2301, 3288, 988, 502, 2300, 5332, 2300, 1233, 2322];
    var data = $('#line-chart').data('database');

        var ctx = $('#line-chart');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
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

*/
});
