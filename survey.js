let myName = prompt ("What's your name?");
while (!myName) {
    alert ("Please enter a valid name.");
    myName = prompt ("What's your name?");
}
console.log(myName);

let myAge = prompt ("How old are you?");
while (!myAge) {
    alert ("Please enter a valid number.");
    myAge = prompt ("How old are you?");
}
console.log(myAge);

let favColor = prompt ("What's your favorite color?");
while (!favColor) {
    alert ("Please enter a valid color.");
    favColor = prompt ("What's your favorite color?");
}
console.log(favColor);

let employment = confirm ("Are you currently employed?");
console.log(employment);
if (employment === true) {
    alert ("Your name is " + myName + ", you are " + myAge + " years old, your favorite color is " + favColor + " and you are currently employed.")
    console.log ("Your name is " + myName + ", you are " + myAge + " years old, your favorite color is " + favColor + " and you are currently employed.")
}
else {
    alert ("Your name is " + myName + ", you are " + myAge + " years old, your favorite color is " + favColor + " and you are currently unemployed.")
    console.log ("Your name is " + myName + ", you are " + myAge + " years old, your favorite color is " + favColor + " and you are currently unemployed.")
}

alert ("Thank you for completing this survey.");
console.log ("Thank you for completing this survey.");
