// Utility functions
function generateId() {
    return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}

function getProductById(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    return products.find(p => p.id === productId);
}

function getCategoryName(category) {
    const categoryNames = {
        'laptops': 'Laptop Gaming',
        'monitors': 'Màn Hình Gaming',
        'keyboards': 'Bàn Phím Gaming',
        'mice': 'Chuột Gaming'
    };
    return categoryNames[category] || category;
}

// Product management functions
function loadDefaultProducts() {
    const defaultProducts = [
        {
            id: generateId(),
            name: 'ASUS ROG Zephyrus G14',
            category: 'laptops',
            price: 35990000,
            description: 'Laptop gaming 14 inch với CPU AMD Ryzen 9 và GPU NVIDIA GeForce RTX 4060, màn hình QHD 165Hz.',
            image: 'https://dlcdnwebimgs.asus.com/gain/1F79DB12-6A21-41C4-A7C2-17FA0835EC7D/w250/fwebp'
        },
        {
            id: generateId(),
            name: 'ASUS ROG Strix Scar 16',
            category: 'laptops',
            price: 65990000,
            description: 'Laptop gaming 16 inch với CPU Intel Core i9 và GPU NVIDIA GeForce RTX 4080, màn hình QHD+ 240Hz Mini-LED.',
            image: 'https://dlcdnwebimgs.asus.com/gain/CB01949C-2E15-41EA-B440-4CA6367049A1/w250/fwebp'
        },
        {
            id: generateId(),
            name: 'ASUS ROG Swift PG279QM',
            category: 'monitors',
            price: 15990000,
            description: 'Màn hình gaming 27 inch QHD, tần số quét 240Hz, thời gian phản hồi 1ms, hỗ trợ NVIDIA G-SYNC.',
            image: 'https://dlcdnwebimgs.asus.com/gain/FA28F522-667A-427D-A80C-CFA1F00F9FA6/w250/fwebp'
        },
        {
            id: generateId(),
            name: 'ASUS ROG Swift OLED PG42UQ',
            category: 'monitors',
            price: 32990000,
            description: 'Màn hình OLED 42 inch 4K, tần số quét 138Hz, thời gian phản hồi 0.1ms, công nghệ ASUS Quick Fit.',
            image: 'https://dlcdnwebimgs.asus.com/gain/5E54C779-FA8C-434D-880F-88A091BD0F1F/w250/fwebp'
        },
        {
            id: generateId(),
            name: 'ASUS ROG Azoth',
            category: 'keyboards',
            price: 5990000,
            description: 'Bàn phím cơ gaming 75% với switch ROG NX Snow, màn hình OLED, và công nghệ giảm chấn gasket.',
            image: 'https://dlcdnwebimgs.asus.com/gain/B7D52D5A-05B5-42B0-8BA2-3199B5FAA6C2/w250/fwebp'
        },
        {
            id: generateId(),
            name: 'ASUS ROG Strix Scope II 96',
            category: 'keyboards',
            price: 3990000,
            description: 'Bàn phím cơ gaming 96% với switch ROG NX, độ bền 100 triệu lần nhấn, đèn LED RGB ROG.',
            image: 'https://dlcdnwebimgs.asus.com/gain/08393713-1964-43D6-9B3D-4A84399FB4AD/w250/fwebp'
        },
        {
            id: generateId(),
            name: 'ASUS ROG Keris Wireless',
            category: 'mice',
            price: 1990000,
            description: 'Chuột gaming không dây nhẹ 79g, sensor ROG AimPoint 36K DPI, switch ROG Micro 70 triệu lần nhấn.',
            image: 'https://dlcdnwebimgs.asus.com/gain/6C9EB461-FDA5-44BC-A76B-C1A1E49B69FF/w250/fwebp'
        },
        {
            id: generateId(),
            name: 'ASUS ROG Harpe Ace Aim Lab Edition',
            category: 'mice',
            price: 2990000,
            description: 'Chuột gaming siêu nhẹ 54g, sensor ROG AimPoint 36K DPI, thiết kế hợp tác với Aim Lab.',
            image: 'https://dlcdnwebimgs.asus.com/gain/0723EB0B-CF48-44A7-AB39-DB888537B3E4/w250/fwebp'
        }
    ];
    
    localStorage.setItem('products', JSON.stringify(defaultProducts));
    
    // Also add default inventory
    const defaultInventory = defaultProducts.map(product => ({
        productId: product.id,
        quantity: Math.floor(Math.random() * 50) + 10
    }));
    
    localStorage.setItem('inventory', JSON.stringify(defaultInventory));
    
    // Add default admin user if not exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const adminExists = users.find(user => user.role === 'admin');
    
    if (!adminExists) {
        const adminUser = {
            id: generateId(),
            name: 'Admin ROG',
            email: 'admin@rogstore.com',
            password: 'password123',
            role: 'admin',
            createdAt: new Date().toISOString()
        };
        
        users.push(adminUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    return defaultProducts;
}

function addProduct(productData) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    
    const newProduct = {
        id: generateId(),
        ...productData
    };
    
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    
    return newProduct;
}

function updateProduct(productId, productData) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        products[productIndex] = {
            ...products[productIndex],
            ...productData
        };
        
        localStorage.setItem('products', JSON.stringify(products));
        return true;
    }
    
    return false;
}

// Inventory functions
function addToInventory(productId, quantity) {
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const itemIndex = inventory.findIndex(item => item.productId === productId);
    
    if (itemIndex !== -1) {
        // Update existing inventory item
        inventory[itemIndex].quantity += quantity;
    } else {
        // Add new inventory item
        inventory.push({
            productId: productId,
            quantity: quantity
        });
    }
    
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

// Cart functions
function addToCart(productId) {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
        window.location.href = 'auth.html';
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = getProductById(productId);
    
    if (!product) {
        alert('Sản phẩm không tồn tại!');
        return;
    }
    
    // Check inventory
    const inventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const inventoryItem = inventory.find(item => item.productId === productId);
    
    if (!inventoryItem || inventoryItem.quantity <= 0) {
        alert('Sản phẩm hiện đang hết hàng!');
        return;
    }
    
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
        // Check if we have enough in inventory
        if (inventoryItem.quantity <= cart[existingItemIndex].quantity) {
            alert('Số lượng sản phẩm trong kho không đủ!');
            return;
        }
        
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    alert('Đã thêm sản phẩm vào giỏ hàng!');
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check if we need to load default data
    const products = JSON.parse(localStorage.getItem('products')) || [];
    if (products.length === 0) {
        loadDefaultProducts();
    }
    
    // Update cart count on all pages
    updateCartCount();
    
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authLinks = document.querySelectorAll('.auth-link');
    
    if (currentUser) {
        authLinks.forEach(link => {
            link.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
        });
    }
});

// Logout function (can be called from any page)
function logout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        localStorage.removeItem('currentUser');
        alert('Đã đăng xuất thành công!');
        window.location.href = 'index.html';
    }
}