$(document).ready(function () {
    /* TODO: VERY JANK SOLUTION NEED TO FIX AFTER I ACTUALLY LEARN JAVASCRIPT */
    var location = window.location.pathname.slice(-10);
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
    console.log(location);
});

/* TODO: loading icon*/
$(function() {
    $("#wrapper").hide();
});

$(window).load(function() {
    $("#wrapper").show();
});

/*
setInterval(function () {
    $("#main-fade").fadeToggle();

}, 3000);
*/

i=0
var words = ["Programmer", "Pianist", "Mathematician", "Canadian"];

function fade() {
    $('#main-fade').fadeIn(500).delay(2000).html(words[i % words.length]).fadeOut(500);
    i++;  //counter, set to 0 initially

    setTimeout(fade, 3000);
}

fade();

