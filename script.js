// Assignment code here

// global vals
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var special = " !\"#$&%'()*+,-./:;<=>?@[\\]^_`{|}";


/**
 * 
 * @returns a randomly generated password
 */
function generatePassword() {
  // instance vars here
  var input = "";
  var length = 0;
  var ret = "";
  var temp;
  var seperateBaseChars = [0,0,0,0];
  var totals = [0,0,0,0];
  var bools = [false, false, false, false];



  //prompt for length of password 8 < x < 128
  length = getLength();

  //prompt for lowercase, uppercase, numeric, and/or special characters
  input = charTypes();
  baseChars = input[0];

  //setup seperateBaseChars for checking which char was used for validating password
  //check if lower was used
  if(input[1] >= 8){
    seperateBaseChars[0] = lower.length;
    input[1] = input[1] - 8;
    bools[0] = true;
  }
  //check if upper was used
  if(input[1] >= 4){
    seperateBaseChars[1] = seperateBaseChars[0] + upper.length;
    input[1] = input[1] - 4;
    bools[1] = true;
  }
  //check if nums where used
  if(input[1] >= 2){
    seperateBaseChars[2] = seperateBaseChars[1] + nums.length;
    input[1] = input[1] - 2;
    bools[2] = true;
  }
  //check if special was used
  if(input[1] >= 1){
    seperateBaseChars[3] = seperateBaseChars[2] + special.length;
    bools[3] = true;
  }
  console.log(seperateBaseChars.concat(", "));

  //instantiate keepGoing
  var keepGoing;
  do{
    ret = "";
    keepGoing = false;
    //do magic math functions
    for (var i = 0, n = baseChars.length; i < length; i++){
      //do floor of math.random * n to get a random number to use
      temp = Math.floor(Math.random()*n);
      //use temp random number to get random char
      ret += baseChars.charAt(temp);

      //check which array temp falls into
      if (temp < seperateBaseChars[0]){
        totals[0] ++;
      }
      else if (temp < seperateBaseChars[1]){
        totals[1] ++;
      }
      else if (temp < seperateBaseChars[2]){
        totals[2] ++;
      }
      else{
        totals[3]++;
      }
    }
    console.log("totals = " + totals.concat(", "));
    console.log("bools = " + bools.concat(", "));
    console.log("ret = " + ret);

    //check for uniqueness
    for (var j = 0; j < 4; j++){
      if (bools[j] && (totals[j] == 0)){
        keepGoing = true;
      }
    }

  }while(keepGoing);

  //check if legLength and charTypes are working propperly
  //console.log(length + " : " + input);

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
 * @returns [combined base chars, int with binary representation of which ones where selected]
 */
function charTypes(){
  var ret = "";
  var count = 0;
  do{
    //alert user to action needed
    window.alert("Please select a type of character to use for the password");
    //prompt for lower
    if(window.confirm("Do you want to use lower case letters?")){
      count += 8;
      ret += lower;
    }
    //prompt for upper
    if(window.confirm("Do you want to use upper case letters?")){
      count += 4;
      ret += upper;
    }
    //prompt for numbers
    if(window.confirm("Do you want to use numbers?")){
      count += 2;
      ret += nums;
    }
    //prompt for special chars
    if(window.confirm("Do you want to use Special Characters?")){
      count += 1;
      ret += special;
    }
      
    //check if ret has values
    if(count > 0)
      break;
    //if length is not greater then 0 tell user they messed up
    window.alert("You did not select anything...");
  }while(true);
  console.log(count);
  return [ret, count];
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
