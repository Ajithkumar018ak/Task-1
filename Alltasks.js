/*1. Print name & designation
console.log("Name: Ajith");
console.log("Designation: Front end Developer");

// 2. Alert
alert("Welcome to JavaScript Session"); 

// 3. Confirm
let likeCoding = confirm("Do you like coding?");
console.log("Likes Coding:", likeCoding); 

// 4. Prompt
let favFood = prompt("Enter your favorite food:");
console.log("Favorite Food:", favFood);

// 5. Display in UI
document.writeln("Good Evening Team");
 
// console method
console.log(100);

console.warn("This is a warning");

console.error("Something went wrong!");

console.log("Message 1");
console.log("Message 2");
console.log("Message 3");

console.clear();

// data types
let name = "Ajith";
console.log(typeof name); 

let age = 22;
console.log(typeof age);

let Student = true;
console.log(Student); 

let x;
console.log(x); 

let y = null;
console.log(y); 

//Arrays

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);


fruits.push("Pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.length);

//objects

let student = {
    name: "Ajith",
    age: 22,
    course: "B.Tech IT",
    Hobbies: ["cricket", "Reading book", "Editing"]
};


console.log(student.name);


student.college = "HICET College";
console.log(student);


console.log(student.Hobbies[1]);


student.age = 23;
console.log(student);

// operators

let a = 4;
let b = 2;

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 

// increment & Decrement

let num1 = 5;
console.log(num1++); 
console.log(num1);   

let num2 = 5;
console.log(++num2); 


let x1 = 5;
console.log(x1++); 
console.log(x1);   

let x2 = 5;
console.log(++x2); 


let d = 10;
console.log(d--); 
console.log(d);  

//Logic 
let userAge = prompt("Enter your age:");
if (userAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

let userName = prompt("Enter your name:");
console.log("Hello " + userName);


let marks = [85, 90, 78, 92, 88];
let max = Math.max(...marks);
console.log("Highest Mark:", max);


let fruitObj = {
    category: "Tropical",
    items: ["Mango", "Banana", "Pineapple"]
};

console.log(fruitObj.items[0]);


let favFruits = [];

favFruits.push(prompt("Enter fruit 1:"));
favFruits.push(prompt("Enter fruit 2:"));
favFruits.push(prompt("Enter fruit 3:"));

console.log(favFruits); 


 Loan
let name = prompt("Enter Name:");
let ageInput = prompt("Enter Age:");
let salaryInput = prompt("Enter Monthly Salary:");
let loanInput = prompt("Enter Loan Amount:");


console.log("Before conversion (Age):", typeof ageInput);
console.log("Before conversion (Salary):", typeof salaryInput);
console.log("Before conversion (Loan):", typeof loanInput);


let age = Number(ageInput);
let salary = Number(salaryInput);
let loanAmount = Number(loanInput);

console.log("After conversion (Age):", typeof age);
console.log("After conversion (Salary):", typeof salary);
console.log("After conversion (Loan):", typeof loanAmount);



if (age >= 21 && age <= 60 && salary >= 25000) {
    console.log("Eligible ");
} else {
    console.log("Not Eligible ");
}



let emi = loanAmount;
emi /= 12;   

console.log("EMI:", emi);



if (loanAmount > 500000) {
    console.log("Loan Category: High Loan");
} else if (loanAmount > 200000) {
    console.log("Loan Category: Medium Loan");
} else {
    console.log("Loan Category: Low Loan");
}


let risk = (salary > 50000) ? "Low Risk" : "High Risk";
console.log("Risk Level:", risk);



switch (true) {
    case (emi > 40000):
        console.log("Customer Type: Premium Customer");
        break;
    case (emi > 20000):
        console.log("Customer Type: Standard Customer");
        break;
    default:
        console.log("Customer Type: Basic Customer");
} */

     //loop methods

    //Task 1: E-Commerce Discount System
     function calculateDiscount(product, price) {

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

//Task 2: Order Processing using Callback

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

// Task 3: Employee Data Loop System

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

//Task 4: Login Attempts

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

// Task 5: Coupon Generator

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

//Task 6: Shopping Cart Total

let cart = [100, 200, 300, 400];
let total = 0;

for (let price of cart) {
    total += price;
}

console.log("Total Bill:", total);

//Task 7: User Profile

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


//Task 9: Default Parameters

function collegeForm(name, department = "Not Assigned") {
    console.log("Name:", name);
    console.log("Department:", department);
}

collegeForm("Ajith");

//Task 10: Currying EMI

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

// Task 12: Scope Debugging

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); 

// Task 13

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

//Task 15: Retry Offer System

let offerList = ["10% OFF", "20% OFF", "Free Delivery"];

for (let i = 0; i < offerList.length; i++) {
    console.log(offerList[i]);
}
