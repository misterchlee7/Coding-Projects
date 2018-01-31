$(document).ready(function(){

    $(".container").click(function(){
        $(this).css("visibility", "hidden");
    });

    $("#footer").click(function(){
        $(".container").css("visibility", "visible");
    });

});