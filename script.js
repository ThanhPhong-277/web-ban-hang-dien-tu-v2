// Dữ liệu sản phẩm mẫu
const sampleProducts = [
    {
        id: 1,
        name: "ROG Strix Scar 18",
        category: "laptop",
        price: 69990000,
        stock: 15,
        image: "https://dlcdnwebimgs.asus.com/gain/5c1e4ca2-6834-4012-9a47-e0b9768d7e1d/w717/h525",
        description: "Laptop gaming mạnh mẽ với CPU Intel Core i9 thế hệ 13, RTX 4090, 32GB RAM, 2TB SSD, màn hình 18 inch QHD+ 240Hz.",
        colors: ["Đen", "Xám"]
    },
    {
        id: 2,
        name: "ROG Zephyrus G14",
        category: "laptop",
        price: 42990000,
        stock: 8,
        image: "https://dlcdnwebimgs.asus.com/gain/29d64c84-4501-4dc4-96a4-64e1d4363285/w717/h525",
        description: "Laptop gaming siêu mỏng nhẹ với AMD Ryzen 9, RTX 4060, 16GB RAM, 1TB SSD, màn hình 14 inch QHD 165Hz.",
        colors: ["Trắng", "Đen"]
    },
    {
        id: 3,
        name: "ROG Flow X13",
        category: "laptop",
        price: 37990000,
        stock: 5,
        image: "https://dlcdnwebimgs.asus.com/gain/39a85e07-4cac-4d94-b411-67bc3e80dce8/w717/h525",
        description: "Laptop 2 trong 1 gaming với AMD Ryzen 9, RTX 4050, 16GB RAM, 1TB SSD, màn hình cảm ứng 13.4 inch QHD+ 165Hz.",
        colors: ["Đen"]
    },
    {
        id: 4,
        name: "ROG Swift PG32UQX",
        category: "monitor",
        price: 89990000,
        stock: 3,
        image: "https://dlcdnwebimgs.asus.com/gain/d2735adf-09c4-456b-8b81-5532b4159472/w717/h525",
        description: "Màn hình gaming 32 inch 4K 144Hz với công nghệ Mini-LED, độ sáng 1400 nits, hỗ trợ G-Sync Ultimate.",
        colors: ["Đen"]
    },
    {
        id: 5,
        name: "ROG Swift OLED PG42UQ",
        category: "monitor",
        price: 45990000,
        stock: 10,
        image: "https://dlcdnwebimgs.asus.com/gain/2af02825-15f4-46f5-af18-62d95bc2f69f/w717/h525",
        description: "Màn hình OLED 42 inch 4K 138Hz, thời gian phản hồng 0.1ms, hỗ trợ AMD FreeSync Premium.",
        colors: ["Đen"]
    },
    {
        id: 6,
        name: "ROG Strix XG27AQ",
        category: "monitor",
        price: 15990000,
        stock: 20,
        image: "https://dlcdnwebimgs.asus.com/gain/08e4486c-c2a0-4729-92cd-1d33a88254ac/w717/h525",
        description: "Màn hình gaming 27 inch WQHD 170Hz, IPS, thời gian phản hồng 1ms, hỗ trợ G-Sync Compatible.",
        colors: ["Đen"]
    },
    {
        id: 7,
        name: "ROG Strix Scope RX",
        category: "keyboard",
        price: 3490000,
        stock: 25,
        image: "https://dlcdnwebimgs.asus.com/gain/d6ee68be-98bd-4461-8460-cc9e1a0a9167/w717/h525",
        description: "Bàn phím gaming cơ với switch ROG RX Red, đèn RGB Aura Sync, layout 100%, dây detachable.",
        colors: ["Đen", "Trắng"]
    },
    {
        id: 8,
        name: "ROG Azoth",
        category: "keyboard",
        price: 7990000,
        stock: 12,
        image: "https://dlcdnwebimgs.asus.com/gain/967db793-6f78-4504-9651-c13066c6dcd6/w717/h525",
        description: "Bàn phím gaming không dây 75%, switch ROG NX, đèn RGB, màn hình OLED, pin 2000 giờ.",
        colors: ["Đen"]
    },
    {
        id: 9,
        name: "ROG Falchion RX",
        category: "keyboard",
        price: 4490000,
        stock: 18,
        image: "https://dlcdnwebimgs.asus.com/gain/a5e8c6c4-1a79-40c9-9d2c-63da89431847/w717/h525",
        description: "Bàn phím gaming không dây 65%, switch ROG RX Red, đèn RGB, touch panel, pin 450 giờ.",
        colors: ["Đen", "Trắng"]
    },
    {
        id: 10,
        name: "ROG Keris Wireless",
        category: "mouse",
        price: 2490000,
        stock: 30,
        image: "https://dlcdnwebimgs.asus.com/gain/bc01f503-5505-42ea-9c0b-506116f57741/w717/h525",
        description: "Chuột gaming không dây nhẹ 79g, sensor ROG AimPoint 36K, switch ROG Micro, pin 119 giờ.",
        colors: ["Đen", "Trắng"]
    },
    {
        id: 11,
        name: "ROG Gladius III Wireless",
        category: "mouse",
        price: 3290000,
        stock: 22,
        image: "https://dlcdnwebimgs.asus.com/gain/9f62dae0-e69f-49b9-a6b3-b4b6c1e275ac/w717/h525",
        description: "Chuột gaming không dây với sensor ROG AimPoint 36K, switch ROG Micro, 3 chế độ kết nối.",
        colors: ["Đen"]
    },
    {
        id: 12,
        name: "ROG Harpe Ace Aim Lab Edition",
        category: "mouse",
        price: 3990000,
        stock: 7,
        image: "https://dlcdnwebimgs.asus.com/gain/c95e2e6a-9e3f-4419-b7ac-c0ebfe348f52/w717/h525",
        description: "Chuột gaming siêu nhẹ 54g, sensor ROG AimPoint 36K, thiết kế hợp tác với Aim Lab.",
        colors: ["Trắng"]
    }
];

