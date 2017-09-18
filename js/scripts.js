$(document).ready(function(){
  $("#wordPlay").submit(function(event) {
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split(" ");

    var newSentenceArray = sentenceArray.filter(function(word) {
      return word.length >= 3;
      });

    newSentenceArray.reverse();
      var fixString = newSentenceArray.join(" ");
      $(".output").prepend(fixString);

    event.preventDefault();

  });
});
