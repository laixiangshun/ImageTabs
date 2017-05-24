/**
 * Created by lailai on 2017/5/19.
 */
$(function(){
    function numToWeekChinese(num){
        var weekChinese = ["天", "一", "二", "三", "四", "五", "六"];
        return weekChinese[num];
    }
    var week=new Date("2017-05-19").getDay();
    console.log(week);
    console.log("星期"+numToWeekChinese(week));
});