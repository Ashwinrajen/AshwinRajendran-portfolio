// ==========================================
// FORM HANDLER JAVASCRIPT
// ==========================================

// Handle contact form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Get submit button
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success state
            submitBtn.textContent = 'Message Sent! ✓';
            submitBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
            
            // Reset form
            this.reset();
            
            // Restore button after delay
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
            // Log form data (replace with actual submission)
            console.log('Form submitted with data:', data);
        }, 1500);
    });
}

// Add input validation feedback
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = 'var(--accent-color)';
        } else {
            this.style.borderColor = '';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-color)';
    });
});