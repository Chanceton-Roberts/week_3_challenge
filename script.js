// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercasearray=["a","b","c","d","e","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let capitalcasearray=["A","B","C","D","E","F","G",'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let numbersarray=["0","1",'2','3','4','5','6','7','8','9']
let specialcarrecterarray=["!","@",'#','$','%','^','&','*','(',')','-','_','=','+','?','<','>','[',']','{','}']
let lowercaseboolean;
let capitalcaseboolean;
let numbersboolean;
let specialcarrecterboolean;
let validcaracters=[]
  
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length){
  if(lowercaseboolean){
    validcaracters.push(lowercasearray)

  }else if(capitalcaseboolean){
    validcaracters.push (capitalcasearray)
  }else if(numbersboolean){
    validcaracters.push (numbersarray)
  }else if ( specialcarrecterboolean){
    validcaracters.push(specialcarrecterarray)
  } 
  
}

function initialquestions() {
  let lengthofpassword= prompt("Enter password legnth");
  
  

  lowercaseboolean=confirm("Do you want lowercase?");
  capitalcaseboolean=confirm("Do you want capitals?")
  numbersboolean=confirm("Do you want numbers?")
  specialcarrecterboolean=confirm("Do you want special caracters?")
  generatePassword(lengthofpassword)

}
initialquestions()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
