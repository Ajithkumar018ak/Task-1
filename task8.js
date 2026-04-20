let allProducts = [];
let filteredProducts = [];


async function getProducts() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) throw new Error("API Error");

    let data = await res.json();

    document.getElementById("loader").style.display = "none";

    allProducts = data;
    filteredProducts = data;

    displayProducts(data);

  } catch {
    document.getElementById("loader").style.display = "none";
    document.getElementById("error").innerText = "Error loading data";
  }
}


function displayProducts(products) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h4>${p.title.slice(0,20)}</h4>
      <img src="${p.image}">
      <p>${p.description.slice(0,60)}</p>
      <button>₹ ${p.price}</button>
      <button onclick="viewDetails(${p.id})">View More</button>
    `;

    container.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", function () {
  let value = this.value.toLowerCase();

  let result = filteredProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(result);
});


function sortLowHigh() {
  let sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
  displayProducts(sorted);
}

function sortHighLow() {
  let sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

// Category Filter
function filterCategory() {
  let category = document.getElementById("category").value;

  if (category === "all") {
    filteredProducts = allProducts;
  } else {
    filteredProducts = allProducts.filter(p => p.category === category);
  }

  displayProducts(filteredProducts);
}


function viewDetails(id) {
  let product = allProducts.find(p => p.id === id);

  document.getElementById("modal").style.display = "block";

  document.getElementById("modalData").innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" width="100%">
    <p>${product.description}</p>
    <h4>₹ ${product.price}</h4>
  `;
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
}

getProducts();