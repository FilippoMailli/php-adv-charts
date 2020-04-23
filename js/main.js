$(document).ready(function () {

    var serverMil1 = 'server.php';
    var serverMil2 = 'serverMil2.php';
    var ctx1 = '#line-chart';
    var ctx2 = '#line-chart-2';
    var ctxPie2 = '#pie-chart-2';
    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    ajaxChart(serverMil1, mesi, ctx1, 'line');
    ajaxChart(serverMil2, mesi, ctx2);
    ajaxChartPie(serverMil2, ctxPie2);

    function ajaxChart(server, labels, position, type) {
        $.ajax({
            url: server,
            method: 'GET',
            success: function(data) {
                var dati = data;
                if(dati['fatturato']) {
                    type = dati['fatturato'].type;
                    dati = dati['fatturato'].data;
                }
                creaGrafico(dati, labels, position, type);
            },
            error: function(error) {
                alert('Errore generico');
            }
        });
    }

    function ajaxChartPie(server, position) {
        $.ajax({
            url: server,
            method: 'GET',
            success: function(data) {
                var dati = data;
                var datiTorta = [];
                var labels = [];
                var type = dati['fatturato_by_agent'].type;
                var dataAgents = dati['fatturato_by_agent'].data;
                for (var valori in dataAgents) {
                    labels.push(valori);
                    datiTorta.push(dataAgents[valori]);
                }
                creaGrafico(datiTorta, labels, position, type);
            }
        })
    }

    function creaGrafico(dataValues, labelsData, posCtx, typeChart) {
        var ctx = $(posCtx);
        var chart = new Chart(ctx, {
            type: typeChart,
            data: {
                labels: labelsData,
                datasets: [{
                    label: 'Vendite',
                    data: dataValues,
                    backgroundColor: [
                        'rgb(132, 112, 255)',
                        'rgb(000,000,128)',
                        'rgb(030,114,255)',
                        'rgb(072,209,204)',
                        'rgb(132, 112, 255)',
                        'rgb(000,000,128)',
                        'rgb(030,114,255)',
                        'rgb(072,209,204)',
                        'rgb(132, 112, 255)',
                        'rgb(000,000,128)',
                        'rgb(030,114,255)',
                        'rgb(072,209,204)',
                ],
                    borderColor: [
                        'rgb(072, 061, 139)',
                        'rgb(000,000,205)',
                        'rgb(070,130,180)',
                        'rgb(095,158,160)',
                        'rgb(072, 061, 139)',
                        'rgb(000,000,205)',
                        'rgb(070,130,180)',
                        'rgb(095,158,160)',
                        'rgb(072, 061, 139)',
                        'rgb(000,000,205)',
                        'rgb(070,130,180)',
                        'rgb(095,158,160)',
                    ],
                    borderWidth: 1
                }]
            },
        });
    }

});
