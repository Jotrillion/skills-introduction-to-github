// Product data
const products = [
    {
        id: 1,
        name: "Aspirin 500mg",
        category: "medicine",
        price: 12.99,
        icon: "💊",
        description: "Pain relief and fever reducer"
    },
    {
        id: 2,
        name: "Vitamin C 1000mg",
        category: "vitamins",
        price: 15.99,
        icon: "🍊",
        description: "Immune system support"
    },
    {
        id: 3,
        name: "Hand Sanitizer",
        category: "personal-care",
        price: 8.99,
        icon: "🧴",
        description: "75% alcohol-based sanitizer"
    },
    {
        id: 4,
        name: "Baby Diapers",
        category: "baby-care",
        price: 24.99,
        icon: "🍼",
        description: "Soft and absorbent diapers"
    },
    {
        id: 5,
        name: "Ibuprofen 400mg",
        category: "medicine",
        price: 14.99,
        icon: "💊",
        description: "Anti-inflammatory medication"
    },
    {
        id: 6,
        name: "Multivitamin",
        category: "vitamins",
        price: 19.99,
        icon: "🌟",
        description: "Complete daily nutrition"
    },
    {
        id: 7,
        name: "Face Masks",
        category: "personal-care",
        price: 9.99,
        icon: "😷",
        description: "Disposable protective masks"
    },
    {
        id: 8,
        name: "Baby Formula",
        category: "baby-care",
        price: 29.99,
        icon: "🍼",
        description: "Nutritious infant formula"
    },
    {
        id: 9,
        name: "Cough Syrup",
        category: "medicine",
        price: 11.99,
        icon: "💊",
        description: "Relief from cough and cold"
    },
    {
        id: 10,
        name: "Vitamin D3",
        category: "vitamins",
        price: 13.99,
        icon: "☀️",
        description: "Bone health support"
    },
    {
        id: 11,
        name: "Thermometer",
        category: "personal-care",
        price: 16.99,
        icon: "🌡️",
        description: "Digital fever thermometer"
    },
    {
        id: 12,
        name: "Baby Wipes",
        category: "baby-care",
        price: 7.99,
        icon: "🧻",
        description: "Gentle cleansing wipes"
    }
];

// Shopping cart
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts('all');
    setupEventListeners();
    loadCart();
});

// Display products
function displayProducts(category) {
    const productGrid = document.getElementById('product-grid');
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-icon">${product.icon}</div>
            <span class="product-category">${formatCategory(product.category)}</span>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Filter products by category
function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    const clickedButton = Array.from(document.querySelectorAll('.category-btn'))
        .find(btn => btn.textContent.toLowerCase().includes(category === 'all' ? 'all' : category.replace('-', ' ')));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    displayProducts(category);
}

// Format category name
function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const productGrid = document.getElementById('product-grid');
    
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: #666;">No products found matching your search.</p>';
    } else {
        productGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-icon">${product.icon}</div>
                <span class="product-category">${formatCategory(product.category)}</span>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `).join('');
    }
    
    // Reset category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    saveCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            saveCart();
        }
    }
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Show cart
function showCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
    updateCartDisplay();
}

// Close cart
function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.icon} ${item.name}</h4>
                <p>$${item.price.toFixed(2)} each</p>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <button onclick="updateQuantity(${item.id}, -1)" class="btn" style="padding: 5px 10px;">-</button>
                <span style="font-weight: bold;">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" class="btn" style="padding: 5px 10px;">+</button>
                <button onclick="removeFromCart(${item.id})" class="btn btn-secondary" style="padding: 5px 15px;">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\n\nYour order will be processed and delivered within 2-3 business days.\n\nA confirmation email will be sent shortly.`);
    
    cart = [];
    updateCartCount();
    closeCart();
    saveCart();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('pharmacyCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('pharmacyCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Cart link click
    document.querySelector('.cart-link').addEventListener('click', function(e) {
        e.preventDefault();
        showCart();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('cart-modal');
        if (e.target === modal) {
            closeCart();
        }
    });
    
    // Prescription file upload
    document.getElementById('prescription-file').addEventListener('change', function(e) {
        const fileName = e.target.files[0]?.name;
        if (fileName) {
            document.getElementById('file-name').textContent = `Selected: ${fileName}`;
            showNotification('Prescription uploaded successfully!');
        }
    });
    
    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
    
    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Successfully subscribed to our newsletter!');
        this.reset();
    });
    
    // Search on Enter key
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add some entrance animations when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections on page load
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
});
