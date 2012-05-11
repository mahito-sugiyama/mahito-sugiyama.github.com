$(document).ready(function(){
    $('.reversed').each(function(){
        var $children = $(this).children('li');
        var totalChildren = $children.length;
        var start = 0;
        $children.each(function(){
            $(this).val(totalChildren - start);
            start++;
        });
    });
});