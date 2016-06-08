$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    // debugger;
    var quoteInput = $("input#quote").val();
    var characters = quoteInput.split("");
    // console.log(characters);
    var result = [];

    function vowelRemoval(character)
    {
      if (character === "a") {
        character = "-";
        result.push(character);
      } else if (character === "e") {
        character = "-";
        result.push(character);
      } else if (character === "i") {
        character = "-";
        result.push(character);
      } else if (character === "o") {
        character = "-";
      } else if (character === "u") {
        character = "-";
      } else if (character === "y") {
        character = "-";
        result.push(character);
      } else {
        result.push(character);
      }
    }

characters.forEach(vowelRemoval);

alert(result);
result = [];

characters.forEach(
      function(character)
      {
        if (character === "a")
        {
          character = "-";
          result.push(character);
        }
        else if (character === "e")
        {
          character = "-";
          result.push(character);
        }
        else if (character === "i")
        {
          character = "-";
          result.push(character);
        }
        else if (character === "o")
        {
          character = "-";
          result.push(character);
        }
        else if (character === "u")
        {
          character = "-";
          result.push(character);
        }
        else if (character === "y")
        {
          character = "-";
          result.push(character);
        }
        else
        {
          result.push(character);
        }
      }
    );

    var message = result.join("");
    alert(message);


  event.preventDefault();
  });
});




// for (index = 0; index <= quoteInput.length; index += 1) {
//
//   if (quote)
//
// }

// var vowels =
// var result = quoteInput.replace(vowels, "-");

// for (index = 0; index < quoteInput.length; index ++) {}

// var dashCharacters = characters.map(function(character) {
//   character.replace(",","-");
// });
//
//
//   alert(dashCharacters);
