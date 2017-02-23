$(document).ready(function() {
  var chart = {
   type: 'bar'
   };
   var title = {
      text: 'Monthly Average Temperature'
   };
   var subtitle = {
      text: 'Source: WorldClimate.com'
   };
   var xAxis = {
     categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    title: {
       text: null
    }
 };
   var yAxis = {
     min: 0,
      title: {
         text: 'Population (millions)',
         align: 'high'
      },
      labels: {
         overflow: 'justify'
      }
   };
   var tooltip = {
      valueSuffix: 'millions'
   }

   var plotOptions = {
    bar: {
       dataLabels: {
          enabled: true
       }
    }
 };

   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
   };

   var credits = {
      enabled: false
   };

   var series =  [
      {
         name: 'Tokyo',
         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
            26.5, 23.3, 18.3, 13.9, 9.6]
      },
      {
         name: 'New York',
         data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
            24.1, 20.1, 14.1, 8.6, 2.5]
      },
      {
         name: 'Berlin',
         data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
            17.9, 14.3, 9.0, 3.9, 1.0]
      },
      {
         name: 'London',
         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0,
            16.6, 14.2, 10.3, 6.6, 4.8]
      }
   ];

   var json = {};

   var json = {};
   json.chart = chart;
   json.title = title;
   json.subtitle = subtitle;
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.series = series;
   json.plotOptions = plotOptions;
   json.legend = legend;
   json.credits = credits;
   $('#container1').highcharts(json);

});
