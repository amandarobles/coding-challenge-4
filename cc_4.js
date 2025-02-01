// task 1: Customer Discounts
let purchaseAmount = 120;
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1;
    purchaseAmount -= discount;
}
console.log('Final amount after discount: $${purchaseAmount}');