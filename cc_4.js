// task 1: Customer Discounts
let purchaseAmount = 200;
let finalAmount = purchaseAmount;
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9;
    console.log("Discount applied")
}
console.log(`Final amount after discount: $${finalAmount}`);

// task 2: For Loop
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales [i];
}
console.log(`Total Sales: $${totalSales}`);

//task 3: While Loop
let stock = 10;
while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--;
}
console.log("Stock depleted.");

//task 4: Do...While Loop
let responses = 0;
do {
    console.log(`Collected response: ${responses}`);
    responses++;
} while (responses < 3);

//task 5: For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

//task 6: For...Of Loop
let products = ["Laptop", "Mouse", "Keyboard"];
for (let product of products) {
    console.log(`Product: ${product}`);
}

//task 7: forEach() Method
let orders = [101, 102, 103];
orders.forEach(order => {
    console.log(`Processing Order ID: ${order}`)
});

//task 8: Function Declaration
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
let tax = calculateTax(1000, 0.07);
console.log(`Tax: $${tax}`);

//task 9: Function Expression
const applyDiscount = function(price, discountPercentage) {
    return price - (price * (discountPercentage / 100));
};
let discountedPrice = applyDiscount (100, 10)
console.log(`Discounted Price: $${discountedPrice}`);

//task 10: Arrow Function
const calculatePoints = (purchaseAmount) => {
    return (purchaseAmount / 10);
};
let points = calculatePoints(200);

console.log(`Points Earned: ${points}`);