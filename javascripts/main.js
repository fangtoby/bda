// JavaScript Document
(function(){

	function getRandom(min,max){
		return Math.floor(Math.random()*(max-min)+min);
	}
	
	function getRandomArray(size,max)
	{
		var arr = [];
		for(var i = 0; i < size ; i++){
			arr.push(getRandom(1,max));
		}
		return arr;
	}
	
	function getArrayCount(arr)
	{
		var counter = arr.length;
		var number = 0;
		for(var i=0;i<counter;i++){
			number += arr[i];
		}
		return number;
	}
	//gelement.appendChild();
	var arr_a = getRandomArray(10,1000),
		arr_b = getRandomArray(10,1000);
	
	arr_a = [86,83,68,73,29,61,21,86,43,92];
	arr_b = [ 2,26,97, 8,19,24,68,75,99,67];
	var a = getArrayCount(arr_a);
	var b = getArrayCount(arr_b);
	console.log(a);
	console.log(b);
	console.log(a-b);
	console.log((a+b)/2);
	
	var arr_count = arr_a.concat(arr_b).sort(function(a,b){return a>b?1:-1});
	var new_a = [],
		new_b = [],
		new_c = [];
	//
	console.log(arr_count);
	//
	new_a.push(arr_count[20-1]);
	new_b.push(arr_count[20-2]);
	new_c = arr_count.slice(0,18);
	
	console.log(new_a);
	console.log(new_b);
	console.log(new_c);
	
	for(var j = 0 ;j < 9; j++){
		if( getArrayCount(new_a) >= getArrayCount(new_b) ){
			new_b.push(new_c[new_c.length -1]);
			new_c.pop();
			if(getArrayCount(new_a) >= getArrayCount(new_b)){
				new_a.push(new_c[0]);
				new_c.shift();
			}else{
				new_a.push(new_c[new_c.length -1]);
				new_c.pop();
			}
		}else{
			new_a.push(new_c[new_c.length -1]);
			new_c.pop();
			if(getArrayCount(new_b) >= getArrayCount(new_c)){
				new_b.push(new_c[0]);
				new_c.shift();
			}else{
				new_b.push(new_c[new_c.length -1]);
				new_c.pop();
			}
		}
	}
	a = getArrayCount(new_a);
	b = getArrayCount(new_b);
	console.log(a);
	console.log(b);
	console.log(new_a.sort(function(a,b){return a>b?1:-1}));
	console.log(new_b.sort(function(a,b){return a>b?1:-1}));
	console.log(new_c);
	
})();
$(function(){
	function getRandom(min,max){
		return Math.floor(Math.random()*(max-min)+min);
	}
	
	function getRandomArray(size,max)
	{
		var arr = [];
		for(var i = 0; i < size ; i++){
			arr.push(getRandom(1,max));
		}
		return arr;
	}
	var SVG=function(h,w){
		 var NS="http://www.w3.org/2000/svg";
		 var svg=document.createElementNS(NS,"svg");
		 svg.setAttribute("height",h);
		 svg.setAttribute("width",w);
		 svg.setAttribute("xmlns",NS);
		 svg.setAttribute("version",'1.1');
		 return svg;
	}
	var CIRCLE=function(x,y,r,dir,sdir,fill){
		 var NS="http://www.w3.org/2000/svg";
		 var SVGObj= document.createElementNS(NS,"circle");
		 SVGObj.setAttribute("cx",x);
		 SVGObj.setAttribute("cy",y);
		 SVGObj.setAttribute("r",r);
		 SVGObj.setAttribute("dir",dir);
		 SVGObj.setAttribute("sdir",sdir);
		 SVGObj.style.fill=fill;
		 return SVGObj;
	}
	var G = function(id){
		 var NS="http://www.w3.org/2000/svg";
		 var SVGObj= document.createElementNS(NS,"g");	
		 SVGObj.setAttribute("id",id);
		 return SVGObj;
	}
	
	var PL = function(points){
		var NS="http://www.w3.org/2000/svg";
		var SVGObj= document.createElementNS(NS,"polyline");	
		SVGObj.setAttribute("points",points);
		SVGObj.style.fill= 'none';
		SVGObj.style.stroke= '#111111';
		SVGObj.style.strokeWidth = 1;
		return SVGObj;
	}
	
	var arrX = getRandomArray(200,1015),
		arrY = getRandomArray(200,297);
		
	var svg = SVG(300,1018);
	var g = G('ng');
	var plPosition = '';
	
	
	for(var i =0 ;i<200;i++){
		if(i % 2){
			way = 1;
		}else{
			way = -1;
		}
		var circle = CIRCLE(arrX[i],arrY[i],3,way,-way,"#111111");
		g.appendChild(circle);
		plPosition += (arrX[i])+","+(arrY[i])+" ";
	}	
	
	var polyline = PL(plPosition);
	var sg = G('sg');
	sg.appendChild(polyline);
	svg.appendChild(sg);
	svg.appendChild(g);
	$('.chart-frame').append(svg);
	var i = 0;
	var timer = setInterval(function(){
		var plPosition = '';
		$('#ng circle').each(function(){
			var element = $(this);
			var x = element.attr('cx'),
			y = element.attr('cy'),
			way = element.attr('dir'),
			sway = element.attr('sdir');
			if( x > 1000 || x < 3){
				way = -way ;
			}
			if( y > 300 || y < 3){
				sway = -sway ;
			}
			element.attr("dir",way);
			element.attr("sdir",sway);
			element.attr("cx",parseInt(x)+parseInt(way));
			element.attr("cy",parseInt(y)+parseInt(sway));
			plPosition += (parseInt(x)+parseInt(way))+","+(parseInt(y)+parseInt(sway))+" ";
		});
		//console.log($('#sg points'));
		$('#sg polyline').attr('points',plPosition);
	},1);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});