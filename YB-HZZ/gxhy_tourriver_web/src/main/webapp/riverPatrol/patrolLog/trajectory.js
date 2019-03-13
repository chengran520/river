var WEB_ROOT = '/gxhy';
var trajectMap = {
	map:null,
	navg:null,
	routineId:'',
　 	getUrlParam: function(paraName) {
    　　　　var url = decodeURI(document.location);
    　　　　var arrObj = url.split("?");
    　　　　if (arrObj.length > 1) {
    　　　　　　var arrPara = arrObj[1].split("&");
    　　　　　　var arr;
    　　　　　　for (var i = 0; i < arrPara.length; i++) {
    　　　　　　　　arr = arrPara[i].split("=");
    　　　　　　　　if (arr != null && arr[0] == paraName) {
    　　　　　　　　　　return arr[1];
    　　　　　　　　}
    　　　　　　}
    　　　　　　return "";
    　　　　}
    　　},
	initData:function(){
		var opt = {routineId:trajectMap.routineId};
		var reulst = commonUtils.get(WEB_ROOT+"/routine/work/getPatrolUrl",opt,null);
		var pathUrl = "";
		if(reulst.flag){
			pathUrl = reulst.data.path;
			console.log(reulst.data);
		}
		console.log(pathUrl);
		trajectMap.init(pathUrl);
	},
	init:function(path){
		this.map = new AMap.Map('container', {
	        zoom: 16
	    });
		if(path!=null&&path!=""){
			trajectMap.pathNavigator(path);
		}
	},
	pathNavigator:function(path){
		AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

	        if (!PathSimplifier.supportCanvas) {
	            alert('当前环境不支持 Canvas！');
	            return;
	        }
	        var pathSimplifierIns = new PathSimplifier({
	            zIndex: 100,
	            //autoSetFitView:false,
	            map: trajectMap.map, //所属的地图实例

	            getPath: function(pathData, pathIndex) {

	                return pathData.path;
	            },
	            getHoverTitle: function(pathData, pathIndex, pointIndex) {

	                if (pointIndex >= 0) {
	                    //point 
	                    return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
	                }

	                return pathData.name + '，点数量' + pathData.path.length;
	            },
	            renderOptions: {

	                renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
	            }
	        });

	        window.pathSimplifierIns = pathSimplifierIns;

	        //设置数据
	        pathSimplifierIns.setData([{
	            name: '路线0',
	            path:  eval('(' + path + ')')
	        }]);
	        //对第一条线路（即索引 0）创建一个巡航器
	        var navg1 = pathSimplifierIns.createPathNavigator(0, {
	            loop: false, //循环播放
	            speed: 300 //巡航速度，单位千米/小时
	        });
	        navg1.start();
	        trajectMap.navg = navg1;
	    });
	},xjTraject:function(){
		trajectMap.navg.start();
	}
}
$(function(){
	trajectMap.routineId = trajectMap.getUrlParam('routineId');
	var p = $(window).height();	
	var contextH = $("#nav_headerDiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#container").height(p-contextH); 
	trajectMap.initData();
	$("#fh_div").click(function(){
		var ref = ''; 
		if (document.referrer.length > 0) { 
		  ref = document.referrer; 
		} 
		try { 
		  if (ref.length == 0 && opener.location.href.length > 0) { 
			  ref = opener.location.href; 
		  } 
		} catch (e) {}    
		location.href=ref;
	});
	$("#hf_div").click(function(){
		trajectMap.xjTraject();
	});
});
