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
            spacingTop: -160,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h3 push-bottom-none">Steps</div><div class="fa fa-child text-30 text-info-light push-top-xs"></div></div><div class="text-md text-center text-info-light">7.2% of 5823</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            headerFormat: '<div class="h6 push-top-none push-bottom-none">{point.key}</div>',
            useHTML: true,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            zIndex: 2,
            borderRadius: 1
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
                borderColor: '#2B2426'
            },
            attr: {
                'rx': 10
            }
        },
        series: [{
            type: 'pie',
            name: 'Steps Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Steps',
                    y: 2913,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#5bc0de'],
                           [1, '#5add9e']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 3923,
                    color: 'rgba(0, 0, 0, 0.35)',
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
            spacingTop: -160,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h3 push-bottom-none">Calories</div><div class="fa fa-cutlery text-30 text-warning-dark push-top-xs"></div></div><div class="text-md text-center text-warning-dark">31% of 2184</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            headerFormat: '<div class="h6 push-top-none push-bottom-none">{point.key}</div>',
            useHTML: true,
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
                borderColor: '#2B2426'
            }
        },
        series: [{
            type: 'pie',
            name: 'Steps Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Burned',
                    y: 834,
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
                    color: 'rgba(0, 0, 0, 0.35)',
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
            spacingTop: -160,
            spacingBottom: 0,
            backgroundColor: 'transparent'
        },
        title: {
            text: '<div class="text-center"><div class="h3 push-bottom-none">Distance</div><div class="fa fa-map-marker text-30 text-vmware push-top-xs"></div></div><div class="text-md text-center text-vmware">52% of 3.5mi</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            headerFormat: '<div class="h6 push-top-none push-bottom-none">{point.key}</div>',
            useHTML: true,
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
                borderColor: '#2B2426'
            }
        },
        series: [{
            type: 'pie',
            name: 'Steps Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Miles',
                    y: 1.6,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#5856D6'],
                           [1, '#C644FC']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 1.4,
                    color: 'rgba(0, 0, 0, 0.35)',
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
            text: '<div class="text-center"><div class="h3 push-bottom-none">Time</div><div class="fa fa-clock-o text-30 text-warning-dark push-top-xs"></div></div><div class="text-md text-center text-warning-dark">35% of 1.5hr</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            headerFormat: '<div class="h6 push-top-none push-bottom-none">{point.key}</div>',
            useHTML: true,
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
                borderColor: '#2B2426'
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
                           [0, '#ff9935'],
                           [1, '#ffe035']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 5823,
                    color: 'rgba(0, 0, 0, 0.35)',
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
            text: '<div class="text-center"><div class="h1">Goal</div><div class="fa fa-trophy text-30 text-warning-dark"></div></div><div class="text-lg text-center text-warning-dark">44%</div>',
            useHTML: true,
            align: 'center',
            zIndex: -1,
            verticalAlign: 'middle',
            y: 50
        },

        tooltip: {
            headerFormat: '<div class="h6 push-top-none push-bottom-none">{point.key}</div>',
            useHTML: true,
            pointFormat: '<b>{point.percentage:.1f}%</b>',
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
                borderColor: '#2B2426'
            }
        },
        series: [{
            type: 'pie',
            name: 'Goal Today',
            innerSize: '80%',
            data: [
                {
                    name: 'Steps',
                    y: 40,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#5bc0de'],
                           [1, '#5add9e']
                        ]
                    }
                },
                {
                    name: 'Burned',
                    y: 31,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#FF5E3A'],
                           [1, '#FF9500']
                        ]
                    }
                },
                {
                    name: 'Miles',
                    y: 52,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#5856D6'],
                           [1, '#C644FC']
                        ]
                    }
                },
                {
                    name: 'Time',
                    y: 35,
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                        stops:[
                           [0, '#ff9935'],
                           [1, '#ffe035']
                        ]
                    }
                },
                {
                    name: 'Remaining',
                    y: 241,
                    color: 'rgba(0, 0, 0, 0.35)',
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
});
    
