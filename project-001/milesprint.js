//The conversion Factor for miles to kilometers
let milestokilo = 1.60934;

//Ask user to Get Data in miles
let miles = prompt("<br> Pleas Enter the distance in miles");
document.write(miles, "<br> miles is equal to ");

//user the converstion factor to multyiply miles into kilometers
let kilometers = miles * milestokilo;
document.write(kilometers, "Kilometers");
let display = "<br> The distance of " + kilometers + " kms is equal to " + miles + ("\n Miles.")
document.write(display);
