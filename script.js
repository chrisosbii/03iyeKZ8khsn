// Assignment code here

// global vals
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var special = " !\"#$&%'()*+,-./:;<=>?@[\\]^_`{|}";

function generatePassword() {
  // instance vars here
  var input = "";
  var length = 0;

  //prompt for length of password 8 < x < 128

  //prompt for lowercase, uppercase, numeric, and/or special characters

}

function getLength(){
  var ret = 0;
  var bool = true;
  do{
    //prompt user for length
    ret = window.prompt("Please input a number which represents the length of your password. The number should be at least 8 and less then 128", 8);

    //check if input is a number
    if (typeof ret == "string")
      window.alert("Please input a number");
    else if (ret < 8) //check if input is at least 8 (>=) 
      window.alert("Please input a number greater then or equal to 8");
    else if (ret > 128) //check if input is more then 128 (<)
        window.alert("Please input a number less then 128");
    else
      break;
  }while(true);
  //check if input is a number
  return ret;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
