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

// TODO: use CSS3 transitions and Transit plugin
// one possible solution: use four different divs with CSS3 animations
/*
i=0
var words = ["Programmer", "Pianist", "Mathematician", "Canadian"];

function fade() {
    $('#main-fade').fadeIn(1000).delay(2000).html(words[i % words.length]).fadeOut(1000);
    i++;  //counter, set to 0 initially

    setTimeout(fade, 4000);
}
*/

// Adapted from http://jsfiddle.net/e4sb6tn0/#
(function() {

    var words = $(".main-fade");
    var wordIndex = -1;
    
    function showNextWord() {
        ++wordIndex;
        words.eq(wordIndex % words.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextWord);
    }
    
    showNextWord();
    
})();

/*
fade();

function one() {
    $("#main-fade").fadeIn(1000);
    $("#main-fade").delay(2000);
    $("#main-fade").fadeOut(1000, two);
}

function two() {
    $("#world").fadeIn(1000);
  $("#world").fadeOut(1000, one);
}

one()
*/