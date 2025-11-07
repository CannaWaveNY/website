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
        header.style.background = 'rgba(27, 31, 36, 0.95)';
        header.style.backdropFilter = 'blur(8px)';
    } else {
        header.style.background = '#1b1f24';
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

// Get Directions Button - FORCE UPDATE: 172 South Main Street, Albion, NY 14411, USA
(function() {
    'use strict';
    
    function setupDirectionsButton() {
        const directionsBtn = document.getElementById('getDirectionsBtn');
        
        if (!directionsBtn) {
            return;
        }
        
        // Get address from data attribute or use default
        const address = directionsBtn.getAttribute('data-address') || '172 South Main Street, Albion, NY 14411, USA';
        
        // Remove ALL existing event listeners by replacing the button
        const parent = directionsBtn.parentNode;
        const newBtn = document.createElement('button');
        newBtn.className = directionsBtn.className;
        newBtn.id = directionsBtn.id;
        newBtn.setAttribute('data-address', address);
        newBtn.textContent = directionsBtn.textContent;
        
        // Add the new event listener
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Use address from data attribute
            const btnAddress = this.getAttribute('data-address') || '172 South Main Street, Albion, NY 14411, USA';
            console.log('Get Directions clicked - Address:', btnAddress);
            
            const encodedAddress = encodeURIComponent(btnAddress);
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
            
            window.open(mapsUrl, '_blank');
            return false;
        }, true); // Use capture phase to ensure it fires first
        
        // Replace the old button
        parent.replaceChild(newBtn, directionsBtn);
        
        console.log('Directions button initialized with address:', address);
    }
    
    // Run immediately and also on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupDirectionsButton);
    } else {
        setupDirectionsButton();
    }
    
    // Also run after a short delay to catch any late-loading scripts
    setTimeout(setupDirectionsButton, 100);
    setTimeout(setupDirectionsButton, 500);
})();

