if($("#rcon_chart").length){var f=echarts.init(document.getElementById("rcon_chart"),a);f.setOption({title:{text:"Line Graph",subtext:"Yearly/Quarterly Spending"},tooltip:{trigger:"axis"},legend:{x:220,y:40,data:["Intent","Pre-order","Deal"]},toolbox:{show:!0,feature:{magicType:{show:!0,title:{line:"Line",bar:"Bar",stack:"Stack",tiled:"Tiled"},type:["line","bar","stack","tiled"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Deal",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[10,12,21,54,260,830,710]},{name:"Pre-order",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[30,182,434,791,390,30,10]},{name:"Intent",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[1320,1132,601,234,120,90,20]}]})}