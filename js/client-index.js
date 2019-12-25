var ybox = document.getElementById("client-summary");
var yslider = document.getElementById("client-slider");
var yleft = document.getElementById("client-left");
var yright = document.getElementById("client-right");
var yindex = 1;
var ytimer;
var yisMoving = false;
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
ybox.onmouseover = function(){
	animate(yleft,{opcity:50})
	animate(yright,{opcity:50})

}
ybox.onmouseout = function(){
	animate(yleft,{opcity:0})
	animate(yright,{opcity:0})
}
function ynext(){
	if(yisMoving){
		return;
	}
	yisMoving = true;
	yindex++;
	animate(yslider,{left:-800*yindex},function(){
		if(yindex === 5){
			yslider.style.left = "-800px";
			yindex = 1;
		}
		yisMoving = false;
	});
}

function yprev(){
	if(yisMoving){
		return;
	}
	yisMoving = true;
	yindex--;
	
	animate(yslider,{left:-800*yindex},function(){
		if(yindex === 0){
			yslider.style.left = "-3200px";
			yindex = 4;
		}
		yisMoving = false;
	});
}

yright.onclick = ynext;
yleft.onclick = yprev;
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