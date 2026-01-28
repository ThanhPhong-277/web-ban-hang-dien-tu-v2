// Giỏ hàng
let cart = [];

// Cập nhật số lượng giỏ hàng
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

// Thêm vào giỏ hàng
function addToCart(productId, quantity = 1, color = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Kiểm tra số lượng tồn kho
    if (product.stock < quantity) {
        showMessage(`Chỉ còn ${product.stock} sản phẩm trong kho`, 'error');
        return;
    }
    
    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingItem = cart.find(item => item.id === productId && item.color === color);
    
    if (existingItem) {
        // Cập nhật số lượng nếu đã có
        if (existingItem.quantity + quantity > product.stock) {
            showMessage(`Không thể thêm, chỉ còn ${product.stock} sản phẩm trong kho`, 'error');
            return;
        }
        existingItem.quantity += quantity;
    } else {
        // Thêm mới vào giỏ
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            color: color,
            image: product.image,
            category: product.category
        });
    }
    
    // Cập nhật giao diện
    updateCartCount();
    saveToLocalStorage();
    showMessage(`Đã thêm ${product.name} vào giỏ hàng`, 'success');
}

// Render trang giỏ hàng
function renderCartPage() {
    const cartContainer = document.getElementById('cartContainer');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Giỏ hàng của bạn đang trống</h3>
                <p>Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
                <button class="explore-btn" onclick="navigateToPage('products')" style="margin-top: 1.5rem;">Khám Phá Sản Phẩm</button>
            </div>
        `;
        return;
    }
    
    let cartItemsHTML = '';
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        cartItemsHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/150x150/0a0a0a/ff0020?text=ASUS+ROG'">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    ${item.color ? `<div>Màu: ${item.color}</div>` : ''}
                    <div class="cart-item-price">${formatPrice(item.price)} VND</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
                        <button class="btn-delete" onclick="removeFromCart(${index})" style="margin-left: 1rem;">Xóa</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    ${formatPrice(itemTotal)} VND
                </div>
            </div>
        `;
    });
    
    const shipping = subtotal > 5000000 ? 0 : 50000;
    const total = subtotal + shipping;
    
    cartContainer.innerHTML = `
        <div class="cart-items">
            <h3>Sản Phẩm Đã Chọn (${cart.length})</h3>
            ${cartItemsHTML}
        </div>
        <div class="cart-summary">
            <h3>Tóm Tắt Đơn Hàng</h3>
            <div class="summary-row">
                <span>Tạm Tính:</span>
                <span>${formatPrice(subtotal)} VND</span>
            </div>
            <div class="summary-row">
                <span>Phí Vận Chuyển:</span>
                <span>${shipping === 0 ? 'MIỄN PHÍ' : formatPrice(shipping) + ' VND'}</span>
            </div>
            <div class="summary-row">
                <span class="summary-total">Tổng Cộng:</span>
                <span class="summary-total">${formatPrice(total)} VND</span>
            </div>
            <button class="btn-checkout" onclick="checkout()">Thanh Toán</button>
            <button class="btn-details" onclick="navigateToPage('products')" style="width: 100%; margin-top: 1rem;">Tiếp Tục Mua Sắm</button>
        </div>
    `;
}

// Cập nhật số lượng trong giỏ hàng
function updateCartQuantity(index, change) {
    const item = cart[index];
    const product = products.find(p => p.id === item.id);
    
    if (!product) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(index);
        return;
    }
    
    if (newQuantity > product.stock) {
        showMessage(`Chỉ còn ${product.stock} sản phẩm trong kho`, 'error');
        return;
    }
    
    item.quantity = newQuantity;
    updateCartCount();
    saveToLocalStorage();
    renderCartPage();
}

// Xóa khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    saveToLocalStorage();
    renderCartPage();
}

// Thanh toán
function checkout() {
    if (!currentUser) {
        showMessage('Vui lòng đăng nhập để thanh toán', 'error');
        navigateToPage('auth');
        return;
    }
    
    // Kiểm tra tồn kho
    for (const item of cart) {
        const product = products.find(p => p.id === item.id);
        if (!product || product.stock < item.quantity) {
            showMessage(`Sản phẩm "${item.name}" không đủ số lượng tồn kho`, 'error');
            return;
        }
    }
    
    // Cập nhật tồn kho
    for (const item of cart) {
        const product = products.find(p => p.id === item.id);
        if (product) {
            product.stock -= item.quantity;
        }
    }
    
    // Xóa giỏ hàng
    cart = [];
    
    // Cập nhật giao diện
    updateCartCount();
    saveToLocalStorage();
    renderCartPage();
    renderHomePage();
    
    showMessage('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại ASUS ROG STORE', 'success');
}

// Cung cấp các hàm toàn cục cần thiết
window.addToCart = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.checkout = checkout;