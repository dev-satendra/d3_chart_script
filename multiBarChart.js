//live demo https://jsfiddle.net/satendramicra/2m284191/
<style>

.axis text {
  font: 10px sans-serif;
}

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.x.axis path {
  display: none;
}


</style>
<script>
var n = 4, // number of samples
    m = 15; // number of series

/*var data = d3.range(m).map(function() { return d3.range(n).map(Math.random); });*/
var data = [
            [5,6,4,8],
            [1,2,3,4],
            [2,3,4,5],
            [3,4,5,6],
            [4,5,6,7],
            [5,6,7,8],
            [6,7,8,9],
            [7,8,9,1],
            [8,9,1,2],
            [9,1,2,3],
            [5,8,2,6],
            [5,6,4,5],
            [2,3,5,4],
            [5,2,4,8],
            [1,9,5,8]
					];
var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var y = d3.scale.linear()
    .domain([0, 10])
    .range([height, 0]);

var x0 = d3.scale.ordinal()
    .domain(d3.range(n))
    .rangeBands([0, width], .25);

var x1 = d3.scale.ordinal()
    .domain(d3.range(m))
    .rangeBands([0, x0.rangeBand()]);

var z = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x0)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("svg:g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g").selectAll("g")
    .data(data)
  .enter().append("g")
    .style("fill", function(d, i) { return z(i); })
    .attr("transform", function(d, i) { return "translate(" + x1(i) + ",0)"; })
  .selectAll("rect")
    .data(function(d) { return d; })
  .enter().append("rect")
    .attr("width", x1.rangeBand()-2)
    .attr("height", function(d) {
     return height - y(d);
   })
    .attr("x", function(d, i) { return x0(i); })
    .attr("y", function(d) { return y(d); });
</script>
