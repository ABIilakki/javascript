let amountInHand=1000
let shoePrice=700
let beltPrice=200

let shoeDiscount=10
let beltDiscount=3

let shoeTax=5
let beltTax=12

let totalShoePrice=shoePrice-(shoePrice*shoeDiscount/100)
 totalShoePrice=totalShoePrice+(totalShoePrice*shoeTax/100)



let totalBeltPrice=beltPrice-(beltPrice*beltDiscount/100)
totalBeltPrice=totalBeltPrice+(totalBeltPrice*beltTax/100)


console.log("Total amount  paid : "+(totalShoePrice+totalBeltPrice))
console.log("balance : "+(amountInHand-(totalShoePrice+totalBeltPrice)))