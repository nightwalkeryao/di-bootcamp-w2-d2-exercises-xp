// Exercise 1: Simple If/Else Statement

let x = 12
let y = 13
if (x > y)
    console.log("x is the biggest number")
else
    console.log("y is the biggest number")


// Exercise 2: Chihuahua

// 1. Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua"

// 2. Check and display how many letters are in newDog.
console.log(`There are ${newDog.length} letters in ${newDog}.`)

// 3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

// 4. Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’
if (newDog == "Chihuahua")
    console.log("I love Chihuahuas, it's my favorite dog breed")
else
    console.log("I dont care, I prefer cats")


// Exercise 3: Even Or Odd

// 1. Prompt the user for a number and save it to a variable.
let number = Number(prompt("Please enter a number: "))
// 2. Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if (number % 2 == 0)
    console.log(`${number} is an even number`)
else
    console.log(`${number} is an odd number`)


// Exercise 4: Group Chat

// Below is an array of users that are online in a group chat.
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

// 1. Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
switch (users.length) {
    case 0:
        console.log("no one is online")
        break;

    case 1:
        console.log(`${users[0]} is online`)
        break;

    case 2:
        console.log(`${users[0]} and ${users[1]} are online`)
        break;

    default:
        console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`)
        break;
}

