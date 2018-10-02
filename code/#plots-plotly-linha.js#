<div id="plotit-2d" style="width:600px;height:380px;"></div>

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script>
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [16, 11, 12, 21],
    type: 'scatter',
    name: 'Experimento1'
  };

var trace2 = {
  x: [1, 2, 3, 4],
  y: [10, 5, 11, 9],
  line: {shape: 'spline'},
  type: 'scatter',
  name: 'Experimento2'
};

var layout = {
  title: 'Experimentos',
  xaxis: {
    title: 'Temperatura',
    showgrid: true,
    zeroline: false
  },
  yaxis: {
    title: 'Tempo',
    showline: false
  }
};

var data = [trace1, trace2];

Plotly.newPlot('plotit-2d', data, layout);
</script>
