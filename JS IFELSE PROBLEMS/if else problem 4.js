/*A customer buys three items in a shop.
If exactly two items have the same price,
then a 10% discount is applied to those two items.
The program must accept three integers X, Y and Z as the price of the three items and 
then the program must print the amount to be paid by the customer with the precision up to two decimal places as the output.
*/

let x = 100;
let y = 200;
let z = 200;

if (x == y) {
    let d = (x + y) * 0.10;
    console.log("Your discounted amount is:", x + y + z - d);
} else if (y == z) {
    let d = (y + z) * 0.10;
    console.log("Your discounted amount is:", x + y + z - d);
} else if (z == x) {
    let d = (z + x) * 0.10;
    console.log("Your discounted amount is:", x + y + z - d);
} else {
    console.log("Your amount is:", x + y + z);
    console.log("Sorry! You have no discount.");
}

// output : Your discounted amount is: 460