// Hình ảnh mẫu cho admin
const sampleImages = [
    "https://dlcdnwebimgs.asus.com/gain/5c1e4ca2-6834-4012-9a47-e0b9768d7e1d/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/29d64c84-4501-4dc4-96a4-64e1d4363285/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/39a85e07-4cac-4d94-b411-67bc3e80dce8/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/d2735adf-09c4-456b-8b81-5532b4159472/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/2af02825-15f4-46f5-af18-62d95bc2f69f/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/08e4486c-c2a0-4729-92cd-1d33a88254ac/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/d6ee68be-98bd-4461-8460-cc9e1a0a9167/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/967db793-6f78-4504-9651-c13066c6dcd6/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/a5e8c6c4-1a79-40c9-9d2c-63da89431847/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/bc01f503-5505-42ea-9c0b-506116f57741/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/9f62dae0-e69f-49b9-a6b3-b4b6c1e275ac/w717/h525",
    "https://dlcdnwebimgs.asus.com/gain/c95e2e6a-9e3f-4419-b7ac-c0ebfe348f52/w717/h525"
];

// Biến toàn cục
let products = [];
let cart = [];
let users = [];
let currentUser = null;

// Khởi tạo dữ liệu khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra và khởi tạo dữ liệu trong localStorage
    initializeData();
    
    // Cập nhật số lượng giỏ hàng
    updateCartCount();
    
    // Xử lý menu di động
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
});

// Khởi tạo dữ liệu
function initializeData() {
    // Khởi tạo sản phẩm
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    } else {
        products = [...sampleProducts];
        localStorage.setItem('products', JSON.stringify(products));
    }
    
    // Khởi tạo giỏ hàng
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    } else {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Khởi tạo người dùng
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    } else {
        // Tạo tài khoản admin mặc định
        users = [
            {
                id: 1,
                username: 'admin',
                email: 'admin@rogstore.vn',
                password: 'admin123',
                isAdmin: true
            }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Kiểm tra đăng nhập
    if (localStorage.getItem('currentUser')) {
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
}

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity;
        });
        cartCountElement.textContent = totalItems;
    }
}

// Toggle menu di động
function toggleMobileMenu() {
    const mainNav = document.querySelector('.main-nav');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (mainNav.style.display === 'flex') {
        mainNav.style.display = 'none';
        if (authButtons) authButtons.style.display = 'none';
    } else {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '100%';
        mainNav.style.left = '0';
        mainNav.style.width = '100%';
        mainNav.style.backgroundColor = 'var(--secondary-color)';
        mainNav.style.padding = '20px';
        mainNav.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        
        if (authButtons) {
            authButtons.style.display = 'flex';
            authButtons.style.flexDirection = 'column';
            authButtons.style.position = 'absolute';
            authButtons.style.top = '100%';
            authButtons.style.right = '20px';
            authButtons.style.backgroundColor = 'var(--secondary-color)';
            authButtons.style.padding = '20px';
            authButtons.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        }
    }
}

// Định dạng tiền Việt Nam
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
}

// Lấy tên danh mục
function getCategoryName(category) {
    const categoryNames = {
        'laptop': 'Laptop Gaming',
        'monitor': 'Màn hình Gaming',
        'keyboard': 'Bàn phím Gaming',
        'mouse': 'Chuột Gaming'
    };
    return categoryNames[category] || category;
}

