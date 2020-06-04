
	var chartConfig = {
    lineConnectorLength:40, 
    axisLabel:{
       xAxis : 'Value',
       yAxis : 'Value'
    },
    lineLabel:{
      height:20,
      width:60,
    },

		data:[{
					"sale": "34",
					"year": "2006"
				}, {
					"sale": "34",
					"year": "2007"
				}, {
					"sale": "34",
					"year": "2008"
				}, {
					"sale": "34",
					"year": "2009"
				}, {
					"sale": "35",
					"year": "2010"
				}, {
					"sale": "35",
					"year": "2011"
				}, {
					"sale": "36",
					"year": "2012"
				}, {
					"sale": "36",
					"year": "2013"
				}, {
					"sale": "36",
					"year": "2014"
				}, {
					"sale": "36",
					"year": "2015"
				},
         {
					"sale": "36",
					"year": "2016"
				}],
 data2:[{
					"sale": "40",
					"year": "2006"
				}, {
					"sale": "40",
					"year": "2007"
				}, {
					"sale": "40",
					"year": "2008"
				}, {
					"sale": "40",
					"year": "2009"
				}, {
					"sale": "40",
					"year": "2010"
				}, {
					"sale": "41",
					"year": "2011"
				}, {
					"sale": "41",
					"year": "2012"
				}, {
					"sale": "41",
					"year": "2013"
				}, 
        
        {
					"sale": "41",
					"year": "2014"
				}, {
					"sale": "41",
					"year": "2015"
				}, {
					"sale": "41",
					"year": "2016"
        }
        ]};

        
  
		var svgConfig = {
						id:"mySvg",
						width:700,
						height:300,
						margin : {
							top: 20,
							right: 20,
							bottom: 20,
							left: 100
						  }
						};


var tooltipDiv = d3.select("body").append("div")	
    .attr("class", "tooltip");
    

			var bodySelection = d3.select("body");
			
			var svgSelection  = bodySelection.append("svg")
								.attr("id", svgConfig.id)
								.attr("width",svgConfig.width)
								.attr("height",svgConfig.height);
								
	
			xScale = d3.scale.linear()
					   .range([
             svgConfig.margin.left, 
             svgConfig.width - svgConfig.margin.right
             ])
					     .domain([2006,2016]);
		
	
			yScale = d3.scale.linear()
					   .range(
             [svgConfig.height - svgConfig.margin.top,
             svgConfig.margin.bottom])
					   .domain([20,60]);
		
		
			xAxis = d3.svg.axis()
					.scale(xScale)
					.tickFormat(d3.format("d"))
          .innerTickSize(-(svgConfig.height-46));
			
			yAxis = d3.svg.axis()
					.orient("left")
					.scale(yScale)
          .innerTickSize(-svgConfig.width);

			svgSelection.append("svg:g")
			.attr("id","xAxis")
			.attr("class","axis")
			.call(xAxis);
			
		
			d3.select("#xAxis")
			.attr("transform", "translate(0," + (svgConfig.height - svgConfig.margin.bottom) + ")");
      
   svgSelection.append('text')
   .attr('text-anchor','middle')
   .attr('font-family','sans-serif')
   .attr('font-size','12px')
   .attr('fill','#777')
   .attr("transform", "translate("+ (svgConfig.width/2) +","+(svgConfig.height)+")")   
   .text(chartConfig.axisLabel.xAxis);
   
			
		
			svgSelection.append("svg:g")
			.attr("id","yAxis")
			.attr("class","axis")
			.call(yAxis);	
	
			d3.select("#yAxis")
			.attr("transform", "translate(" + (svgConfig.margin.left) + ",0)")
			
	
			var lineSelection = d3.svg.line()
							.x(function(d){
								return xScale(d.year);
							})
							.y(function(d){
								return yScale(d.sale)
							});


lineOne = drawLine(chartConfig.data,'#00b7d4','GREECE','line1');
lineTwo = drawLine(chartConfig.data2,'#f57738','USA','line2');

       
drawPoints(chartConfig.data,'#00b7d4',lineOne);  
drawPoints(chartConfig.data2,'#f57738',lineTwo);


