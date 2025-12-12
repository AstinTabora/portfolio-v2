document.addEventListener('DOMContentLoaded', () => {
    
    // --- SCROLL ANIMATION OBSERVER ---
    const observerOptions = {
        root: null, // viewport
        threshold: 0.15 // trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Target general sections
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- PARALLAX EFFECT FOR HERO (Optional Polish) ---
    const heroTitle = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        // Move text slightly slower than scroll to create depth
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            heroTitle.style.opacity = 1 - (scrollPosition / 700);
        }
    });

    console.log("Samuel Spenser Portfolio Loaded Successfully");
});