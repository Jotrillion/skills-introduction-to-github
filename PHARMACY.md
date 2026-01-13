# 🏥 MediCare Plus - Online Pharmacy Store

A complete, responsive online pharmacy store website built with HTML5, CSS3, and vanilla JavaScript.

## 🌟 Features

### Product Catalog
- **12 Healthcare Products** organized in 4 categories:
  - 💊 Medicines (Aspirin, Ibuprofen, Cough Syrup)
  - 🍊 Vitamins (Vitamin C, Multivitamin, Vitamin D3)
  - 🧴 Personal Care (Hand Sanitizer, Face Masks, Thermometer)
  - 🍼 Baby Care (Diapers, Formula, Wipes)

### Shopping Cart
- Add/remove products
- Adjust quantities
- Real-time total calculation
- Persistent storage using localStorage
- Modal popup interface

### Interactive Features
- Product search functionality
- Category filtering
- Prescription upload
- Contact form
- Newsletter subscription
- Smooth animations and transitions
- Toast notifications for user actions

### Pharmacy Services
- 💊 Prescription Refills
- 🚚 Fast Delivery
- 👨‍⚕️ Expert Consultation (24/7)
- 🔒 Secure Payments

### Design
- Modern gradient design (purple/blue theme)
- Fully responsive for mobile and desktop
- Smooth scrolling navigation
- Professional pharmacy aesthetic
- Accessible structure

## 🚀 Getting Started

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jotrillion/skills-introduction-to-github.git
   cd skills-introduction-to-github
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local web server:
   ```bash
   # Python 3
   python3 -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   
   # Node.js (with http-server)
   npx http-server -p 8080
   ```

3. **Access the website**
   - Open your browser and navigate to `http://localhost:8080`

## 📁 File Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript functionality
└── PHARMACY.md     # This documentation file
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Vanilla JavaScript, no frameworks
- **LocalStorage API** - Cart persistence

## 💡 Key Functionalities

### Product Management
```javascript
// Products are stored in an array with details:
{
    id: 1,
    name: "Aspirin 500mg",
    category: "medicine",
    price: 12.99,
    icon: "💊",
    description: "Pain relief and fever reducer"
}
```

### Shopping Cart
- Items persist across browser sessions
- Quantity management (increase/decrease)
- Remove items functionality
- Real-time total calculation
- Checkout simulation

### Search & Filter
- Search by product name, description, or category
- Filter by category (All, Medicines, Vitamins, Personal Care, Baby Care)
- Dynamic product display

## 🎨 Customization

### Changing Colors
Edit `styles.css` and modify the gradient colors:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button colors */
.btn-primary {
    background: #667eea;
}
```

### Adding Products
Edit `script.js` and add to the products array:
```javascript
products.push({
    id: 13,
    name: "Your Product",
    category: "medicine", // medicine, vitamins, personal-care, baby-care
    price: 19.99,
    icon: "💊",
    description: "Product description"
});
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 480px - 768px
- **Mobile**: < 480px

## 🔒 Security

- No security vulnerabilities detected (CodeQL scanned)
- Input sanitization for forms
- Safe HTML rendering
- No external dependencies

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contact

For questions or support:
- 📞 Phone: 1-800-MEDICARE (1-800-633-4227)
- ✉️ Email: support@medicareplus.com
- 📍 Address: 123 Healthcare Avenue, Medical District, NY 10001

## 🙏 Acknowledgments

Built as part of the GitHub Skills Introduction course.

---

**Note**: This is a demonstration website. For a production pharmacy store, you would need:
- Backend server (Node.js, Python, PHP, etc.)
- Database (PostgreSQL, MongoDB, etc.)
- Payment gateway integration
- SSL/TLS encryption
- Legal compliance (HIPAA, pharmacy regulations)
- Prescription verification system
- Inventory management
- Order tracking system
