// importing j query
import $ from 'jquery';
// the code inside $(document).ready runs only when DOM is ready for JavaScript code to execute
$(document).ready(function(){
  // Checking for window resize at anytime
  $(window).on('resize', function(){
    // reloads the page, so the game can be restarted again.
    document.location.reload();
  });
  // Listening for click on 'go' button and running a callback function
  $('#go').click(function() {
      /*
      Getting the width of the a car, can take the width of car2 too also.
      */
      let carWidth = $('#car1').width();
      /*
      When we race the car, we want to end the race at the nose of the car,
      by default, it's gonna end at the tail of the car, because position moves
      from top left of the element, so we are subtracting the carWidth here
      */
      let raceTrackWidth = $(window).width() - carWidth;
      /*
      Generating a random number between 1 and 6000, this number will be milliseconds,
      how long a car can race
      */
      // for Car1
      let car1RaceTime = Math.floor( (Math.random() * 6000) + 1 );
      // for Car2
      let car2RaceTime = Math.floor( (Math.random() * 6000) + 1 );
      // Starting with gameOver state to false
      let gameOver = false;
      // Starting with finishedPlace as first
      let finishedPlace = 'first';
      // A function to check to see if a car has won the race
      let checkIfComplete = () => !gameOver ? gameOver = true : finishedPlace = 'second';
      // jQuery Animate method
      $('#car1').animate({
          // Moving the car to the width of the race track
          left: raceTrackWidth
        }, car1RaceTime, function() {
          // Run's when animation is complete
          // check to see if a car has completed the race already
          checkIfComplete();
          // Add text to the element
          $('#raceInfoContainer__raceInfo1 span').text(`Finished in ${finishedPlace} and reached in ${car1RaceTime} milliseconds`);
      });
      // jQuery Animate method
      $('#car2').animate({
          // Moving the car to the width of the race track
          left: raceTrackWidth
        }, car2RaceTime, function() {
          // Run's when animation is complete
          // check to see if a car has completed the race already
          checkIfComplete();
          $('#raceInfoContainer__raceInfo2 span').text(`Finished in ${finishedPlace} and reached in ${car2RaceTime} milliseconds`);
      });
   });
   // Listening for click on reset button
   $('#reset').click(function() {
    // Resetting the cars to their starting positions
    $('.car').css('left','0');
    // Clearing the text
    $('.raceInfo span').text('');
  });
});
