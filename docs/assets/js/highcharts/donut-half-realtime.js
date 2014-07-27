$(function () {
    // Radialize the colors
    /*
        Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
            return {
                radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        });
    */
    $('.chart-donut-1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            margin: [-190, 10, -40, 10],
            spacingTop: -130,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h4 push-bottom-none">Load</div><div class="fa fa-tachometer text-30 text-info push-top-xs"></div></div><div class="text-md text-center text-info-light">32%</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            zIndex: 2
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                size:'100%',
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '75%'],
                borderWidth: 4,
                borderColor: 'rgba(255, 255, 255, 0.1)',
                animation: {
                    duration: 1500,
                    easing: 'linear'
                }
            },
            attr: {
                'rx': 10
            }
        },
        series: [{
            type: 'pie',
            name: 'Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Load',
                    y: 1913,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#4295C2'],
                           [1, '#6BC9DB']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 3923,
                    color: '#dddddd',
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }],
        credits: {
          enabled: false
        }
    });

    // Chart 2
    $('.chart-donut-2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            margin: [-190, 10, -40, 10],
            spacingTop: -130,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h4 push-bottom-none">Skew</div><div class="fa fa-sort-amount-asc text-30 text-warning push-top-xs"></div></div><div class="text-md text-center text-warning-dark">78%</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            zIndex: 2
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                size:'100%',
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '75%'],
                borderWidth: 4,
                borderColor: 'rgba(255, 255, 255, 0.1)',
                animation: {
                    duration: 2000,
                    easing: 'linear'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Skew',
                    y: 7834,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#FF5E3A'],
                           [1, '#FF9500']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 2184,
                    color: '#dddddd',
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }],
        credits: {
          enabled: false
        }
    });

    // Chart 3
    $('.chart-donut-3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            margin: [-190, 10, -40, 10],
            spacingTop: -130,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h4 push-bottom-none">Burn</div><div class="fa fa-fire text-30 text-info push-top-xs"></div></div><div class="text-md text-center text-info">18%</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            zIndex: 2
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                size:'100%',
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '75%'],
                borderWidth: 4,
                borderColor: 'rgba(255, 255, 255, 0.1)',
                animation: {
                    duration: 2500,
                    easing: 'linear'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Steps Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Miles',
                    y: 18,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#4295C2'],
                           [1, '#6BC9DB']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 82,
                    color: '#dddddd',
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }],
        credits: {
          enabled: false
        }
    });

    // Chart 4
    $('.chart-donut-4').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            margin: [-190, 10, -40, 10],
            spacingTop: -160,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h3 push-bottom-none">Time</div><div class="fa fa-clock-o text-30 text-warning-dark push-top-xs"></div></div><div class="text-md text-center text-warning-dark">13 sec avg</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            zIndex: 2
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                size:'100%',
                startAngle: -120,
                endAngle: 120,
                center: ['50%', '75%'],
                borderWidth: 4,
                borderColor: 'rgba(255, 255, 255, 0.1)'
            }
        },
        series: [{
            type: 'pie',
            name: 'Steps Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Hours',
                    y: 3323,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#FF5E3A'],
                           [1, '#FF9500']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 823,
                    color: '#dddddd',
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }],
        credits: {
          enabled: false
        }
    });

    // Chart 5
    $('.chart-donut-5').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            margin: [-180, 10, -50, 10],
            spacingTop: -200,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h2">Sources</div><div class="fa fa-cloud-download text-30 text-warning"></div></div><div class="text-lg text-center text-warning">Total: 34,243</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            zIndex: 2
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                size:'100%',
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                borderWidth: 4,
                borderColor: 'rgba(255, 255, 255, 0.1)'
            }
        },
        series: [{
            type: 'pie',
            name: 'Inbound Data',
            innerSize: '80%',
            data: [
                {
                    name: 'Website',
                    y: 12832,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#F27406'],
                           [1, '#F27406']
                        ]
                    }
                },
                {
                    name: 'iPhone App',
                    y: 5843,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#CE7B2B'],
                           [1, '#CE7B2B']
                        ]
                    }
                },
                {
                    name: 'Android App',
                    y: 4823,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#9F835D'],
                           [1, '#9F835D']
                        ]
                    }
                },
                {
                    name: 'iPad App',
                    y: 3923,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#708C8E'],
                           [1, '#708C8E']
                        ]
                    }
                },
                {
                    name: 'In-Store',
                    y: 1932,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#3C96C5'],
                           [1, '#3C96C5']
                        ]
                    }
                }
            ]
        }],
        credits: {
          enabled: false
        }
    });
});
    
