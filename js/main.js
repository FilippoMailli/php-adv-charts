$(document).ready(function () {

    var serverMil1 = 'server.php';
    var serverMil2 = 'serverMil2.php';
    var serverMil3 = 'serverMil3.php';
    var ctx1 = '#line-chart';
    var ctx2 = '#line-chart-2';
    var ctx3 = '#line-chart-3';
    var ctx4 = '#line-3';
    var ctxPie2 = '#pie-chart-2';
    var ctxPie3 = '#pie-chart-3';
    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    ajaxChart(serverMil1, mesi, ctx1, 'line');
    ajaxChart(serverMil2, mesi, ctx2);
    ajaxChart(serverMil3, mesi, ctx3);
    ajaxChartMulty(serverMil3, mesi, ctx4);
    ajaxChartPie(serverMil2, ctxPie2);
    ajaxChartPie(serverMil3, ctxPie3);

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

    function ajaxChartMulty(server, labels, position) {
        $.ajax({
            url: server,
            method: 'GET',
            success: function(data) {
                var dati = data;
                var datiMulty = [];
                var type = dati['team_efficiency'].type;
                var dataMulty = dati['team_efficiency'].data;
                for (var valori in dataMulty) {
                    datiMulty.push(dataMulty[valori]);
                }
                // console.log(datiMulty);
                var team1 = datiMulty[0];
                var team2 = datiMulty[1];
                var team3 = datiMulty[2];
                // console.log(team1);
                creaGraficoMulty(team1, team2, team3, labels, position, type);
            }
        })
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
                creaGraficoPie(datiTorta, labels, position, type);
            }
        })
    }

    function creaGraficoMulty(data1, data2, data3, labelsData, posCtx, typeChart) {
        var ctx = $(posCtx);
        var chart = new Chart(ctx, {
            type: typeChart,
            data: {
                labels: labelsData,
                datasets: [{
                    label: 'Team1',
                    data: data1,
                    backgroundColor: [
                        'rgba(132, 112, 255,0.0)'
                    ],
                    borderColor: [
                        'rgba(132, 112, 255,1)'
                    ]
                },
                {
                    label: 'Team2',
                    data: data2,
                    backgroundColor: [
                        'rgba(240, 52, 52, 0.0)'
                    ],
                    borderColor: [
                        'rgba(240, 52, 52, 1)'
                    ]
                },
                {
                    label: 'Team3',
                    data: data3,
                    backgroundColor: [
                        'rgba(0, 230, 64, 0.0)'
                    ],
                    borderColor: [
                        'rgba(0, 230, 64, 1)'
                    ]
                }]
            }
        });
    }

    function creaGrafico(dataValues, labelsData, posCtx, typeChart){
        var ctx = $(posCtx);
        var chart = new Chart(ctx, {
            type: typeChart,
            data: {
                labels: labelsData,
                datasets: [{
                    label: 'Vendite',
                    data: dataValues,
                    backgroundColor: [
                        'rgb(132, 112, 255)'
                    ],
                    borderColor: [
                        'rgb(072, 061, 139)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }

    function creaGraficoPie(dataValues, labelsData, posCtx, typeChart){
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
                        'rgb(072,209,204)'
                    ],
                    borderColor: [
                        'rgb(072, 061, 139)',
                        'rgb(000,000,205)',
                        'rgb(070,130,180)',
                        'rgb(095,158,160)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    }

});
