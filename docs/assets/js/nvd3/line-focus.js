extend = function(destination, source) {
    for (var property in source) {
    if (property in destination) { 
      if ( typeof source[property] === "object" && 
        typeof destination[property] === "object") {
          destination[property] = extend(destination[property], source[property]);
      } else {
        continue; 
      } 
    } else {
      destination[property] = source[property];
    };
    }
    return destination;
};

nv.addGraph(function() {
  var chart = nv.models.lineWithFocusChart();

  chart.xAxis
      .tickFormat(d3.format(',f'));
  chart.x2Axis
      .tickFormat(d3.format(',f'));

  chart.yAxis
      .tickFormat(d3.format(',.2f'));
  chart.y2Axis
      .tickFormat(d3.format(',.2f'));

  var dimension = testCrossfilterData().data; 

   var data = normalizeData(dimension.top(Infinity), 
        [
        { 
          name: 'Subscriptions',
          key: 'stream1',
          color: "rgba(0, 0, 0, 0.3)",
          area: true
        }
        ], 'x');  
    
  d3.select('#chart svg')
    .datum(data)
    .transition().duration(500)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

function normalizeData(data, series, xAxis)
  {
    var sort = crossfilter.quicksort.by(function(d) { return d[xAxis]; });
    var sorted = sort(data, 0, data.length);
    
    var result = [];

    series.forEach(function(serie, index)
    {
      result.push({key: serie.name, values: [], color: serie.color});
    });
    
    data.forEach(function(data, dataIndex)
    {
      series.forEach(function(serie, serieIndex)
      {
        result[serieIndex].values.push({x: data[xAxis],  y: data[serie.key]});
      });
    });
    
    return result;
  };

function testCrossfilterData() {
  var data = crossfilter(testData());
  
  try 
  {
    data.data = data.dimension(function(d) { return d.y; });
  } catch (e) 
  {
    console.log(e.stack);
  }
  
  return data;
}

function testData() {
  
  var data1 = [];
  var data2 = [];
  var data3 = [];
  
  stream_layers(3,128,.1).map(function(layer, index) {
    layer.forEach(function(item, i) {
    var object = { x: item.x };
    object['stream' + (index + 1)] = item.y;
    eval('data' + (index + 1)).push(object);
  });
  });
  
  var data = extend(data1, data2);
  var result = extend(data, data3);
  
  return result;
}