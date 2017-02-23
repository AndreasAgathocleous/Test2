$(document).ready(function() {
   var chart = {
      type: 'column'
   };
   var title = {
      text: 'Stacked column chart'
   };
   var xAxis = {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
   };
   var yAxis ={
      min: 0,
      title: {
        text: 'Total fruit consumption'
      },
      stackLabels: {
        enabled: true,
        style: {
           fontWeight: 'bold',
           color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
   };
   var legend = {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
   };
   var tooltip = {
      formatter: function () {
         return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '<br/>' +
            'Total: ' + this.point.stackTotal;
      }
   };
   var plotOptions = {
      column: {
         stacking: 'normal',
         dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
               textShadow: '0 0 3px black'
            }
         }
      }
   };
   var credits = {
      enabled: false
   };
   var series= [{
        name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
   }];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.legend = legend;
   json.tooltip = tooltip;
   json.plotOptions = plotOptions;
   json.credits = credits;
   json.series = series;
   $('#container_area').highcharts(json);

});
