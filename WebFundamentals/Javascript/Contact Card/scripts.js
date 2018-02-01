function addContact(){
    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();

    $("#contact_div").append("<div class=contactbox><p class=nametext> "+firstName+" "+lastName+" <br><br></p><p class=clicktext>Click for description!</p></div>");
}

function showDescription(){
    var description = $("#description").val();
    return description;
}

$(document).ready(function(){

    $(document).on("click","#add", function(){
        var contactInfo = addContact();
    });
    
    var clicked = false;
    $(document).on("click",".contactbox",function(){
        if(clicked == false){
            $(this).children(".clicktext").html("<p style=clicktext> "+showDescription()+" </p>");
            clicked = true;
        }
        else if(clicked == true){
            $(this).children(".clicktext").html("<p style=clicktext>Click for description!</p>");
            clicked = false;
        }
    });

});