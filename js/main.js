/**
 * Created by jx123 on 2016/9/30.
 */
//第一个页面的特效
//官方价格下的列表特效
$(function () {
        //给列表里面的a标签添加移入事件，让图片运动出来
        $(".liebiao>ul>li").mouseenter(function () {
            $(this).children("img").show().parent().siblings().children("img").hide()
            $(".liebiao>ul>li>img").animate({
                "left": "50px"
            }, 1000)
        })
        //移出的时候隐藏
        $(".liebiao>ul>li").mouseleave(function () {
            $(this).children("img").hide()
        })
})
//给视频设置动画，移入盒子的时候，让上面的圆圈高为60
        $(function () {
            //移入圆圈变小
            $(".tv").mouseenter(function () {
                $(".tv>.b-tv").animate({
                    "height": "60px"
                }, 1000, function () {
                    $(".tv>.p-tv").animate({
                        "opacity": "1",
                        "height": "59px"

                    })
                })
            })
            //移出圆圈变大
            $(".tv").mouseleave(function () {
                $(".tv>.b-tv").animate({
                    "height": "75px"
                }, 1000, function () {
                    $(".tv>.p-tv").animate({
                        "opacity": "0.8",
                        "height": "60px"
                    })
                })
            })
        })
//移入网络平台标识的时候透明度发生变化
        $(function () {
            $(".internet>.l-weibo").mouseenter(function () {
                $(this).children("img").css("opacity", "0.4").parent().siblings().children("img").css("opacity", "1")
            })
            $(".internet").mouseleave(function(){
                $(".internet>.l-weibo>img").css("opacity", "1")
            })
        })


//移入右边的小图标时，文字显示
$(function () {
    $(".icon>ul>li").mouseenter(function () {
        $(this).children("p").show().parent().siblings().children("p").hide()
        $(".icon>ul>li>p").animate({
            "right": "20px"
        },1000)


        $(".icon>ul>li").mouseleave(function () {
            $(this).children("p").hide()
        })
    })
})
//微信APP和二维码的特效
//给官方微信设置移入事件，让盒子出现
$(function () {
    $(".box  .weixin  .er-weixin").mouseenter(function () {
        //让盒子出现
        $(".box .wei-box").show()
    })
    $(".box ").mouseleave(function(){
        $(".box .wei-box").hide()
    })
})
$(function () {
    //给微信APP文字设置移入事件，盒子出现的时候，移入iOS或者Android，图片出现
    $(".box .app .app-weixin").mouseenter(function () {
        $(".box .app-box").show()
        $(".box .app-box >p .ios").mouseenter(function () {
            $(this).css("color", "white")
            $(".box .app-box >p .andriod").css("color", "#606060")
            $(".box .app-box .ios-er").show()
            $(".box .app-box .andriod-er").hide()
        })
        $(".box .app-box >p .andriod").mouseenter(function () {
            $(this).css("color", "white")
            $(".box .app-box >p .ios").css("color", "#606060")
            $(".box .app-box .andriod-er").show()
            $(".box .app-box .ios-er").hide()
        })
    })
    //移出的时候，盒子消失
    $(".box").mouseleave(function () {
        $(".box .app-box").hide()
    })
})
//第一个导航条固定开始
//当页面卷曲高度大于头部和第一个页面的高度时，要给第二个导航条进行定位，如果页面卷曲高度
//比头部导航和第一个页面高度小时，不需要固定导航条
//获取元素
//var top=document.querySelector(".top");
//var picture=document.querySelector(".picture");
//var nav=document.querySelector(".two-nav");
//var background=document.querySelector("#background");
////给页面添加滚动事件
//document.onscroll=function(){
//    //当页面卷曲高度大于头部和第一个页面的高度时，要给第二个导航条进行定位
//    if(myScroll().top>picture.offsetHeight+top.offsetHeight){
//        nav.className="two-nav fixed"
//        background.style.marginTop=nav.offsetHeight+"px"
//    }else{
//        nav.className="two-nav"
//        background.style.marginTop=0+"px"
//    }
//}
//
//function myScroll() {
//    return {
//        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
//        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
//
//    }
//
//
//}

//第二个页面轮播图开始

$(function(){
    //移入小方块的时候，让外面的方块显示
    $("#background .fangkuai ").children().mouseenter(function(){
        //先设置自己再排他
        $(this).children().css("cursor","pointer")
        $(this).children(".a-kuang").slideDown().parent().siblings().children(".a-kuang").hide()
        var index=$(this).index()
        $("#background .carmodel img ").eq(index).show().siblings().hide()
    })
    $("#background .fangkuai ").children().mouseleave(function(){
        $(this).children(".a-kuang").hide()
    })
})
//第三个页面轮播图开始
$(function(){
   //点击小圆圈，让对应的盒子出现
    $(".carbox .cricle  ").children().click(function(){
        var index=$(this).index()
       $(".carbox .big").children().eq(index).show().siblings().hide()
       $(".carbox .haha ").children().eq(index).show().siblings().hide()
    })
})
//关闭天窗开始
//给关闭天窗按钮设置点击事件，点击的时候关闭第一张图，第二张图出现










