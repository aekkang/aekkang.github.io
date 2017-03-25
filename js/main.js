function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 500);
//     return false;
// });

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// // Scroll to specific values
// // scrollTo is the same
// window.scroll({
//   top: 2500, 
//   left: 0, 
//   behavior: 'smooth' 
// });

// // Scroll certain amounts from current position 
// window.scrollBy({ 
//   top: 100, // could be negative value
//   left: 0, 
//   behavior: 'smooth' 
// });

// // Scroll to a certain element
// document.querySelector('.hello').scrollIntoView({ 
//   behavior: 'smooth' 
// });

// $(document).ready(function () {
//     /* TODO: VERY JANK SOLUTION NEED TO FIX AFTER I ACTUALLY LEARN JAVASCRIPT */
//     var location = window.location.pathname.slice(-10);
//     var found = false;
//     $("#sidebar a").each(function() {
//         var href = $(this).attr("href");
//         if(href == location) {
//             $(this).parent().addClass("selected");
//             found = true;
//         }
//     });
//     if(!found){
//         $("#sidebar li:first").addClass("selected");
//     }
//     console.log(location);
// });

// /* TODO: loading icon*/
// $(function() {
//     $("#wrapper").hide();
// });

// $(window).load(function() {
//     $("#wrapper").show();
// });

// /*
// setInterval(function () {
//     $("#main-fade").fadeToggle();

// }, 3000);
// */

// // TODO: use CSS3 transitions and Transit plugin
// // one possible solution: use four different divs with CSS3 animations
// /*
// i=0
// var words = ["Programmer", "Pianist", "Mathematician", "Canadian"];

// function fade() {
//     $('#main-fade').fadeIn(1000).delay(2000).html(words[i % words.length]).fadeOut(1000);
//     i++;  //counter, set to 0 initially

//     setTimeout(fade, 4000);
// }
// */

// // Adapted from http://jsfiddle.net/e4sb6tn0/#
// (function() {

//     var words = $(".main-fade");
//     var wordIndex = -1;
    
//     function showNextWord() {
//         ++wordIndex;
//         words.eq(wordIndex % words.length)
//             .fadeIn(2000)
//             .delay(2000)
//             .fadeOut(2000, showNextWord);
//     }
    
//     showNextWord();
    
// })();

// /*
// fade();

// function one() {
//     $("#main-fade").fadeIn(1000);
//     $("#main-fade").delay(2000);
//     $("#main-fade").fadeOut(1000, two);
// }

// function two() {
//     $("#world").fadeIn(1000);
//   $("#world").fadeOut(1000, one);
// }

// one()
// */

// /* Adapted from http://stackoverflow.com/questions/23906956/show-loading-icon-until-the-page-is-load */
// /*
// document.onreadystatechange = function () {
//   var state = document.readyState
//   if (state == 'interactive') {
//        document.getElementById('wrapper').style.visibility="hidden";
//   } else if (state == 'complete') {
//       setTimeout(function(){
//          document.getElementById('interactive');
//          document.getElementById('loading').style.visibility="hidden";
//          document.getElementById('wrapper').style.visibility="visible";
//       },1000);
//   }
// }
// */