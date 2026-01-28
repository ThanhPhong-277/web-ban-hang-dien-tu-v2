// Render trang admin
function renderAdminPage() {
    // Kiểm tra quyền admin
    if (!isAdmin && currentUser?.email !== 'admin@rogstore.vn') {
        showMessage('Bạn không có quyền truy cập trang này', 'error');
        navigateToPage('home');
        return;
    }
    
    const adminProductsList = document.getElementById('adminProductsList');
    adminProductsList.innerHTML = '';
    
    products.forEach(product => {
        // Tên danh mục
        let categoryName = '';
        switch(product.category) {
            case 'laptop': categoryName = 'Laptop Gaming'; break;
            case 'monitor': categoryName = 'Màn Hình Gaming'; break;
            case 'keyboard': categoryName = 'Bàn Phím Gaming'; break;
            case 'mouse': categoryName = 'Chuột Gaming'; break;
        }
        
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <div class="product-item-info">
                <h4>${product.name}</h4>
                <div>Danh mục: ${categoryName}</div>
                <div>Giá: ${formatPrice(product.price)} VND | Tồn kho: ${product.stock}</div>
            </div>
            <div class="product-item-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">Sửa</button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">Xóa</button>
            </div>
        `;
        
        adminProductsList.appendChild(productItem);
    });
}

// Thêm sản phẩm mới
function addNewProduct() {
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseInt(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    const image = document.getElementById('productImage').value;
    const description = document.getElementById('productDescription').value;
    
    // Lấy thông tin màu sắc
    const colorInputs = document.querySelectorAll('#colorInputs .color-input-row');
    const colors = [];
    
    colorInputs.forEach(row => {
        const nameInput = row.querySelector('input[type="text"]');
        const colorInput = row.querySelector('input[type="color"]');
        
        if (nameInput.value.trim() !== '') {
            colors.push({
                name: nameInput.value.trim(),
                code: colorInput.value
            });
        }
    });
    
    // Tạo ID mới
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    // Thêm sản phẩm mới
    const newProduct = {
        id: newId,
        name,
        category,
        price,
        stock,
        image,
        description,
        colors,
        featured: false
    };
    
    products.push(newProduct);
    saveToLocalStorage();
    
    // Reset form
    document.getElementById('addProductForm').reset();
    
    // Reset màu sắc
    document.getElementById('colorInputs').innerHTML = `
        <div class="color-input-row">
            <input type="text" class="form-control" style="width: 200px; display: inline-block;" placeholder="Tên màu (VD: Đen)">
            <input type="color" style="margin-left: 10px; vertical-align: middle;">
            <button type="button" class="btn-delete" style="margin-left: 10px; padding: 0.3rem 0.8rem;" onclick="removeColorInput(this)">Xóa</button>
        </div>
    `;
    
    // Cập nhật giao diện
    renderAdminPage();
    showMessage('Thêm sản phẩm thành công', 'success');
}

// Sửa sản phẩm
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Điền thông tin vào form
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productDescription').value = product.description;
    
    // Điền màu sắc
    const colorInputs = document.getElementById('colorInputs');
    colorInputs.innerHTML = '';
    
    if (product.colors && product.colors.length > 0) {
        product.colors.forEach(color => {
            const colorRow = document.createElement('div');
            colorRow.className = 'color-input-row';
            colorRow.style.marginBottom = '10px';
            colorRow.innerHTML = `
                <input type="text" class="form-control" style="width: 200px; display: inline-block;" value="${color.name}">
                <input type="color" value="${color.code}" style="margin-left: 10px; vertical-align: middle;">
                <button type="button" class="btn-delete" style="margin-left: 10px; padding: 0.3rem 0.8rem;" onclick="removeColorInput(this)">Xóa</button>
            `;
            colorInputs.appendChild(colorRow);
        });
    } else {
        colorInputs.innerHTML = `
            <div class="color-input-row">
                <input type="text" class="form-control" style="width: 200px; display: inline-block;" placeholder="Tên màu (VD: Đen)">
                <input type="color" style="margin-left: 10px; vertical-align: middle;">
                <button type="button" class="btn-delete" style="margin-left: 10px; padding: 0.3rem 0.8rem;" onclick="removeColorInput(this)">Xóa</button>
            </div>
        `;
    }
    
    // Cuộn đến form
    document.getElementById('addProductForm').scrollIntoView({ behavior: 'smooth' });
    
    // Thay đổi nút submit thành cập nhật
    const submitBtn = document.querySelector('#addProductForm .btn-submit');
    submitBtn.textContent = 'Cập Nhật Sản Phẩm';
    submitBtn.onclick = function(e) {
        e.preventDefault();
        updateProduct(productId);
    };
}

// Cập nhật sản phẩm
function updateProduct(productId) {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) return;
    
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseInt(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    const image = document.getElementById('productImage').value;
    const description = document.getElementById('productDescription').value;
    
    // Lấy thông tin màu sắc
    const colorInputs = document.querySelectorAll('#colorInputs .color-input-row');
    const colors = [];
    
    colorInputs.forEach(row => {
        const nameInput = row.querySelector('input[type="text"]');
        const colorInput = row.querySelector('input[type="color"]');
        
        if (nameInput.value.trim() !== '') {
            colors.push({
                name: nameInput.value.trim(),
                code: colorInput.value
            });
        }
    });
    
    // Cập nhật sản phẩm
    products[productIndex] = {
        ...products[productIndex],
        name,
        category,
        price,
        stock,
        image,
        description,
        colors
    };
    
    saveToLocalStorage();
    
    // Reset form
    document.getElementById('addProductForm').reset();
    document.getElementById('colorInputs').innerHTML = `
        <div class="color-input-row">
            <input type="text" class="form-control" style="width: 200px; display: inline-block;" placeholder="Tên màu (VD: Đen)">
            <input type="color" style="margin-left: 10px; vertical-align: middle;">
            <button type="button" class="btn-delete" style="margin-left: 10px; padding: 0.3rem 0.8rem;" onclick="removeColorInput(this)">Xóa</button>
        </div>
    `;
    
    // Khôi phục nút submit
    const submitBtn = document.querySelector('#addProductForm .btn-submit');
    submitBtn.textContent = 'Thêm Sản Phẩm';
    submitBtn.onclick = function(e) {
        e.preventDefault();
        addNewProduct();
    };
    
    // Cập nhật giao diện
    renderAdminPage();
    showMessage('Cập nhật sản phẩm thành công', 'success');
}

// Xóa sản phẩm
function deleteProduct(productId) {
    if (!confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;
    
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) return;
    
    products.splice(productIndex, 1);
    saveToLocalStorage();
    
    // Cập nhật giao diện
    renderAdminPage();
    renderHomePage();
    showMessage('Xóa sản phẩm thành công', 'success');
}

// Render trang quản lý kho
function renderInventoryPage() {
    // Kiểm tra quyền admin
    if (!isAdmin && currentUser?.email !== 'admin@rogstore.vn') {
        showMessage('Bạn không có quyền truy cập trang này', 'error');
        navigateToPage('home');
        return;
    }
    
    // Tính toán thống kê
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
    const lowStock = products.filter(product => product.stock <= 3).length;
    
    // Cập nhật thống kê
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('totalValue').textContent = formatPrice(totalValue);
    document.getElementById('lowStock').textContent = lowStock;
    
    // Tạo bảng
    const tableBody = document.getElementById('inventoryTableBody');
    tableBody.innerHTML = '';
    
    products.forEach(product => {
        // Tên danh mục
        let categoryName = '';
        switch(product.category) {
            case 'laptop': categoryName = 'Laptop'; break;
            case 'monitor': categoryName = 'Màn Hình'; break;
            case 'keyboard': categoryName = 'Bàn Phím'; break;
            case 'mouse': categoryName = 'Chuột'; break;
        }
        
        const totalValue = product.price * product.stock;
        const stockClass = product.stock <= 3 ? 'style="color: var(--rog-red); font-weight: bold;"' : 
                          product.stock <= 10 ? 'style="color: #ff9900; font-weight: bold;"' : '';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${categoryName}</td>
            <td ${stockClass}>${product.stock}</td>
            <td>${formatPrice(product.price)} VND</td>
            <td>${formatPrice(totalValue)} VND</td>
            <td>
                <button class="btn-edit" style="padding: 0.5rem 1rem;" onclick="adjustStock(${product.id}, 1)">+</button>
                <button class="btn-delete" style="padding: 0.5rem 1rem;" onclick="adjustStock(${product.id}, -1)">-</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Điều chỉnh tồn kho
function adjustStock(productId, change) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const newStock = product.stock + change;
    
    if (newStock < 0) {
        showMessage('Số lượng tồn kho không thể nhỏ hơn 0', 'error');
        return;
    }
    
    product.stock = newStock;
    saveToLocalStorage();
    renderInventoryPage();
    showMessage(`Đã cập nhật tồn kho cho ${product.name}`, 'success');
}

// Cung cấp các hàm toàn cục cần thiết
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.adjustStock = adjustStock;