historicalBarChart = [ 
  {
    key: "Orders",
    values: [
      { 
        "label" : "6/01" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 12
      } , 
      { 
        "label" : "6/02" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 3
      } ,
      { 
        "label" : "6/03" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 9
      } ,
      { 
        "label" : "6/04" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 11
      } ,
      { 
        "label" : "6/05" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 10
      } ,
      { 
        "label" : "6/06" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 3
      } ,
      { 
        "label" : "6/07" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 6
      } ,
      { 
        "label" : "6/08" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 4
      } ,
      { 
        "label" : "6/09" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 7
      } ,
      { 
        "label" : "6/10" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 2
      } ,
      { 
        "label" : "6/11" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 8
      } ,
      { 
        "label" : "6/12" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 15
      } ,
      { 
        "label" : "6/13" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 13
      } ,
      { 
        "label" : "6/14" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 7
      } ,
      { 
        "label" : "6/15" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 4
      } ,
      { 
        "label" : "6/16" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 7
      } ,
      { 
        "label" : "6/17" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 9
      } ,
      { 
        "label" : "6/18" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 2
      } ,
      { 
        "label" : "6/19" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 12
      } ,
      { 
        "label" : "6/20" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 10
      } ,
      { 
        "label" : "6/21" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 18
      } ,
      { 
        "label" : "6/22" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 15
      } ,
      { 
        "label" : "6/23" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 6
      } ,
      { 
        "label" : "6/24" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 1
      } ,
      { 
        "label" : "6/25" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 5
      } ,
      { 
        "label" : "6/26" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 6
      } ,
      { 
        "label" : "6/27" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 4
      } ,
      { 
        "label" : "6/28" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 7
      } ,
      { 
        "label" : "6/29" ,
        "color": "rgba(0, 0, 0, 0.25)",
        "value" : 12
      } ,
      { 
        "label" : "6/30" ,
        "color": "rgba(255, 255, 255, 0.45)",
        "value" : 20
      } 
    ]
  }
];

nv.addGraph(function() {  
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(true)
      //.staggerLabels(historicalBarChart[0].values.length > 8)
      .tooltips(false)
      .showValues(true)
      .transitionDuration(1050)
      ;

  d3.select('.chart-bar-1 svg')
      .datum(historicalBarChart)
      .call(chart);

  nv.utils.windowResize(chart.update);
  return chart;
});

/* Chart */

historicalBarChart2 = [ 
  {
    key: "Packages",
    values: [
      { 
        "label" : "Beginner" ,
        "value" : 12
      } , 
      { 
        "label" : "Rookie" ,
        "value" : 3
      } ,
      { 
        "label" : "Casual" ,
        "value" : 9
      } ,
      { 
        "label" : "Greenhorn" ,
        "value" : 11
      } ,
      { 
        "label" : "Apprentice" ,
        "value" : 10
      } ,
      { 
        "label" : "Authentic" ,
        "value" : 3
      } ,
      { 
        "label" : "Adventurer" ,
        "value" : 6
      } ,
      { 
        "label" : "Old Hand" ,
        "value" : 4
      } ,
      { 
        "label" : "Veteran" ,
        "value" : 7
      } ,
      { 
        "label" : "Knight" ,
        "value" : 2
      } ,
      { 
        "label" : "Viceroy" ,
        "value" : 8
      } ,
      { 
        "label" : "Crusader" ,
        "value" : 15
      } ,
      { 
        "label" : "Epic" ,
        "value" : 13
      } ,
      { 
        "label" : "Savior" ,
        "value" : 7
      }
    ]
  }
];


var myColors = ["#D9534F"];
  d3.scale.myColors = function() {
      return d3.scale.ordinal().range(myColors);
  };

nv.addGraph(function() {  
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(false)
      //.staggerLabels(historicalBarChart[0].values.length > 8)
      .tooltips(false)
      .showValues(true)
      .transitionDuration(1050)
      .color(d3.scale.myColors().range())
      //.color(d3.scale.category20c().range())
      .margin({top: 10, right: 10, bottom: 35, left: 40})
      ;

  d3.select('.chart-bar-2 svg')
      .datum(historicalBarChart2)
      .call(chart);

  nv.utils.windowResize(chart.update);
  return chart;
});