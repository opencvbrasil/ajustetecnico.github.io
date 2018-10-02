	<canvas id="myChart-line" width="600" height="380"></canvas>
	<script>
	var ctx = document.getElementById("myChart-line");
var myChart = new Chart(ctx, {
  type: 'line',
	data: {
    labels: [10, 20, 30, 40, 50],
		datasets: [{
			data: [1, 2, 5, 4, 3],
			label: "Experimento 1",
			borderColor: "#ff0000",
			fill: false,
			lineTension: 0.5
		},{
			data: [4, 5, 3, 3, 0],
			label: "Experimento 2",
			borderColor: "#00ff00",
			fill: false,
			lineTension: 0.0
		}]
	},
  options: {
		title:{
			display: true,
			text: 'Experimentos'
		},
		scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
        scaleLabel: {
       		display: true,
        	labelString: 'Temperatura'
				}			 
      }],
			xAxes:
			[{
				scaleLabel:{
					display: true,
					labelString: 'Tempo'
				}
			}]
    }
  }
});
</script>
