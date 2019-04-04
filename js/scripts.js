// var consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var vowels = ["a", "e", "i", "o", "u"];
var exceptions = ["qu"];
var translate = function(sentence) {

};

function findVowelIndex(characters) {
  for (var i = 0; i <= characters.length - 1; i++) {
    if (vowels.includes(characters[i])) {
      return i;
    }
  }
  console.log("didn't find a vowel");
  return -1;
}


// jQuery user interface logic here.
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var words = $('input#words').val().split(' ');
    var result = ''
    for (var i = 0; i <= words.length - 1; i++) {
      var word = words[i];
      var letters = word.split('');
      var index = findVowelIndex(letters);
      word = word.slice(index) + word.slice(0, index);
      // if (vowels.includes(letters[0])) {
      result += ' ' + word
      if (index === 0 && letters.length > 1) {
        result += 'way'
      } else {
        result += 'ay';
      }
        // }
    }
    $('#output').text(result).show();
  });
});
