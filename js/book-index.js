
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