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
                lineColor: 'rgba(0, 0, 0, 0.1)',
                labels: {
                    style: {
                        color: 'rgba(0, 0, 0, 0.25)',
                    }
                }
            },
            yAxis: {
                min: 0,
                tickColor: 'rgba(0, 0, 0, 0.1)',
                title: {
                    text: ''
                },
                gridLineColor: 'rgba(0, 0, 0, 0.1)',
                labels: {
                    style: {
                        color: 'rgba(0, 0, 0, 0.25)',
                    }
                }
            },
            plotOptions: {
                column: {
                    animation: {
                        duration: 1500,
                        easing: 'linear'
                    }
                }
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

                    r: 0,
                    style: {
                        fontWeight: 'bold',
                        color: 'rgba(255, 255, 255, 0.5)',
                    },
                    states: {
                        hover: {
                            fill: 'none',
                        },
                        select: {
                            fill: 'none',
                            style: {
                                color: 'rgba(255, 255, 255, 0.9)',
                            }
                        }
                    }
                },
                buttonSpacing: 20,
                inputEnabled: $('.content').width() > 900,
                inputBoxBorderColor: 'rgba(0, 0, 0, 0.2)',
                inputBoxWidth: 120,
                inputBoxHeight: 18,
                inputStyle: {
                    color: 'rgba(0, 0, 0, 0.3)',
                    
                },
                labelStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
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