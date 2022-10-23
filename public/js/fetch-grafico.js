window.onload = function() {
    carregarGrafico();
}

function carregarGrafico() {

    // Capturando o status do chart.js
    let chartStatus = Chart.getChart("myChart");

    // Verificando se o chart já existe e,
    // caso exista, excluirá (para mudarmos o type do gráfico)
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    // Fazendo requisição fetch para buscar dados na api
    fetch(`api/tecnologias`).then((response) => response.json()).then((data) => {
        
        // arrays para itens do gráfico
        let tecnologias = [];
        let avaliacoes = [];

        // preenchendo arrays com os dados retornados do banco
        data.dados.forEach(item => {
            tecnologias.push(item.titulo);
            avaliacoes.push(item.nota);
        });

        // verificando a opção selecionada no campo 
        // opções relacionadas ao tipo do gráfico
        let type = document.getElementById('chartType').value;

        // definindo um tipo padrão de gráfico
        if(type == 'Escolha o formato do gráfico'){
            type = 'bar';
        }

        // as legendas serão correspondentes ao array de tecnologias
        var labels = tecnologias;

        var data = {
            labels: labels,
            datasets: [{
                label: 'Erick Agostinho - Avaliando tecnologias',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: 'rgb(255, 99, 132)',
                data: avaliacoes, // os números serão correspondentes ao nosso array de notas
            }]
        };

        var config = {
            type: type, // type = tipo de gráfico selecionado pelo usuário
            data: data,
            options: {}
        };

        var myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    })
}