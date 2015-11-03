/**
 * Created by Administrator on 2015/11/2 0002.
 */
$(".zhanshi").hover(function(){
    $(this).children(".wydz").show();

},function(){
    $(".wydz").hide();
})
$(".wydz").click(function(){
    $("#tc").show();
})
$(".close").click(function(){
    $("#tc").hide();
})