
const A = 5
const B = 16
const C = 3
const D = 12
const X = 150


const totalMoney = A*1 + B*2 + C*5 + D*10;

if (totalMoney === X) {
    console.log("Paid");
} else if (totalMoney > X) {
    console.log("Paid");
    console.log(totalMoney - X);
} else if (totalMoney < X) {
    console.log("Not paid");
    console.log(totalMoney);
} else {
    console.log("Error occurred.");
}

// output : paid 22