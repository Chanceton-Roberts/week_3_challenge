// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercasearray=["a","b","c","d","e","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let uppercasearray=["A","B","C","D","E","F","G",'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let numbersarray=["0","1",'2','3','4','5','6','7','8','9']
let specialarray=["!","@",'#','$','%','^','&','*','(',')','-','_','=','+','?','<','>','[',']','{','}']
let lowercaseboolean;
let uppercaseboolean;
let numbersboolean;
let specialboolean;
let validcharacters=[]
  
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function generatePassword(){

  let lengthofpassword = prompt("Enter password legnth");

  let lowercaseboolean=confirm("Do you want lowercase?");
  let uppercaseboolean=confirm("Do you want uppercase?");
  let numbersboolean=confirm("Do you want numbers?");
  let specialboolean=confirm("Do you want special caracters?");


  if(lowercaseboolean){
    for(i = 0; i < lengthofpassword ; i++){
    console.log (lowercasearray[i])
     var randomlowercase = lowercasearray[Math.floor((Math.random()*lowercasearray.length))];
   validcharacters.push (randomlowercase)
    }
   };

  
  if(uppercaseboolean){
    for (i=0; i < lengthofpassword; i++) {
    console.log (uppercasearray[i])
    var randomuppercase = uppercasearray[Math.floor((Math.random()*uppercasearray.length))];
    validcharacters.push (randomuppercase)
    }
  };

  if(numbersboolean){
    for(i = 0; i < lengthofpassword ; i++){
      console.log (numbersarray[i])
    var randomNumber = numbersarray[Math.floor((Math.random()*numbersarray.length))];
    validcharacters.push (randomNumber)
    }
  };

  if(specialboolean){
    for(i = 0; i < lengthofpassword ; i++){
    console.log (specialarray[i])
    var randomspecial = specialarray[Math.floor((Math.random()*specialarray.length))];
   validcharacters.push(randomspecial)
    }
  };

  return validcharacters;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);