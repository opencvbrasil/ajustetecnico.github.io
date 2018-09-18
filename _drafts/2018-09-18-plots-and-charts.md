---
layout: post
title: Traçado de gráficos em Jekyll
author: Agostinho Brito
tag:
  - Equacoes
  - Gráficos
mathjax: true
---

Diversas são as formas de traçar gráficos usando Jekyll e Javascript. Nesse post, testamos duas bibliotecas: [chart.js](https://chartjs.org) e [plot.ly](https://plot.ly)

## Usando [chart.js](https://chartjs.org)

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

<canvas id="myChart" width="400" height="300"></canvas>
<script>
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Número de Votos',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>

Quebra de linha

<canvas id="lineplot" width="400" height="300"></canvas>

<script>
		var ctx = document.getElementById("lineplot").getContext('2d');
var myChart = new Chart(ctx, {
		type: 'line',
		data: {
				labels: [10, 20, 30, 40, 50],
				datasets: [{
						data: [1, 2, 5, 4, 3],
						label: "Experimento 1",
						borderColor: "#ff0000",
						fill: false
				},
				{
				 data: [4, 5, 3, 3, 0],
						label: "Experimento 2",
						borderColor: "#00ff00",
						fill: false
				}]
		},
		options: {
				scales:{
						yAxes: [{
								scaleLabel: {
										display: true,
										labelString: "Temperatura (Celsius)"
								}
						}
									 ],
						xAxes: [{
								scaleLabel: {
										display: true,
										labelString: "Tempo (s)"
								}
						}
						]

						
				},
				elements: {
						line: { tension: 0.5,}
				},
				title: {
						display: true,
						text: "Temperatura x tempo"
				}
		}
});

## Usando [plot.ly](https://plot.ly)

