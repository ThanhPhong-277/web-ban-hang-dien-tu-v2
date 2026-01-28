// Dữ liệu mẫu cho sản phẩm
let products = [
    {
        id: 1,
        name: "ASUS ROG Zephyrus G14",
        category: "laptop",
        price: 35990000,
        stock: 5,
        image: "@@@@@@@@@@",
        description: "Laptop gaming mạnh mẽ với CPU AMD Ryzen 9 và GPU NVIDIA GeForce RTX 4060, màn hình 14 inch QHD 165Hz, thiết kế siêu mỏng nhẹ.",
        colors: [
            { name: "Đen", code: "#000000" },
            { name: "Trắng", code: "#ffffff" }
        ],
        featured: true
    },
    {
        id: 2,
        name: "ASUS ROG Strix SCAR 16",
        category: "laptop",
        price: 72990000,
        stock: 3,
        image: "@@@@@@@@@@",
        description: "Laptop gaming flagship với Intel Core i9-13980HX và NVIDIA GeForce RTX 4090, màn hình 16 inch Mini-LED 240Hz.",
        colors: [
            { name: "Đen", code: "#000000" }
        ],
        featured: true
    },
    {
        id: 3,
        name: "ASUS ROG Swift PG259QN",
        category: "monitor",
        price: 15990000,
        stock: 8,
        image: "@@@@@@@@@@",
        description: "Màn hình gaming 24.5 inch Full HD với tần số quét 360Hz, thời gian phản hồi 1ms, công nghệ NVIDIA G-SYNC.",
        colors: [
            { name: "Đen", code: "#000000" }
        ],
        featured: true
    },
    {
        id: 4,
        name: "ASUS ROG Swift OLED PG42UQ",
        category: "monitor",
        price: 42990000,
        stock: 2,
        image: "@@@@@@@@@@",
        description: "Màn hình OLED 41.5 inch 4K 138Hz với công nghệ OLED mang lại màu đen sâu, độ tương phản cao và thời gian phản hồi siêu nhanh.",
        colors: [],
        featured: false
    },
    {
        id: 5,
        name: "ASUS ROG Strix Scope RX",
        category: "keyboard",
        price: 2990000,
        stock: 15,
        image: "@@@@@@@@@@",
        description: "Bàn phím gaming cơ với switch ROG RX Red, độ bền 100 triệu lần nhấn, thiết kế ergonomic với phần tựa cổ tay.",
        colors: [
            { name: "Đen", code: "#000000" },
            { name: "Bạc", code: "#c0c0c0" }
        ],
        featured: true
    },
    {
        id: 6,
        name: "ASUS ROG Azoth",
        category: "keyboard",
        price: 6990000,
        stock: 4,
        image: "@@@@@@@@@@",
        description: "Bàn phím gaming không dây cao cấp với switch ROG NX, màn hình OLED, và cấu trúc gasket mount cho trải nghiệm gõ tốt nhất.",
        colors: [
            { name: "Đen", code: "#000000" }
        ],
        featured: false
    },
    {
        id: 7,
        name: "ASUS ROG Keris Wireless",
        category: "mouse",
        price: 1990000,
        stock: 12,
        image: "@@@@@@@@@@",
        description: "Chuột gaming không dây nhẹ chỉ 79g với cảm biến 16,000 DPI, switch micro dot với tuổi thọ 70 triệu lần nhấn.",
        colors: [
            { name: "Đen", code: "#000000" },
            { name: "Trắng", code: "#ffffff" },
            { name: "Hồng", code: "#ff69b4" }
        ],
        featured: true
    },
    {
        id: 8,
        name: "ASUS ROG Harpe Ace Aim Lab",
        category: "mouse",
        price: 3490000,
        stock: 6,
        image: "@@@@@@@@@@",
        description: "Chuột gaming không dây siêu nhẹ chỉ 54g với cảm biến 36,000 DPI, thiết kế hợp tác với Aim Lab.",
        colors: [
            { name: "Trắng", code: "#ffffff" }
        ],
        featured: false
    }
];

