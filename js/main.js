/**
 * Created by jx123 on 2016/9/30.
 */
//��һ��ҳ�����Ч
//�ٷ��۸��µ��б���Ч
$(function () {
        //���б������a��ǩ��������¼�����ͼƬ�˶�����
        $(".liebiao>ul>li").mouseenter(function () {
            $(this).children("img").show().parent().siblings().children("img").hide()
            $(".liebiao>ul>li>img").animate({
                "left": "50px"
            }, 1000)
        })
        //�Ƴ���ʱ������
        $(".liebiao>ul>li").mouseleave(function () {
            $(this).children("img").hide()
        })
})
//����Ƶ���ö�����������ӵ�ʱ���������ԲȦ��Ϊ60
        $(function () {
            //����ԲȦ��С
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
            //�Ƴ�ԲȦ���
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
//��������ƽ̨��ʶ��ʱ��͸���ȷ����仯
        $(function () {
            $(".internet>.l-weibo").mouseenter(function () {
                $(this).children("img").css("opacity", "0.4").parent().siblings().children("img").css("opacity", "1")
            })
            $(".internet").mouseleave(function(){
                $(".internet>.l-weibo>img").css("opacity", "1")
            })
        })


//�����ұߵ�Сͼ��ʱ��������ʾ
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
//΢��APP�Ͷ�ά�����Ч
//���ٷ�΢�����������¼����ú��ӳ���
$(function () {
    $(".box  .weixin  .er-weixin").mouseenter(function () {
        //�ú��ӳ���
        $(".box .wei-box").show()
    })
    $(".box ").mouseleave(function(){
        $(".box .wei-box").hide()
    })
})
$(function () {
    //��΢��APP�������������¼������ӳ��ֵ�ʱ������iOS����Android��ͼƬ����
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
    //�Ƴ���ʱ�򣬺�����ʧ
    $(".box").mouseleave(function () {
        $(".box .app-box").hide()
    })
})
//��һ���������̶���ʼ
//��ҳ������߶ȴ���ͷ���͵�һ��ҳ��ĸ߶�ʱ��Ҫ���ڶ������������ж�λ�����ҳ������߶�
//��ͷ�������͵�һ��ҳ��߶�Сʱ������Ҫ�̶�������
//��ȡԪ��
//var top=document.querySelector(".top");
//var picture=document.querySelector(".picture");
//var nav=document.querySelector(".two-nav");
//var background=document.querySelector("#background");
////��ҳ����ӹ����¼�
//document.onscroll=function(){
//    //��ҳ������߶ȴ���ͷ���͵�һ��ҳ��ĸ߶�ʱ��Ҫ���ڶ������������ж�λ
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

//�ڶ���ҳ���ֲ�ͼ��ʼ

$(function(){
    //����С�����ʱ��������ķ�����ʾ
    $("#background .fangkuai ").children().mouseenter(function(){
        //�������Լ�������
        $(this).children().css("cursor","pointer")
        $(this).children(".a-kuang").slideDown().parent().siblings().children(".a-kuang").hide()
        var index=$(this).index()
        $("#background .carmodel img ").eq(index).show().siblings().hide()
    })
    $("#background .fangkuai ").children().mouseleave(function(){
        $(this).children(".a-kuang").hide()
    })
})
//������ҳ���ֲ�ͼ��ʼ
$(function(){
   //���СԲȦ���ö�Ӧ�ĺ��ӳ���
    $(".carbox .cricle  ").children().click(function(){
        var index=$(this).index()
       $(".carbox .big").children().eq(index).show().siblings().hide()
       $(".carbox .haha ").children().eq(index).show().siblings().hide()
    })
})
//�ر��촰��ʼ
//���ر��촰��ť���õ���¼��������ʱ��رյ�һ��ͼ���ڶ���ͼ����










//    ͬʱ���ж���˶�����Ҫ�õ��ص�����
function  animate(tag,obj,fn){
//     �����ʱ��
    clearInterval(tag.timer);
//     ���ö�ʱ��
    tag.timer=setInterval(function(){
//            ��һ����������target��leader�Ĵ�С
        var flag=true;
        for(var  k in obj){
//                ���k��͸���ȵ�ʱ��
            if(k=="opacity"){
//                    ͸������0-1��С����������Ҫȡ����ȡ������1��
//                    ����ʱjs����������Ҫ��һ��10�ı���
                var leader=(getStyle(tag,k))*100;
                var target=obj[k]*100;
                var step=(target-leader)/10;
//         ����Ŀ��λ�ú͵�ǰλ��֮��Ĵ�С�ж�������ȡ����������ȡ��
                step=target>leader?Math.ceil(step):Math.floor(step);
                leader=leader+step;
//                    ͸������һ����ֵ������Ҫ����λ
                tag.style[k]=leader/100;
            }else if(k=="zIndex"){
                tag.style.zIndex=obj[k];
            }else{

//                    k �൱��attr����������
//                obj[k] �൱��target��������ֵ
//                ��ȡ��ǰ����,��������ʽ������λ����Ҫȡ������λ��ȥ�������attrû��������ʽ������auto��ת��Ϊ
//         false������Ҫ���ж�·���������Ⱨ���޷�ִ���������
                var leader=parseInt(getStyle(tag,k))||0;
                var target=obj[k];
                var step=(target-leader)/10;
//         ����Ŀ��λ�ú͵�ǰλ��֮��Ĵ�С�ж�������ȡ����������ȡ��
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
//         ����ǰλ�ú�Ŀ��λ�����ʱ�������ʱ��
        if(flag){
            clearInterval(tag.timer);
//                ������ִ�е��ⲽ��ʱ���ʾ������ˣ�
//                �����Ҫ��Ҫ�жϺ��������ͣ�
//                ����Ǻ������͵���
//            if(typeof fn=="function"){
//                fn();
//            }
            fn&&fn();


        }

    },17)
}



//    ��ȡ�������ʽ
//    �ǵø��������βΣ���Ȼ�����޷�����
function getStyle(tag,attr){
//        attr���ַ�����ʽ
    return tag.currentStyle?tag.currentStyle[attr]:getComputedStyle(tag,null)[attr];
}

//$(function(){
//    $(".sky .tianchuang .open .closebtn ").click(function(){
//        //����ԭ����ͼƬ����
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
//�����촰
//չ������
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
//��������
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
//���Ϳ�ʼ
//�������ԲȦ��ת
//��ȡԪ��
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
//������ҳ���л���ʼ

//���ĸ�ҳ�濪ʼ
//��p��ǩ���������¼����ö�Ӧ��ͼƬ����
$(function(){
    $(".use .conmon p").mouseenter(function(){
       var index=$(this).index()
       $(".use .use-web").children().eq(index).show().siblings().hide()
    })
})

//��ĳ����ǩ�ƶ���ָ��λ��
function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //��һ�� ��ȡ��ǰλ��
        var leader = tag.offsetLeft;
        var step = 17;
        //�ڶ��� ��ⲽ��������
        if (leader > target) {
            step = -step;
        }

        //�п������˶���ʱ������һ��step������target��λ�ã�����˶���
        if (Math.abs(leader - target) > Math.abs(step)) {
            leader = leader + step;
            tag.style.left = leader + "px";
        } else {
            //��Ҫ�ߵ��յ�
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        }
    }, 17);
}