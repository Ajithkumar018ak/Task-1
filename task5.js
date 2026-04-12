let cart1 = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];
let cart2 = [
  { name: "Watch", price: 2000 }
];
let mergedCart = [...cart1, ...cart2];
mergedCart.push({ name: "Cap", price: 300 });
mergedCart.pop();
let total = mergedCart.reduce((sum, item) => sum + item.price, 0);
console.log(mergedCart);
console.log("Total Price:", total);

let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

let updatedUser = { ...user, ...update };

let { name, role, salary } = updatedUser;

console.log(`${name} is now a ${role} earning ${salary}`);

function teamScore(teamName, ...scores) {
  console.log("Team:", teamName);
  console.log("Scores:", scores);

  let total = scores.reduce((sum, s) => sum + s, 0);
  let highest = Math.max(...scores);

  console.log("Total:", total);
  console.log("Highest:", highest);
}

teamScore("CSK", 100, 200, 150);

let apiData = {
  user: {
    username: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
};

let {
  user: {
    username: userName,
    address: { city, pincode }
  }
} = apiData;

console.log(`${userName} lives in ${city} - ${pincode}`);

let users = ["A", "B", "C", "D", "E"];

users.splice(2, 2, "X", "Y");

let firstThree = users.slice(0, 3);

console.log(users.includes("B"));
console.log(users.indexOf("E"));

console.log(users);
console.log(firstThree);

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

let cleanData = messyData.flat(Infinity).filter(item => item != null);

console.log(cleanData);

let prices = [1000, 200, 50, 5000];

prices.sort((a, b) => a - b);

console.log(prices);

let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 }
];

let totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0);
let avg = totalRevenue / orders.length;

console.log("Total:", totalRevenue);
console.log("Average:", avg);


let inventory = ["Shirt", "Shoes"];

inventory.push("Watch");

inventory.pop();

inventory.splice(0, 1, "T-Shirt");

console.log(inventory.includes("Shoes"));

let newStock = ["Cap", "Belt"];
inventory = [...inventory, ...newStock];

console.log(inventory);

function processData(...data) {
  let flat = data.flat(Infinity);
  let unique = [...new Set(flat)];
  let sorted = unique.sort((a, b) => a - b);
  return sorted;
}

console.log(processData(1, 2, [3, 4], [5, [6]], 2, 3));
