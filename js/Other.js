/**
 * Created by Administrator on 2016/5/14.
 */
$(function () {
    /*===================菜单 JS 动作=====================*/
    var menus = $(".t_c_bottom ul>li:first").siblings().andSelf();
    var thisMenu = $("#thisMenu");
    var mt = 161;//默认距离
    var mNow = 0;//获取当前的li
    for (var i = 0; i < menus.length; i++) {
        if (menus.eq(i).hasClass("thisli"))
            mNow = i;
    }
    //给定 thisli 默认位置
    thisMenu.css({left: (mNow * 104 + mt) + "px"});
    menus.hover(function () {
        MenuMove($(this), ($(this).index() * 104 + mt), 1)
    }, function () {
        MenuMove($(this), (mNow * 104 + mt), 0)
    });
    var MenuAuto;

    function MenuMove(tn, lefts, move) {
        var ti = tn.index();
        var nodes = menus.eq(ti).children(".Nodes");
        nodes.stop();
        clearTimeout(MenuAuto);
        var _h = nodes.children("ul").height() + 23;//8个像素是上、下圆角图片高度 15个像素是 div 的 padding 值
        if (move === 1) {
            thisMenu.stop();
            thisMenu.animate({left: lefts + "px"}, 165)
            nodes.css({height: "0px"}).animate({height: _h + "px"}, 300);
        }
        else if (move === 0) {
            nodes.css({height: _h + "px"}).animate({height: "0px"}, 300);
            MenuAuto = setTimeout(function () {
                thisMenu.animate({left: lefts + "px"}, 300)
            }, 1250);
        }
    }

})

window.onload = function () {

    //1. 创建case下的ul下的li
    //创建ulLeft 下的 <li><a href="#"><img src="" alt=""/><div></a><img src="" alt=""/></div></li>
    for (var i = 0; i <= 14; i++) {
        var $li = "<li><a><img class='caseImg' src='images/" + i + ".jpg' /><div class='info'info></div></a><img class='caseImg2' src='images/" + i + ".jpg' /></li>";

        $("#ul1").append($li);
    }
    for (var i = 15; i <= 29; i++) {
        var $li = "<li><a><img class='caseImg' src='images/" + i + ".jpg' /><div class='info'info></div></a><img class='caseImg2' src='images/" + i + ".jpg' /></li>";
        $("#ul2").append($li);
    }



    //2 注册事件，实现动画效果

    //2.1点击图片，图片翻转
    //封装翻转函数
    var turn = function (target, time, opts) {
        target.find('a').hover(function () {
            $(this).find('img').stop().animate(opts[0], time, function () {
                $(this).hide().next().show();
                $(this).next().animate(opts[1], time);
            });
        }, function () {
            $(this).find('.info').animate(opts[0], time, function () {
                $(this).hide().prev().show();
                $(this).prev().animate(opts[1], time / 2);
            });
        });
    }

    var lilOpts = [{'width': 0}, {'width': '216px'}];
    turn($("#case li"), 150, lilOpts);


    //2.2 点击div注册事件，放大这张图片  鼠标点击放大图，或者鼠标离开放大图，放大效果消失
    //2.2.1 点击div注册事件，放大这张图片  鼠标点击放大图
    $(".vertical .info").click(function () {
        $(this).parent().next().css("display", "block");
    });
    //2.2.2 鼠标点击放大图，或者鼠标离开放大图，放大效果消失
    $(".vertical li").on("click mouseleave", ".caseImg2", function () {
        $(this).css("display", "none");
    });

    //2.3 ourcase 动画
    //获取case的上面高度
    var caseTop = $("#case").offset().top;
    //当页面滚动到#case,img出现
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop < caseTop) {
            $("#case .ourcase").animate({
                "width": "539px"
            }, 1200);
        }
    });





    //scroll效果
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

//找人
    var topPart = document.getElementById("topPart");//顶部
    var navBar = document.getElementById("navBar");//导航栏
    var mainPart = document.getElementById("mainPart");//底部
//页面滚动的时候判断scroll().top 的数值 是否大于 topPart的高度
//如果大于了 就改变navBar的样式
//如果小于了 就恢复原来的
    window.onscroll = function () {
        //判断scroll().top和topPart数值大小
        //console.log(scroll().top);
        if (scroll().top > topPart.offsetHeight) {
            //就改变navBar的样式
            //navBar.style.position = "fixed";
            navBar.className = "nav fixed";
            //为了防止下面的页面突然掉上来
            //给下面的页面加一个padding-top
           /* mainPart.style.paddingTop = navBar.offsetHeight + "px";//注意加单位*/

        } else {
            navBar.className = "nav";
            //回去之后 把padding-top去掉
          /*  mainPart.style.paddingTop = "0px";*/
        }
    };

//    //定时器
//    var demo = document.getElementById("demo");
//    var timer = null;
//   timer = setInterval(fn, 100);  //  每隔1秒，就去 调用 一次 fn 这个函数
//    var num = 1;
//    function fn() {
//        num++;
//        demo.innerHTML = num;
//        if(num >99){
//            clearInterval(timer);
//        }
//    }




};


