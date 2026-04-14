//1

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
]

let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
let costly = cart.filter(item => item.price > 1000);
let names = cart.map(item => item.name.toUpperCase());

console.log(total);
console.log(costly);
console.log(names);

//2

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

let failed = students.filter(s => s.marks < 50);
let gotDistinction = students.some(s => s.marks > 80);
let allPassed = students.every(s => s.marks > 35);
let firstFail = students.find(s => s.marks < 50);

console.log(failed);
console.log(gotDistinction);
console.log(allPassed);
console.log(firstFail);

//3

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];


let updated = employees.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));
let high = employees.filter(e => e.salary > 30000);
let totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
let sorted = [...employees].sort((a, b) => a.salary - b.salary);

console.log(updated);
console.log(high);
console.log(totalSalary);
console.log(sorted);

//4

let products = ["Laptop", "Mobile", "Tablet", "Camera"];
let exists = products.includes("Mobile");
let lower = products.map(p => p.toLowerCase());
let index = products.indexOf("Tablet");
let joined = products.join("-");

console.log(exists);
console.log(lower);
console.log(index);
console.log(joined);

//5

let dob = new Date("2003-01-01");
let age = new Date().getFullYear() - dob.getFullYear();

console.log("You are " + age + " years old");

//6

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let inputUser = "admin";
let inputPass = "1234";

let user = users.find(u => u.username === inputUser && u.password === inputPass);

console.log(user ? "Login Success " : "Invalid Credentials ");

//7

let numbers = [10, 15, 20, 25, 30];
let even = numbers.filter(n => n % 2 === 0);
let hasOdd = numbers.some(n => n % 2 !== 0);
let allEven = numbers.every(n => n % 2 === 0);
let first = numbers.find(n => n > 20);

console.log(even);
console.log(hasOdd);
console.log(allEven);
console.log(first);

//8

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);
let pending = orders.filter(o => o.status === "pending");
let big = orders.some(o => o.amount > 1000);
let sortedorders = [...orders].sort((a, b) => a.amount - b.amount);

console.log(revenue);
console.log(pending);
console.log(big);
console.log(sortedorders);