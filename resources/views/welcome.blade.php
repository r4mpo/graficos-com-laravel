<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="/img/logo.jpeg" type="image/x-icon">

    {{-- CSS/JS --}}
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/fetch-grafico.js"></script>

    {{-- Chart.JS - Gráficos --}}
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <title>Gráficos com Laravel</title>

</head>
<body>

    <div class="dashboard">

        <select id="chartType" onchange="carregarGrafico()">
            <option selected>Escolha o formato do gráfico</option>
            <option value="bar">Barras</option>
            <option value="doughnut">Pizza</option>
            <option value="line">Linhas</option>
            <option value="radar">Radar</option>
        </select>

        <div class="grafico">
            <canvas id="myChart" width="400" height="400"></canvas>

            <div id="inserirGraficos">
                {{--  --}}
            </div>
        </div>

    </div>

</body>
</html>