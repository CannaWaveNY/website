// Function to filter products by category (defined globally)
function filterProductsByCategory(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    console.log('Filtering products by category:', category);
    console.log('Total product cards found:', productCards.length);
    
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the target button if it exists
    const targetButton = document.querySelector(`[data-category="${category}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
        console.log('Activated button for category:', category);
    }

    let visibleCount = 0;
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`Showing ${visibleCount} products for category: ${category}`);
}

// Product Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    console.log('Current URL:', window.location.href);
    console.log('Search params:', window.location.search);
    console.log('Category parameter from URL:', categoryParam);
    
    // If there's a category parameter, filter to that category on page load
    if (categoryParam) {
        console.log('Filtering to category:', categoryParam);
        // Use a small delay to ensure DOM is fully loaded
        setTimeout(() => {
            filterProductsByCategory(categoryParam);
        }, 100);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProductsByCategory(category);
        });
    });
});

// Add to Cart Functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product-card .btn-primary');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // Add visual feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.background = '#28a745';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
            
            // Here you would typically add the item to a shopping cart
            console.log(`Added ${productName} (${productPrice}) to cart`);
            
            // Show notification
            showNotification(`${productName} added to cart!`);
        });
    });
});

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4a7c59;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);


