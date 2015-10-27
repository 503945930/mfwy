/**
 * Created by Administrator on 2015/10/27 0027.
 */
(function(){
    var includes = $('.include');
    $.each(includes, function() {
        var file = '../common/public/' + $(this).data('include') + '.tpl.html';
        $(this).load(file);
    });
})();