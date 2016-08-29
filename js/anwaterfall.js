/**
 * Created by wangxueli on 2016/8/29.
 */
$(function(){

    function client() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
        };
    }

    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollHeight || document.body.scrollHeight || 0,
            left: window.pageXOffset || document.documentElement.scrollWidth || document.body.scrollWidth || 0
        }
    }


    window.onload = function () {
        var container = document.getElementById("container");
        var boxes = container.children;

        //ҳ����
        var pageWidth = client().width;
//            console.log(pageWidth);//��Ȱ����˹�������
        //ͼƬ���
        var boxWidth = boxes[0].offsetWidth;

        //�ж�����
        var column = Math.floor(pageWidth / boxWidth);

        //��һ���ж�����
//            console.log(column);


        //�ѵ�һ�еĸ߶ȷŵ�һ�������У��ҵ���Сֵ����Сֵ������
        var arrHeight = [];
        waterfall();
        //
        function waterfall() {
            for (var i = 0; i < boxes.length; i++) {
                if (i < column) {
                    arrHeight[i] = boxes[i].offsetHeight;
                } else {
                    var minHeight = getMin(arrHeight).value;
                    var minHeightIndex = getMin(arrHeight).index;
                    boxes[i].style.position = "absolute";
                    boxes[i].style.left = boxes[minHeightIndex].offsetLeft + "px";
                    boxes[i].style.top = minHeight + "px";

                    arrHeight[minHeightIndex] = minHeight + boxes[i].offsetHeight;
                }
            }
        }


        var arr = [
            {"src": "images/waterfall/P_001.jpg"},
            {"src": "images/waterfall/P_001.jpg"},
            {"src": "images/waterfall/P_002.jpg"},
            {"src": "images/waterfall/P_003.jpg"},
            {"src": "images/waterfall/P_004.jpg"},
            {"src": "images/waterfall/P_005.jpg"},
            {"src": "images/waterfall/P_006.jpg"},
            {"src": "images/waterfall/P_007.jpg"},
            {"src": "images/waterfall/P_008.jpg"},
            {"src": "images/waterfall/P_009.jpg"},
            {"src": "images/waterfall/P_010.jpg"},
            {"src": "images/waterfall/P_011.jpg"},
            {"src": "images/waterfall/P_012.jpg"},
            {"src": "images/waterfall/P_013.jpg"},
            {"src": "images/waterfall/P_014.jpg"},
            {"src": "images/waterfall/P_015.jpg"},
            {"src": "images/waterfall/P_016.jpg"},
            {"src": "images/waterfall/P_017.jpg"},
            {"src": "images/waterfall/P_018.jpg"},
            {"src": "images/waterfall/P_019.jpg"},
            {"src": "images/waterfall/P_001.jpg"},
            {"src": "images/waterfall/P_001.jpg"},
            {"src": "images/waterfall/P_002.jpg"},
            {"src": "images/waterfall/P_003.jpg"},
            {"src": "images/waterfall/P_004.jpg"},
            {"src": "images/waterfall/P_005.jpg"},
            {"src": "images/waterfall/P_006.jpg"},
            {"src": "images/waterfall/P_007.jpg"},
            {"src": "images/waterfall/P_008.jpg"},
            {"src": "images/waterfall/P_009.jpg"},
            {"src": "images/waterfall/P_010.jpg"},
            {"src": "images/waterfall/P_011.jpg"},
            {"src": "images/waterfall/P_012.jpg"},
            {"src": "images/waterfall/P_013.jpg"},
            {"src": "images/waterfall/P_014.jpg"},
            {"src": "images/waterfall/P_015.jpg"},
            {"src": "images/waterfall/P_016.jpg"},
            {"src": "images/waterfall/P_017.jpg"},
            {"src": "images/waterfall/P_018.jpg"},
            {"src": "images/waterfall/P_019.jpg"}

        ];


        //��̬��ӣ�����
        window.onscroll = function () {
            if (bottomed()) {
                for (var i = 0; i < arr.length; i++) {
                    var img = document.createElement("img");
                    img.src = arr[i].src;
                    var div = document.createElement("div");
                    div.className = "box";
                    container.appendChild(div);
                    div.appendChild(img);
                }
                waterfall();
            }
        };

        function bottomed() {
            var scrollTop = scroll().top;
            var clientHeight = client().height;
            var lastBoxTop = boxes[boxes.length - 1].offsetTop;
//                var lastBoxTop = getMin(arrHeight).value;
            return scrollTop + clientHeight > lastBoxTop;
        }
    };


    function getMin(arr) {
        var min = {};
        min.index = 0;
        min.value = arr[min.index];
        for (var i = 0; i < arr.length; i++) {
            if (min.value > arr[i]) {
                min.value = arr[i];
                min.index = i;
            }
        }
        return min;
    }
})