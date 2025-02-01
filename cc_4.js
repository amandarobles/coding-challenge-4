// task 1: Customer Discounts
let purchaseAmount = 120;
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1;
    purchaseAmount -= discount;
}
console.log('Final amount after discount: $${purchaseAmount}');

// task 2: For Loop
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales [i];
}
console.log('Total Sales: $${totalSales}');

//task 3: While Loop
let stock = 10;
while (stock > 0) {
    console.log('Stock remaining: ${stock}');
    stock--;
}
console.log("Stock depleted.");

//task 4: Do...While Loop
let responses = 0;
do {
    console.log('Collected response #${responses + 1}');
    responses++;
} while (responses < 3);

//task 5: For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log('${key}: ${employee[key]}');
}

//task 6: For...Of Loop
let products = ["Laptop", "Mouse", "Keyboard"];
for (let product of products){
    console.log('Product: ${product}');
}

//task 7: forEach() Method
let orders = [101, 102, 103];
orders.forEach(order => {
    console.log('Processing Order ID: ${order}');
});