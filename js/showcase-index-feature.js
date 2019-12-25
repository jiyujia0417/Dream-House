
// 点击缩略图得到大图
var smallpic = document.getElementById("showcase-inside-smallpic");
//在smallpic里找小图
var imgList=smallpic.getElementsByTagName("img");
var bigpic=document.getElementById("showcase-inside-bigpic");
//若要将所有缩略图都完成操作，需要遍历
for(var i=0;i<imgList.length;i++){
    //改变大图的链接
    imgList[i].onclick=function(){
        var imgSrc=this.getAttribute("src");
        bigpic.setAttribute("src",imgSrc);
    }
}

var showcaseBtn=document.getElementById("showcase-inside-btn");
var dreamBtn=document.getElementById("showcase-dream-btn");

// 鼠标移动时改变右上方按钮内部的的颜色
dreamBtn.onmousemove=function(){
    this.setAttribute("class","showcase-inside-pb");
}
dreamBtn.onmouseout=function(){
    this.setAttribute("class","showcase-dream-btn");
}

// 鼠标移动时改变缩略图下方按钮内部的的颜色
var btnList=document.getElementsByClassName("inside-feature-btn");
for(var i=0;i<btnList.length;i++){
    btnList[i].onmousemove=function(){
        this.setAttribute("class","showcase-inside-bt");
    }
    btnList[i].onmouseout=function(){
        this.setAttribute("class","inside-feature-btn");
    }
}
