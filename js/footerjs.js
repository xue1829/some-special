/**
 * Created by Administrator on 2016-05-16.
 */
var step=0;
var footer=document.getElementById("footer");
var footnav=document.getElementById("nav");
var lis=footnav.children;

$("#marks").on("mouseenter",function () {
    $(this).animate({
        "left":"0"
    },300);
});
$("#marks").on("mouseleave",function () {
    //$(this).css("left","-5%");
    $(this).animate({
        "left":"-5%"
    },300);
});
//设置图片上透明效果
var wai=$(document).width()/5-2;
$("#ft1,#ft2,#ft4,#ft5,#ft3").css("width",wai+"px");

//设置背景滚动效果
setInterval(function () {
    step=step-1;
    footer.style.backgroundPositionX = step + "px";
},20);
//对下面的dd加上箭头
$("#ft21>dl>dd").prepend("<e>&gt;&nbsp;</e>");
//对下面的dd设置动画
$("#ft21>dl>dd").mouseenter(function () {
    $(this).animate({
        "opacity":1
    },100);


});
$("#ft21>dl>dd").mouseleave(function () {
    $(this).animate({
        "opacity":0.4
    },300);
});
$(".footl1>div").css("width",($(document).width()-20)/3);


//console.log($(document).width());


var json=["url(images/bird.png) center center no-repeat",
    "url(images/f.png) center center no-repeat",
    "url(images/zu.png) center center no-repeat",
    "url(images/头发.png) center center no-repeat",
    "url(images/ee1.png) center center no-repeat"];
for(var i=0;i<json.length;i++)
{
    $("#nav>li").eq(i).children("a").css("background",json[i]);
}
for(var i=0;i<5;i++)
{
    $("#nav>li").eq(i).on("mouseenter", function () {
        //alert($(this).width());改成动画
        $(this).children("span").addClass("fu");
        /*$(this).css("width","65px"
         );*/
        $(this).children("a").animate({
            "width":"70px",
            "height":"70px"

        },200);
    });
    $("#nav>li").eq(i).on("mouseleave", function () {
        //alert($(this).width());
        $(this).children("span").removeClass("fu");
        $(this).children("a").animate({
            "width":"65px",
            "height":"65px"
        },200);
    });
}