// ================== TRANG CHỦ ==================

// Tải sản phẩm nổi bật
function loadFeaturedProducts() {
    const featuredProductsGrid = document.getElementById('featured-products-grid');
    if (!featuredProductsGrid) return;
    
    // Lấy 4 sản phẩm đầu tiên làm sản phẩm nổi bật
    const featuredProducts = products.slice(0, 4);
    
    if (featuredProducts.length === 0) {
        featuredProductsGrid.innerHTML = '<p class="no-products">Không có sản phẩm nổi bật.</p>';
        return;
    }
    
    featuredProductsGrid.innerHTML = '';
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsGrid.appendChild(productCard);
    });
}

// ================== TRANG SẢN PHẨM ==================

// Tải tất cả sản phẩm
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        document.getElementById('no-products').style.display = 'block';
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Lọc sản phẩm theo danh mục
function filterProducts(category) {
    const productsGrid = document.getElementById('products-grid');
    const noProductsElement = document.getElementById('no-products');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    let filteredProducts;
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    if (filteredProducts.length === 0) {
        noProductsElement.style.display = 'block';
        return;
    }
    
    noProductsElement.style.display = 'none';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Tạo thẻ sản phẩm
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.id = product.id;
    
    const stockStatus = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
    const stockText = product.stock > 10 ? 'Còn hàng' : product.stock > 0 ? `Còn ${product.stock} sản phẩm` : 'Hết hàng';
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=ASUS+ROG'">
        </div>
        <div class="product-info">
            <span class="product-category">${getCategoryName(product.category)}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${formatCurrency(product.price)}</div>
            <div class="product-stock ${stockStatus}">
                <i class="fas fa-${product.stock > 0 ? 'check' : 'times'}"></i> ${stockText}
            </div>
            <div class="product-actions">
                <button class="btn btn-outline view-detail-btn" data-id="${product.id}">
                    <i class="fas fa-eye"></i> Chi tiết
                </button>
                <button class="btn btn-primary buy-now-btn" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i> Mua ngay
                </button>
            </div>
        </div>
    `;
    
    // Thêm sự kiện cho nút chi tiết
    const viewDetailBtn = productCard.querySelector('.view-detail-btn');
    viewDetailBtn.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        window.location.href = `product-detail.html?id=${productId}`;
    });
    
    // Thêm sự kiện cho nút mua ngay
    const buyNowBtn = productCard.querySelector('.buy-now-btn');
    buyNowBtn.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        addToCart(productId, 1);
        window.location.href = 'cart.html';
    });
    
    return productCard;
}

// ================== TRANG CHI TIẾT SẢN PHẨM ==================

// Tải chi tiết sản phẩm
function loadProductDetail() {
    const productDetailContainer = document.getElementById('product-detail-container');
    const categoryBreadcrumb = document.getElementById('product-category-breadcrumb');
    const nameBreadcrumb = document.getElementById('product-name-breadcrumb');
    const relatedProductsGrid = document.getElementById('related-products-grid');
    
    if (!productDetailContainer) return;
    
    // Lấy ID sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        productDetailContainer.innerHTML = '<p class="no-products">Không tìm thấy sản phẩm.</p>';
        return;
    }
    
    // Tìm sản phẩm theo ID
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        productDetailContainer.innerHTML = '<p class="no-products">Không tìm thấy sản phẩm.</p>';
        return;
    }
    
    // Cập nhật breadcrumb
    if (categoryBreadcrumb) {
        categoryBreadcrumb.textContent = getCategoryName(product.category);
    }
    
    if (nameBreadcrumb) {
        nameBreadcrumb.textContent = product.name;
    }
    
    // Tạo HTML cho chi tiết sản phẩm
    const stockStatus = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
    const stockText = product.stock > 10 ? 'Còn hàng' : product.stock > 0 ? `Còn ${product.stock} sản phẩm` : 'Hết hàng';
    
    // Tạo options cho màu sắc
    let colorOptionsHTML = '';
    if (product.colors && product.colors.length > 0) {
        product.colors.forEach((color, index) => {
            colorOptionsHTML += `
                <div class="color-option ${index === 0 ? 'selected' : ''}" 
                     style="background-color: ${getColorValue(color)}"
                     data-color="${color}"
                     title="${color}">
                </div>
            `;
        });
    }
    
    productDetailContainer.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/600x400?text=ASUS+ROG'">
        </div>
        <div class="product-detail-info">
            <span class="product-detail-category">${getCategoryName(product.category)}</span>
            <h1>${product.name}</h1>
            <div class="product-detail-price">${formatCurrency(product.price)}</div>
            <div class="product-detail-stock ${stockStatus}">
                <i class="fas fa-${product.stock > 0 ? 'check' : 'times'}"></i> ${stockText}
            </div>
            <div class="product-detail-description">
                <p>${product.description}</p>
            </div>
            
            ${product.colors && product.colors.length > 0 ? `
            <div class="product-colors">
                <h3>Màu sắc</h3>
                <div class="color-options">
                    ${colorOptionsHTML}
                </div>
            </div>
            ` : ''}
            
            <div class="quantity-selector">
                <h3>Số lượng</h3>
                <div class="quantity-control">
                    <button class="quantity-btn minus-btn"><i class="fas fa-minus"></i></button>
                    <input type="number" class="quantity-input" value="1" min="1" max="${product.stock}">
                    <button class="quantity-btn plus-btn"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            
            <div class="detail-actions">
                <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng
                </button>
                <button class="btn btn-primary buy-now-detail-btn" data-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-bolt"></i> Mua ngay
                </button>
            </div>
        </div>
    `;
    
    // Thêm sự kiện cho nút số lượng
    const minusBtn = productDetailContainer.querySelector('.minus-btn');
    const plusBtn = productDetailContainer.querySelector('.plus-btn');
    const quantityInput = productDetailContainer.querySelector('.quantity-input');
    
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < product.stock) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        if (isNaN(value) || value < 1) {
            this.value = 1;
        } else if (value > product.stock) {
            this.value = product.stock;
        }
    });
    
    // Thêm sự kiện cho nút màu sắc
    const colorOptions = productDetailContainer.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Thêm sự kiện cho nút thêm vào giỏ hàng
    const addToCartBtn = productDetailContainer.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        const selectedColorElement = productDetailContainer.querySelector('.color-option.selected');
        const selectedColor = selectedColorElement ? selectedColorElement.getAttribute('data-color') : null;
        
        addToCart(productId, quantity, selectedColor);
        
        // Hiển thị thông báo
        showMessage('Đã thêm sản phẩm vào giỏ hàng!', 'success');
    });
    
    // Thêm sự kiện cho nút mua ngay
    const buyNowDetailBtn = productDetailContainer.querySelector('.buy-now-detail-btn');
    buyNowDetailBtn.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        const selectedColorElement = productDetailContainer.querySelector('.color-option.selected');
        const selectedColor = selectedColorElement ? selectedColorElement.getAttribute('data-color') : null;
        
        addToCart(productId, quantity, selectedColor);
        window.location.href = 'cart.html';
    });
    
    // Tải sản phẩm liên quan
    if (relatedProductsGrid) {
        loadRelatedProducts(product.category, product.id, relatedProductsGrid);
    }
}

