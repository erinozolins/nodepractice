/* Write a program that asks the user for a number n and gives them the possibility 
 * to choose between computing the sum and computing the product of 1,…,n.
 */

 // User input
const userInput = 10;
const userInput2 = "sum";

// Setting count to zero because we all start somewhere
let count = 0;

// In cases where it's a product, the count needs to be 1 because multiplying by zero = fail
if (userInput2 === "product") {
    count = 1;
}

// Function station
const incrementAndDisplayCount = (count, i) => {
    count += i;
    console.log(`adding = ${i}`)
    console.log(`count is currently` , count)
    return count; 
}

// Looping through the numbers 1 through userInput
for (let i = 1; i <= userInput; i++) {
    if (userInput2 === 'sum') {
        count = incrementAndDisplayCount(count, i)
    } if (userInput2 === 'product') {
        console.log(`adding = ${i}`)
        count *= i;
        console.log(`count is currently` , count)
    } else {

    }
}
console.log(`count = ${count}`)

console.log('a\nb\nc\n');