google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', '', ''],
    ['',  180,      240],
    ['JAN',  280,      295],
    ['FEB',  250,      360],
    ['MAR',  515,       302],
    ['APR',  225,      570],
    ['MAY',  420,      395],
    ['JUN',  350,      602],
  ]);

  var options = {
              legend: 'none',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#80481e'}},
    vAxis: {minValue: 0},
    backgroundColor: { fill: "#fffbf6" },
    colors:['#7e471d', '#e1b05a'],
    curveType: 'function',
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}