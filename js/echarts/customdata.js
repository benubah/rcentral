
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

var f=echarts.init(document.getElementById("rugs_chart"),a);
f.setOption({title:{text:"R User Groups",subtext:"Number of Groups by Continent"},tooltip:{trigger:"axis"},legend:{data:["Number of Groups"]},toolbox:{show:!0,feature:{magicType:{show:!0,title:{line:"Line",bar:"Bar"},type:["line","bar"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"category",data: continents}],yAxis:[{type:"value"}],series:[{name:"Number of Groups",type:"bar",data:counts }]})

});


