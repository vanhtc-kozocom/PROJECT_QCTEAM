// Bài toán 1:: Quản lý sản phẩm & giỏ hàng 
let products = [
  { id: 1, name: "Laptop Pro 2025", price: 1500, stock: 3, category: "Electronics" },
  { id: 2, name: "Phone Max", price: 800, stock: 10, category: "Electronics" },
  { id: 3, name: "Casual Shirt", price: 40, stock: 50, category: "Clothes" },
  { id: 4, name: "Running Shoes", price: 90, stock: 20, category: "Clothes" },
  { id: 5, name: "Science Book", price: 15, stock: 100, category: "Stationery" },
];

let cart = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 2 },
  { productId: 5, quantity: 5 },
];

/* 1. In ra danh sách sản phẩm trong kho theo format:
 	Laptop Pro 2025 - $1500 - Còn: 3 cái */
console.log("1. Danh sách sản phẩm trong kho:");
products.forEach(product => {
  console.log(`${product.name} - $${product.price} - Còn: ${product.stock} cái`);
});

// 2. Kiểm tra tất cả sản phẩm có giá lớn hơn 10 không
let allPriceAbove10 = products.every(product => product.price > 10);
console.log("2. Tất cả sản phẩm có giá > 10:", allPriceAbove10);

// 3. Kiểm tra có sản phẩm nào hết hàng không
let anyOutOfStock = products.some(product => product.stock === 0);
console.log("3. Có sản phẩm nào hết hàng không:", anyOutOfStock);

// 4. Tìm sản phẩm có id = 2
let productId2 = products.find(product => product.id === 2);
console.log("4. Sản phẩm có id = 2:", productId2);

// 5. Lấy danh sách sản phẩm thuộc Clothes
let clothesProducts = products.filter(product => product.category === "Clothes");
console.log("5. Sản phẩm thuộc Clothes:", clothesProducts);

// 6. Tính tổng số tiền giỏ hàng
let totalCartPrice = cart.reduce((total, item) => {
  let product = products.find(product => product.id === item.productId);
  return total + (product ? product.price * item.quantity : 0);
}, 0);
console.log("6. Tổng tiền giỏ hàng:", totalCartPrice);

// 7. Tính tổng số lượng sản phẩm còn lại trong kho
let totalStock = products.reduce((total, product) => total + product.stock, 0);
console.log("7. Tổng số lượng sản phẩm trong kho:", totalStock);

// 8. Tìm các sản phẩm có tên chứa "Pro"
let productsWithPro = products.filter(product => product.name.includes("Pro"));
console.log("8. Sản phẩm có tên chứa 'Pro':", productsWithPro);

// 9. Kiểm tra giỏ hàng có sản phẩm "Book" không
let hasBookInCart = cart.some(item => {
  let product = products.find(product => product.id === item.productId);
  return product && product.name.includes("Book");
});
console.log("\n9. Giỏ hàng có sản phẩm 'Book' không:", hasBookInCart);

// 10. Sắp xếp sản phẩm theo giá
let priceAsc = [...products].sort((a, b) => a.price - b.price).map(product => product.name);
let priceDesc = [...products].sort((a, b) => b.price - a.price).map(product => product.name);
console.log("\n10. Sản phẩm theo giá tăng dần:", priceAsc);
console.log("10. Sản phẩm theo giá giảm dần:", priceDesc);