// Lấy giá trị màu từ tên màu
function getColorValue(colorName) {
    const colorMap = {
        'Đen': '#000000',
        'Trắng': '#FFFFFF',
        'Xám': '#808080',
        'Bạc': '#C0C0C0',
        'Xanh': '#0000FF',
        'Đỏ': '#FF0000',
        'Vàng': '#FFD700'
    };
    return colorMap[colorName] || '#CCCCCC';
}

// Tải sản phẩm liên quan
function loadRelatedProducts(category, currentProductId, container) {
    const relatedProducts = products
        .filter(product => product.category === category && product.id !== currentProductId)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        container.innerHTML = '<p class="no-products">Không có sản phẩm liên quan.</p>';
        return;
    }
    
    container.innerHTML = '';
    relatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// ================== GIỎ HÀNG ==================

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId, quantity, color = null) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showMessage('Sản phẩm không tồn tại!', 'error');
        return false;
    }
    
    if (product.stock < quantity) {
        showMessage('Số lượng sản phẩm không đủ!', 'error');
        return false;
    }
    
    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    const existingItemIndex = cart.findIndex(item => item.id === productId && item.color === color);
    
    if (existingItemIndex !== -1) {
        // Cập nhật số lượng nếu đã có
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Thêm mới vào giỏ hàng
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: quantity,
            color: color,
            image: product.image
        });
    }
    
    // Lưu vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Cập nhật số lượng giỏ hàng
    updateCartCount();
    
    return true;
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartItem(productId, quantity, color = null) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showMessage('Sản phẩm không tồn tại!', 'error');
        return false;
    }
    
    if (product.stock < quantity) {
        showMessage('Số lượng sản phẩm không đủ!', 'error');
        return false;
    }
    
    // Tìm sản phẩm trong giỏ hàng
    const itemIndex = cart.findIndex(item => item.id === productId && item.color === color);
    
    if (itemIndex !== -1) {
        if (quantity <= 0) {
            // Xóa sản phẩm nếu số lượng <= 0
            cart.splice(itemIndex, 1);
        } else {
            // Cập nhật số lượng
            cart[itemIndex].quantity = quantity;
        }
        
        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Cập nhật số lượng giỏ hàng
        updateCartCount();
        
        return true;
    }
    
    return false;
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId, color = null) {
    const itemIndex = cart.findIndex(item => item.id === productId && item.color === color);
    
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        
        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Cập nhật số lượng giỏ hàng
        updateCartCount();
        
        return true;
    }
    
    return false;
}

