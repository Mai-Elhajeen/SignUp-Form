var fullName = "Mai Yahia Ismail Alhajeen";
var sent = "E-business II – business & Technical Skills";

// length my name:
var longthFullnmae= fullName.length;
console.log(longthFullnmae);

//display full name:
var myFullName = fullName.slice(0);
console.log(myFullName);

// display first name:
var myfName = fullName.slice(0,3);
console.log(myfName);

//display last name:
var myLName = fullName.slice(-8);
console.log(myLName);

//display secpund name:
var mySName = fullName.slice(4,9);
console.log(mySName);

//replace:
var repl1 = sent.replace(/business/g, "Business");
console.log(repl1);

//LowerCase:
var lowerSent = sent.toLowerCase();
console.log(lowerSent);

//trim:
var myName = fullName.trim();
alert(myName);

//charAt:
var myCharAt = fullName.charAt(0);
console.log(myCharAt);
// Homework:
var course = "Advanced Advanced Web Design - design 2";
var replace = course.replace(/Design/gi,"Professional");
console.log("The homework: " + "\n" + replace);