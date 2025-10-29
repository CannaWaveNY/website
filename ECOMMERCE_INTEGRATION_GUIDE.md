# E-commerce Integration Guide for Green Valley Dispensary

## 🛒 Overview

This guide explains how to integrate various e-commerce platforms into the Green Valley Dispensary website. The system is designed to be flexible and support multiple e-commerce solutions commonly used in the cannabis industry.

## 📁 File Structure

```
├── shop.html                 # Main e-commerce page
├── shop-embed.js            # Reusable e-commerce component
├── products-shop.html       # Product browsing page (renamed from shop.html)
├── ECOMMERCE_INTEGRATION_GUIDE.md  # This documentation
└── styles.css               # Contains e-commerce specific styles
```

## 🎯 Supported Platforms

### 1. **Shopify** (Recommended for Cannabis)
- **Best for**: Established businesses with existing Shopify stores
- **Features**: Full e-commerce functionality, payment processing, inventory management
- **Integration**: Shopify Buy Button or embedded store

### 2. **Dutchie** (Cannabis-Specific)
- **Best for**: Cannabis dispensaries specifically
- **Features**: Cannabis-compliant, age verification, local delivery
- **Integration**: Dutchie embedded menu

### 3. **Square Online**
- **Best for**: Businesses already using Square POS
- **Features**: Integrated with Square POS, payment processing
- **Integration**: Square Online store iframe

### 4. **WooCommerce**
- **Best for**: WordPress-based solutions
- **Features**: Full e-commerce with WordPress integration
- **Integration**: WooCommerce store iframe

### 5. **Custom Solutions**
- **Best for**: Proprietary e-commerce systems
- **Features**: Fully customizable
- **Integration**: Custom iframe or script integration

## 🚀 Quick Start

### Step 1: Configure the E-commerce Platform

Edit the configuration in `shop-embed.js`:

```javascript
const ecommerceConfig = {
    platform: 'shopify',           // Change to your platform
    storeUrl: 'your-store.myshopify.com',  // Your store URL
    apiKey: 'your-api-key',        // API key if required
    containerId: 'ecommerce-embed-wrapper',
    height: '800px',
    width: '100%',
    loadingMessage: 'Loading our online store...',
    errorMessage: 'Unable to load our online store. Please try again later or call us at (303) 555-0123.'
};
```

### Step 2: Platform-Specific Setup

#### For Shopify:
```javascript
new EcommerceEmbed({
    platform: 'shopify',
    storeUrl: 'your-store.myshopify.com'
});
```

#### For Dutchie:
```javascript
new EcommerceEmbed({
    platform: 'dutchie',
    storeUrl: 'your-dutchie-store-id'
});
```

#### For Square Online:
```javascript
new EcommerceEmbed({
    platform: 'square',
    storeUrl: 'your-store.square.site'
});
```

#### For WooCommerce:
```javascript
new EcommerceEmbed({
    platform: 'woocommerce',
    storeUrl: 'https://your-store.com/shop'
});
```

## 🔧 Implementation Examples

### Example 1: Shopify Integration

```html
<!-- In shop.html, replace the placeholder with: -->
<div class="ecommerce-embed-wrapper">
    <iframe class="ecommerce-integration" 
            src="https://your-store.myshopify.com/collections/all"
            width="100%" 
            height="800">
    </iframe>
</div>
```

### Example 2: Dutchie Integration

```html
<!-- In shop.html, replace the placeholder with: -->
<div class="ecommerce-embed-wrapper">
    <script src="https://dutchie.com/embedded-menu/your-store-id"></script>
</div>
```

### Example 3: Square Online Integration

```html
<!-- In shop.html, replace the placeholder with: -->
<div class="ecommerce-embed-wrapper">
    <iframe class="ecommerce-integration"
            src="https://your-store.square.site"
            width="100%"
            height="800">
    </iframe>
</div>
```

## 📱 Responsive Design

The e-commerce integration is fully responsive and includes:

- **Desktop**: Full-width iframe with optimal height
- **Tablet**: Adjusted spacing and sizing
- **Mobile**: Stacked layout with touch-friendly controls

### Mobile-Specific Features:
- Touch-optimized interface
- Swipe gestures support
- Optimized loading times
- Mobile payment integration

## 🎨 Styling Customization

### CSS Classes Available:

```css
.ecommerce-container          # Main container
.ecommerce-embed-wrapper      # Iframe wrapper
.ecommerce-integration        # Iframe element
.ecommerce-placeholder        # Placeholder content
.ecommerce-loading           # Loading state
.ecommerce-error             # Error state
```

### Custom Styling Example:

```css
/* Customize the e-commerce container */
.ecommerce-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
    background: white;
}

/* Customize the iframe */
.ecommerce-integration {
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

## 🔒 Security Considerations

### Iframe Security:
- All iframes include `sandbox` attributes where appropriate
- Cross-origin restrictions are respected
- Payment data is handled by the e-commerce platform

### Content Security Policy (CSP):
Add to your HTML head if needed:
```html
<meta http-equiv="Content-Security-Policy" 
      content="frame-src 'self' https://*.myshopify.com https://*.dutchie.com https://*.square.site;">
```

## 🧪 Testing Checklist

### Desktop Testing:
- [ ] E-commerce iframe loads correctly
- [ ] Navigation works within the iframe
- [ ] Checkout process completes successfully
- [ ] Payment processing works
- [ ] Mobile responsive design

### Mobile Testing:
- [ ] Touch interactions work properly
- [ ] Forms are mobile-friendly
- [ ] Payment methods are accessible
- [ ] Loading times are acceptable

### Cross-Browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## 🚨 Troubleshooting

### Common Issues:

#### 1. Iframe Not Loading
**Problem**: E-commerce iframe shows blank or error
**Solution**: 
- Check if the store URL is correct
- Verify the store is accessible
- Check browser console for errors
- Ensure proper HTTPS configuration

#### 2. Mobile Display Issues
**Problem**: E-commerce interface not mobile-friendly
**Solution**:
- Check if the e-commerce platform supports mobile
- Adjust iframe height for mobile devices
- Test touch interactions

#### 3. Payment Processing Errors
**Problem**: Checkout fails or payment doesn't process
**Solution**:
- Verify payment gateway configuration
- Check if the e-commerce platform supports your region
- Ensure proper SSL certificates

### Debug Mode:
Enable debug logging by adding to `shop-embed.js`:
```javascript
const ecommerceConfig = {
    // ... other config
    debug: true  // Enable debug logging
};
```

## 📞 Support

### For Technical Issues:
- Check browser console for error messages
- Verify e-commerce platform documentation
- Test with different browsers and devices

### For Platform-Specific Issues:
- **Shopify**: Contact Shopify support
- **Dutchie**: Contact Dutchie support
- **Square**: Contact Square support
- **WooCommerce**: Check WooCommerce documentation

## 🔄 Updates and Maintenance

### Regular Maintenance:
1. **Monthly**: Test all e-commerce functionality
2. **Quarterly**: Review and update platform integrations
3. **Annually**: Evaluate platform performance and costs

### Version Updates:
- Keep e-commerce platform integrations updated
- Test after any website updates
- Monitor for breaking changes in platform APIs

## 📊 Analytics Integration

### Google Analytics:
Add tracking to e-commerce events:
```javascript
// Track e-commerce events
gtag('event', 'purchase', {
    transaction_id: '12345',
    value: 25.42,
    currency: 'USD'
});
```

### Custom Analytics:
Monitor e-commerce performance:
- Conversion rates
- Average order value
- Popular products
- Cart abandonment rates

## 🎯 Best Practices

### 1. **User Experience**
- Keep the e-commerce interface consistent with your brand
- Ensure fast loading times
- Provide clear navigation
- Include search functionality

### 2. **Mobile Optimization**
- Test on real devices, not just browser dev tools
- Optimize for touch interactions
- Ensure forms are mobile-friendly
- Test payment flows on mobile

### 3. **Security**
- Use HTTPS for all e-commerce interactions
- Regularly update integrations
- Monitor for security vulnerabilities
- Implement proper error handling

### 4. **Performance**
- Optimize images and assets
- Use CDN for better loading times
- Monitor page load speeds
- Implement lazy loading where appropriate

## 📋 Implementation Checklist

### Pre-Implementation:
- [ ] Choose e-commerce platform
- [ ] Set up e-commerce store
- [ ] Configure payment processing
- [ ] Test platform functionality

### Implementation:
- [ ] Update configuration in `shop-embed.js`
- [ ] Test iframe integration
- [ ] Verify responsive design
- [ ] Test checkout process

### Post-Implementation:
- [ ] Monitor for errors
- [ ] Test on multiple devices
- [ ] Verify analytics tracking
- [ ] Train staff on new system

## 🎉 Success Metrics

### Key Performance Indicators (KPIs):
- **Conversion Rate**: % of visitors who make a purchase
- **Average Order Value**: Average amount per order
- **Cart Abandonment Rate**: % of carts abandoned
- **Mobile Conversion Rate**: % of mobile users who purchase
- **Page Load Time**: Time to load e-commerce interface

### Monitoring Tools:
- Google Analytics
- E-commerce platform analytics
- Custom tracking scripts
- User feedback and surveys

---

**Last Updated**: [Current Date]
**Version**: 1.0.0
**Maintained By**: Green Valley Dispensary Development Team