// Tính tổng tiền giỏ hàng
function calculateCartTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

// Tải giỏ hàng
function loadCart() {
    const cartContainer = document.getElementById('cart-container');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Giỏ hàng trống</h3>
                <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
                <a href="products.html" class="btn btn-primary">Tiếp tục mua sắm</a>
            </div>
        `;
        
        if (cartTotalElement) {
            cartTotalElement.innerHTML = `
                <h2>Tổng giỏ hàng</h2>
                <div class="total-row">
                    <span>Tạm tính:</span>
                    <span>0₫</span>
                </div>
                <div class="total-row">
                    <span>Phí vận chuyển:</span>
                    <span>0₫</span>
                </div>
                <div class="total-row final">
                    <span>Tổng cộng:</span>
                    <span>0₫</span>
                </div>
                <button class="btn btn-primary checkout-btn" disabled>Thanh toán</button>
            `;
        }
        
        return;
    }
    
    // Tạo bảng giỏ hàng
    let cartHTML = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tạm tính</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    cart.forEach((item, index) => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = item.price * item.quantity;
        const maxQuantity = product ? product.stock : 10;
        
        cartHTML += `
            <tr data-id="${item.id}" data-color="${item.color || ''}">
                <td>
                    <div class="cart-product">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80?text=ASUS+ROG'">
                        <div>
                            <h4>${item.name}</h4>
                            ${item.color ? `<p>Màu: ${item.color}</p>` : ''}
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(item.price)}</td>
                <td>
                    <div class="cart-quantity">
                        <button class="btn btn-quantity minus" data-index="${index}"><i class="fas fa-minus"></i></button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="${maxQuantity}" data-index="${index}">
                        <button class="btn btn-quantity plus" data-index="${index}"><i class="fas fa-plus"></i></button>
                    </div>
                </td>
                <td>${formatCurrency(itemTotal)}</td>
                <td>
                    <button class="btn btn-danger remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </td>
            </tr>
        `;
    });
    
    cartHTML += `
            </tbody>
        </table>
    `;
    
    cartContainer.innerHTML = cartHTML;
    
    // Tính tổng tiền
    if (cartTotalElement) {
        const subtotal = calculateCartTotal();
        const shipping = subtotal >= 5000000 ? 0 : 50000;
        const total = subtotal + shipping;
        
        cartTotalElement.innerHTML = `
            <h2>Tổng giỏ hàng</h2>
            <div class="total-row">
                <span>Tạm tính:</span>
                <span>${formatCurrency(subtotal)}</span>
            </div>
            <div class="total-row">
                <span>Phí vận chuyển:</span>
                <span>${shipping === 0 ? 'Miễn phí' : formatCurrency(shipping)}</span>
            </div>
            <div class="total-row final">
                <span>Tổng cộng:</span>
                <span>${formatCurrency(total)}</span>
            </div>
            <button class="btn btn-primary checkout-btn">Thanh toán</button>
        `;
        
        // Thêm sự kiện cho nút thanh toán
        const checkoutBtn = cartTotalElement.querySelector('.checkout-btn');
        checkoutBtn.addEventListener('click', function() {
            if (!currentUser) {
                showMessage('Vui lòng đăng nhập để thanh toán!', 'error');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1500);
                return;
            }
            
            showMessage('Chức năng thanh toán đang được phát triển!', 'info');
        });
    }
    
    // Thêm sự kiện cho các nút trong giỏ hàng
    const minusButtons = document.querySelectorAll('.cart-quantity .minus');
    const plusButtons = document.querySelectorAll('.cart-quantity .plus');
    const quantityInputs = document.querySelectorAll('.cart-quantity .quantity-input');
    const removeButtons = document.querySelectorAll('.remove-item');
    
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const item = cart[index];
            const newQuantity = item.quantity - 1;
            
            if (newQuantity >= 1) {
                updateCartItem(item.id, newQuantity, item.color);
                loadCart();
            }
        });
    });
    
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const item = cart[index];
            const product = products.find(p => p.id === item.id);
            const newQuantity = item.quantity + 1;
            
            if (newQuantity <= product.stock) {
                updateCartItem(item.id, newQuantity, item.color);
                loadCart();
            } else {
                showMessage('Số lượng sản phẩm không đủ!', 'error');
            }
        });
    });
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const item = cart[index];
            const product = products.find(p => p.id === item.id);
            let newQuantity = parseInt(this.value);
            
            if (isNaN(newQuantity) || newQuantity < 1) {
                newQuantity = 1;
            }
            
            if (newQuantity > product.stock) {
                newQuantity = product.stock;
                showMessage('Số lượng sản phẩm không đủ!', 'error');
            }
            
            updateCartItem(item.id, newQuantity, item.color);
            loadCart();
        });
    });
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const item = cart[index];
            
            if (confirm(`Bạn có chắc muốn xóa "${item.name}" khỏi giỏ hàng?`)) {
                removeFromCart(item.id, item.color);
                loadCart();
                showMessage('Đã xóa sản phẩm khỏi giỏ hàng!', 'success');
            }
        });
    });
}

// ================== TRANG QUẢN TRỊ ==================

// Tải sản phẩm cho trang quản trị
function loadAdminProducts() {
    const adminProductsList = document.getElementById('admin-products-list');
    if (!adminProductsList) return;
    
    adminProductsList.innerHTML = '';
    
    if (products.length === 0) {
        adminProductsList.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 40px;">
                    <i class="fas fa-box-open"></i>
                    <p>Không có sản phẩm nào. Hãy thêm sản phẩm mới!</p>
                </td>
            </tr>
        `;
        return;
    }
    
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.dataset.id = product.id;
        
        tr.innerHTML = `
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/50x50?text=ASUS+ROG'"></td>
            <td>${product.name}</td>
            <td>${getCategoryName(product.category)}</td>
            <td>${formatCurrency(product.price)}</td>
            <td>${product.stock}</td>
            <td>
                <div class="admin-actions">
                    <button class="btn btn-primary edit-product" data-id="${product.id}">
                        <i class="fas fa-edit"></i> Sửa
                    </button>
                    <button class="btn btn-danger delete-product" data-id="${product.id}">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            </td>
        `;
        
        adminProductsList.appendChild(tr);
    });
    
    // Thêm sự kiện cho nút sửa
    const editButtons = document.querySelectorAll('.edit-product');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            editProduct(productId);
        });
    });
    
    // Thêm sự kiện cho nút xóa
    const deleteButtons = document.querySelectorAll('.delete-product');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            deleteProduct(productId);
        });
    });
}

