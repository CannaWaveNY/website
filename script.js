// Age Gate Functionality
document.addEventListener('DOMContentLoaded', function() {
    const ageGate = document.getElementById('ageGate');
    const mainContent = document.getElementById('mainContent');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Check if user has already verified age
    const ageVerified = localStorage.getItem('ageVerified');
    
    if (ageVerified === 'true') {
        ageGate.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // Handle age verification
    yesBtn.addEventListener('click', function() {
        localStorage.setItem('ageVerified', 'true');
        ageGate.style.display = 'none';
        mainContent.style.display = 'block';
    });

    noBtn.addEventListener('click', function() {
        alert('You must be 21 or older to access this website.');
        window.location.href = 'https://www.google.com';
    });
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for sticky header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Here you would typically send the email to your server
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// Add animation to category cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Get Directions Button
document.addEventListener('DOMContentLoaded', function() {
    const directionsBtn = document.querySelector('.contact .btn-primary');
    
    if (directionsBtn) {
        directionsBtn.addEventListener('click', function() {
            // Replace with actual dispensary address
            const address = '1234 Cannabis Street, Denver, Colorado 80202';
            const encodedAddress = encodeURIComponent(address);
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
            
            window.open(mapsUrl, '_blank');
        });
    }
});

// Shop Now Button Actions
document.addEventListener('DOMContentLoaded', function() {
    const shopNowBtns = document.querySelectorAll('.btn-primary');
    
    shopNowBtns.forEach(btn => {
        if (btn.textContent.includes('Shop Now') || btn.textContent.includes('Shop')) {
            btn.addEventListener('click', function() {
                // Redirect to shop page
                window.location.href = 'shop.html';
            });
        }
    });
});

// Category Button Actions - Navigate to products page with specific category
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-card .btn-outline');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryCard = this.closest('.category-card');
            const categoryTitle = categoryCard.querySelector('h3').textContent.toLowerCase();
            
            // Map category titles to data-category values
            const categoryMap = {
                'flower': 'flower',
                'pre-rolls': 'prerolls',
                'extracts': 'extracts',
                'vapes': 'vapes',
                'edibles': 'edibles',
                'drinks': 'drinks'
            };
            
            const category = categoryMap[categoryTitle] || 'all';
            
            // Navigate to shop page with category parameter
            window.location.href = `shop.html?category=${category}`;
        });
    });
});

// Footer Link Actions
document.addEventListener('DOMContentLoaded', function() {
    // Privacy Policy link
    const privacyLinks = document.querySelectorAll('a[href="#"]');
    privacyLinks.forEach(link => {
        if (link.textContent.includes('Privacy Policy')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showComingSoon('Privacy Policy');
            });
        }
        
        if (link.textContent.includes('Terms of Service')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showComingSoon('Terms of Service');
            });
        }
    });
});

// Coming Soon notification function
function showComingSoon(feature) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `${feature} page coming soon!`;
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
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}


