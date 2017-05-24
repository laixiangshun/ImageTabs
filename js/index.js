/**
 * Created by lailai on 2017/5/2.
 */
$(function(){

    var index=1;
    var len=5;
    var timer;
    var interval = 3000;
    /*显示下面按钮选中*/
    function showButton(){
        $('#buttons span').eq(index-1).addClass('on').siblings().removeClass('on');
    }
    function animate(offset){
        var left=parseInt($('#list').css('left'))+offset;
        /*$('#list').css('left',left);*/
        /*无限滚动*/
        if(offset>0)
        {
           // offset='+='+offset;
            offset+=offset;
        }else
        {
           // offset='-='+Math.abs(offset);
            offset-=Math.abs(offset);
        }
        $('#list').animate({'left': offset},300,function(){
            if(left>-600)
            {
                $('#list').css('left',-600*len);
            }
            if(left<(-600 * len))
            {
                $('#list').css('left','-600px')
            }
        })
    }
    /*下一张*/
    $('#next').click(function(){
       /* var left=parseInt($('#list').css('left'))-600+'px';
        $('#list').css('left',left);*/
        if($('#list').is(':animated'))
        {
            return;
        }
        if(index==5)
        {
            index=1;
        }else
        {
            index+=1;
        }
        showButton();
        animate(-600);
    });
    /*上一张*/
    $('#prev').click(function(){
        /*var prev=parseInt($('#list').css('left'))+600+'px';
        $('#list').css('left',prev);*/
        if($('#list').is(':animated'))
        {
            return;
        }
        if(index==1)
        {
            index=5;
        }else
        {
            index-=1;
        }
        showButton();
        animate(600);
    });
    /*每个下部按钮的单击事件*/
    $('#buttons span').each(function(){
        $(this).click(function(){
            if($('#list').is(':animated') || $(this).attr('class')=='on')
            {
                return;/*当选中当前的图片是，点击不执行后面代码，提高性能*/
            }
            var myIndex=parseInt($(this).attr('index'));
            var offset=-600 * (myIndex-index);
            animate(offset);
            index=myIndex;
            showButton();
        })
    });
    function play(){
        timer=setTimeout(function(){
            $('#next').trigger('click');
            //play();
        },interval);
    }
    function stop(){
        clearTimeout(timer);
    }
    $('#container').hover(stop,play);
    play();

});