function generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@$%^&*()";
  var allChars = numberChars + upperChars + lowerChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
document.getElementById("generate").addEventListener("click", myFunction);
 // var numResult = prompt("How many characters would you like to include? (Must be between 8-128 chararacters.)");
 //if (numResult= i <= 8 and >=128) {
//document.getElementById("password").value = numResult;
//}
 //var uppercharResult = prompt("Inlude captitol letters? ")
//if (uppercharResult = yes){

 // }
 // var lowercharResult = prompt("Inlude captitol letters? ")
 //if (uppercharResult = yes){

// }
// var specialcharResult = prompt("Inlude captitol letters? ")
// if (uppercharResult = yes){

 //}
function myFunction() {
  document.getElementById("password").innerHTML =  (generatePassword(10));
}
