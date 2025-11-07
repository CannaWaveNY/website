/**
 * E-commerce Integration Component for Green Valley Dispensary
 * 
 * This file contains reusable components and utilities for integrating
 * various e-commerce platforms into the dispensary website.
 * 
 * Supported Platforms:
 * - Shopify (Shopify Buy Button)
 * - Dutchie (Cannabis-specific e-commerce)
 * - Square Online
 * - WooCommerce
 * - Custom e-commerce solutions
 * 
 * @author Green Valley Dispensary Development Team
 * @version 1.0.0
 */

class EcommerceEmbed {
    constructor(config = {}) {
        this.config = {
            platform: config.platform || 'placeholder',
            storeUrl: config.storeUrl || '',
            apiKey: config.apiKey || '',
            containerId: config.containerId || 'ecommerce-embed-wrapper',
            height: config.height || '800px',
            width: config.width || '100%',
            loadingMessage: config.loadingMessage || 'Loading store...',
            errorMessage: config.errorMessage || 'Unable to load store. Please try again later.',
            ...config
        };
        
        this.container = document.getElementById(this.config.containerId);
        this.isLoaded = false;
        this.init();
    }

    /**
     * Initialize the e-commerce embed
     */
    init() {
        if (!this.container) {
            console.error('E-commerce container not found:', this.config.containerId);
            return;
        }

        this.showLoading();
        this.loadEcommercePlatform();
    }

    /**
     * Show loading state
     */
    showLoading() {
        this.container.innerHTML = `
            <div class="ecommerce-loading">
                <div class="loading-spinner"></div>
                <span>${this.config.loadingMessage}</span>
            </div>
        `;
    }

    /**
     * Show error state
     */
    showError(message = null) {
        this.container.innerHTML = `
            <div class="ecommerce-error">
                <div class="error-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <h3>Store Unavailable</h3>
                <p>${message || this.config.errorMessage}</p>
                <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 20px;">
                    Try Again
                </button>
            </div>
        `;
    }

    /**
     * Load the appropriate e-commerce platform
     */
    loadEcommercePlatform() {
        switch (this.config.platform.toLowerCase()) {
            case 'shopify':
                this.loadShopify();
                break;
            case 'dutchie':
                this.loadDutchie();
                break;
            case 'square':
                this.loadSquare();
                break;
            case 'woocommerce':
                this.loadWooCommerce();
                break;
            case 'custom':
                this.loadCustom();
                break;
            default:
                this.showPlaceholder();
        }
    }

    /**
     * Load Shopify integration
     * Example: new EcommerceEmbed({ platform: 'shopify', storeUrl: 'your-store.myshopify.com' })
     */
    loadShopify() {
        if (!this.config.storeUrl) {
            this.showError('Shopify store URL not configured');
            return;
        }

        const iframe = document.createElement('iframe');
        iframe.className = 'ecommerce-integration';
        iframe.src = `https://${this.config.storeUrl}/collections/all`;
        iframe.width = this.config.width;
        iframe.height = this.config.height;
        iframe.frameBorder = '0';
        iframe.allow = 'payment';
        
        iframe.onload = () => {
            this.isLoaded = true;
            console.log('Shopify store loaded successfully');
        };
        
        iframe.onerror = () => {
            this.showError('Failed to load Shopify store');
        };

        this.container.innerHTML = '';
        this.container.appendChild(iframe);
    }

    /**
     * Load Dutchie integration
     * Example: new EcommerceEmbed({ platform: 'dutchie', storeUrl: 'your-store-id' })
     */
    loadDutchie() {
        if (!this.config.storeUrl) {
            this.showError('Dutchie store ID not configured');
            return;
        }

        // Create script element for Dutchie
        const script = document.createElement('script');
        script.src = `https://dutchie.com/embedded-menu/${this.config.storeUrl}`;
        script.async = true;
        
        script.onload = () => {
            this.isLoaded = true;
            console.log('Dutchie store loaded successfully');
        };
        
        script.onerror = () => {
            this.showError('Failed to load Dutchie store');
        };

        this.container.innerHTML = '';
        this.container.appendChild(script);
    }

    /**
     * Load Square Online integration
     * Example: new EcommerceEmbed({ platform: 'square', storeUrl: 'your-store.square.site' })
     */
    loadSquare() {
        if (!this.config.storeUrl) {
            this.showError('Square store URL not configured');
            return;
        }

        const iframe = document.createElement('iframe');
        iframe.className = 'ecommerce-integration';
        iframe.src = `https://${this.config.storeUrl}`;
        iframe.width = this.config.width;
        iframe.height = this.config.height;
        iframe.frameBorder = '0';
        
        iframe.onload = () => {
            this.isLoaded = true;
            console.log('Square store loaded successfully');
        };
        
        iframe.onerror = () => {
            this.showError('Failed to load Square store');
        };

        this.container.innerHTML = '';
        this.container.appendChild(iframe);
    }

