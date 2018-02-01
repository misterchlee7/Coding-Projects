function getVars(){
    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();
    var email = $("#email").val();
    var phone = $("#contact").val();
    var row = "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td><td>" + phone + "</td></tr>"
    $("tbody").append(row);
}

$(document).ready(function(){

    $("#submit").click(function(){
        getVars();
    });

});