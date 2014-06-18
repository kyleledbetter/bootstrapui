// Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs, and may do more in the future... it's NOT required
var chart;

nv.addGraph(function() {
  chart = nv.models.lineChart()

  .options({
    margin: {left: 0, bottom: 0, right: 0, top: 0},
    x: function(d,i) { return i},
    showXAxis: false,
    showYAxis: false,
    transitionDuration: 250,
    showLegend: false,
    tooltips: false,
    interactive: false
  })
  ;


  // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
  chart.xAxis
    .axisLabel("Time (s)")
    .tickFormat(d3.format(',.1f'));

  chart.yAxis
    .axisLabel('Voltage (v)')
    .tickFormat(d3.format(',.2f'));

  d3.select('.chart-line-1 svg')
    .datum(sinAndCos())
    .call(chart);

  d3.select('.chart-line-2 svg')
    .datum(sinAndCos())
    .call(chart);

   d3.select('.chart-line-3 svg')
     .datum(sinAndCos())
     .call(chart);

   d3.select('.chart-line-4 svg')
     .datum(sinAndCos())
     .call(chart);

  d3.select('.chart-line-5 svg')
    .datum(sinAndCos())
    .call(chart);

  d3.select('.chart-line-6 svg')
    .datum(sinAndCos())
    .call(chart);

  d3.select('.chart-line-7 svg')
    .datum(sinAndCos())
    .call(chart);

  d3.select('.chart-line-8 svg')
    .datum(sinAndCos())
    .call(chart);

  //TODO: Figure out a good way to do this automatically
  nv.utils.windowResize(chart.update);
  //nv.utils.windowResize(function() { d3.select('#chart1 svg').call(chart) });

  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart;
});

function sinAndCos() {
  var sin = [],
    cos = [],
    rand = [],
    rand2 = []
    ;

  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) }); //the nulls are to show how defined works
    cos.push({x: i, y: .5 * Math.cos(i/10)});
    rand.push({x:i, y: Math.random() / 10});
    rand2.push({x: i, y: Math.cos(i/10) + Math.random() / 10 })
  }

  return [
    {
      values: rand,
      key: "Value",
      area: true,
      color: "rgba(0, 0, 0, 0.05)"
    }
  ];
}