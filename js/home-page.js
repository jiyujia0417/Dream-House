var homepagebox = document.getElementById("homepage-box");
var homepageslider = document.getElementById("homepage-slider");
var homepageleft = document.getElementById("homepage-left");
var homepageright = document.getElementById("homepage-right");
var homepageshift = document.getElementById("homepage-shift");
var homepageindex = 1;
var homepagetimer;
var homepageisMoving = false;
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

function homepagenext(){
	if(homepageisMoving){
		return;
	}
	homepageisMoving = true;
	homepageindex++;
	animate(homepageslider,{left:-1250*homepageindex},function(){
		if(homepageindex === 4){
			homepageslider.style.left = "-1250px";
			homepageindex = 1;
		}
		homepageisMoving = false;
	});
}
function homepageprev(){
	if(homepageisMoving){
		return;
	}
	homepageisMoving = true;
	homepageindex--;
	animate(homepageslider,{left:-1250*homepageindex},function(){
		if(homepageindex === 0){
			homepageslider.style.left = "-3750px";
			homepageindex = 3;
		}
		homepageisMoving = false;
	});
}
var homepagetimer = setInterval(homepagenext, 4000);
// 划上划出
homepagebox.onmouseover = function(){
	animate(homepageleft,{opcity:90})
	animate(homepageright,{opcity:90})
	clearInterval(homepagetimer);
}
homepagebox.onmouseout = function(){
	animate(homepageleft,{opcity:0})
	animate(homepageright,{opcity:0})
	homepagetimer = setInterval(homepagenext, 4000);
}
homepageright.onclick = homepagenext;
homepageleft.onclick = homepageprev;
// 获取显示字体
var homepageshift = document.getElementById("homepage-shift");
var homepagesList = homepageshift.children; 
var homepageIndex = 0;
function homepagenavmove(){
	if(homepageIndex >= 3){
		homepagesList[0].className = "homepage-jiao";
		for(var i = 0;i < homepagesList.length;i++){
			homepagesList[i].className = "";
		}
		homepageIndex = 0;
	} else{
		homepagesList[homepageIndex].className ="homepage-jiao";
		homepageIndex ++;
	}
}
setInterval(homepagenavmove, 1000);
var homepagegotop = document.getElementById("homepage-go-top");
homepagegotop.onclick = function(){
	var homepageintime = setInterval(function(){
		var homepagecurrent = document.body.scrollTop || document.documentElement.scrollTop;
		var homepagespeed = Math.floor(-homepagecurrent/10);
		document.body.scrollTop = document.documentElement.scrollTop = homepagecurrent + homepagespeed;
		if(homepagecurrent <= 0){
			clearInterval(homepageintime);
		}
	},16)
}