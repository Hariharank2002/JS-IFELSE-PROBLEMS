/* The program must accept two integers X and Y as the number of books and price of each book as the input. The program must print the total price of the amount after applying the discount based on the below conditions:
-If the number of books is greater than or equal to 2 and less than or equal to 4, then 10 percent is discounted from the total price of the books.
-If the number of books is 5, then 20 percent is discounted from the total price of the books.
-If the number of books is more than 5, then 50 percent is discounted from the total price of the books.
-No discount is applied if none of the conditions matches.*/

let noOfBooks = 10;
let priceOfEach = 100;
let totalPrice = noOfBooks * priceOfEach;

if (noOfBooks >= 2 && noOfBooks <= 4) {
    let discount = totalPrice * 0.10;
    console.log("Your discounted amount is:", totalPrice - discount);
} else if (noOfBooks === 5) {
    let discount = totalPrice * 0.20;
    console.log("Your discounted amount is:", totalPrice - discount);
} else if (noOfBooks > 5) {
    let discount = totalPrice * 0.50;
    console.log("Your discounted amount is:", totalPrice - discount);
} else {
    console.log("No discount is applied.");
}

// output : Your discounted amount is: 500