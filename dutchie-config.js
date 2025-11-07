// Dutchie E-commerce Configuration
// Update this file with your actual Dutchie dispensary ID

window.dutchieConfig = {
    // Replace 'YOUR_DUTCHIE_URL_HERE' with your actual Dutchie dispensary ID
    // Example: 'cannawave-albion' or 'your-dispensary-id'
    dispensaryId: '6903f27c6cb62f7bae97f173',
    
    // Theme options: 'light' or 'dark'
    theme: 'light',
    
    // Show/hide header and footer
    showHeader: true,
    showFooter: true,
    
    // Additional Dutchie options
    options: {
        // Enable full screen mode for shop page
        fullScreen: true,
        
        // Custom styling
        customCSS: `
            .dutchie-container {
                border-radius: 12px;
                overflow: hidden;
            }
        `
    }
};

// Instructions for updating:
// 1. Replace 'YOUR_DUTCHIE_URL_HERE' with your actual Dutchie dispensary ID
// 2. Save this file
// 3. The changes will automatically apply to all pages
// 4. Test the integration on both desktop and mobile devices

// Example usage in HTML:
// <script src="dutchie-config.js"></script>
// <script src="https://embed.dutchie.com/menu.js" defer></script>
