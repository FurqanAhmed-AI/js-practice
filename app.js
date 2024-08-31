function checkAge() {
    // Prompt the user to enter their age
    const age = prompt("Please enter your age:");

    // Check if the age is 18 or more
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
}

// Call the function to execute it
checkAge();
