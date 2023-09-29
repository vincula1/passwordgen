// Assignment Code

/* Creating a data bank for each criteria, in case they do want it we choose from here */
function generatePassword() {
  var numArray = ["0","1","2","3","4","5","6","7","8","9"];
  var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?', '[', ']', ';', "'", ',', '.', '/', '\\', '`', '~', '-'];

  
  /* Making empty arrays to store in */
  var options = [];
  var chosenArr = [];
  /* User input for password length */
  const userInput = prompt("Please enter a number:");
  const numberInput = parseInt(userInput)
  console.log(numberInput);
    /* Criteria confirmation */
  var inclNums = window.confirm("Would you like to include numbers?");
  var inclLower = window.confirm("Would you like to include lower case letters?");
  var inclUpper = window.confirm("Would you liek to include upper case letters?");
  var inclSpecial = window.confirm("Would you like to include special characters?");


  /* Process of including characters based on criteria */
  if (inclNums) {
    options = options.concat(numArray);
  }

  if (inclLower) {
    options = options.concat(lowerAlphabet)
  }

  if (inclUpper) {
    options = options.concat(upperAlphabet)
  }

  if (inclSpecial) {
    options = options.concat(special)
  }

  for (i = 0; i < numberInput; i++) {
      const randomIndex = Math.floor(Math.random() * options.length);
      const item = options[randomIndex];
      chosenArr = chosenArr.concat(item)
  }

    password = chosenArr.join('');
    return password;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