// Tải tùy chọn hình ảnh
function loadImageOptions() {
    const imageOptionsContainer = document.getElementById('image-options');
    if (!imageOptionsContainer) return;
    
    sampleImages.forEach((imageUrl, index) => {
        const imageOption = document.createElement('a');
        imageOption.href = '#';
        imageOption.className = 'image-option';
        imageOption.dataset.image = imageUrl;
        
        imageOption.innerHTML = `<img src="${imageUrl}" alt="Hình ảnh ${index + 1}" onerror="this.src='https://via.placeholder.com/100x80?text=ROG'">`;
        
        imageOptionsContainer.appendChild(imageOption);
    });
}

// Xử lý form thêm/sửa sản phẩm
function handleProductFormSubmit(event) {
    event.preventDefault();
    
    const productId = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value.trim();
    const category = document.getElementById('product-category').value;
    const price = parseInt(document.getElementById('product-price').value);
    const stock = parseInt(document.getElementById('product-stock').value);
    const description = document.getElementById('product-description').value.trim();
    const colors = document.getElementById('product-colors').value.trim();
    const imageUrl = document.getElementById('product-image-url').value.trim();
    
    // Kiểm tra dữ liệu
    if (!name || !category || !price || !stock || !description || !imageUrl) {
        showMessage('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }
    
    if (price <= 0) {
        showMessage('Giá sản phẩm phải lớn hơn 0!', 'error');
        return;
    }
    
    if (stock < 0) {
        showMessage('Số lượng tồn kho không được âm!', 'error');
        return;
    }
    
    // Xử lý màu sắc
    const colorArray = colors ? colors.split(',').map(color => color.trim()).filter(color => color !== '') : [];
    
    if (productId) {
        // Cập nhật sản phẩm
        updateProduct(parseInt(productId), {
            name,
            category,
            price,
            stock,
            description,
            colors: colorArray,
            image: imageUrl
        });
    } else {
        // Thêm sản phẩm mới
        addProduct({
            name,
            category,
            price,
            stock,
            description,
            colors: colorArray,
            image: imageUrl
        });
    }
}

// Thêm sản phẩm mới
function addProduct(productData) {
    // Tạo ID mới
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    const newProduct = {
        id: newId,
        ...productData
    };
    
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    
    showMessage('Thêm sản phẩm thành công!', 'success');
    resetProductForm();
    loadAdminProducts();
}

// Cập nhật sản phẩm
function updateProduct(productId, productData) {
    const index = products.findIndex(p => p.id === productId);
    
    if (index !== -1) {
        products[index] = {
            ...products[index],
            ...productData
        };
        
        localStorage.setItem('products', JSON.stringify(products));
        
        showMessage('Cập nhật sản phẩm thành công!', 'success');
        resetProductForm();
        loadAdminProducts();
    }
}

// Xóa sản phẩm
function deleteProduct(productId) {
    if (!confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        return;
    }
    
    const index = products.findIndex(p => p.id === productId);
    
    if (index !== -1) {
        // Kiểm tra xem sản phẩm có trong giỏ hàng không
        const inCart = cart.some(item => item.id === productId);
        
        if (inCart) {
            showMessage('Không thể xóa sản phẩm đang có trong giỏ hàng!', 'error');
            return;
        }
        
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        
        showMessage('Xóa sản phẩm thành công!', 'success');
        loadAdminProducts();
    }
}

// Chỉnh sửa sản phẩm
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showMessage('Không tìm thấy sản phẩm!', 'error');
        return;
    }
    
    // Điền thông tin vào form
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-stock').value = product.stock;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-colors').value = product.colors ? product.colors.join(', ') : '';
    document.getElementById('product-image-url').value = product.image;
    
    // Cập nhật tiêu đề và nút submit
    document.getElementById('form-title').textContent = 'SỬA SẢN PHẨM';
    document.getElementById('submit-btn').innerHTML = '<i class="fas fa-save"></i> Lưu thay đổi';
    
    // Cuộn lên đầu form
    document.getElementById('product-form').scrollIntoView({ behavior: 'smooth' });
}

