// Biến toàn cục
let currentUser = null;
let isAdmin = false;

// Lấy dữ liệu từ localStorage khi tải trang
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    setupEventListeners();
    renderHomePage();
    updateCartCount();
    
    // Kiểm tra nếu đã đăng nhập
    checkLoginStatus();
});

// Lưu dữ liệu vào localStorage
function saveToLocalStorage() {
    localStorage.setItem('rogProducts', JSON.stringify(products));
    localStorage.setItem('rogCart', JSON.stringify(cart));
    localStorage.setItem('rogCurrentUser', JSON.stringify(currentUser));
}

// Tải dữ liệu từ localStorage
function loadFromLocalStorage() {
    const savedProducts = localStorage.getItem('rogProducts');
    const savedCart = localStorage.getItem('rogCart');
    const savedUser = localStorage.getItem('rogCurrentUser');
    
    if (savedProducts) products = JSON.parse(savedProducts);
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedUser) currentUser = JSON.parse(savedUser);
}

// Thiết lập event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
            
            // Cập nhật trạng thái active của nav
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Footer links
    document.querySelectorAll('.footer-links a[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            const category = this.getAttribute('data-category');
            
            navigateToPage(page);
            
            if (category && page === 'products') {
                setTimeout(() => {
                    filterProductsByCategory(category);
                }, 100);
            }
        });
    });

    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        document.getElementById('navLinks').classList.toggle('active');
    });

    // Các nút điều hướng
    document.getElementById('exploreBtn').addEventListener('click', function() {
        navigateToPage('products');
    });
    
    document.getElementById('cartIcon').addEventListener('click', function() {
        navigateToPage('cart');
    });
    
    document.getElementById('loginBtn').addEventListener('click', function() {
        navigateToPage('auth');
        showLoginForm();
    });
    
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('adminPanelBtn').addEventListener('click', function() {
        navigateToPage('admin');
    });
    
    // Các nút quay lại
    document.getElementById('backToHome').addEventListener('click', function() {
        navigateToPage('home');
    });
    
    document.getElementById('backToProducts').addEventListener('click', function() {
        navigateToPage('products');
    });
    
    document.getElementById('backToHomeFromAdmin').addEventListener('click', function() {
        navigateToPage('home');
    });
    
    document.getElementById('backToHomeFromInventory').addEventListener('click', function() {
        navigateToPage('home');
    });
    
    document.getElementById('backToHomeFromCart').addEventListener('click', function() {
        navigateToPage('home');
    });

    // Filter sản phẩm theo danh mục
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProductsByCategory(category);
            
            // Cập nhật trạng thái active
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Form thêm sản phẩm
    document.getElementById('addProductForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addNewProduct();
    });

    // Đóng menu mobile khi click bên ngoài
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#navLinks') && !e.target.closest('#mobileMenuBtn')) {
            document.getElementById('navLinks').classList.remove('active');
        }
    });
}

// Điều hướng đến trang
function navigateToPage(pageId) {
    // Ẩn tất cả các trang
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Hiển thị trang được chọn
    document.getElementById(pageId).classList.add('active');
    
    // Render nội dung trang
    switch(pageId) {
        case 'home':
            renderHomePage();
            break;
        case 'products':
            renderProductsPage();
            break;
        case 'cart':
            renderCartPage();
            break;
        case 'admin':
            renderAdminPage();
            break;
        case 'inventory':
            renderInventoryPage();
            break;
        case 'auth':
            // Đã có form sẵn
            break;
    }
    
    // Ẩn menu mobile nếu đang mở
    document.getElementById('navLinks').classList.remove('active');
    
    // Cập nhật navigation active
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
    
    // Cuộn lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render trang chủ
function renderHomePage() {
    const featuredContainer = document.getElementById('featuredProducts');
    featuredContainer.innerHTML = '';
    
    // Lọc sản phẩm nổi bật
    const featuredProducts = products.filter(product => product.featured);
    
    // Hiển thị tối đa 4 sản phẩm nổi bật
    featuredProducts.slice(0, 4).forEach(product => {
        const productCard = createProductCard(product);
        featuredContainer.appendChild(productCard);
    });
}

// Kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminBtn = document.getElementById('adminPanelBtn');
    const adminLink = document.getElementById('adminLink');
    const inventoryLink = document.getElementById('inventoryLink');
    
    if (currentUser) {
        // Đã đăng nhập
        loginBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        
        // Kiểm tra quyền admin
        if (isAdmin || currentUser.email === 'admin@rogstore.vn') {
            adminBtn.classList.remove('hidden');
            adminLink.classList.remove('hidden');
            inventoryLink.classList.remove('hidden');
        } else {
            adminBtn.classList.add('hidden');
            adminLink.classList.add('hidden');
            inventoryLink.classList.add('hidden');
        }
    } else {
        // Chưa đăng nhập
        loginBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        adminBtn.classList.add('hidden');
        adminLink.classList.add('hidden');
        inventoryLink.classList.add('hidden');
    }
}

// Hiển thị thông báo
function showMessage(text, type) {
    // Xóa thông báo cũ nếu có
    const oldMessage = document.querySelector('.message');
    if (oldMessage) oldMessage.remove();
    
    // Tạo thông báo mới
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Thêm vào trang hiện tại
    const currentPage = document.querySelector('.page.active');
    if (currentPage) {
        currentPage.insertBefore(message, currentPage.firstChild);
    }
    
    // Tự động xóa sau 3 giây
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 3000);
}

// Định dạng giá tiền
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Thêm màu vào form thêm sản phẩm
function addColorInput() {
    const container = document.getElementById('colorInputs');
    const colorRow = document.createElement('div');
    colorRow.className = 'color-input-row';
    colorRow.style.marginBottom = '10px';
    colorRow.innerHTML = `
        <input type="text" class="form-control" style="width: 200px; display: inline-block;" placeholder="Tên màu (VD: Đen)">
        <input type="color" style="margin-left: 10px; vertical-align: middle;">
        <button type="button" class="btn-delete" style="margin-left: 10px; padding: 0.3rem 0.8rem;" onclick="removeColorInput(this)">Xóa</button>
    `;
    container.appendChild(colorRow);
}

// Xóa màu khỏi form thêm sản phẩm
function removeColorInput(button) {
    button.parentElement.remove();
}

// Cung cấp các hàm toàn cục cần thiết
window.navigateToPage = navigateToPage;
window.addColorInput = addColorInput;
window.removeColorInput = removeColorInput;