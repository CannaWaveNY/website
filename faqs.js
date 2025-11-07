// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-question i');
        
        // Initially hide all answers
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease-out';
        
        question.addEventListener('click', function() {
            const isOpen = answer.style.maxHeight !== '0px';
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    otherAnswer.style.maxHeight = '0';
                    otherIcon.style.transform = 'rotate(0deg)';
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isOpen) {
                answer.style.maxHeight = '0';
                icon.style.transform = 'rotate(0deg)';
                item.classList.remove('active');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
                item.classList.add('active');
            }
        });
    });
});

// Search functionality for FAQs
document.addEventListener('DOMContentLoaded', function() {
    // Add search input if it doesn't exist
    const faqsSection = document.querySelector('.faqs-section .container');
    const searchContainer = document.createElement('div');
    searchContainer.className = 'faq-search-container';
    searchContainer.innerHTML = `
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="faqSearch" placeholder="Search FAQs...">
        </div>
    `;
    
    faqsSection.insertBefore(searchContainer, faqsSection.querySelector('.faqs-container'));
    
    const searchInput = document.getElementById('faqSearch');
    const faqItems = document.querySelectorAll('.faq-item');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Add smooth scrolling for FAQ links
document.addEventListener('DOMContentLoaded', function() {
    const faqLinks = document.querySelectorAll('a[href^="#faq"]');
    
    faqLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Open the FAQ item
                const faqItem = targetElement.closest('.faq-item');
                if (faqItem) {
                    const question = faqItem.querySelector('.faq-question');
                    question.click();
                }
            }
        });
    });
});












