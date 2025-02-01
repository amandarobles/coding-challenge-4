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