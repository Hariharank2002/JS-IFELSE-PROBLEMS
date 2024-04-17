/*The program must accept an integer P which represents the price of an item in a supermarket as the input.
The program must print the discount amount for P up to 2 decimal places based on the following conditions,
- If the price is less than or equal to Rs. 1000 then 10 percentage discount is applied.
-Else if the price is greater than Rs. 1000 then 10 percentage discount is applied up to Rs. 
1000 and 5 percentage discount is applied for the remaining price amount. */

const priceOfAnItem = 1543

if (priceOfAnItem > 1000) {
    const remainingPrice = priceOfAnItem - 1000;
    const remainingDiscount = remainingPrice * 0.05;
    console.log("Discount price is:", remainingDiscount + 100);
} else if (price == 1000) {
    console.log("Discount price is:", priceOfAnItem * 0.10);
} else {
    console.log("No discount is applied.");
}

// output : Discount price is: 127.15