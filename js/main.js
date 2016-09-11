$(document).ready(function () {
    var location = window.location;
    var found = false;
    $("#sidebar-content a").each(function() {
        var href = $(this).attr("href");
        if(href == location) {
            $(this).parent().addClass("selected");
            found = true;
        }
    });
    if(!found){
        $("#sidebar-content li:first").addClass("selected");
    }
});

$(function() {
    $('#wrapper').hide();
});

$(window).load(function() {
    $("#wrapper").show();
});