    /**
     * Load WooCommerce integration
     * Example: new EcommerceEmbed({ platform: 'woocommerce', storeUrl: 'your-store.com/shop' })
     */
    loadWooCommerce() {
        if (!this.config.storeUrl) {
            this.showError('WooCommerce store URL not configured');
            return;
        }

        const iframe = document.createElement('iframe');
        iframe.className = 'ecommerce-integration';
        iframe.src = this.config.storeUrl;
        iframe.width = this.config.width;
        iframe.height = this.config.height;
        iframe.frameBorder = '0';
        
        iframe.onload = () => {
            this.isLoaded = true;
            console.log('WooCommerce store loaded successfully');
        };
        
        iframe.onerror = () => {
            this.showError('Failed to load WooCommerce store');
        };

        this.container.innerHTML = '';
        this.container.appendChild(iframe);
    }

    /**
     * Load custom e-commerce solution
     * Example: new EcommerceEmbed({ platform: 'custom', storeUrl: 'your-custom-solution.com' })
     */
    loadCustom() {
        if (!this.config.storeUrl) {
            this.showError('Custom store URL not configured');
            return;
        }

        const iframe = document.createElement('iframe');
        iframe.className = 'ecommerce-integration';
        iframe.src = this.config.storeUrl;
        iframe.width = this.config.width;
        iframe.height = this.config.height;
        iframe.frameBorder = '0';
        
        iframe.onload = () => {
            this.isLoaded = true;
            console.log('Custom store loaded successfully');
        };
        
        iframe.onerror = () => {
            this.showError('Failed to load custom store');
        };

        this.container.innerHTML = '';
        this.container.appendChild(iframe);
    }

    /**
     * Show placeholder content (default state)
     */
    showPlaceholder() {
        this.container.innerHTML = `
            <div class="ecommerce-placeholder">
                <div class="placeholder-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3>Online Shopping Coming Soon</h3>
                <p>We're working on bringing you a seamless online shopping experience. In the meantime, please visit our dispensary or call us to place your order.</p>
                
                <div class="integration-notes">
                    <h4>🔧 Developer Integration Notes:</h4>
                    <p><strong>To integrate e-commerce:</strong></p>
                    <ol>
                        <li>Configure the EcommerceEmbed with your platform details</li>
                        <li>Update the platform, storeUrl, and other configuration options</li>
                        <li>Test the integration on desktop and mobile devices</li>
                        <li>Ensure checkout flow and payment processing work correctly</li>
                        <li>Add proper error handling for failed loads</li>
                    </ol>
                    <p><strong>Example usage:</strong></p>
                    <code>
                        new EcommerceEmbed({<br>
                        &nbsp;&nbsp;platform: 'shopify',<br>
                        &nbsp;&nbsp;storeUrl: 'your-store.myshopify.com'<br>
                        });
                    </code>
                </div>
            </div>
        `;
    }

    /**
     * Reload the e-commerce platform
     */
    reload() {
        this.isLoaded = false;
        this.init();
    }

    /**
     * Get current loading state
     */
    getLoadingState() {
        return {
            isLoaded: this.isLoaded,
            platform: this.config.platform,
            storeUrl: this.config.storeUrl
        };
    }
}

/**
 * Utility functions for e-commerce integration
 */
const EcommerceUtils = {
    /**
     * Check if the current device is mobile
     */
    isMobile() {
        return window.innerWidth <= 768;
    },

    /**
     * Adjust iframe height based on content
     */
    adjustIframeHeight(iframe, minHeight = 600) {
        if (iframe && iframe.contentWindow) {
            try {
                const height = iframe.contentWindow.document.body.scrollHeight;
                iframe.style.height = Math.max(height, minHeight) + 'px';
            } catch (e) {
                console.warn('Cannot access iframe content for height adjustment');
            }
        }
    },

    /**
     * Handle cross-origin iframe messages
     */
    setupMessageHandler(callback) {
        window.addEventListener('message', (event) => {
            // Verify origin for security
            if (event.origin !== window.location.origin) {
                return;
            }
            
            if (callback && typeof callback === 'function') {
                callback(event.data);
            }
        });
    },

    /**
     * Validate e-commerce configuration
     */
    validateConfig(config) {
        const required = ['platform', 'storeUrl'];
        const missing = required.filter(field => !config[field]);
        
        if (missing.length > 0) {
            throw new Error(`Missing required configuration: ${missing.join(', ')}`);
        }
        
        return true;
    }
};

/**
 * Auto-initialize e-commerce embed when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the shop page
    if (window.location.pathname.includes('shop.html')) {
        // Configuration object - UPDATE THESE VALUES FOR YOUR E-COMMERCE PLATFORM
        const ecommerceConfig = {
            platform: 'placeholder', // Change to: 'shopify', 'dutchie', 'square', 'woocommerce', or 'custom'
            storeUrl: '', // Your store URL or ID
            apiKey: '', // API key if required
            containerId: 'ecommerce-embed-wrapper',
            height: '800px',
            width: '100%',
            loadingMessage: 'Loading our online store...',
            errorMessage: 'Unable to load our online store. Please try again later or call us at (303) 555-0123.'
        };

        try {
            // Initialize the e-commerce embed
            window.ecommerceEmbed = new EcommerceEmbed(ecommerceConfig);
            
            // Setup message handler for iframe communication
            EcommerceUtils.setupMessageHandler((data) => {
                console.log('E-commerce message received:', data);
                // Handle messages from the e-commerce platform
            });
            
        } catch (error) {
            console.error('Failed to initialize e-commerce embed:', error);
        }
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EcommerceEmbed, EcommerceUtils };
}
