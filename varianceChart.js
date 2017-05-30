<style>
.axisText{
    font-family: sans-serif;
    stroke: deepskyblue;
}
.axis path, .axis line {
    fill: none;
    stroke: #aaa;
    shape-rendering: crispEdges;
}
.axis text {
    font-family: sans-serif;
    font-size: 11px;
}
</style>
<script>
var dataSet = [{value: 01,price: 188, type:"0",color:"red"}, 
               {value: 02,price: 63, type:"1",color:"deepskyblue"}, 
               {value: 14,price: 241, type:"0",color:"red"}, 
               {value: -15,price: 241, type:"3",color:"green"}, 
               {value: 19,price: -241, type:"0",color:"red"},
               {value: 22,price: 318, type:"3",color:"green"},
               {value: -08,price: -118, type:"1",color:"deepskyblue"},
               {value: 22,price: -48, type:"0",color:"red"},
               {value: 21,price: 31, type:"1",color:"deepskyblue"},
               {value: -12,price: 38, type:"0",color:"red"},
               {value: 16,price: 138, type:"3",color:"green"},
               {value: 05,price: 344, type:"1",color:"deepskyblue"},
               {value: 08,price: 218, type:"1",color:"deepskyblue"},
               {value: 03,price: -18, type:"0",color:"red"},
               {value: 18,price: 78, type:"3",color:"green"},
               {value: -18,price: 98, type:"1",color:"deepskyblue"}
              ];

		var w = 500,
		    h = 500,
		    top_pad = 20,
		    left_pad = 50;
		var x = d3.scale.linear()
		    .domain([d3.min(dataSet ,function(d){return d.value;}), d3.max(dataSet ,function(d){return d.value;})])
		    .range([left_pad, w - left_pad]),
		    y = d3.scale.linear()
		        .domain([d3.min(dataSet ,function(d){return d.price;}), d3.max(dataSet ,function(d){return d.price;})])
		        .range([h - top_pad, top_pad]);


		var svg = d3.select("body")
		    .append("svg:svg")
		    .attr("width", w + left_pad)
		    .attr("height", h + top_pad);
        
var symbolTypes = {
    "triangleUp": d3.svg.symbol().type("triangle-up"),
    "circle": d3.svg.symbol().type("circle"),
    "diamond": d3.svg.symbol().type("diamond"),
};


		svg.selectAll("path")
		    .data(dataSet)
		    .enter().append("path")
		    .attr("class", "dot")
            .attr("transform", function(d) { return "translate(" + x(d.value)  + "," +  y(d.price) + ")"; })
        .attr("d", function(d,i){
            if (d.type === "0")
                return symbolTypes.circle();
            else if (d.type === "1")
                return symbolTypes.triangleUp();
            else 
                return symbolTypes.diamond();
        })
        .style("fill", function(d){ return d.color;});
        
        

		var xAxis = d3.svg.axis().scale(x).orient("bottom"),
		    yAxis = d3.svg.axis().scale(y).orient("left");

		svg.append("g")
		    .attr("class", "axis")
		    .attr("transform", "translate(0," + y(0) + ")")
		    .call(xAxis)
      .append("text")
        .attr("transform", "rotate(0)")
        .attr("x", 6)
        .attr("dx", ".71em")
        .style("text-anchor", "start")
        .attr("class", "axisText")
        .text("Value")
      .append("text")
        .attr("transform", "rotate(0)")
        .attr("x", 0)
        .attr("dx", ".71em")
        .style("text-anchor", "start")
        .attr("class", "axisText")
        .text("Value");

		svg.append("g")
		    .attr("class", "axis")
		    .attr("transform", "translate(" + x(0) + ", 0)")
		    .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .attr("class", "axisText")
        .text("Price");
</script>

		
