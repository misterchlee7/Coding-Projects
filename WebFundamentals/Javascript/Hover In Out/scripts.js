$(document).ready(function(){

    $("img").hover(
        function(){
            var srcOg = $(this).attr("src");
            var srcAlt = $(this).attr("alt");
            $(this).attr("src", srcAlt).attr("alt", srcOg);
        }, function(){
            var srcOg = $(this).attr("src");
            var srcAlt = $(this).attr("alt");
            $(this).attr("src", srcAlt).attr("alt", srcOg);
        }
    );

});