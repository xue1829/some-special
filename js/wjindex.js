/**
 * Created by Administrator on 2016/5/14.
 */
$(function () {

    //1.用户登录页面
    //实现输入框的功能  获得焦点时自动清除自带的文字  失去焦点时得到原来的文字
    $("#wj_username").focus(function () {
        var result = $(this).val();

        if(result==="请输入用户名"){
            $(this).val("");

        }
    })
    $("#wj_username").blur(function () {
        var result=$(this).val();
        if(result===""){
            $(this).val("请输入用户名")
        }
    })
    //密码强度
    var wj_pwd = document.getElementById("wj_pwd");
    var strength = document.getElementById("strength");
    var strengthLevel = document.getElementById("strengthLevel");
    var array = ["", "低", "中", "高"];

    //在用户输入（键盘弹起）的时候去判断 判断密码 的强度 然后设置样式
    wj_pwd.onkeyup = function () {
        var level = 0;
        //如果有小写字母
        if (/[a-z]/.test(this.value)) {
            level++;
        }
        //如果有数字
        if (/[0-9]/.test(this.value)) {
            level++;
        }
        //除了小写字母和数字之外的其他字符
        if (/[^a-z0-9]/.test(this.value)) {
            level++;
        }
        //如果用户输入的密码长度小于6位 就不显示
        if (this.value.length < 6) {
            level = 0;
        }
        //根据级别 设置样式
        strength.innerHTML = array[level];
        strengthLevel.className = "strengthLv" + level;
    }
    //正则表达式  验证表单各项是否输入正确
    function my$(id){
        return document.getElementById(id);
    }
    //邮箱
    var main_Email=my$("wj_Main_Email");
    //定义邮箱规则
    var wj_regEmail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    //调用验证函数
    wj_check(main_Email,wj_regEmail);

    //qq号码
    var main_qq=my$("wj_main_qq");
    //定义qq号码的规则
    var wj_regQQ=/^[1-9]\d{4,10}$/;
    //调用函数
    wj_check(main_qq,wj_regQQ);
    //手机号码
    var main_phone=my$("wj_main_phone");
    var wj_regPhone= /^(13[0-9]|14[57]|15[0-9]|17[01678]|18[0-9])\d{8}$/;
    wj_check(main_phone,wj_regPhone);

    //座机号
    var main_tel=my$("wj_main_tel");
    var wj_regTel=/^0\d{2,3}-\d{7,8}$/;
    wj_check(main_tel,wj_regTel);

//验证函数
    function wj_check(inp, regEx) {
        inp.onblur = function () {
            if (regEx.test(this.value)) {
                this.nextElementSibling.innerHTML = "您输入格式正确";
                this.nextElementSibling.className = "wj-right";
            } else {
                this.nextElementSibling.innerHTML = "您输入格式错误";
                this.nextElementSibling.className = "wj-wrong";
            }
        }
    }
    //实现登录按钮功能
    $("#wj_btnLog").click(function () {
        //过去用户名 的值 密码的 值

        var name=document.getElementById("wj_username");
        var wj_pwd=document.getElementById("wj_pwd");
        var logspan=document.getElementById("wj_logspan");
        //用户名的 值
        var user=name.value;
        //密码的  值
        var wj_pwd_val=wj_pwd.value;
        //在第二页的span中显示 用户名
        logspan.innerHTML=user;
        var tab=document.getElementById("wj_topul");
        var lis=tab.children;
        //如果用户名是： admin  密码是：  admin123  进入到下一个页面
        if(user&&wj_pwd_val&&user!=="请输入用户名"){


            $("#wj_log").slideUp(1200, function () {
                $("#wj_topul>li").eq(1).addClass("active")
                    .siblings().removeClass("active");
                $("#wj_judge").slideDown(1200);

            })
            //lis[1].style.display="block";
            //$("#wj_banner>.wj-wrapper>.wj-products>.wj-main").eq(1).addClass("wj-selected")
            //    .siblings().removeClass("wj-selected");

            //利用tab来实现鼠标经过时显示相应页面
            //$("#wj_banner>.wj-wrapper>.wj-tab>li").click(function () {
            //    var index=$(this).index();
            //    $(this).addClass("active").siblings().removeClass("active");
            //    $("#wj_banner>.wj-wrapper>.wj-products>.wj-main").eq(index).addClass("wj-selected")
            //        .siblings().removeClass("wj-selected");
            //
            //    //主要页面的渐入渐出
            //    $("#wj_banner>.wj-wrapper>.wj-products>.wj-main").eq(index).fadeOut(1200, function () {
            //        $("#wj_banner>.wj-wrapper>.wj-products>.wj-main").eq(index).fadeIn(1000)
            //    })
            //})
        }else{
            alert("对不起，用户名或密码不能为空");
        }
    })


    //用户评价页面    选择理由
    //1. 给btn-sel-all注册事件，option全部右移
    $("#btn-sel-all").click(function () {
        var $option = $("#src-city>option");
        $("#wj_tar-city").append($option);
    });
    //2. 给btn-sel-none注册事件，option全部左移
    $("#btn-sel-none").click(function () {
        var $opiton = $("#wj_tar-city>option");
        $("#src-city").append($opiton);
    });
    //3. 给btn-sel注册事件，选中的option右移
    $("#btn-sel").click(function () {
        var $option = $("#src-city>option:selected");
        $("#wj_tar-city").append($option);
    });
    //4. 给btn-back注册事件,选中option的左移
    $("#btn-back").click(function () {
        var $opiton = $("#wj_tar-city>option:selected");
        $("#src-city").append($opiton);
    });
    //选择理由结束

    //星级评价开始
    var wjx_s = "★";
    var wjx_k = "☆";

    //1. 处理鼠标一上来的事件
    //1.1 给所有的li注册mouseenter事件
    $(".comment>li").mouseenter(function () {
        //1.2 让自己变成实心，让前面的兄弟变成实心
        //prevAll和nextAll  会改变jQuery对象里面DOM对象

        $(this).text(wjx_s).prevAll("li").text(wjx_s).end().nextAll().text(wjx_k);
    });

    $(".comment>li").click(function () {
        var pingFen=document.getElementById("wj_pingFen");
        $(this).addClass("bj").siblings().removeClass("bj");
        var index=$(this).index();
        console.log(index);
        if(index<4){
            pingFen.innerHTML="请您再斟酌一下吧！！！";
        }
        if(index==4){
            pingFen.innerHTML="非常感谢您的支持！！！";

        }

    });

    $(".comment").mouseleave(function () {
        $(this).children("li").text(wjx_k);

        $(".comment>.bj").text(wjx_s).prevAll().text(wjx_s);
    });

    //星级评价结束
     //返回前页按钮点击事件
    $("#wj_backTofirst").click(function () {
        $("#wj_topul li").eq(0).addClass("active").fadeIn(800).siblings().removeClass("active");
        $("#wj_judge").fadeOut(1000, function () {
            $("#wj_log").fadeIn(800)
        })
    })

    //提交按钮点击事件
    $("#wj_pro_tijiao").click(function () {

        $("#wj_tijiao").css({"display":"block"});
        //$("#wj_topul li").eq(1).css({"display":"block"});
        location.onload($("#wj_judge"));
    });
    //关闭按钮点击事件
    $("#wj_closeBtn").click(function () {
        $("#wj_tijiao").fadeOut(400, function () {
            //返回到主页面
            window.open("./index.html");
            window.close("./wjindex.html");
            //window.history.go(-3);
        })
    });
})