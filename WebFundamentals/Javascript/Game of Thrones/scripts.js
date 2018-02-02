$(document).ready(function(){

    $.get("https://api.got.show/api/houses/", function(res){
        $("#stark").click(function(){
            $("#name").html(res[160].name);
            $("#words").html(res[160].words);
            $("#titles").html(res[160].title);
        });
        $("#targaryen").click(function(){
            $("#name").html(res[167].name);
            $("#words").html(res[167].words);
            $("#titles").html(res[167].title);
        });
        $("#lannister").click(function(){
            $("#name").html(res[271].name);
            $("#words").html(res[271].words);
            $("#titles").html(res[271].title);
        });
        $("#baratheon").click(function(){
            $("#name").html(res[170].name);
            $("#words").html(res[170].words);
            $("#titles").html(res[170].title);
        });
    },"json");

});