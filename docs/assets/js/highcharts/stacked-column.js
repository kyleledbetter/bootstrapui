$(function () {
    // Begin custom border radius
    Highcharts.wrap(Highcharts.seriesTypes.column.prototype, 'translate', function (proceed) {
        proceed.apply(this, [].slice.call(arguments, 1));
        var series = this,
            cpw = 0.166,
            shapeArgs,
            x, y, h, w;

        Highcharts.each(series.points, function (point) {
            shapeArgs = point.shapeArgs;
            x = shapeArgs.x;
            y = shapeArgs.y;
            h = shapeArgs.height;
            w = shapeArgs.width;

            point.shapeType = 'path';
            if (point.negative) {
                point.shapeArgs = {
                    d: [
                        'M', x, y,
                        'L', x, y + h - w/2,
                        'C', x, y + h + w/5, x + w, y + h + w/5, x + w, y + h - w/2, 'L', x + w, y,
                        'L', x, y]
                };
            } else {
                point.shapeArgs = {
                    d: [
                        'M', x, y + w/2,
                        'L', x, y + h,
                        'L', x + w, y + h,
                        'L', x + w, y + w/2,
                        'C', x + w, y - w/5, x, y - w/5, x, y + w/2]
                };
            }
        });
    });
    // End custom border radius

    $('.chart-column').highcharts({
        chart: {
            type: 'column',
            marginLeft: 80,
            backgroundColor: 'transparent'
        },
        title: {
            text: 'Steps taken this week'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'Sun',
                'Mon',
                'Tues',
                'Weds',
                'Thurs',
                'Fri',
                'Sat'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Steps'
            },
            gridLineColor: 'rgba(0, 0, 0, 0.05)'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} steps</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                borderRadius: 5         
            }
        },
        series: [{
            name: 'Steps',
            data: [4823, "", 3892, 6293, 8238, 1351, 0],
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                stops:[
                   [0, '#FB2B69'],
                   [1, '#FF5B37']
                ]
            }

        },
        {
            name: 'Goal',
            data: [1000, 7723, "", 0, 1000, 1000, 0],
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y1: 1 },
                stops:[
                   [0, '#5AD427'],
                   [1, '#A4E786']
                ]
            }

        }],
        credits: {
          enabled: false
        }
    });
});

