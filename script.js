// global strings for character types to use
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var special = " !\"#$&%'()*+,-./:;<=>?@[\\]^_`{|}";

/**
 * Main call fuction to generate a password
 * uses getLength, charTypes, and createPassword functions
 * @returns a randomly generated password based on user inputs
 */
function generatePassword() {
  //prompt for length of password 8 < x < 128
  var length = getLength();

  //prompt for lowercase, uppercase, numeric, and/or special characters
  var input = charTypes();

  //calls createPassword function when all inputs are obtained
  return createPassword(input,length);
}
/**
 * do the createPassword function to get a password. Validate that the password meets requirements
 * and then return the password else recursively call itself
 * @param {[string, [Numbers]]} baseChars 
 * @param {Number} passLength 
 * @returns password
 */
function createPassword(baseChars, passLength){
  var tracking = [];
  for(var i = 1; i < baseChars[1].length; i++){
    tracking.push(false);
  }
  var temp = 0;
  var ret = "";

  //generate ret
  for (var i = 0; i < passLength; i++){
    temp = Math.floor(Math.random()*baseChars[0].length);
    ret += baseChars[0].charAt(temp);
    //check which group the number is at
    for (var j = 1; j < baseChars[1].length; j++){
      if(baseChars[1][j-1] <= temp && baseChars[1][j] > temp)
        tracking[j-1]=true;
    }
  }
  //check if any of the values are missing
  if(tracking.includes(false)){
    //if at least one is missing repeat
    return createPassword(baseChars, passLength);
  }
  else{
    //else return ret
    return ret;
  }
  //do calculation
}

/**
 * function to prompt user for length of password
 * needs to be equal to or greater then 8
 * needs to be less then 128
 * @returns number between 8 and 128
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
    else if (ret < 8) //check if input is at least 8 (x >= 8) 
      window.alert("Please input a number greater then or equal to 8");
    else if (ret > 128) //check if input is more then 128 (x < 128)
        window.alert("Please input a number less then 128");
    else
      break;
  }while(true);
  return ret;
}

/**
 * uses alerts to find out what types of characters you want to use
 * returns the full character list and tracks the count of each new area of the list starting at 0
 * If the end user does not select an option count is not increased so it will cycle through the promps again
 * 
 * @returns [combined baseChars for a password, Array of numbers representing endpoint of added arrays of characters]
 */
function charTypes(){
  var ret = "";
  var count = 0;
  var counts = [0];
  do{
    //alert user to action needed
    window.alert("Please select a type of character to use for the password");
    //prompt for lower
    if(window.confirm("Do you want to use lower case letters?")){
      count = count + lower.length;
      counts.push(count);
      ret += lower;
    }
    //prompt for upper
    if(window.confirm("Do you want to use upper case letters?")){
      count = count + upper.length;
      counts.push(count);
      ret += upper;
    }
    //prompt for numbers
    if(window.confirm("Do you want to use numbers?")){
      count = count + nums.length;
      counts.push(count);
      ret += nums;
    }
    //prompt for special chars
    if(window.confirm("Do you want to use Special Characters?")){
      count = count + special.length;
      counts.push(count);
      ret += special;
    }
      
    //check if ret has values
    if(count > 0)
      break;
    //if length is not greater then 0 tell user they messed up
    window.alert("You did not select anything...");
  }while(true);
  //console.log(count);
  return [ret, counts];
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