var marginLegend = 0; 
createLegend('#00b7d4','line1','GREECE');
createLegend('#f57738','line2','USA');


function createLegend(legendColor,lineId,legendText){
  
  var legendGroup = svgSelection.append("g");
  
  legendGroup.append("rect")
		.attr("width", chartConfig.lineLabel.width+5)
        .attr("height", chartConfig.lineLabel.height)
        .attr("x", (svgConfig.width + marginLegend - 45)/1.3)
        .attr("y",(svgConfig.margin.top-15))
        .attr("stroke", legendColor)
        .attr("fill", legendColor)
        .attr("stroke-width", 1).style("opacity", 0).transition()
        .duration(600)
        .style("opacity", 1)
        
        
  legendGroup.append('text')
   .attr('text-anchor','middle')
   .attr('font-family','sans-serif')
   .style('cursor','pointer')
   .attr('font-size','12px')
   .attr('fill','white')
   .attr("transform", "translate("+ ((svgConfig.width + marginLegend)/1.3) + ","+(svgConfig.margin.top)+")")   
   .text("X  "+legendText)
   .on("click", function(){ 
     var opacity = d3.select("."+lineId).style("opacity")==1 ? 0 : 1;
     d3.select("."+lineId)
     .transition()
     .duration(500)
     .style("opacity", opacity)
   });
   marginLegend+=100;
}

function drawPoints(pointData,pointColor,onLine){
   
      onLine.selectAll(".points")
        .data(pointData)
      .enter().append("svg:circle")
         .style("cursor","pointer")
         .attr("stroke", pointColor)
         .attr("fill", function(d, i) { return pointColor })
         .attr("cx", function(d, i) { return xScale(d.year) })
         .attr("cy", function(d, i) { return yScale(d.sale) })
         .attr("r", function(d, i) { return 3 })
         .on("mouseover", function(d) {		
         
       
         d3.select(this)
        .transition()
        .duration(300)
        .attr("r", 6);


            tooltipDiv.transition()		
                .duration(200)		
                .style("opacity", .9);		
            tooltipDiv.html(d.year + ' : ' + d.sale)	
                .style("background", pointColor)		
                .style("left", (d3.event.pageX) - 30 + "px")		
                .style("top", (d3.event.pageY - 40) + "px");	
            })					
        .on("mouseout", function(d) {		
         
         d3.select(this)
        .transition()
        .duration(300)
        .attr("r", 3);
            
            tooltipDiv.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });
}   

function drawLine(lineData,lineColor,lineLabel,lineId)
{
	
    var group = svgSelection.append("g")
    						.attr('class', lineId);
    
		group.append("svg:path")
				.attr('d', lineSelection(lineData))
				.attr('stroke', lineColor)
				.attr('stroke-width', 2)
				.attr('fill', 'none');      
        
     
    group.append("rect")
		.attr("width", chartConfig.lineLabel.width)
        .attr("height", chartConfig.lineLabel.height)
        .attr("x", xScale(lineData[0].year)-100)
        .attr("y", yScale(lineData[0].sale)-
        (chartConfig.lineLabel.height/2))
        .attr("stroke", lineColor)
        .attr("fill", lineColor)
        .attr("stroke-width", 1);
        

group.append("text")
		.attr("dx", xScale(lineData[0].year)-(chartConfig.lineConnectorLength+7))
    .attr("dy", yScale(lineData[0].sale)+4) // 4 is padding
		.attr("text-anchor", "end")
    .attr("class", "lineLabel")
		.style("fill", "white")
		.text(lineLabel);        


group.append("line")
   .attr({ 
   x1: xScale(lineData[0].year), y1: yScale(lineData[0].sale), //start of the line
   x2: xScale(lineData[0].year)-chartConfig.lineConnectorLength, y2: yScale(lineData[0].sale)  //end of the line
         })
  .attr('stroke', lineColor)
  .attr('stroke-width', 2)
  .attr('fill', lineColor);
  
  return group;
}
