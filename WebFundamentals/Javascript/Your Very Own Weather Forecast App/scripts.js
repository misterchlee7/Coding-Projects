$(document).ready(function(){

    $("form").submit(function(){

        var loc = $("#search").val();
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+loc+"&&appid=e5bc95169a25636debd11f3074cc3be7", 
        
        function(res){
            var tempInF = Math.round(res.main.temp * 1.8 - 459.67);
            $("#city").html(res.name);
            $("#temp").html("Temperature: "+tempInF+"");
        },"json");

        return false;
    });

});

