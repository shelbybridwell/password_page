function generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@$%^&*()";
  var allChars = numberChars + upperChars + lowerChars + specialChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 4); 
  console.log (randPasswordArray)
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

function myFunction() {
  var passwordLength = prompt("How many characters would you like to include? (Must be between 8-128 chararacters).");
  console.log(typeof passwordLength)
//chose length
  if (parseInt(passwordLength) >= 8 && (parseInt(passwordLength) <=128)) {
  console.log("working")
  } else {
    alert ("Please pick a number between 8 and 128.");
    myFunction();
  } 
//confirm upper case
if (confirm("Include Upper Case letters?") == true){
console.log("working 2")
} else {
console.log("working2-no")

  }
//confirm lower case 
if (confirm("Include Lower Case letters?") == true){
  console.log("working 2")
  } else {
  console.log("working2-no")
    
      }
//confirm of special characters
if (confirm("Include Special Characters?") == true){
  console.log("working 2")
    } else {
  console.log("working2-no")
        
          }

//generate function
  document.getElementById("password").innerHTML =  (generatePassword(parseInt(passwordLength)));
}
