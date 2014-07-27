$(function() {
  
  Highcharts.setOptions({
    global : {
      useUTC : false
    }
  });
  
  // Create the chart
  $('.chart-line-realtime').highcharts('StockChart', {
    chart : {
      alignTicks: false,
      backgroundColor: 'transparent',
      events : {
        load : function() {

          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function() {
            var x = (new Date()).getTime(), // current time
            y = Math.round(Math.random() * 100);
            series.addPoint([x, y], true, true);
          }, 1000);
        }
      }
    },
    
    
    
    rangeSelector: {
      buttons: [{
        count: 1,
        type: 'minute',
        text: '1M'
      }, {
        count: 5,
        type: 'minute',
        text: '5M'
      }, {
        type: 'all',
        text: 'All'
      }],
      inputEnabled: false,
      selected: 0
    },
    
    title: {
        text: ''
    },

    
    colors: [
        'rgba(255, 255, 255, 0.4)'
    ],
    
    exporting: {
      enabled: false
    },
    
    series : [{
      name : 'Random data',
      type: 'column',
      data : (function() {
        // generate an array of random data
        var data = [], time = (new Date()).getTime(), i;

        for( i = -999; i <= 0; i++) {
          data.push([
            time + i * 1000,
            Math.round(Math.random() * 100)
          ]);
        }
        return data;
      })()
    }]
  });

});