// Reset form sản phẩm
function resetProductForm() {
    document.getElementById('product-form').reset();
    document.getElementById('product-id').value = '';
    document.getElementById('form-title').textContent = 'THÊM SẢN PHẨM MỚI';
    document.getElementById('submit-btn').innerHTML = '<i class="fas fa-plus"></i> Thêm sản phẩm';
    
    // Bỏ chọn tất cả hình ảnh
    document.querySelectorAll('.image-option').forEach(option => {
        option.classList.remove('selected');
    });
}

// Lọc sản phẩm trong trang quản trị
function filterAdminProducts() {
    const categoryFilter = document.getElementById('admin-category-filter').value;
    const searchInput = document.getElementById('admin-search').value.toLowerCase();
    
    const rows = document.querySelectorAll('#admin-products-list tr');
    
    rows.forEach(row => {
        const id = row.cells[0].textContent;
        const name = row.cells[2].textContent.toLowerCase();
        const category = row.cells[3].textContent;
        
        let showRow = true;
        
        // Lọc theo danh mục
        if (categoryFilter !== 'all') {
            const categoryText = getCategoryName(categoryFilter);
            if (category !== categoryText) {
                showRow = false;
            }
        }
        
        // Lọc theo tìm kiếm
        if (searchInput && !name.includes(searchInput) && !id.includes(searchInput)) {
            showRow = false;
        }
        
        row.style.display = showRow ? '' : 'none';
    });
}

// ================== TRANG QUẢN LÝ KHO HÀNG ==================

