let myFName = prompt ("What is your first name?");
while (!myFName) {
    alert ("Please enter a valid first name.");
    myFName = prompt ("What is your first name?");
}
console.log(myFName);

let myLName = prompt ("What is your last name?");
while (!myLName) {
    alert ("Please enter a valid last name.");
    myLName = prompt ("What is your last name?");
}
console.log(myLName);

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

let favArtist = prompt ("Who is your favorite musician?");
while (!favArtist) {
    alert ("Please enter a valid name or stage name.");
    favArtist = prompt ("Who is your favorite musician?");
}
console.log(favArtist);

let employment = confirm ("Are you currently employed?");
console.log(employment);
if (employment === true) {
    alert ("Your name is " + myFName + " " + myLName + ", you are " + myAge + " years old, your favorite color is " + favColor + ", your favorite musician is " + favArtist + " and you are currently employed.")
    console.log ("Your name is " + myFName + " " + myLName + ", you are " + myAge + " years old, your favorite color is " + favColor + ", your favorite musician is " + favArtist + " and you are currently employed.")
}
else {
    alert ("Your name is " + myFName + " " + myLName + ", you are " + myAge + " years old, your favorite color is " + favColor + ", your favorite musician is " + favArtist + " and you are currently unemployed.")
    console.log ("Your name is " + myFName + " " + myLName + ", you are " + myAge + " years old, your favorite color is " + favColor + ", your favorite musician is " + favArtist + " and you are currently unemployed.")
}

alert ("Thank you for completing this survey.");
console.log ("Thank you for completing this survey.");

let hFName = document.getElementById('firstName');
hFName.innerHTML = myFName;
console.log(hFName);

let hLName = document.getElementById('lastName');
hLName.innerHTML = myLName;
console.log(hLName);

let hAge = document.getElementById('age');
hAge.innerHTML = myAge;
console.log(hAge);

let hColor = document.getElementById('color');
hColor.innerHTML = favColor;
console.log(hColor);

let hArtist = document.getElementById('artist');
hArtist.innerHTML = favArtist;
console.log(hArtist);

let hEmployment = document.getElementById('employment');
hEmployment.innerHTML = employment;
console.log(hEmployment);

