var testdata = [
    {
      key: "Beginner",
      y: 12
    },
    {
      key: "Rookie",
      y: 3
    },
    {
      key: "Casual",
      y: 9
    },
    {
      key: "Greenhorn",
      y: 11
    },
    {
      key: "Apprentice",
      y: 10
    },
    {
      key: "Authentic",
      y: 3
    },
    {
      key: "Adventurer",
      y: 6
    }
  ];


nv.addGraph(function() {
    var width = 300,
        height = 300;

    var chart = nv.models.pieChart()
        .x(function(d) { return d.key })
        .y(function(d) { return d.y })
        .color(d3.scale.category10().range())
        .width(width)
        .height(height);

      d3.select(".pie-chart-1")
          .datum(testdata)
        .transition().duration(1200)
          .attr('width', width)
          .attr('height', height)
          .call(chart);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

    return chart;
});

var myColors = ["#D9534F"];
  d3.scale.myColors = function() {
      return d3.scale.ordinal().range(myColors);
  };

nv.addGraph(function() {

    var width = 320,
        height = 320;

    var chart = nv.models.pieChart()
        .x(function(d) { return d.key })
        //.y(function(d) { return d.value })
        //.labelThreshold(.08)
        .showLabels(false)
        .color(d3.scale.category20c().range())
        // .color(d3.scale.myColors().range())
        .width(width)
        .showLegend(true)
        .height(height)
        .margin({top: 0, right: 10, bottom: 40, left: 40})
        .donut(true);

    // half pie
    /*
    chart.pie
        .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
        .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });
    */

      //chart.pie.donutLabelsOutside(true).donut(true);

      d3.select(".pie-chart-2")
          //.datum(historicalBarChart)
          .datum(testdata)
        .transition().duration(1200)
          .attr('width', width)
          .attr('height', height)
          .call(chart);

    return chart;
});