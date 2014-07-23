$(function() {
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-v.json&callback=?', function(data) {

        Highcharts.setOptions({
            lang:{
                rangeSelectorZoom:''
            }
        });

        // create the chart
        $('.chart-column').highcharts('StockChart', {
            chart: {
                alignTicks: false,
                backgroundColor: 'transparent'
            },

            rangeSelector: {
                inputEnabled: $('.chart-column').width() > 480,
                selected: 1
            },

            title: {
                text: ''
            },

            navigator : {
                enabled : false
            },
            colors: [
                'rgba(255, 255, 255, 0.4)'
            ],
            xAxis: {
                tickColor: 'rgba(0, 0, 0, 0.1)',
                lineColor: 'rgba(0, 0, 0, 0.1)'
            },
            yAxis: {
                min: 0,
                tickColor: 'rgba(0, 0, 0, 0.1)',
                title: {
                    text: ''
                },
                gridLineColor: 'rgba(0, 0, 0, 0.1)'
            },
            series: [{
                type: 'column',
                name: 'Source Activity',
                data: data,
                dataGrouping: {
                    units: [[
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]]
                }
            }],

            rangeSelector: {
                buttonTheme: { // styles for the buttons
                    fill: 'none',
                    stroke: 'none',
                    'stroke-width': 0,
                    r: 8,
                    style: {
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    states: {
                        hover: {
                            fill: 'none',
                        },
                        select: {
                            fill: 'none',
                            style: {
                                color: 'white',
                                textDecoration: 'underline'
                            }
                        }
                    }
                },
                inputEnabled: $('.content').width() > 900,
                inputBoxBorderColor: 'rgba(0, 0, 0, 0.2)',
                inputBoxWidth: 120,
                inputBoxHeight: 18,
                inputStyle: {
                    color: '#555',
                    fontWeight: 'bold'
                },
                labelStyle: {
                    color: 'silver',
                    fontWeight: 'bold'
                },
                selected: 1
            },

            scrollbar: {
                barBackgroundColor: 'rgba(0, 0, 0, 0.2)',
                barBorderRadius: 7,
                barBorderWidth: 0,
                buttonBackgroundColor: 'rgba(0, 0, 0, 0.2)',
                buttonBorderWidth: 0,
                buttonBorderRadius: 7,
                trackBackgroundColor: 'none',
                trackBorderWidth: 1,
                trackBorderRadius: 8,
                trackBorderColor: 'rgba(0, 0, 0, 0.1)',
                buttonArrowColor: 'white',
                rifleColor: 'white'
            },

            credits: {
              enabled: false
            }
        });
    });
});