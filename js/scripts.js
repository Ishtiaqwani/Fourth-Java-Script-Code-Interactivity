$(document).ready(function(){

  // create an event handler for when the button is clicked
  $(".button").click(function(){

    // loop through all elements with class "circle"
	// if the element has class "big-red" change it to "small-blue" and vice-versa
	
    $('.circle').each(function(){

      // test if each circle has the class "small-blue"
      if ( $(this).hasClass('big-red') ) {
        // if it does, turn it into "small blue"
        $(this).removeClass('big-red').addClass('small-blue');
      } else {
        // if it does not, turn it into "small blue"
        $(this).removeClass('small-blue').addClass('big-red');
      }

    });

  });


});