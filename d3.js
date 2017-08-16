const $ = require('jquery');
const d3 = require('d3');
//

require("./a4.css");

$(document).ready(function() {

  // var d3 = new D3Node();
  //
  //
  //
  // console.log("foo");
  // d3n.createSVG(10,20).append('g') // create SVG w/ 'g' tag and width/height
  // $("#d3").append(d3n.svgString);

  $("#d3").append("foo");


  var data = [150, 230, 180, 90];

  var svg = d3.select("#d3")
              .append("svg")
              .attr("width", 300)
              .attr("height", 200);

  svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("width", function(d) {return d;})
    .attr("height", "40")
    .attr("y", function(d, i) {return i*50 + 10;})
    .attr("x", "10");


});
