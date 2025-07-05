// ==========================================
// PARALLAX SCROLLING IMPLEMENTATION
// ==========================================

// 1. ADD TO YOUR animations.js FILE (or create parallax.js)

// Parallax effect handler
function initParallax() {
    // Get all parallax elements
    const parallaxElements = document.querySelectorAll('.parallax');
    const parallaxBg = document.querySelectorAll('.parallax-bg');
    const parallaxText = document.querySelectorAll('.parallax-text');
    
    // Parallax on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Standard parallax elements (move slower than scroll)
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Background parallax (move slower)
        parallaxBg.forEach(element => {
            const speed = element.dataset.speed || 0.3;
            const yPos = scrolled * speed;
            element.style.backgroundPosition = `center ${yPos}px`;
        });
        
        // Text parallax (slight movement)
        parallaxText.forEach(element => {
            const speed = element.dataset.speed || 0.2;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Parallax with fade effect
        document.querySelectorAll('.parallax-fade').forEach(element => {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Calculate opacity based on scroll position
            const scrollPercent = (scrolled - elementTop + windowHeight) / (windowHeight + elementHeight);
            const opacity = Math.min(Math.max(scrollPercent, 0), 1);
            
            element.style.opacity = opacity;
            element.style.transform = `translateY(${(1 - opacity) * 50}px)`;
        });
    });
}

// Advanced parallax with multiple layers
function initLayeredParallax() {
    const layers = document.querySelectorAll('.parallax-layer');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        layers.forEach((layer, index) => {
            const speed = 0.5 + (index * 0.2); // Different speed for each layer
            const yPos = -(scrolled * speed);
            const scale = 1 + (scrolled * 0.0001); // Slight zoom effect
            
            layer.style.transform = `translateY(${yPos}px) scale(${scale})`;
        });
    });
}

// Parallax mouse movement effect (for hero section)
function initMouseParallax() {
    const heroSection = document.querySelector('.hero');
    const parallaxMouse = document.querySelectorAll('.parallax-mouse');
    
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            parallaxMouse.forEach((element, index) => {
                const speed = (index + 1) * 2; // Different speed for each element
                const xPos = (x - centerX) / speed;
                const yPos = (y - centerY) / speed;
                
                element.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        });
    }
}

// Initialize all parallax effects
document.addEventListener('DOMContentLoaded', function() {
    initParallax();
    initLayeredParallax();
    initMouseParallax();
});

// Performance optimization with throttling
function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastExecTime > delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Add any additional scroll-based animations here
    const scrolled = window.pageYOffset;
    
    // Parallax for specific sections
    const heroContent = document.querySelector('.hero-content');
    const robotContainer = document.querySelector('.robot-container');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        if (robotContainer) {
            robotContainer.style.transform = `translateY(${scrolled * -0.2}px) rotate(${scrolled * 0.1}deg)`;
        }
    }
}, 16)); // 60fps
