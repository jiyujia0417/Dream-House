var zxybox=document.getElementById("zxy-room-slider");
var slider=document.getElementById("slider");
var zxytop=document.getElementById("zxytop");
var zxyhottom=document.getElementById("zxybottom");
var index=1;
// var timer;
var isMoving=false;
//轮播下一张的函数
function next(){
if(isMoving){
	return;
}
isMoving=true;
	index++;
	animate(slider,{top:-245*index},function(){
				 if(index===4){
		slider.style.top="-245px";
		index=1;
	}
	isMoving=false;
});}
function prev(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index--;
    animate(slider,{top:-245*index},function(){
	if(index===0){
		slider.style.top="-735px";
		index=3;
	}
	isMoving=false;
	});
}
var timer=setInterval(next,4000);
	//鼠标滑入清定时器
zxybox.onmouseover=function(){
	animate(zxytop,{opacity:50});
	animate(zxybottom,{opacity:50});
	clearInterval(timer);
}
	//鼠标滑出开定时器
zxybox.onmouseout=function(){
	animate(zxytop,{opacity:0});
	animate(zxybottom,{opacity:0});
	timer=setInterval(next,4000);
}
zxytop.onclick=next;
zxybottom.onclick=prev;
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