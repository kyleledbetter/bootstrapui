/* Chart */

example_data = [ 
  {
    key: "S1",
    color: "#BD362F",
    values:
      [      
        { x : "Beginner", y : 40 },
        { x : "Rookie", y : 30 },
        { x : "Greenhorn",   y : 20 },
        { x : "Apprentice", y : 60 },
        { x : "Adventurer", y : 10 },
        { x : "Veteran",   y : 70 },
        { x : "Knight", y : 60 },
        { x : "Viceroy", y : 80 },
        { x : "Crusader",   y : 90 },
        { x : "Epic",   y : 20 },
        { x : "Savior", y : 60 }
      ]
  },
  {
    key: "S2",
    color: "#eeeeee",
    values:
      [      
        { x : "Beginner", y : 60 },
        { x : "Rookie", y : 70 },
        { x : "Greenhorn",   y : 80 },
        { x : "Apprentice", y : 40 },
        { x : "Adventurer", y : 90 },
        { x : "Veteran",   y : 30 },
        { x : "Knight", y : 40 },
        { x : "Viceroy", y : 20 },
        { x : "Crusader",   y : 10 },
        { x : "Epic",   y : 80 },
        { x : "Savior", y : 40 }
      ]
  }
];


var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart()
      //.barColor(d3.scale.category20().range())
      .margin({top: 20, bottom: 40})
      .stacked(true)
      .showControls(false)
      .showLegend(false)
      .tooltips(false)
      .staggerLabels(false)
      .transitionDuration(300)
      .delay(0)
      .groupSpacing(0.2)
      ;

    chart.multibar
      .hideable(true);

    chart.reduceXTicks(false);

    chart.xAxis
        //.tickFormat(d3.format(',.1f'));
        .axisLabel;


    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('.chart-bar-2 svg')
        .datum(example_data)
       .call(chart);

    nv.utils.windowResize(chart.update);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});

/* Chart */

group_data = [ 
  {
    key: "S1",
    values:
      [      
        { x : "Beginner", y : 40 },
        { x : "Rookie", y : 30 },
        { x : "Greenhorn",   y : 20 },
        { x : "Veteran",   y : 70 },
        { x : "Knight", y : 60 },
        { x : "Viceroy", y : 80 },
        { x : "Crusader",   y : 90 },
        { x : "Epic",   y : 20 },
        { x : "Savior", y : 60 }
      ]
  },
  {
    key: "S2",
    color: "#eeeeee",
    values:
      [      
        { x : "Beginner", y : 60 },
        { x : "Rookie", y : 70 },
        { x : "Greenhorn",   y : 80 },
        { x : "Veteran",   y : 30 },
        { x : "Knight", y : 40 },
        { x : "Viceroy", y : 20 },
        { x : "Crusader",   y : 10 },
        { x : "Epic",   y : 80 },
        { x : "Savior", y : 40 }
      ]
  }
];


var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart()
      //.barColor(d3.scale.category20().range())
      .margin({top: 20, bottom: 40})
      .stacked(true)
      .showControls(false)
      .showLegend(false)
      .tooltips(false)
      .staggerLabels(false)
      .transitionDuration(300)
      .delay(0)
      .color(d3.scale.category20c().range())
      .groupSpacing(0.2)
      ;

    chart.multibar
      .hideable(true);

    chart.reduceXTicks(false);

    chart.xAxis
        //.tickFormat(d3.format(',.1f'));
        .axisLabel;


    chart.yAxis
        .tickFormat(d3.format(',.1f'));

    d3.select('.chart-bar-3 svg')
        .datum(group_data)
       .call(chart);

    nv.utils.windowResize(chart.update);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});