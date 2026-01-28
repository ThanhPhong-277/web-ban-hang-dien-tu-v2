// Hiển thị form đăng nhập
function showLoginForm() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    
    // Cập nhật tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-tab') === 'login') {
            tab.classList.add('active');
        }
    });
}

// Hiển thị form đăng ký
function showRegisterForm() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    
    // Cập nhật tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-tab') === 'register') {
            tab.classList.add('active');
        }
    });
}

// Đăng nhập
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Kiểm tra đăng nhập admin
    if (email === 'admin@rogstore.vn' && password === 'admin123') {
        currentUser = { name: 'Admin', email: email, isAdmin: true };
        isAdmin = true;
        saveToLocalStorage();
        checkLoginStatus();
        showMessage('Đăng nhập Admin thành công', 'success');
        navigateToPage('home');
        return;
    }
    
    // Kiểm tra đăng nhập thông thường (trong thực tế sẽ kiểm tra với server)
    if (email && password) {
        currentUser = { name: email.split('@')[0], email: email, isAdmin: false };
        isAdmin = false;
        saveToLocalStorage();
        checkLoginStatus();
        showMessage('Đăng nhập thành công', 'success');
        navigateToPage('home');
    } else {
        showMessage('Vui lòng nhập đầy đủ thông tin', 'error');
    }
}

// Đăng ký
function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Kiểm tra thông tin
    if (!name || !email || !password || !confirmPassword) {
        showMessage('Vui lòng nhập đầy đủ thông tin', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Mật khẩu xác nhận không khớp', 'error');
        return;
    }
    
    // Kiểm tra email đã tồn tại chưa
    const users = JSON.parse(localStorage.getItem('rogUsers') || '[]');
    const userExists = users.some(user => user.email === email);
    
    if (userExists) {
        showMessage('Email đã được đăng ký', 'error');
        return;
    }
    
    // Thêm người dùng mới
    users.push({ name, email, password });
    localStorage.setItem('rogUsers', JSON.stringify(users));
    
    // Đăng nhập người dùng mới
    currentUser = { name, email, isAdmin: false };
    isAdmin = false;
    saveToLocalStorage();
    checkLoginStatus();
    showMessage('Đăng ký thành công! Đang đăng nhập...', 'success');
    
    // Chuyển về trang chủ
    setTimeout(() => {
        navigateToPage('home');
    }, 1500);
}

// Đăng xuất
function logout() {
    currentUser = null;
    isAdmin = false;
    saveToLocalStorage();
    checkLoginStatus();
    showMessage('Đã đăng xuất', 'success');
    navigateToPage('home');
}

// Thiết lập event listeners cho auth
document.addEventListener('DOMContentLoaded', function() {
    // Form đăng nhập/đăng ký
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        login();
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        register();
    });

    // Chuyển tab đăng nhập/đăng ký
    document.getElementById('showRegister').addEventListener('click', function(e) {
        e.preventDefault();
        showRegisterForm();
    });
    
    document.getElementById('showLogin').addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });
    
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            if (tabId === 'login') {
                showLoginForm();
            } else {
                showRegisterForm();
            }
        });
    });
});

// Cung cấp các hàm toàn cục cần thiết
window.showLoginForm = showLoginForm;
window.showRegisterForm = showRegisterForm;
window.logout = logout;