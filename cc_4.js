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
