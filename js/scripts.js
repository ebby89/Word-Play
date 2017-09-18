$(document).ready(function(){
  $("#wordPlay").submit(function(event) {
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split(" ");
    var newSentenceArray = [];

    sentenceArray.forEach(function(word) {
      if (word.length >= 3) {
        newSentenceArray.push(word);
      }
    });

    newSentenceArray.reverse();
      var fixString = newSentenceArray.join(" ");
      $(".output").prepend(fixString);

    event.preventDefault();

  });
});
