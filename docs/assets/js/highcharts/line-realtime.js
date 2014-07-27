$(function () {
    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        // orange chart
        $('.sparkline-realtime-warning').each(function(){
          var chart = new Highcharts.Chart({
            chart: {
                renderTo: this,
                type: 'column',
                animation: Highcharts.svg, // don't animate in old IE
                backgroundColor: 'transparent',
                margin: [5, 0, 20, 35],
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        var i = 0;
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random()*7500;
                            series.addPoint([x, y], true, true);
                            i++;
                        }, 1000);
                    }
                }
            },
            title: {
                text: ''
            },
            colors: [
                'rgba(243, 107, 32, 0.75)'
            ],
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                gridLineWidth: 0,
                tickColor: 'rgba(0, 0, 0, 0.1)',
                lineColor: 'rgba(0, 0, 0, 0.1)',
                labels: {
                    style: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineWidth: 0,
                tickColor: 'rgba(0, 0, 0, 0.1)',
                lineColor: 'rgba(0, 0, 0, 0.1)',
                gridLineColor: 'rgba(0, 0, 0, 0.1)',
                labels: {
                    style: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Listener Activity',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()*7500
                        });
                    }
                    return data;
                })()
            }],
            credits: {
              enabled: false
            }
        });
      });

      // blue chart
      $('.sparkline-realtime-info').each(function(){
          var chart = new Highcharts.Chart({
            chart: {
                renderTo: this,
                type: 'line',
                animation: Highcharts.svg, // don't animate in old IE
                backgroundColor: 'transparent',
                margin: [5, 0, 20, 35],
                events: {
                    load: function() {
    
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        var i = 0;
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random()*850;
                            series.addPoint([x, y], true, true);
                            i++;
                        }, 1000);
                    }
                }
            },
            title: {
                text: ''
            },
            colors: [
                'rgba(66, 149, 194, 0.75)'
            ],
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                gridLineWidth: 0,
                tickColor: 'rgba(0, 0, 0, 0.1)',
                lineColor: 'rgba(0, 0, 0, 0.1)',
                labels: {
                    style: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineWidth: 0,
                tickColor: 'rgba(0, 0, 0, 0.1)',
                lineColor: 'rgba(0, 0, 0, 0.1)',
                gridLineColor: 'rgba(0, 0, 0, 0.1)',
                labels: {
                    style: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
              series: {
                  marker: {
                      enabled: false
                  }
              }
            },
            series: [{
                name: 'Listener Activity',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
    
                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()*850
                        });
                    }
                    return data;
                })()
            }],
            credits: {
              enabled: false
            }
        });
      });
    });
    
});