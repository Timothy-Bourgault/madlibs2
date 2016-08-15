
$(document).ready(function() {
  $("#blanks").submit(function(event) {

  var counter = 1;
  var wordList = [$("#input1").val(), $("#input2").val(), $("#input3").val(), $("#input4").val(), $("#input5").val()];


  wordList.forEach(function(currentWord) {

    $("#output" + counter).text(currentWord);
    counter += 1;

  });

  // blanks.forEach(function(blank) {
  //   var userInput = $("#" + blank).val();
  //   console.log(userInput);
  //   $("#" + blanks).text(userInput);
  // });

   $("#letter").show();
   event.preventDefault();
  });
});
