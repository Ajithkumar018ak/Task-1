/*Task -3
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