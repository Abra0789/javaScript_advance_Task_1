// ======================
// PRODUCT DATA
// ======================
const products = [
  { id: 1, name: "Wireless Mouse", category: "electronics", price: 500 },
  { id: 2, name: "T-Shirt", category: "fashion", price: 300 },
  { id: 3, name: "Keyboard", category: "electronics", price: 800 },
  { id: 4, name: "Jeans", category: "fashion", price: 1200 },
  { id: 5, name: "Notebook", category: "stationery", price: 100 },
];


// ======================
// SELECT ELEMENTS
// ======================
const productList = document.getElementById("productList");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const noResult = document.getElementById("noResult");


// ======================
// RENDER PRODUCTS
// ======================
function renderProducts(productArray) {
  productList.innerHTML = "";

  if (productArray.length === 0) {
    noResult.style.display = "block";
    return;
  } else {
    noResult.style.display = "none";
  }

  productArray.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ৳${product.price}</p>
    `;

    productList.appendChild(card);
  });
}


// ======================
// FILTER FUNCTION
// ======================
function filterProducts() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = products.filter((product) => {
    
    // search match
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchValue);

    // category match
    const matchCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  renderProducts(filtered);
}


// ======================
// EVENT LISTENERS
// ======================
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);


// ======================
// INITIAL LOAD
// ======================
renderProducts(products);