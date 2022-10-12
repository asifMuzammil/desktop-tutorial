//The conversion Factor for miles to kilometers
let milestokilo = 1.60934;

//Ask user to Get Data in miles
let miles = prompt("Pleas Enter the distance in miles");
console.log(miles, "miles is equal to ");

//user the converstion factor to multyiply miles into kilometers
let kilometers = miles * milestokilo;
console.log(kilometers, "Kilometers");
let display = "The distance of " + kilometers + " kms is equal to " + miles + (" Miles.")
console.log(display);