// Render trang sản phẩm
function renderProductsPage() {
    const productsContainer = document.getElementById('productsList');
    productsContainer.innerHTML = '';
    
    // Hiển thị tất cả sản phẩm ban đầu
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Tạo thẻ sản phẩm
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    card.dataset.category = product.category;
    
    // Tên danh mục
    let categoryName = '';
    switch(product.category) {
        case 'laptop': categoryName = 'Laptop Gaming'; break;
        case 'monitor': categoryName = 'Màn Hình Gaming'; break;
        case 'keyboard': categoryName = 'Bàn Phím Gaming'; break;
        case 'mouse': categoryName = 'Chuột Gaming'; break;
    }
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300/0a0a0a/ff0020?text=ASUS+ROG'">
        <div class="product-info">
            <div class="product-category">${categoryName}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-stock">Còn lại: ${product.stock} sản phẩm</div>
            <div class="product-price">${formatPrice(product.price)} VND</div>
            <div class="product-actions">
                <button class="btn-details" onclick="viewProductDetail(${product.id})">Xem Chi Tiết</button>
                <button class="btn-buy" onclick="addToCart(${product.id})">Mua Ngay</button>
            </div>
        </div>
    `;
    
    return card;
}

// Xem chi tiết sản phẩm
function viewProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const detailContainer = document.getElementById('productDetail');
    
    // Tên danh mục
    let categoryName = '';
    switch(product.category) {
        case 'laptop': categoryName = 'Laptop Gaming'; break;
        case 'monitor': categoryName = 'Màn Hình Gaming'; break;
        case 'keyboard': categoryName = 'Bàn Phím Gaming'; break;
        case 'mouse': categoryName = 'Chuột Gaming'; break;
    }
    
    // Tạo HTML cho màu sắc
    let colorOptionsHTML = '';
    if (product.colors && product.colors.length > 0) {
        colorOptionsHTML = `
            <div class="color-options">
                <div class="color-title">Chọn màu sắc:</div>
                <div class="colors" id="colorSelection">
        `;
        
        product.colors.forEach((color, index) => {
            colorOptionsHTML += `
                <div class="color-option ${index === 0 ? 'selected' : ''}" 
                     style="background-color: ${color.code};"
                     data-color="${color.name}"
                     onclick="selectColor(this, '${color.name}')"
                     title="${color.name}"></div>
            `;
        });
        
        colorOptionsHTML += `</div></div>`;
    }
    
    detailContainer.innerHTML = `
        <div class="detail-image-container">
            <img src="${product.image}" alt="${product.name}" class="detail-image" onerror="this.src='https://via.placeholder.com/600x400/0a0a0a/ff0020?text=ASUS+ROG'">
        </div>
        <div class="detail-info">
            <div class="product-category">${categoryName}</div>
            <h1 class="detail-name">${product.name}</h1>
            <div class="detail-price">${formatPrice(product.price)} VND</div>
            <div class="product-stock">Còn lại: ${product.stock} sản phẩm</div>
            <div class="detail-description">${product.description}</div>
            
            ${colorOptionsHTML}
            
            <div class="quantity-selector">
                <div class="quantity-label">Số lượng:</div>
                <div class="quantity-input">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" id="quantity" value="1" min="1" max="${product.stock}" onchange="validateQuantity(this, ${product.stock})">
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            
            <div class="detail-actions">
                <button class="btn-add-cart" onclick="addToCartFromDetail(${product.id})">Thêm Vào Giỏ Hàng</button>
                <button class="btn-buy-now" onclick="buyNow(${product.id})">Mua Ngay</button>
            </div>
        </div>
    `;
    
    navigateToPage('product-detail');
}

// Chọn màu sắc
function selectColor(element, colorName) {
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
}

// Thay đổi số lượng
function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let newValue = parseInt(quantityInput.value) + change;
    
    // Giới hạn min/max
    const max = parseInt(quantityInput.max);
    const min = parseInt(quantityInput.min);
    
    if (newValue > max) newValue = max;
    if (newValue < min) newValue = min;
    
    quantityInput.value = newValue;
}

// Validate số lượng
function validateQuantity(input, maxStock) {
    let value = parseInt(input.value);
    
    if (isNaN(value) || value < 1) {
        input.value = 1;
    } else if (value > maxStock) {
        input.value = maxStock;
        showMessage(`Chỉ còn ${maxStock} sản phẩm trong kho`, 'error');
    }
}

// Lọc sản phẩm theo danh mục
function filterProductsByCategory(category) {
    const productsContainer = document.getElementById('productsList');
    productsContainer.innerHTML = '';
    
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Thêm vào giỏ hàng từ trang chi tiết
function addToCartFromDetail(productId) {
    const quantity = parseInt(document.getElementById('quantity').value);
    const colorElement = document.querySelector('.color-option.selected');
    const color = colorElement ? colorElement.getAttribute('data-color') : null;
    
    addToCart(productId, quantity, color);
}

// Mua ngay
function buyNow(productId) {
    addToCartFromDetail(productId);
    navigateToPage('cart');
}

// Cung cấp các hàm toàn cục cần thiết
window.viewProductDetail = viewProductDetail;
window.selectColor = selectColor;
window.changeQuantity = changeQuantity;
window.validateQuantity = validateQuantity;
window.addToCartFromDetail = addToCartFromDetail;
window.buyNow = buyNow;
window.filterProductsByCategory = filterProductsByCategory;