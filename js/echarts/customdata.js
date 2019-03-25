
d3.csv("data/groups.csv").then(function(data) {
   var cleandata = data.map(function(d) {
    var cleanD = {};
    d3.keys(d).forEach(function(k) {
      cleanD[_.trim(k)] = _.trim(d[k]);
    });
    return cleanD;
  });
  console.log(cleandata);
   
   var numberproj = d3.nest()
  .key(function(d) { return d.page  })
  .rollup(function(v) { return v.length;  })
  .entries(cleandata);
   dat3 = JSON.stringify(numberproj).replace(/key/g, "name");
  var parsedData = JSON.parse(dat3);
   var continents = [];
   var counts = [];
   for(let i = 0, l = parsedData.length; i < l; i++) {
      continents.push(parsedData[i].name)
     counts.push(parsedData[i].value)
   }
console.log(continents);
   console.log(counts);

var f=echarts.init(document.getElementById("rugs_chart"));
f.setOption({title:{text:"R User Groups",subtext:"Number of Groups by Continent"},tooltip:{trigger:"axis"},legend:{data:["Number of Groups"]},toolbox:{show:!0,feature:{magicType:{show:!0,title:{line:"Line",bar:"Bar"},type:["line","bar"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"category",data: continents}],yAxis:[{type:"value"}],series:[{name:"Number of Groups",type:"bar",data:counts }]})

});


d3.csv("data/groups.csv").then(function(data) {
 var cleandata = data.map(function(d) {
    var cleanD = {};
    d3.keys(d).forEach(function(k) {
      cleanD[_.trim(k)] = _.trim(d[k]);
    });
    return cleanD;
  });
  console.log(cleandata);

var n = echarts.init(document.getElementById('echart_world_map2'));

   
   var numberproj = d3.nest()
  .key(function(d) { return d.country  })
  .rollup(function(v) { return v.length;  })
  .entries(cleandata);
var dat2 = JSON.stringify(numberproj).replace(/key/g, 'name');
console.log(dat2);

    option = { 
	title:{text:"R User Groups Worldwide",subtext:"Number of User Groups by Country",x:"center",y:"top"},tooltip:{trigger:"item",formatter:function(a){var b=(a.value+"").split(".");return b=b[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,"),a.seriesName+"<br/>"+a.name+" : "+b}},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:{show:!0},dataView:{show:!0,title:"Text View",lang:["Text View","Close","Refresh"],readOnly:!1},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},dataRange:{min:0,max:100,text:["High","Low"],realtime:!1,calculable:!0,color:["#087E65","#26B99A","#26B99A","#FFFFFF"]},
series:[{name:"R User Groups ",type:"map",mapType:"world",roam:!1,mapLocation:{y:60},itemStyle:{emphasis:{label:{show:!0}}}, data:JSON.parse(dat2)
}]

    };

    n.setOption(option);
});

