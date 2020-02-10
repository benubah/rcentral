var rdtcharts=echarts.init(document.getElementById("rdtchart"));

rdtcharts.setOption({title:{text:"R Downloads",subtext:"Yearly Downloads"},tooltip:{trigger:"axis"},legend:{x:220,y:40,data:["Number of Downloads"]},toolbox:{show:!0,feature:{magicType:{show:!0,title:{line:"Line",bar:"Bar"},type:["line","bar"]},restore:{show:!0,title:"Restore"},saveAsImage:{show:!0,title:"Save Image"}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["2015","2016","2017"]}],yAxis:[{type:"value"}],series:[{name:"Number of Downloads",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:[894152,670705, 826980]}]})

var rdchart = echarts.init(document.getElementById('rd_chart'));

rdchart.showLoading();

$.getJSON('data/rdownloads.json', function (rddata) {
    rdchart.hideLoading();

    option = { 
	title:{text:"R Downloads by OS",subtext:"Source: www.r-pkg.org"},
        tooltip : {
            trigger: 'axis',
		
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
legend:{data:["OSX","SRC","Windows", "Uncategorized"]},
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false, title:"Text"},
                magicType: {show: true, type: ['line', 'bar', 'stack'], title:{line:"Line",bar:"Bar", stack:"Stack"}},
                restore : {show: true, title: "Restore"},
                saveAsImage : {show: true, title: "Save Image"}
            }
        },
        calculable : true,
                grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type : 'category',
                data : rddata.dates
            }
        ],
        yAxis: [
            {
                type : 'value'   
                
            }
        ],
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: false,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
        series : [
            {
                name: 'OSX',
                type: 'bar',
                data: rddata.osx
            },
{
                name: 'SRC',
                type: 'bar',
                data: rddata.src
            },

{
                name: 'Windows',
                type: 'bar',
                data: rddata.win
            },
{
                name: 'Uncategorized',
                type: 'bar',
                data: rddata.NA
            },
        ]
    };

    rdchart.setOption(option);
});



var rdvchart = echarts.init(document.getElementById('rdversion'));
var colors = ['#5793f3', '#d14a61', '#675bba'];
rdvchart.showLoading();

$.getJSON('data/rdbyversion.json', function (rdvdata) {
    rdvchart.hideLoading();

    option = { 
	title:{text:"R Downloads by Version",subtext:"Source: www.r-pkg.org"},
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false, title:"Text"},
                magicType: {show: true, type: ['line', 'bar'], title:{line:"Line",bar:"Bar"}},
                restore : {show: true, title: "Restore"},
                saveAsImage : {show: true, title: "Save Image"}
            }
        },
        calculable : true,
        legend:{data:["2017","2016", "2015"]},

        grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return ' ' + params.value
                            + (params.seriesData.length ? '?' + params.seriesData[0].data : '');
                    }
                }
            },
                data : rdvdata.version2017
            },

            {
                type: 'category',
position: 'bottom',
			offset: 90,

            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '  ' + params.value
                            + (params.seriesData.length ? '?' + params.seriesData[0].data : '');
                    }
                }
            },
                data : rdvdata.version2016
            },
		 
		{
                type: 'category',
			position: 'bottom',
			offset: 40,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '  ' + params.value
                            + (params.seriesData.length ? '?' + params.seriesData[0].data : '');
                    }
                }
            },
                data : rdvdata.version2015
            },

        ],
        yAxis: [
            {
                type : 'value',
			
			axisLabel : { formatter: '{value}' }
                             
            },
            
        ],
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
        series : [
            {
                name: '2017',
                type: 'scatter',
 
                data: rdvdata.downloads2017
            },
            {
                name: '2016',
                type: 'scatter',
                xAxisIndex: 1,
                data: rdvdata.downloads2016
            },

            {
                name: '2015',
                type: 'scatter',
                xAxisIndex: 2,
                data: rdvdata.downloads2015
            },

            
        ]
    };

    rdvchart.setOption(option);

});


var stchart = echarts.init(document.getElementById('st_chart'));

stchart.showLoading();

$.getJSON('data/rtags.json', function (stdata) {
    stchart.hideLoading();

    option = { 
	title:{text:"StackOverflow R Questions",subtext:"Source: www.data.stackexchange.com"},
        tooltip : {
            trigger: 'axis',
		
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
legend:{data:["Machine-Learning","Artificial-Intelligence","Deep-Learning", "Statistics"]},
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false, title:"Text"},
                magicType: {show: true, type: ['line', 'bar', 'stack'], title:{line:"Line",bar:"Bar", stack:"Stack"}},
                restore : {show: true, title: "Restore"},
                saveAsImage : {show: true, title: "Save Image"}
            }
        },
        calculable : true,
                grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type : 'category',
                data : stdata.dates
            }
        ],
        yAxis: [
            {
                type : 'value'   
                
            }
        ],
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: false,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
        series : [
            {
                name: 'Machine-Learning',
                type: 'line',
                data: stdata.Rml,
			smooth:!0,
			itemStyle:{normal:{areaStyle:{type:"default"}}}
            },
{
                name: 'Artificial-Intelligence',
                type: 'line',
                data: stdata.Rai,
smooth:!0,
			itemStyle:{normal:{areaStyle:{type:"default"}}}
            },

{
                name: 'Deep-Learning',
                type: 'line',
                data: stdata.Rdl,
smooth:!0,
			itemStyle:{normal:{areaStyle:{type:"default"}}}
            },
{
                name: 'Statistics',
                type: 'line',
                data: stdata.Rstatistics,
smooth:!0,
			itemStyle:{normal:{areaStyle:{type:"default"}}}
            },
        ]
    };

    stchart.setOption(option);
});
