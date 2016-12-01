/**
 * Created by Lewis on 2016/11/29.
 */
$(function(){
    // document.on("mousedown",function (e) {
    //     e.preventDefault();
    // });
    // document.on("mousemove",function (e) {
    //     e.preventDefault();
    // });
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$(".section").length){
            num=$(".section").length-1;
            return;
        }

        flag=false;

        $("#fullpage").css({
            "marginTop":-num*clientH,
            transition:"margin-top 1s ease"
        })
    });

    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css({
            "marginTop":-num*clientH,
            transition:"margin-top 1s ease"
        })
    });
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    });
});

$(function(){
    var arrow=$(".arrow");
    arrow.click(function(){
        $.fn.fullpage.moveSectionDown();
    });
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        'navigationPosition': 'right',
        navigation: true,
        easing:"linear",
        navigationTooltips:['登录百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],

        afterLoad: function(anchorLink, index){
            if(index==1){
                $('.section').eq(0).attr("id","active");
            }else{
                $('.section').eq(0).removeAttr("id");
            }
            if(index==2){
                $('.section').eq(1).attr("id","active");
            }else{
                $('.section').eq(1).removeAttr("id");
            }
            if(index==3){
                $('.section').eq(2).attr("id","active");
            }else{
                $('.section').eq(2).removeAttr("id");
            }
            if(index==4){
                $('.section').eq(3).attr("id","active");
            }else{
                $('.section').eq(3).removeAttr("id");
            }
        }





    });
});