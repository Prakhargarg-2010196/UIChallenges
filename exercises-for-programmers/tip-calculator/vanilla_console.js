// First I will create the simple console version of the tip calculator

/* 
    Some questions 
    1. How to take input through console in js
    2. How to show output through console in js 
    3. How to run scripts in js.
    4. How to convert the inputs into number or any other datatype
    5. How to handle error of only entering numbers in javascript using prompt 
    6. How to check if the number is negative in javascript


    Answers 
    1. We can do it using browser's prompt() method 
    Learn how: https://sebhastian.com/javascript-console-input/
    2. We can do this using console's console.log() method or 
    3. We can do this using <script> tag (various methods to embed are there we would use external file one)
    4. Convert the values in input to number using Number()
    5. To handle getting only input as numbers as well as reprompting again and again for only number input
    we use while loop checking the regex with number regex and reprompting if it is not true 
    https://stackoverflow.com/questions/46552085/javascript-force-specific-data-type-input-or-accept-only-digits-in-input
    6. See this answer : https://stackoverflow.com/questions/3571717/how-to-check-if-a-number-is-negative
*/

/*
    Tip Calculator
    1. Create variables for storing tip,amount,total,rate and iniitialize them to zero 
    2. Take input of rate as number only
    3. Take input of amount as number only
    4. Convert inputs into number using the Number() function
    5. Change the value of rate to decimal and use in the next formula
    4. Calculate the Tip using rate : Tip=amount * rate 
    5. Calculate the totalamount=amount + tip
    6. display the output in console or using alert

*/

// Basic version of the app
let tip = 0, amount = 0, totalAmount = 0, rate = 0;
rate = Number(prompt("Enter the tip rate "));
// Add error check if tip,amount are numbers
const numberRegex = /^[0-9]+$/;
while (!numberRegex.test(rate) || rate<0) {
    alert("the current tip rate is not a number or provided number is negative value");
    rate = Number(prompt("Enter the correct tip rate in numbers "));
}
amount = Number(prompt("Enter the amount you want to give tip on"));
while (!numberRegex.test(amount) || amount <0 ) {
    alert("the current amount is not a number or provided number is negative value");
    rate = Number(prompt("Enter the correct amount in numbers "));
}
tip = (rate / 100) * amount;
totalAmount = tip + amount;
alert(totalAmount);


// Todo : Gui version of the app with inputs and changing state to get changing outputs.

