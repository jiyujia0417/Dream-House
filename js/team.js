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
var teamMember = document.getElementsByClassName("team-member")[0];
var memberHover = document.getElementsByClassName("member-hover")[0];
var memberShares = document.getElementsByClassName("member-shares")[0];
var shares1 = document.getElementsByClassName("shares1")[0];
var shares2 = document.getElementsByClassName("shares2")[0];
var shares3 = document.getElementsByClassName("shares3")[0];
var shares4 = document.getElementsByClassName("shares4")[0];
var rate1 = document.getElementsByClassName("rate1")[0];
var rate2 = document.getElementsByClassName("rate2")[0];
var rate3 = document.getElementsByClassName("rate3")[0];
var rate4 = document.getElementsByClassName("rate4")[0];
// var times = document.getElementsByClassName("times")[0];
// var intervalId;
var num=0;
var width=0;

//实现进度条动态效果
var index = 1;                                           
var isMoving = false;
window.onload = function(){
	var index = 0;
	var intervalId = setInterval(function(){
		if(index>=104) 
			clearInterval(intervalId);
		else{
			index++;
			// animate(shares1, {left:index});
			shares1.style.left = index + "px";
			shares1.style.background = "#ccffff";
		}
	},100)
}
window.onload = function(){
	var index = 0;
	intervalId = setInterval(function(){
		if(index>=40)
			clearInterval(intervalId);
		else{
			index++;
			rate1.innerText = index + "%";
		}
	},100)
}
window.onload = function(){
	var index = 0;
	var intervalId = setInterval(function(){
		if(index>=104) 
			clearInterval(intervalId);
		else{
			index++;
			// animate(shares1, {left:index});
			shares2.style.left = index + "px";
			shares2.style.background = "#ccffff";
		}
	},100)
}
window.onload = function(){
	var index = 0;
	intervalId = setInterval(function(){
		if(index>=40)
			clearInterval(intervalId);
		else{
			index++;
			rate2.innerText = index + "%";
		}
	},100)
}
window.onload = function(){
	var index = 0;
	var intervalId = setInterval(function(){
		if(index>=104) 
			clearInterval(intervalId);
		else{
			index++;
			// animate(shares1, {left:index});
			shares3.style.left = index + "px";
			shares3.style.background = "#ccffff";
		}
	},100)
}
window.onload = function(){
	var index = 0;
	intervalId = setInterval(function(){
		if(index>=40)
			clearInterval(intervalId);
		else{
			index++;
			rate3.innerText = index + "%";
		}
	},100)
}
window.onload = function(){
	var index = 0;
	var intervalId = setInterval(function(){
		if(index>=104) 
			clearInterval(intervalId);
		else{
			index++;
			// animate(shares1, {left:index});
			shares4.style.left = index + "px";
			shares4.style.background = "#ccffff";
		}
	},100)
}
window.onload = function(){
	var index = 0;
	intervalId = setInterval(function(){
		if(index>=40)
			clearInterval(intervalId);
		else{
			index++;
			rate4.innerText = index + "%";
		}
	},100)
}
teamMember.onmouseover = function(){
	intervalId = setInterval(function(){
		var left = 130px;
		var top = 160;
		var styleObj = getComputedStyle(memberHover);
		var objLeft = 30;
		var objTop = 25;
		memberHover.style.left = (left - 1) + "px";
		memberHover.style.top = (top - 1) + "px";
		while(left=objLeft && top=objTop){
			clearInterval(intervalId);
		}
		left -= 5;
		top -= 5;
	},1000)
}
