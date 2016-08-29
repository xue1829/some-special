/**
 * Created by wangxueli on 2016/8/29.
 */
$(function(){

    //让图片position
    var str;
    //生成ul
    str="<ul></ul>";
    $("#main").append(str);
    //给所有的ul加上li和图片 图片要absolute
    for(var i=0;i<5;i++)
    {
        $("#main>ul").append("<li><img src='images/0"+(i+1)+".jpg'/></li>");
        //给每个图片设置id
        $("#main>ul>li").eq(i).children("img").attr("id","img"+i);
    }
    //设置一开始显示的位置
    var imgss=$(document).width()/2-100;
    $("#main img").css("left",imgss+"px");
    //鼠标进入图片后的动画
    $("#main>ul #img4").mouseenter(function () {
        $("#add").animate({
            "width":"667px",
            "height":"667px",
            "border-radius":"667px",
            "left":"347px",
            "top":"0",
            "margin-left":"0px",
            "margin-top":"0px"

        },800);
        //console.log($(this).parent().siblings().children("#img0").attr("id"));
        $(this).parent().siblings().children("#img0").animate({
            "left":"440px",
            "top": "-180px",
        },800);
        $(this).parent().siblings().children("#img1").animate({
            "left":"440px",
            "top": "180px",
        },800);
        $(this).parent().siblings().children("#img2").animate({
            "left":"725px",
            "top": "-180px",
        },800);
        $(this).parent().siblings().children("#img3").animate({
            "left":"725px",
            "top": "180px",
        },800);


    });
    $("#main>ul #img4").parent().siblings().children("img").mouseenter(function () {
        $("#add").animate({
            "opacity":1
        },10);

    });
    $("#main>ul #img4").parent().siblings().children("img").mouseleave(function () {
        /* $(this).animate({
         "opacity":1
         },10);*/
    });

    $("#main").mouseleave(function (){
        $(this).find("img").animate({
            "left":imgss+"px",
            "top":0,
        },1000);
        $("#add").animate({
            "width":"200px",
            "height":"200px",
            "border-radius":"200px",
            "left":"50%",
            "top":"50%",
            "margin-left":"-100px",
            "margin-top":"-100px"

        },800);
    });

})