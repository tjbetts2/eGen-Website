$(document).ready(function(){
	$("#news-small-1").click(function(){$("#news-large-2,#news-large-3,#news-large-4").stop().css("z-index","0").fadeTo("normal",0)});
	$("#news-small-1").click(function(){$("#news-large-1").css("z-index","5").fadeTo("normal",1)});
	$("#news-small-1").click(function(){$("#news-small-1").css({"border-top-color" : "red"})});
	$("#news-small-1").click(function(){$("#news-small-2,#news-small-3,#news-small-4").css({"border-top-color" : "dimgray"})});
	$("#news-small-1").click(function(){clearInterval(t)});
	$("#news-small-2").click(function(){$("#news-large-1,#news-large-3,#news-large-4").stop().css("z-index","0").fadeTo("normal",0)});
	$("#news-small-2").click(function(){$("#news-large-2").css("z-index","5").fadeTo("normal",1)});
	$("#news-small-2").click(function(){$("#news-small-2").css({"border-top-color" : "red"})});
	$("#news-small-2").click(function(){$("#news-small-1,#news-small-3,#news-small-4").css({"border-top-color" : "dimgray"})});
	$("#news-small-2").click(function(){clearInterval(t)});
	$("#news-small-3").click(function(){$("#news-large-1,#news-large-2,#news-large-4").stop().css("z-index","0").fadeTo("normal",0)});
	$("#news-small-3").click(function(){$("#news-large-3").css("z-index","5").fadeTo("normal",1)});
	$("#news-small-3").click(function(){$("#news-small-3").css({"border-top-color" : "red"})});
	$("#news-small-3").click(function(){$("#news-small-1,#news-small-2,#news-small-4").css({"border-top-color" : "dimgray"})});
	$("#news-small-3").click(function(){clearInterval(t)});
	$("#news-small-4").click(function(){$("#news-large-1,#news-large-2,#news-large-3").stop().css("z-index","0").fadeTo("normal",0)});
	$("#news-small-4").click(function(){$("#news-large-4").css("z-index","5").fadeTo("normal",1)});
	$("#news-small-4").click(function(){$("#news-small-4").css({"border-top-color" : "red"})});
	$("#news-small-4").click(function(){$("#news-small-1,#news-small-2,#news-small-3").css({"border-top-color" : "dimgray"})});
	$("#news-small-4").click(function(){clearInterval(t)});
	
	$(".shows").mouseover(function(){$(".shows2").css({"display":"block","float":"none","width":"220px","marginTop":"3px"})});
	$(".shows").mouseover(function(){$(".shows1").fadeIn("normal")});
	$(".shows").mouseout(function(){$(".shows1").stop().fadeOut("normal")});
	$(".shows1").mouseover(function(){$(".shows1").stop().fadeTo("normal",1)});
	$(".about").mouseover(function(){$(".about2").css({"display":"block","float":"none","width":"220px","marginTop":"3px"})});
	$(".about").mouseover(function(){$(".about1").fadeIn("normal")});
	$(".about").mouseout(function(){$(".about1").stop().fadeOut("normal")});
	$(".about1").mouseover(function(){$(".about1").stop().fadeTo("normal",1)});

	
	$("#facebook").mouseover(function(){$("#facebook").stop().animate({width:"100px"})});
	$("#facebook").mouseout(function(){$("#facebook").stop().animate({width:"30px"})});
	$("#facebook").mouseover(function(){$(".slinkf").fadeIn(0)});
	$("#facebook").mouseout(function(){$(".slinkr").css({"display":"none"})});
	$("#twitter").mouseover(function(){$("#twitter").stop().animate({width:"80px"})});
	$("#twitter").mouseout(function(){$("#twitter").stop().animate({width:"30px"})});
	$("#twitter").mouseover(function(){$(".slinkt").fadeIn(0)});
	$("#twitter").mouseout(function(){$(".slinkr").css({"display":"none"})});
	$("#google").mouseover(function(){$("#google").stop().animate({width:"93px"})});
	$("#google").mouseout(function(){$("#google").stop().animate({width:"30px"})});
	$("#google").mouseover(function(){$(".slinkg").fadeIn(0)});
	$("#google").mouseout(function(){$(".slinkr").css({"display":"none"})});
	$("#rss").mouseover(function(){$("#rss").stop().animate({width:"65px"})});
	$("#rss").mouseout(function(){$("#rss").stop().animate({width:"30px"})});
	$("#rss").mouseover(function(){$(".slinkr").fadeIn(0)});
	$("#rss").mouseout(function(){$(".slinkr").css({"display":"none"})});
	
	$("#loopedin-thumbnail-wrapper").mouseover(function(){$(this).stop().animate({height:"150px"})});
	$("#loopedin-thumbnail-wrapper").mouseout(function(){$(this).stop().animate({height:"50px"})});
	$("#loopedin-thumbnail-wrapper").mouseover(function(){$(".temp4").css({"display":"block"})});
	$("#loopedin-thumbnail-wrapper").mouseout(function(){$(".temp4").css({"display":"none"})});
	$("#nightcap-thumbnail-wrapper").mouseover(function(){$(this).stop().animate({height:"150px"})});
	$("#nightcap-thumbnail-wrapper").mouseout(function(){$(this).stop().animate({height:"50px"})});
	$("#nightcap-thumbnail-wrapper").mouseover(function(){$(".temp5").css({"display":"block"})});
	$("#nightcap-thumbnail-wrapper").mouseout(function(){$(".temp5").css({"display":"none"})});
	$("#takingthelunge-thumbnail-wrapper").mouseover(function(){$(this).stop().animate({height:"150px"})});
	$("#takingthelunge-thumbnail-wrapper").mouseout(function(){$(this).stop().animate({height:"50px"})});
	$("#takingthelunge-thumbnail-wrapper").mouseover(function(){$(".temp6").css({"display":"block"})});
	$("#takingthelunge-thumbnail-wrapper").mouseout(function(){$(".temp6").css({"display":"none"})});
	
	$("#older-news-button").click(function(){
		currentHeight1 = $("#post-wrapper").height();
		autoHeight1 = $("#post-wrapper").css('height', 'auto').height();
		$("#post-wrapper").height(currentHeight1).animate({height: autoHeight1});
	});
});

