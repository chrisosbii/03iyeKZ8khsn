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
  var ret = "";

  //prompt for length of password 8 < x < 128
  length = getLength();

  //prompt for lowercase, uppercase, numeric, and/or special characters
  input = charTypes();

  //check if legLength and charTypes are working propperly
  //console.log(length + " : " + input);

  //do magic math functions
  for (var i = 0, n = input.length; i < length; i++){
    ret += charset.charAt(Math.floor(Math.random()*n));
  }
  return ret;
}

/**
 * function to prompt user for length of password
 * needs to be equal to or greater then 8
 * needs to be less then 128
 */
function getLength(){
  var ret = 0;
  var bool = true;
  do{
    //prompt user for length
    ret = parseInt(window.prompt("Please input a number which represents the length of your password. The number should be at least 8 and less then 128", 8));

    //check if input is a number
    if (ret == NaN)
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

/**
 * uses alerts to find out what types of characters you want to use
 */
function charTypes(){
  var ret = "";
  do{
    //alert user to action needed
    window.alert("Please select a type of character to use for the password");
    //prompt for lower
    if(window.confirm("Do you want to use lower case letters?"))
      ret += lower;
    //prompt for upper
    if(window.confirm("Do you want to use upper case letters?"))
    ret += upper;
    //prompt for numbers
    if(window.confirm("Do you want to use numbers?"))
      ret += nums;
    //prompt for special chars
    if(window.confirm("Do you want to use Special Characters?"))
      ret += special;
    //check if ret has values
    if(ret.length > 0)
      break;
    //if length is not greater then 0 tell user they messed up
    window.alert("You did not select anything...");
  }while(true);
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
