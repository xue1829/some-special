/**
 * Created by lipe on 2016/5/15.
 */

$(function () {
    //�ַ���

    //��̬���li�ı���ͼ
    $("#aniShow li").each(function (i, elem) {
        //$(elem).css("backgroundImage", "url(../images/" + (i + 1) + ".jpg)");
        switch (i) {
            case 0:
                $(elem).css("backgroundColor", "#0AA6FF");
                break;
            case 1:
                $(elem).css("backgroundColor", "#FFEB0A");
                break;
            case 2:
                $(elem).css("backgroundColor", "#2ACFCD");
                break;
            case 3:
                $(elem).css("backgroundColor", "#74ADCF");
                break;
            case 4:
                //$(elem).css("backgroundColor", "#FF7F27");
                $(elem).css("backgroundColor", "#E1564C");
                break;
        }
        //$(elem).css("backgroundColor", "#f0f0f0");
    })

    //����ƶ�ĳ��li�ϣ����li���������ı�С
    $("#aniShow li").mouseenter(function () {
        //li��С
        $(this).stop(true).animate({"width": "800px"}, 500).siblings("li").stop(true).animate({"width": "100px"}, 500);
        //li���ɫmask
        $(this).children(".an_mask").stop(true).animate({
            "width": "800px",
            "opacity": 0
        }, 500).parent().siblings().children(".an_mask").stop(true).animate({
            "width": "100px",
            "opacity": 0.1
        }, 500);
        //li��ͼ��
        $(this).children(".an_iconfont").stop(true).animate({
            "fontSize": "120px",
            "width": "800px",
            "opacity": 0
        }, 500, function () {
            //li������� z-index��С
            $(this).next(".an_cnt").css("zIndex", "4").parent().siblings("li").children(".an_cnt").css("zIndex", "0");
        }).parent().siblings().children(".an_iconfont").stop(true).animate({
            "fontSize": "50px",
            "width": "100px",
            "opacity": 1
        }, 500);


//                var that = $(this);
//                $("#aniShow li").stop();
//                $(this).children(".an_iconfont").animate({
//                    "fontSize": "80px",
//                    "opacity": 0,
//                }, 100, function () {
//                    that.siblings("li").animate({"width": "100px"}, 100);
//                    that.animate({"width": "800px"}, 100);
//                    that.children(".an_mask").animate({
//                        "width": "800px",
//                        "opacity": 0
//                    }, 100).parent().siblings("li").children(".an_mask").animate({
//                        "width": "100px",
//                        "opacity": 0.1
//                    }, 100);
//                    that.siblings("li").children(".an_iconfont").animate({
//                        "opacity": 1
//                    }, 100);
//                });
//
//                $(this).siblings("li").children(".an_iconfont").animate({
//                    "fontSize": "50px",
//                    "width": "100px"
//                }, 100);
    });

    //����뿪ul���ָ�
    $("#aniShow ul").mouseleave(function () {
        //li��С
        $(this).children("li").stop(true).animate({"width": "240px"}, 500);
        //li��mask
        $(this).children("li").children(".an_mask").stop(true).animate({
            "width": "240px",
            "opacity": 0.1
        }, 500);
        //li��ͼ��
        $(this).children("li").children(".an_iconfont").stop(true).animate({
            "fontSize": "50px",
            "width": "240px",
            "opacity": 1
        }, 500);
        //li������
        $(this).children("li").children(".an_cnt").css("zIndex", "0");


//                $("#aniShow li").animate({"width": "240px"}, 100);
//                $("#aniShow .an_iconfont").animate({
//                    "width": "240px",
//                    "fontSize": "50px",
//                    "opacity": 1
//                }, 100);
//                $("#aniShow .an_mask").animate({
//                    "width": "240px",
//                    "opacity": 0.1
//                }, 100)
    });

    //��ק��li
    $("#aniShow li:eq(1)").mouseleave(function () {
        //dragbox�ָ�λ��
        $(".an_drag").css({
            "top": "45%",
            "left": "400px"
        });
    });


    //�Ŵ�
    //�����Сͼ�ϣ�mask�ʹ�ͼ����
    $(".an_smallBox").mouseenter(function () {
        $(".an_zoom_mask").css("display", "block");
        $(".an_bigBox").css("display", "block");
    });
    //����뿪��mask�ʹ�ͼ��ʧ
    $(".an_smallBox").mouseleave(function () {
        $(".an_zoom_mask").css("display", "none");
        $(".an_bigBox").css("display", "none");
    })
    //mask����
    $(".an_smallBox").mousemove(function (e) {
        var sbox = $(".an_smallBox");
        var mask = $(".an_zoom_mask")
        //����ں����е�λ��
        var boxX = e.pageX - sbox.offset().left;
        var boxY = e.pageY - sbox.offset().top;
        //mask�ں����е�λ��
        var maskX = boxX - mask.width() / 2;
        var maskY = boxY - mask.height() / 2;
        //����mask�ں����е�λ��
        if (maskX < 0) {
            maskX = 0;
        }
        if (maskX > (sbox.width() - mask.width())) {
            maskX = sbox.width() - mask.width();
        }
        if (maskY < 0) {
            maskY = 0;
        }
        if (maskY > (sbox.height() - mask.height())) {
            maskY = sbox.height() - mask.height();
        }
        //����mask�ں������λ��
        mask.offset({top: maskY + sbox.offset().top, left: maskX + sbox.offset().left});

        //��ͼ����
        var bbimgX = $(".an_bigBox").offset().left + 1;
        var bbimgY = $(".an_bigBox").offset().top + 1;

        $(".an_bigBox>img").offset({
            top: bbimgY - maskY * (200 / 75),
            left: bbimgX - maskX * (200 / 75)
        });
    });

    //��ק
    //��갴�¼�¼���λ��
    $(".an_drag .an_dragHead").mousedown(function (e) {
        //��¼λ��
        var dX = e.pageX;
        var dY = e.pageY;
        var spaceX = dX - $(this).offset().left;
        var spaceY = dY - $(this).offset().top;

        //����ƶ������Ӹ�������ƶ�
        $(document).on("mousemove", function (e) {
            //�ж�λ��
            var dragBoxX = e.pageX - spaceX;
            var dragBoxY = e.pageY - spaceY;
            var wrap = $(".an_drag_wrap");

            if (dragBoxX < wrap.offset().left) {
                dragBoxX = wrap.offset().left;
            }
            if (dragBoxX > wrap.width() - $(".an_drag").width() + wrap.offset().left + 1) {
                dragBoxX = wrap.width() - $(".an_drag").width() + wrap.offset().left + 1;
            }
            if (dragBoxY < wrap.offset().top) {
                dragBoxY = wrap.offset().top;
            }
            if (dragBoxY > wrap.height() - $(".an_drag").height() + wrap.offset().top + 1) {
                dragBoxY = wrap.height() - $(".an_drag").height() + wrap.offset().top + 1;
            }

            $(".an_drag").offset({top: dragBoxY, left: dragBoxX});
            //����ѡ�е�����
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        });
    });

    $(document).mouseup(function (e) {
        $(document).off("mousemove");
    });


    //bird game
    var game = $(".an_game");
    var birdEle = $(".an_the_bird");
    var gameover = false;
    var g = 1;
    var sky = {
        //position: $(".an_game").offset().left
        position: 0
    }
    var bird = {
        entity: birdEle,
        speedX: 2,
        speedY: 0,
        //x: birdEle.position().left,
        //y: birdEle.position().top
        x: 100,
        y: 100
    }
    var timer;
    var arr = [];

    $(".an_game").click(function () {
        bird.speedY = -10;
    });


    $(".an_bird .an_btn").click(function () {
        $(".an_bird_mask").css("display", "block");
        $(".an_game").css("display", "block");
        $(document.body).css("overflow", "hidden");

        timer = setInterval(function () {
            if (!gameover) {
                sky.position = sky.position - bird.speedX;
                game.css("backgroundPositionX", sky.position + "px");
                bird.speedY = bird.speedY + g;
                var step = bird.speedY;
                bird.y = bird.y + step;
                if (bird.y < 0) {
                    bird.y = 0;
                    gameover = true;
                }
                if (bird.y > game.height() - birdEle.height()) {
                    bird.y = game.height() - birdEle.height();
                    gameover = true;
                }
                bird.entity.css("top", bird.y + "px");
            }
        }, 25);

        function Pipe(positionX) {
            this.x = positionX;
            this.width = 52;
            this.upPipeY = 0;
            this.upPipeH = parseInt(Math.random() * 175) + 100;
            this.downPipeY = this.upPipeH + 200;
            this.downPipeH = 600 - this.downPipeY;
            var divUp = $("<div></div>");
            divUp.addClass("pipeU");
            divUp.css("top", this.upPipeY + "px");
            divUp.css("left", this.x + "px");
            divUp.css("width", this.width + "px");
            divUp.css("height", this.upPipeH + "px");
            var divDown = $("<div></div>");
            divDown.addClass("pipeD");
            divDown.css("top", this.downPipeY + "px");
            divDown.css("left", this.x + "px");
            divDown.css("width", this.width + "px");
            divDown.css("height", this.downPipeH + "px");
            game.append(divUp);
            game.append(divDown);
//                console.log(this);
            var that = this;
            setInterval(function () {

                that.x = that.x - 1;
                if (that.x < -52) {
                    that.x = 800;
                }

                if (!gameover) {//���û�������� ���ܼ���
                    divUp.css("left", that.x + "px");
                    divDown.css("left", that.x + "px");
                }
                //С��ײ�������� Ҫ����ײ���

                var downCrash = (bird.x + 34 > that.x) && (bird.x < that.x + 52) && (bird.y + 26 > that.downPipeY);//ײ��������Ĺ���
                var upCrash = (bird.x + 34 > that.x) && (bird.x < that.x + 52) && (bird.y < that.upPipeH);//����������Ĺ���

                if (downCrash || upCrash) {
                    gameover = true;
                }


            }, 10);
        }

        if (arr.length !== 4) {
            for (var i = 0; i < 4; i++) {
                var pipe = new Pipe(400 + 200 * i);
                arr[i] = pipe;
            }
        }


    });
    $(".an_bird_mask").click(function () {
        $(".an_bird_mask").css("display", "none");
        $(".an_game").css("display", "none");
        $(document.body).css("overflow", "visible");

        clearInterval(timer);
    });


});