var c = 0;
var t = setInterval("CycleNews(c)",5000);
function CycleNews() {
	if (c==0) {
	$("#news-large-2").css("z-index","5").fadeTo("normal",1);
	$("#news-large-1,#news-large-3,#news-large-4").stop().css("z-index","0").fadeTo("normal",0);
	$("#news-small-2").css({"border-top-color" : "red"});
	$("#news-small-1,#news-small-3,#news-small-4").css({"border-top-color" : "dimgray"});
	c++;
	}
	else if (c==1) {
	$("#news-large-3").css("z-index","5").fadeTo("normal",1);
	$("#news-large-1,#news-large-2,#news-large-4").stop().css("z-index","0").fadeTo("normal",0);
	$("#news-small-3").css({"border-top-color" : "red"});
	$("#news-small-1,#news-small-2,#news-small-4").css({"border-top-color" : "dimgray"});
	c++;
	}
	else if (c==2) {
	$("#news-large-4").css("z-index","5").fadeTo("normal",1);
	$("#news-large-1,#news-large-2,#news-large-3").stop().css("z-index","0").fadeTo("normal",0);
	$("#news-small-4").css({"border-top-color" : "red"});
	$("#news-small-1,#news-small-2,#news-small-3").css({"border-top-color" : "dimgray"});
	c++;
	}
	else if (c==3) {
	$("#news-large-1").css("z-index","5").fadeTo("normal",1);
	$("#news-large-2,#news-large-3,#news-large-4").stop().css("z-index","0").fadeTo("normal",0);
	$("#news-small-1").css({"border-top-color" : "red"});
	$("#news-small-2,#news-small-3,#news-small-4").css({"border-top-color" : "dimgray"});
	c = 0;
	}
}



