$(document).ready(function () {

    for (var i = 1; i < 152; i++) {
        var idtag = "id = i";
        $("#body").append("<img src=http://pokeapi.co/media/img/"+i+".png id="+i+">");
    }

    $("img").click(function(){
        var idPull = $(this).attr("id");
        $.get("http://pokeapi.salestock.net/api/v2/pokemon/"+idPull+"", function(res){

            $("#name").html(res.name);
        
            $("#portrait").html("<img src=http://pokeapi.co/media/img/"+idPull+".png>");

            var html_str = "";
            for(var i = 0; i < res.types.length; i++){
                html_str += "<li>"+ res.types[i].type.name + "</li>";
            }
            $("#types").html(html_str);
            $("#height").html(res.height);
            $("#weight").html(res.weight);
        });
    });

});