/**
 * Created by wangxueli on 2016/8/29.
 */
$(window).load(function () {
    var flag = false;

    function hidecom() {
        $("#slidediannao").hide();
        $("#imdltp1").hide();
        $("#imdltp2").hide();
        $("#imdltp3").hide();
        $("#imdltp4").hide();
        $("#imdltp5").hide();
    }

    function showcom() {
        $("#slidediannao").css("display", "block");
        $("#imdltp1").css("display", "block");
        $("#imdltp2").css("display", "block");
        $("#imdltp3").css("display", "block");
        $("#imdltp4").css("display", "block");
        $("#imdltp5").css("display", "block");
    }

    function fadecom() {
        hidecom()
        $("#slidediannao").fadeIn(400, function () {
            $("#imdltp1").fadeIn(400, function () {
                $("#imdltp2").fadeIn(400, function () {
                    $("#imdltp3").fadeIn(400, function () {
                        $("#imdltp4").fadeIn(400, function () {
                            $("#imdltp5").fadeIn(400, function () {
                                flag = true;
                                showcom()
                            })
                        })
                    })
                })
            })
        })
    };

    var slidepic = 0;
    var windowH = $(window).height();
    var windowW = $(window).width();
    $("#slidebox").css("height", windowH);
    $(".slidescreen").css("height", windowH);
    $("#slideimg>li>img").css("height", windowH);
    $("#slideimg>li>img").css("width", windowW);
    $("#navpageimg>img").css("height", windowH);
    $("#navpageimg>img").css("width", windowW);
    var slideW = $("#slideimg>li>img").css("width");
    $("#slideleft").click(function () {
        if (flag) {
            flag = false;
            if (slidepic == 0) {
                $("#slideimg").css("left", -(slideLis.length) * parseInt(slideW) + "px");
                slidepic = slideLis.length;
            }
            $("#slideol>li").removeClass("current");
            slidepic--
            $("#slideol>li").eq(slidepic).addClass("current");
            //定义位移值
            var target = -slidepic * parseInt(slideW);
            //移动图片
            animatezdy($("#slideimg")[0], target, function () {
                flag = true;
            })
        }
    })
    $("#slideright").click(function () {
        cl();
    })
    var slideLis = $("#slideimg").children();
    for (var i = 0; i < slideLis.length; i++) {
        var li = $("<li></li>");
        $("#slideol").append(li);
    }
    var firstimg = $("#slideimg").children().eq(0).clone(true);
    $("#slideimg").append(firstimg);
    fadecom();
    $("#slideol>li").eq(0).addClass("current");
    $("#slideol>li").mouseenter(function () {
        $("#slideol>li").removeClass("current");
        $(this).addClass("current");
        var target = 0;
        if (slidepic == slideLis.length) {
            $("#slideimg").css("left", 0);
        }
        slidepic = $(this).index();
//                console.log(slidepic);
        target = -slidepic * parseInt(slideW);
//                console.log(target);
        animatezdy($("#slideimg")[0], target)
    })
    function animatezdy(dom, target, fn) {
        var flag = true;
        var obj = $(dom);
        clearInterval(dom.timer);
        dom.timer = setInterval(function () {
            var leader = parseInt(obj.css("left"));
//                    console.log(leader);
//                     console.log(obj.offset().left);
//                    console.log(obj.position().left)
            var step = 20;
            step = obj.offset().left < target ? step : -step;
            leader = leader + step;
            if (leader != target) {
                flag = false;
            } else {
                flag = true;
            }
            if (Math.abs((obj.offset().left) - target) > Math.abs(step)) {
//                        obj.css("left", (leader+"px"))
                obj.offset({left: leader});
            } else {
//                        obj.css("left",(target+"px"));
                obj.offset({left: target});
                clearInterval(dom.timer);
            }
        }, 5)
        if (flag) {
            if (fn) {
                fn()
            }
        }
    }

    function cl() {
        if (flag) {
            flag = false;
            if (slidepic == slideLis.length) {
                $("#slideimg").css("left", 0);
                slidepic = 0;
            }
            //重置方块列表ol
//                for (var j = 0; j < olLis.length; j++) {
//                    olLis[j].className = "";
//                }
            //自动增加pic值
            $("#slideol>li").removeClass("current");
            slidepic++
            //统一下部方块和图片计数

            if (slidepic == slideLis.length) {
                $("#slideol>li").eq(0).addClass("current");
            } else {
                $("#slideol>li").eq(slidepic).addClass("current");
            }
            //定义位移值
            var target = -slidepic * parseInt(slideW);
            //移动图片
            animatezdy($("#slideimg")[0], target, function () {
                flag = true;
            })
        }
    }
})