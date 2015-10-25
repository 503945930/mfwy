/**
 * Created by Administrator on 2015/10/25 0025.
 */

$(window).scroll(function(){
    var ssk_top=$("#cmssk").offset().top;
    var sTop = $(window).scrollTop();
    var mTop=ssk_top-sTop;
    if(mTop<0){
       $(".hengtiao").fadeIn();
    }else{
        $(".hengtiao").fadeOut();
    }
});
