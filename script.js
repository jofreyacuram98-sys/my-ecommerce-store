// Product data - 20+ items as requested (Prices in Philippine Pesos)
const products = [
    { id: 1, name: "Laptop", price: 45000.00, desc: "Powerful laptop for work and gaming", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" },
    { id: 2, name: "Headphones", price: 2500.00, desc: "Noise cancelling wireless headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" },
    { id: 3, name: "Smartphone", price: 35000.00, desc: "Latest model with amazing camera", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400" },
    { id: 4, name: "Smart Watch", price: 18000.00, desc: "Track your fitness and notifications", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 5, name: "Tablet", price: 25000.00, desc: "Perfect for reading and browsing", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400" },
    { id: 6, name: "Camera", price: 52000.00, desc: "Professional DSLR camera", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400" },
    { id: 7, name: "Keyboard", price: 5000.00, desc: "Mechanical gaming keyboard", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" },
    { id: 8, name: "Mouse", price: 2200.00, desc: "Wireless ergonomic mouse", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400" },
    { id: 9, name: "Monitor", price: 20000.00, desc: "27-inch 4K display", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" },
    { id: 10, name: "Desk Lamp", price: 1800.00, desc: "LED adjustable desk lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400" },
    { id: 11, name: "Backpack", price: 3500.00, desc: "Water-resistant laptop backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400" },
    { id: 12, name: "USB Hub", price: 1400.00, desc: "7-port USB 3.0 hub", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400" },
    { id: 13, name: "Webcam", price: 4500.00, desc: "HD 1080p streaming webcam", image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400" },
    { id: 14, name: "Microphone", price: 7500.00, desc: "Professional USB microphone", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400" },
    { id: 15, name: "Speakers", price: 8500.00, desc: "Bluetooth wireless speakers", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
    { id: 16, name: "Phone Case", price: 1200.00, desc: "Protective phone case", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400" },
    { id: 17, name: "Charger", price: 1800.00, desc: "Fast wireless charger", image: "https://images.unsplash.com/photo-1591290619762-5b4042b48d10?w=400" },
    { id: 18, name: "Cable", price: 850.00, desc: "USB-C charging cable 6ft", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    { id: 19, name: "Power Bank", price: 2800.00, desc: "20000mAh portable charger", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400" },
    { id: 20, name: "Gaming Chair", price: 14000.00, desc: "Ergonomic gaming chair", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400" },
    { id: 21, name: "Desk Mat", price: 1400.00, desc: "Large gaming desk mat", image: "https://images.unsplash.com/photo-1625225233840-695456021cde?w=400" },
    { id: 22, name: "Router", price: 5000.00, desc: "High-speed WiFi 6 router", image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400" }
];

// Shopping cart stored in memory (not localStorage as per restrictions)
let cart = [];

// Login state stored in memory
let isLoggedIn = false;
let currentUser = null;

// DOM elements
const productGridEl = document.getElementById("product-grid");
const productsSection = document.getElementById("products");

// Function to check if user is logged in
function checkLoginStatus() {
    if (!isLoggedIn) {
        // Hide products and show login message
        productGridEl.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i class="fas fa-lock" style="font-size: 4rem; color: #667eea; margin-bottom: 1rem;"></i>
                <h3 style="color: #2d3748; margin-bottom: 1rem;">Login Required</h3>
                <p style="color: #718096; margin-bottom: 2rem;">Please log in to view our products and start shopping.</p>
                <a href="#login" class="cta-button">Go to Login</a>
            </div>
        `;
        return false;
    }
    return true;
}

// Function to render products
function renderProducts() {
    if (!checkLoginStatus()) {
        return;
    }
    
    productGridEl.innerHTML = '';
    
    products.forEach(p => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <p class="product-price">₱${p.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" data-id="${p.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        
        productGridEl.appendChild(productCard);
    });

    // Attach event listeners to all "Add to Cart" buttons
    productGridEl.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(Number(btn.dataset.id)));
    });
}

// Function to add a product to the cart
function addToCart(id) {
    if (!isLoggedIn) {
        showNotification('Please login to add items to cart', 'error');
        return;
    }
    
    const prod = products.find(p => p.id === id);
    let item = cart.find(it => it.id === id);

    if (item) {
        item.qty++;
    } else {
        cart.push({ 
            id: prod.id, 
            name: prod.name, 
            price: prod.price, 
            qty: 1,
            image: prod.image 
        });
    }
    
    // Show a notification
    showNotification(`${prod.name} added to cart!`, 'success');
    updateCartCount();
    
    // Show cart link in navbar
    document.getElementById('cart-link').style.display = 'inline-block';
}

// Function to update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Function to render cart page
function renderCartPage() {
    const cartSection = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <i class="fas fa-shopping-cart" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>Your cart is empty</h3>
                <p style="color: #718096; margin-bottom: 2rem;">Add some products to get started!</p>
                <a href="#products" class="cta-button">Continue Shopping</a>
            </div>
        `;
        document.getElementById('proceed-checkout-btn').style.display = 'none';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.qty;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="price">${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                <span class="qty">${item.qty}</span>
                <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
            <div class="cart-item-total">
                <p>${(item.price * item.qty).toFixed(2)}</p>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    const total = subtotal + 500; // Add shipping (₱500)
    document.getElementById('cart-subtotal').textContent = `${subtotal.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `${total.toFixed(2)}`;
    document.getElementById('proceed-checkout-btn').style.display = 'block';
}

// Function to update cart quantity
window.updateCartQty = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            updateCartCount();
            renderCartPage();
        }
    }
}

// Function to remove item from cart
window.removeFromCart = function(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartCount();
    renderCartPage();
    
    if (cart.length === 0) {
        document.getElementById('cart-link').style.display = 'none';
    }
    
    showNotification('Item removed from cart', 'success');
}

// Function to show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    
    const bgColor = type === 'success' 
        ? 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'
        : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i> ${message}
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Handle login form submission
const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            // Simple validation - in real app, this would call an API
            if (password.length >= 6) {
                isLoggedIn = true;
                currentUser = {
                    email: email,
                    name: email.split('@')[0]
                };
                
                showNotification(`Welcome back, ${currentUser.name}! Redirecting to products...`, 'success');
                loginForm.reset();
                
                // Update navbar to show logged in state
                updateNavbar();
                
                // Wait a moment then redirect to products
                setTimeout(() => {
                    // Render products now that user is logged in
                    renderProducts();
                    
                    // Scroll to products section smoothly
                    document.getElementById('products').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 1000);
            } else {
                showNotification('Password must be at least 6 characters', 'error');
            }
        } else {
            showNotification('Please fill in all fields', 'error');
        }
    });
}

// Function to update navbar when logged in
function updateNavbar() {
    const loginButton = document.querySelector('.nav-button');
    if (isLoggedIn && loginButton) {
        loginButton.innerHTML = `<i class="fas fa-user-check"></i> ${currentUser.name}`;
        loginButton.style.background = 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)';
        loginButton.style.color = 'white';
        loginButton.style.cursor = 'default';
        
        // Add logout functionality
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Do you want to logout?')) {
                isLoggedIn = false;
                currentUser = null;
                cart = [];
                
                loginButton.innerHTML = 'Login <i class="fas fa-user"></i>';
                loginButton.style.background = '';
                loginButton.style.color = '';
                
                showNotification('Logged out successfully', 'success');
                renderProducts(); // This will show the login required message
            }
        });
    }
}

// Smooth scroll for navigation links with login check
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // If trying to access products without login, redirect to login
        if (targetId === '#products' && !isLoggedIn) {
            e.preventDefault();
            showNotification('Please login to view products', 'error');
            document.getElementById('login').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            return;
        }
        
        // If trying to access cart
        if (targetId === '#cart') {
            e.preventDefault();
            if (cart.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }
            // Show cart section and hide checkout
            document.getElementById('cart').style.display = 'block';
            document.getElementById('checkout').style.display = 'none';
            renderCartPage();
            document.getElementById('cart').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Also check when "Shop Now" button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const shopNowBtn = document.querySelector('.cta-button[href="#products"]');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', (e) => {
            if (!isLoggedIn) {
                e.preventDefault();
                showNotification('Please login to view products', 'error');
                document.getElementById('login').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Initial render - will show login required message
    renderProducts();
    
    console.log('E-commerce store loaded successfully!');
    console.log(`Total products: ${products.length}`);
    console.log('Login required to view products');
});

// Optional: Add a simple cart viewer (you can expand this)
console.log('Cart functions available:', {
    viewCart: () => console.table(cart),
    getTotal: () => cart.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2),
    checkLogin: () => console.log('Logged in:', isLoggedIn, currentUser)
});