/* Write a function that returns the largest element in a list.
*/

// const list = [3, 7, 11, 9, 1, 5]

// list[0] < list[1, 2, 3, ..] 

// What are the edge cases - examples to test

// What if there are no numbers? 
// [] 
// (doesn't work, that's ok for this context)

// Only one number?
// [1]

// Only two numbers?
// [1, 3]

// Position of the biggest number? (first, last, middle) 
// [5, 3, 1]
// [3, 5, 1]
// [1, 3, 5]

// What if there's duplicates of a number? 
// [1, 1, 3, 3, 5, 5]
// [1, 3, 3, 5]

// What if it's all the same number? 
// [1, 1, 1]
// [0, 0, 0]

// What if it's a negative number? 
// [-1, -3, -5]

// What if you mix negatives and positives? 
// [1, -7, 5]

const returnLargestElement = (input) => {
    let largest = input[0]
    for (i = 0; i < input.length; i++) {
        if (input[i] > largest) {
            largest = input[i]; 
        }
    }
    console.log(largest);
    // return largest;
}

returnLargestElement([1, -7, 5])
