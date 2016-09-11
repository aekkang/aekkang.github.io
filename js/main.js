$(document).ready(function () {
    var location = window.location;
    var found = false;
    $("#sidebar a").each(function() {
        var href = $(this).attr("href");
        if(href == location) {
            $(this).parent().addClass("selected");
            found = true;
        }
    });
    if(!found){
        $("#sidebar li:first").addClass("selected");
    }
});

/* TODO: loading icon*/
$(function() {
    $('#wrapper').hide();
});

$(window).load(function() {
    $("#wrapper").show();
});