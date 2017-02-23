$(document).ready(function() {
   var chart = {
       plotBackgroundColor: null,
       plotBorderWidth: 0,
       plotShadow: false
   };
   var title = {
      text: 'Browser<br>shares',
      align: 'center',
      verticalAlign: 'middle',
      y: 50
   };
   var tooltip = {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   };
   var plotOptions = {
      pie: {
         dataLabels: {
            enabled: true,
            distance: -50,
            style: {
               fontWeight: 'bold',
               color: 'white',
               textShadow: '0px 1px 2px black'
            }
         },
         startAngle: -90,
         endAngle: 90,
         center: ['50%', '75%']
      }
   };
   var series= [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
         ['Firefox',   45.0],
         ['IE',       26.8],
         ['Chrome', 12.8],
         ['Safari',    8.5],
         ['Opera',     6.2],
         {
            name: 'Others',
            y: 0.7,
            dataLabels: {
               enabled: false
            }
         }
      ]
   }];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.tooltip = tooltip;
   json.series = series;
   json.plotOptions = plotOptions;
   $('#container_bubble').highcharts(json);
});
