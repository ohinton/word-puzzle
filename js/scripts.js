$(document).ready(function() {
  $("form#puzzle").submit(function(event) {

    var quoteInput = $("input#quote").val();

    for (index = 0; index <= quoteInput.length; index += 1) {

      if (quote)

    }



  event.preventDefault();
  });
});


// var result = quoteInput.split("a");
// var result = quoteInput.split("e");
// var result = quoteInput.split("i");
// var result = quoteInput.split("o");
// var result = quoteInput.split("u");
// var result = quoteInput.split("y");
  // alert(result);

// var characters = quoteInput.split("");
// var dashCharacters = characters.map(function(character) {
//   return character.replace("-");
// });
//
// var results = [];
// for (var index = characters; index <= quoteInput; index = dashCharacters) {
//   results.push(index);
