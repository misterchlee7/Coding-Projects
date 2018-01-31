$(document).ready(function(){

    $("img").click(function(){
        var ogSrc = $(this).attr("src");
        var ogAlt = $(this).attr("alt");

        $(this).attr("src", ogAlt).attr("alt", ogSrc);
    });
    
});