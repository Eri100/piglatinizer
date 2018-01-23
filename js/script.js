/*global $*/
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
  
  $("button").click(function(){
    var message=$("#input").val();
    var newword=sentenceToPigLatin(message);
    console.log(newword);
    $("#result").html(newword);
  });
  

 
// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
 function ay(word) {
  var firstletter = word.slice(0,1);
  var lastletter =word.slice(1,word.length);
  if (firstletter ==="a" || firstletter === "e" || firstletter ==="i" || firstletter ==="o" || firstletter ==="u"){
      return (word + "ay ")
  }
  else {
      return (lastletter + firstletter + "ay  ")
   }
  }





// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

function sentenceToPigLatin(sentence) {
    var split = sentence.split(" ");
    $("#result").empty();
    for (var i=0; i<split.length; i=i+1) {
    $("#result").append(ay(split[i]));
      
    }
}
});