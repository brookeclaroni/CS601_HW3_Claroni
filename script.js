function add(num1, num2) {
    return Number(num1) + Number(num2);
}

// 1. Welcomes visitor with alert
alert("Welcome!");

// 2. Prompts for name
var visitor = prompt("What is your name?");

// 3. Displays name with alert
alert("Welcome " + visitor + "!");


var repeat = "yes"
do {
    
    // 4. Prompts visitor for two numbers
    var num1 = prompt("Please enter a number:");
    var num2 = prompt("Please enter another number:");

    // 5. Uses a function to calculate sum and display with alert
    var result = add(num1, num2);
    alert("The sum of your two numbers is " + result);

    // 6. Conditional logic
    if (result > 10) {
        alert("That is a big number.");
    }
    else {
        alert("That is a small number.");
    }

    // 7. Loop
    var repeat = prompt("Would you like to add 2 numbers again?");
} while (repeat == "yes");

alert("Thank you for visiting the program.");
