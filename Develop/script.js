// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  let rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomIte(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  let userInput = prompt('How many characters would you like your password to contain')

  let passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    alert('Try Again!')
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 charaters!')
    return
  }

  let userWantsLowercase = confirm('Do you want lowercase letters?')
  let userWantsUppercase = confirm('Do you want uppercase letters?')
  let userWantsSpecialCharacters = confirm('Do you want special characters?')
  let userWantsNumbers = confirm('Do you want Number?')

  let numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let specialCharactersList = ['!', '@', '#', '$', '%', '^', '&', '*',]
  let upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let lowerCaseList = []

  let optionlist = []

  for (var i = 0; i < upperCaseList.length; i++) {
    lowerCaseList[i] = upperCaseList[i].toLocaleLowerCase()
  }

  if (userWantsLowercase === true) {
    optionlist.push(lowerCaseList)
  }

  if (userWantsUppercase === true) {
    optionlist.push(upperCaseList)
  }

  if (userWantsSpecialCharacters === true) {
    optionlist.push(specialCharactersList)
  }

  if (userWantsNumbers === true) {
    optionlist.push(numberList)
  }

  if (optionlist.length === 0) {
    window.alert('Invalid input TRY AGAIN!')
    return
  }


  let generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    let randomList = getRandomIte(optionlist)
    let randomChar = getRandomIte(randomList)
    console.log(randomChar)
    generatedPassword += randomChar
  }

  return generatedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