//    同时进行多次运动，需要用到回调函数
function  animate(tag,obj,fn){
//     清除定时器
    clearInterval(tag.timer);
//     设置定时器
    tag.timer=setInterval(function(){
//            用一个变量控制target和leader的大小
        var flag=true;
        for(var  k in obj){
//                如果k是透明度的时候
            if(k=="opacity"){
//                    透明度是0-1的小数，，不需要取整，取整就是1了
//                    计算时js会有误差，所以要乘一个10的倍数
                var leader=(getStyle(tag,k))*100;
                var target=obj[k]*100;
                var step=(target-leader)/10;
//         根据目标位置和当前位置之间的大小判断是向上取整还是向下取整
                step=target>leader?Math.ceil(step):Math.floor(step);
                leader=leader+step;
//                    透明度是一个数值，不需要带单位
                tag.style[k]=leader/100;
            }else if(k=="zIndex"){
                tag.style.zIndex=obj[k];
            }else{

//                    k 相当于attr，是属性名
//                obj[k] 相当于target，是属性值
//                获取当前属性,计算后的样式，带单位，需要取整，单位可去除，如果attr没有设置样式，返回auto，转换为
//         false，所以要进行短路操作，以免抱错无法执行下面代码
                var leader=parseInt(getStyle(tag,k))||0;
                var target=obj[k];
                var step=(target-leader)/10;
//         根据目标位置和当前位置之间的大小判断是向上取整还是向下取整
                step=target>leader?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                tag.style[k]=leader+"px";
                if(leader!=target){
                    flag=false;
                }


            }


//

        }
//
//         当当前位置和目标位置相等时，清除定时器
        if(flag){
            clearInterval(tag.timer);
//                当函数执行到这步的时候表示快结束了，
//                这个需要需要判断函数的类型，
//                如果是函数，就调用
//            if(typeof fn=="function"){
//                fn();
//            }
            fn&&fn();


        }

    },17)
}



//    获取计算后样式
//    记得给函数传形参，不然参数无法调用
function getStyle(tag,attr){
//        attr是字符串形式
    return tag.currentStyle?tag.currentStyle[attr]:getComputedStyle(tag,null)[attr];
}

//$(function(){
//    $(".sky .tianchuang .open .closebtn ").click(function(){
//        //先让原来的图片隐藏
//        $(".sky .tianchuang .open .one").fadeOut(17,function(){
//
//            $(".sky .tianchuang .open .two").fadeIn(17,function(){
//
//                $(".sky .tianchuang .open .two").fadeOut(100,function(){
//                    $(".sky .tianchuang .open .three").fadeIn()
//
//                })
//            })
//
//
//        })
//    })
//})
//开启天窗
//展开座椅
$(function(){
   $(".open-zuoyi .zhankai-btn").click(function(){
       $(".open-zuoyi .point1").fadeOut(400,function(){
           $(".open-zuoyi .point2").fadeIn(400,function(){
               $(".open-zuoyi .point2").fadeOut(400,function(){
                   $(".open-zuoyi .point3").fadeIn(400,function(){
                       $(".open-zuoyi .point3").fadeOut(400,function(){
                           $(".open-zuoyi .point4").fadeIn()


                       })
                   })
               })
           })
       })
   })

})
//收起座椅
$(function(){
    $(".close-zuoyi .guanbi-btn").click(function(){
        $(".close-zuoyi .point4").fadeOut(function(){
            $(".close-zuoyi .point3").fadeIn(function(){
                $(".close-zuoyi .point3").fadeOut(function(){
                    $(".close-zuoyi .point2").fadeIn(function(){
                        $(".close-zuoyi .point2").fadeOut(function(){
                            $(".close-zuoyi .point1").fadeIn()
                        })
                    })
                })
            })
        })
    })
})
//车型开始
//让外面的圆圈旋转
//获取元素
var ac1=document.querySelector(".ac1");
var bc2=document.querySelector(".bc2");
var cc3=document.querySelector(".cc3");
var dc4=document.querySelector(".dc4");
var ec5=document.querySelector(".ec5");

var timer=null;
timer=setInterval(function(){

    ac1.style.transform="rotate(360deg)";
    bc2.style.transform="rotate(360deg)";
    cc3.style.transform="rotate(360deg)";
    dc4.style.transform="rotate(360deg)";
    ec5.style.transform="rotate(360deg)";
},10);
//第三个页面切换开始

//第四个页面开始
//给p标签设置移入事件，让对应的图片出现
$(function(){
    $(".use .conmon p").mouseenter(function(){
       var index=$(this).index()
       $(".use .use-web").children().eq(index).show().siblings().hide()
    })
})

//让某个标签移动到指定位置
function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //第一步 获取当前位置
        var leader = tag.offsetLeft;
        var step = 17;
        //第二部 检测步数的正负
        if (leader > target) {
            step = -step;
        }

        //有可能在运动的时候，走了一个step超过了target的位置，造成了抖动
        if (Math.abs(leader - target) > Math.abs(step)) {
            leader = leader + step;
            tag.style.left = leader + "px";
        } else {
            //需要走到终点
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        }
    }, 17);
}