// Shop Now Button Actions
document.addEventListener('DOMContentLoaded', function() {
    const shopNowBtns = document.querySelectorAll('.btn-primary');
    
    shopNowBtns.forEach(btn => {
        // Skip the Get Directions button
        if (btn.id === 'getDirectionsBtn') {
            return;
        }
        
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

// Dutchie E-commerce Integration
document.addEventListener('DOMContentLoaded', function() {
    const openDutchieMenuBtn = document.getElementById('openDutchieMenu');
    const openDutchieOrderBtn = document.getElementById('openDutchieOrder');
    const closeDutchieMenuBtn = document.getElementById('closeDutchieMenu');
    const dutchieMenuSection = document.getElementById('dutchie-menu');
    const dutchieMenuEmbed = document.getElementById('dutchie-menu-embed');
    
    let dutchieInitialized = false;

    // Open Dutchie menu
    if (openDutchieMenuBtn) {
        openDutchieMenuBtn.addEventListener('click', function() {
            showDutchieMenu();
        });
    }

    // Open Dutchie order (direct to checkout)
    if (openDutchieOrderBtn) {
        openDutchieOrderBtn.addEventListener('click', function() {
            openDutchieOrder();
        });
    }

    // Close Dutchie menu
    if (closeDutchieMenuBtn) {
        closeDutchieMenuBtn.addEventListener('click', function() {
            hideDutchieMenu();
        });
    }

    function showDutchieMenu() {
        if (dutchieMenuSection) {
            dutchieMenuSection.style.display = 'block';
            dutchieMenuSection.scrollIntoView({ behavior: 'smooth' });
            
            // Initialize Dutchie if not already done
            if (!dutchieInitialized) {
                initializeDutchie();
            }
        }
    }

    function hideDutchieMenu() {
        if (dutchieMenuSection) {
            dutchieMenuSection.style.display = 'none';
        }
    }

    function openDutchieOrder() {
        // This will redirect to Dutchie's order page
        const dutchieUrl = window.dutchieConfig?.dispensaryId || '6903f27c6cb62f7bae97f173';
        if (dutchieUrl && dutchieUrl !== 'YOUR_DUTCHIE_URL_HERE') {
            window.open(`https://dutchie.com/dispensary/${dutchieUrl}`, '_blank');
        } else {
            alert('Dutchie integration not configured. Please contact us to place an order.');
        }
    }

    function initializeDutchie() {
        const dutchieUrl = window.dutchieConfig?.dispensaryId || '6903f27c6cb62f7bae97f173';
        
        if (!dutchieUrl || dutchieUrl === 'YOUR_DUTCHIE_URL_HERE') {
            // Show placeholder if Dutchie not configured
            showDutchiePlaceholder();
            return;
        }

        try {
            // The embed script is self-contained and should auto-inject
            // Check if the embed script has already created content
            const embedScript = document.getElementById('dutchie--embed__script');
            
            if (embedScript) {
                // Wait for the script to load and check for Dutchie content
                embedScript.addEventListener('load', function() {
                    // Give it a moment to render
                    setTimeout(function() {
                        checkDutchieContent();
                    }, 2000);
                });
                
                // If script already loaded, check immediately
                if (embedScript.complete || embedScript.readyState === 'complete') {
                    setTimeout(function() {
                        checkDutchieContent();
                    }, 1000);
                }
            } else {
                // Fallback: create iframe embed
                createDutchieIframe(dutchieUrl);
            }
            
            // Also check if Dutchie constructor API is available
            if (typeof window.Dutchie !== 'undefined') {
                try {
                    const dutchieEmbed = new window.Dutchie({
                        dispensaryId: dutchieUrl,
                        container: dutchieMenuEmbed,
                        theme: 'light',
                        showHeader: true,
                        showFooter: true
                    });
                    dutchieInitialized = true;
                    return;
                } catch (e) {
                    console.log('Dutchie constructor not available, using embed script');
                }
            }
        } catch (error) {
            console.error('Error initializing Dutchie:', error);
            showDutchiePlaceholder();
        }
    }
    
    function checkDutchieContent() {
        // Check if Dutchie content has been injected into the page
        const dutchieElements = document.querySelectorAll('[id*="dutchie"], [class*="dutchie"], [data-dutchie]');
        if (dutchieElements.length === 0) {
            // If no Dutchie content found, try iframe fallback
            const dutchieUrl = window.dutchieConfig?.dispensaryId || '6903f27c6cb62f7bae97f173';
            createDutchieIframe(dutchieUrl);
        } else {
            // Clear placeholder since Dutchie content is present
            const placeholder = dutchieMenuEmbed.querySelector('.dutchie-placeholder');
            if (placeholder && dutchieElements.length > 0) {
                placeholder.style.display = 'none';
            }
            dutchieInitialized = true;
        }
    }

    function createDutchieIframe(dutchieUrl) {
        // Clear placeholder first
        const placeholder = dutchieMenuEmbed.querySelector('.dutchie-placeholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
        
        const iframe = document.createElement('iframe');
        iframe.src = `https://dutchie.com/dispensary/${dutchieUrl}`;
        iframe.style.width = '100%';
        iframe.style.height = '800px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        iframe.title = 'CannaWave Menu';
        iframe.loading = 'lazy';
        iframe.allow = 'payment';
        
        // Handle iframe load errors
        iframe.onerror = function() {
            showDutchiePlaceholder();
            console.error('Failed to load Dutchie iframe');
        };
        
        // Add iframe to container
        dutchieMenuEmbed.appendChild(iframe);
        
        dutchieInitialized = true;
    }

    function showDutchiePlaceholder() {
        const placeholder = document.createElement('div');
        placeholder.className = 'dutchie-placeholder';
        placeholder.innerHTML = `
            <div class="placeholder-content">
                <i class="fas fa-shopping-basket" style="font-size: 3rem; color: #4a7c59; margin-bottom: 20px;"></i>
                <h3>Menu Coming Soon</h3>
                <p>Our online ordering system is being set up. Please call us at (585) 555-0123 to place your order.</p>
                <a href="tel:5855550123" class="btn btn-primary">Call to Order</a>
            </div>
        `;
        
        dutchieMenuEmbed.innerHTML = '';
        dutchieMenuEmbed.appendChild(placeholder);
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (dutchieMenuSection && dutchieMenuSection.style.display === 'block') {
            if (!dutchieMenuSection.contains(e.target) && !openDutchieMenuBtn.contains(e.target)) {
                hideDutchieMenu();
            }
        }
    });
});


