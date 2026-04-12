/*function calculateDiscount(product, price) {

    let discount;
    let finalPrice;

    if (price > 1000) {
        discount = 20;
    } else {
        discount = 10;
    }

    finalPrice = price - (price * discount / 100);

    console.log("Product: " + product);
    console.log("Final Price: " + finalPrice);
}

calculateDiscount("Shoes", 2000);



function payment(amount, callback) {
    console.log("Payment of " + amount + " successful");
    callback();
}

function orderSuccess() {
    console.log("Order delivered");
}

function placeOrder(callback) {
    console.log("Order placed");
    callback(500, orderSuccess);
}

placeOrder(payment);

let employees = [
    { name: "Navi", salary: 50000 },
    { name: "John", salary: 70000 }
];

for (let emp of employees) {
    if (emp.salary > 60000) {
        console.log(emp.name + " → High Salary");
    } else {
        console.log(emp.name + " → Normal Salary");
    }
}



let correctPassword = "2002";
let attempt = 1;

while (attempt <= 3) {
    let input = prompt("Enter Password:");

    if (input === correctPassword) {
        console.log("Login success");
        break;
    } else {
        console.log("Attempt " + attempt);
    }

    attempt++;
}



function* offers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



let cart = [100, 200, 300, 400];
let total = 0;

for (let price of cart) {
    total += price;
}

console.log("Total Bill:", total);



let user = {
    name: "Navi",
    role: "Developer",
    location: "India"
};

for (let key in user) {
    console.log(key + " : " + user[key]);
}

//Task 8: Factory Pattern

function createPhone() {
    return "Phone";
}

function createBattery() {
    return "Battery";
}

function createCharger() {
    return "Charger";
}

function createOrder() {
    return createPhone() + " + " + createBattery() + " + " + createCharger();
}

console.log("Your Order:", createOrder());




function collegeForm(name, department = "Not Assigned") {
    console.log("Name:", name);
    console.log("Department:", department);
}

collegeForm("Ajith");


function emi(p) {
    return function (r) {
        return function (t) {
            return (p * r * t) / 100;
        };
    };
}

console.log("EMI:", emi(10000)(2)(12));

//Task 11: Even/Odd Analyzer

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " → Even");
    } else {
        console.log(i + " → Odd");
    }
}



if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); 



(function () {
    console.log(" Flash Sale: 50% OFF on Shirts");
})();

//Task 14: Marks Calculator

function marks(a, b, c) {
    let total = a + b + c;
    let avg = total / 3;

    return {
        total: total,
        average: avg
    };
}

let result = marks(80, 90, 70);
console.log("Total:", result.total);
console.log("Average:", result.average);


let offerList = ["10% OFF", "20% OFF", "Free Delivery"];

for (let i = 0; i < offerList.length; i++) {
    console.log(offerList[i]);
}*/