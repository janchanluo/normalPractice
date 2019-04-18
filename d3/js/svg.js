var width=500,height=300;
var margin={top:20,left:30,bottom:20,right:30}
var g_w=width-margin.left-margin.right
var g_h=height-margin.top-margin.bottom

var svg = d3.select("#container")
.append("svg")
.attr('width',width )
.attr('height',height)

var g=svg.append('g')
.attr('transform','translate('+margin.left+','+margin.top+')')

var data = [1,5,6,15,3,8,7,2]
var scalX =  d3.scaleLinear()
    .domain([0, data.length-1])
    .range([0,g_w]);

var scalY =  d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([g_h,0]);

var liner_g=d3.line()
.x(function(d,i){return scalX(i)})
.y(function(d){ return scalY(d)})
.curve(d3.curveCardinal);

var axisX=d3.axisBottom(scalX)
.ticks(7)
var axisY=d3.axisLeft(scalY)
g.append("g")
.call(axisX)
.attr('transform','translate(0,'+(height-margin.top-margin.bottom)+')')
.attr('color','#fff')

g.append("g")
.call(axisY)
.attr('color','#fff')

d3.select("g")
.append("path")
.attr("d",liner_g(data))