// Tải thống kê kho hàng
function loadInventory() {
    const inventoryTable = document.getElementById('inventory-table');
    const totalProductsElement = document.getElementById('total-products');
    const totalValueElement = document.getElementById('total-value');
    const outOfStockElement = document.getElementById('out-of-stock');
    const lowStockElement = document.getElementById('low-stock');
    
    if (!inventoryTable) return;
    
    // Tính toán thống kê
    let totalProducts = 0;
    let totalValue = 0;
    let outOfStockCount = 0;
    let lowStockCount = 0;
    
    products.forEach(product => {
        totalProducts += product.stock;
        totalValue += product.price * product.stock;
        
        if (product.stock === 0) {
            outOfStockCount++;
        } else if (product.stock <= 5) {
            lowStockCount++;
        }
    });
    
    // Cập nhật thống kê
    if (totalProductsElement) {
        totalProductsElement.textContent = totalProducts;
    }
    
    if (totalValueElement) {
        totalValueElement.textContent = formatCurrency(totalValue);
    }
    
    if (outOfStockElement) {
        outOfStockElement.textContent = outOfStockCount;
    }
    
    if (lowStockElement) {
        lowStockElement.textContent = lowStockCount;
    }
    
    // Tạo bảng kho hàng
    const tbody = inventoryTable.querySelector('tbody');
    tbody.innerHTML = '';
    
    if (products.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px;">
                    <i class="fas fa-box-open"></i>
                    <p>Không có sản phẩm nào trong kho.</p>
                </td>
            </tr>
        `;
        return;
    }
    
    products.forEach(product => {
        const totalValue = product.price * product.stock;
        const stockStatus = product.stock > 10 ? 'in-stock' : product.stock > 0 ? 'low-stock' : 'out-of-stock';
        const statusText = product.stock > 10 ? 'Đủ hàng' : product.stock > 0 ? 'Sắp hết' : 'Hết hàng';
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${product.id}</td>
            <td>
                <div class="inventory-product">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/40x40?text=ROG'">
                    <span>${product.name}</span>
                </div>
            </td>
            <td>${getCategoryName(product.category)}</td>
            <td>${formatCurrency(totalValue)}</td>
            <td>
                <span class="stock-status ${stockStatus}">${statusText}</span>
            </td>
            <td>${product.stock}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

// ================== TRANG ĐĂNG NHẬP/ĐĂNG KÝ ==================

// Xử lý đăng ký
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    // Kiểm tra dữ liệu
    if (!username || !email || !password || !confirmPassword) {
        showMessage('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Mật khẩu xác nhận không khớp!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Mật khẩu phải có ít nhất 6 ký tự!', 'error');
        return;
    }
    
    // Kiểm tra email đã tồn tại chưa
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        showMessage('Email đã được đăng ký!', 'error');
        return;
    }
    
    // Kiểm tra username đã tồn tại chưa
    const existingUsername = users.find(user => user.username === username);
    if (existingUsername) {
        showMessage('Tên đăng nhập đã tồn tại!', 'error');
        return;
    }
    
    // Tạo user mới
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        username,
        email,
        password,
        isAdmin: false
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showMessage('Đăng ký thành công! Vui lòng đăng nhập.', 'success');
    
    // Chuyển hướng về trang đăng nhập sau 1.5 giây
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// Xử lý đăng nhập
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    
    // Kiểm tra dữ liệu
    if (!username || !password) {
        showMessage('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }
    
    // Tìm user
    const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
    
    if (!user) {
        showMessage('Tên đăng nhập hoặc mật khẩu không đúng!', 'error');
        return;
    }
    
    // Lưu thông tin đăng nhập
    currentUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showMessage('Đăng nhập thành công!', 'success');
    
    // Chuyển hướng về trang chủ sau 1.5 giây
    setTimeout(() => {
        window.location.href = user.isAdmin ? 'admin.html' : 'index.html';
    }, 1500);
}

// Đăng xuất
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    showMessage('Đã đăng xuất!', 'success');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// ================== TIỆN ÍCH ==================

// Hiển thị thông báo
function showMessage(message, type = 'info') {
    // Tạo thông báo nếu chưa có
    let messageElement = document.getElementById('message');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'message';
        messageElement.className = `message ${type}`;
        document.body.appendChild(messageElement);
    } else {
        messageElement.className = `message ${type}`;
    }
    
    messageElement.innerHTML = `
        <span>${message}</span>
        <button class="close-message"><i class="fas fa-times"></i></button>
    `;
    
    messageElement.style.display = 'flex';
    
    // Thêm sự kiện cho nút đóng
    const closeBtn = messageElement.querySelector('.close-message');
    closeBtn.addEventListener('click', function() {
        messageElement.style.display = 'none';
    });
    
    // Tự động ẩn sau 5 giây
    setTimeout(() => {
        if (messageElement.style.display !== 'none') {
            messageElement.style.display = 'none';
        }
    }, 5000);
}

// Kiểm tra quyền admin
function checkAdminAccess() {
    if (!currentUser || !currentUser.isAdmin) {
        // Nếu không phải admin, chuyển hướng về trang chủ
        if (window.location.pathname.includes('admin.html') || window.location.pathname.includes('inventory.html')) {
            showMessage('Bạn không có quyền truy cập trang này!', 'error');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
            return false;
        }
    }
    return true;
}

// Xuất các hàm cần thiết cho các trang HTML
window.loadFeaturedProducts = loadFeaturedProducts;
window.loadProducts = loadProducts;
window.filterProducts = filterProducts;
window.loadProductDetail = loadProductDetail;
window.loadCart = loadCart;
window.loadAdminProducts = loadAdminProducts;
window.loadImageOptions = loadImageOptions;
window.handleProductFormSubmit = handleProductFormSubmit;
window.resetProductForm = resetProductForm;
window.filterAdminProducts = filterAdminProducts;
window.loadInventory = loadInventory;
window.handleRegister = handleRegister;
window.handleLogin = handleLogin;
window.logout = logout;
window.checkAdminAccess = checkAdminAccess;
window.updateCartCount = updateCartCount;

// Kiểm tra quyền admin khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('admin.html') || window.location.pathname.includes('inventory.html')) {
        checkAdminAccess();
    }
});