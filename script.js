/* ============================================
   Wedding Invitation - Enhanced Script
   Premium Animations & Transitions
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Start page loader
    initPageLoader();
    
    // Create visual effects
    createCSSLanterns();
    createSparkles();
    createFallingPetals();
    
    // Initialize animations
    initScrollReveal();
    initTempleParallax();
    initScrollHintHide();
    
    // Add glow pulse to names after initial reveal
    addPostRevealEffects();
});

/* ============================================
   Page Loader
   ============================================ */
function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    
    // Prevent scroll while loading
    document.body.style.overflow = 'hidden';
    
    // Wait for fonts and assets, then reveal
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('loaded');
            document.body.style.overflow = '';
            
            // Remove loader from DOM after transition
            setTimeout(() => {
                loader.remove();
            }, 1200);
        }, 800);
    });
    
    // Fallback: remove loader after 4 seconds max
    setTimeout(() => {
        if (!loader.classList.contains('loaded')) {
            loader.classList.add('loaded');
            document.body.style.overflow = '';
            setTimeout(() => loader.remove(), 1200);
        }
    }, 4000);
}

/* ============================================
   CSS Lanterns (no images needed)
   ============================================ */
function createCSSLanterns() {
    const container = document.getElementById('lanternsContainer');
    
    const lanternConfigs = [
        { x: 5,  y: 8,   size: 40, delay: 0,  dur: 18, opacity: 0.85 },
        { x: 20, y: 28,  size: 30, delay: 2,  dur: 22, opacity: 0.7 },
        { x: 78, y: 5,   size: 45, delay: 1,  dur: 20, opacity: 0.9 },
        { x: 65, y: 18,  size: 32, delay: 3,  dur: 24, opacity: 0.65 },
        { x: 38, y: 3,   size: 35, delay: 5,  dur: 19, opacity: 0.75 },
        { x: 55, y: 30,  size: 28, delay: 7,  dur: 21, opacity: 0.6 },
        { x: 85, y: 15,  size: 42, delay: 4,  dur: 17, opacity: 0.8 },
        { x: 10, y: 38,  size: 30, delay: 6,  dur: 23, opacity: 0.55 },
        { x: 72, y: 35,  size: 38, delay: 8,  dur: 16, opacity: 0.75 },
        { x: 45, y: 42,  size: 25, delay: 10, dur: 25, opacity: 0.6 },
        { x: 90, y: 25,  size: 34, delay: 12, dur: 20, opacity: 0.7 },
        { x: 28, y: 45,  size: 36, delay: 9,  dur: 22, opacity: 0.6 },
        { x: 15, y: 15,  size: 33, delay: 11, dur: 19, opacity: 0.72 },
        { x: 60, y: 10,  size: 38, delay: 14, dur: 21, opacity: 0.68 },
    ];

    lanternConfigs.forEach((config, index) => {
        const lantern = document.createElement('div');
        lantern.className = 'css-lantern';
        lantern.style.left = config.x + '%';
        lantern.style.top = config.y + '%';
        lantern.style.width = config.size + 'px';
        lantern.style.height = (config.size * 1.3) + 'px';
        
        const body = document.createElement('div');
        body.className = 'lantern-body';
        body.style.animationDelay = (config.delay * 0.7) + 's';
        lantern.appendChild(body);
        
        // Unique float animation
        const swayX = (Math.random() - 0.5) * 30;
        const swayX2 = (Math.random() - 0.5) * 25;
        const swayX3 = (Math.random() - 0.5) * 20;
        const floatY = -(60 + Math.random() * 100);
        const animName = `lanternFloat${index}`;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${animName} {
                0%   { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
                10%  { opacity: ${config.opacity}; }
                25%  { transform: translateY(${floatY * 0.25}px) translateX(${swayX}px) rotate(${(Math.random() - 0.5) * 8}deg); }
                50%  { transform: translateY(${floatY * 0.5}px) translateX(${swayX2}px) rotate(${(Math.random() - 0.5) * 6}deg); }
                75%  { transform: translateY(${floatY * 0.75}px) translateX(${swayX3}px) rotate(${(Math.random() - 0.5) * 5}deg); }
                90%  { opacity: ${config.opacity}; }
                100% { transform: translateY(${floatY}px) translateX(${(Math.random() - 0.5) * 15}px) rotate(${(Math.random() - 0.5) * 4}deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        lantern.style.animation = `${animName} ${config.dur}s linear ${config.delay}s infinite`;
        
        container.appendChild(lantern);
    });
}

/* ============================================
   Sparkle Particles
   ============================================ */
function createSparkles() {
    const container = document.getElementById('sparkles');
    const sparkleCount = 30;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = (Math.random() * 70 + 5) + '%';
        
        const size = Math.random() * 3 + 1;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        sparkle.style.animationDuration = (Math.random() * 4 + 3) + 's';
        sparkle.style.animationDelay = (Math.random() * 8) + 's';
        
        container.appendChild(sparkle);
    }
}

/* ============================================
   Falling Flower Petals
   ============================================ */
function createFallingPetals() {
    const container = document.getElementById('petalsContainer');
    const petalCount = 20;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Randomize position
        petal.style.left = Math.random() * 100 + '%';
        
        // Randomize size (6-16px)
        const size = Math.random() * 10 + 6;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        // Randomize animation
        const duration = Math.random() * 8 + 8; // 8-16s
        const delay = Math.random() * 15; // stagger start
        
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        
        // Unique sway per petal
        const swayAmount = (Math.random() - 0.5) * 80;
        const rotateExtra = Math.random() * 360;
        const petalAnim = `petalDrift${i}`;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${petalAnim} {
                0% {
                    opacity: 0;
                    transform: translateY(-20px) rotate(0deg) translateX(0);
                }
                10% {
                    opacity: 0.7;
                }
                25% {
                    transform: translateY(25vh) rotate(${90 + rotateExtra * 0.25}deg) translateX(${swayAmount * 0.5}px);
                }
                50% {
                    transform: translateY(50vh) rotate(${180 + rotateExtra * 0.5}deg) translateX(${-swayAmount * 0.3}px);
                    opacity: 0.6;
                }
                75% {
                    transform: translateY(75vh) rotate(${270 + rotateExtra * 0.75}deg) translateX(${swayAmount * 0.4}px);
                }
                90% {
                    opacity: 0.4;
                }
                100% {
                    opacity: 0;
                    transform: translateY(105vh) rotate(${360 + rotateExtra}deg) translateX(${-swayAmount * 0.2}px);
                }
            }
        `;
        document.head.appendChild(style);
        
        petal.style.animationName = petalAnim;
        container.appendChild(petal);
    }
}

/* ============================================
   Advanced Scroll-Triggered Reveals
   (Intersection Observer with stagger)
   ============================================ */
function initScrollReveal() {
    // Select all elements with data-reveal attribute
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // For couple names: add glow animation class
                if (entry.target.classList.contains('couple-name-script')) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, 1200);
                }
                
                // For ampersand: add spin reveal
                if (entry.target.classList.contains('ampersand')) {
                    entry.target.classList.add('revealed');
                }
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}


/* ============================================
   Simple Temple Parallax
   ============================================ */
function initTempleParallax() {
    const templeContainer = document.getElementById('templeContainer');
    if (!templeContainer) return;

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                // Move the temple slightly downwards to create a slow slide up effect relative to the background
                templeContainer.style.transform = `translateY(${scrollY * 0.4}px)`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ============================================
   Scroll Hint Auto-hide
   ============================================ */
function initScrollHintHide() {
    const scrollHint = document.getElementById('scrollHint');
    
    window.addEventListener('scroll', function() {
        if (scrollHint && window.scrollY > 50) {
            scrollHint.style.opacity = '0';
        }
    }, { passive: true });
}

/* ============================================
   Post-Reveal Effects
   (Glow pulse on names after initial reveal)
   ============================================ */
function addPostRevealEffects() {
    const groomName = document.getElementById('groomName');
    const brideName = document.getElementById('brideName');
    
    // Add glow pulse after name reveal animation completes
    setTimeout(() => {
        if (groomName) groomName.classList.add('revealed');
    }, 3500); // After nameReveal animation (1.2s delay + 1.8s duration)
    
    setTimeout(() => {
        if (brideName) brideName.classList.add('revealed');
    }, 4200); // After bride nameReveal animation (2s delay + 1.8s duration)
}
