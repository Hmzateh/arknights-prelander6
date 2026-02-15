// =============================================
// CONFIGURATION
// =============================================

const CONFIG = {
    ctaTexts: [
        "PLAY NOW",
        "CLAIM 135 PULLS"
    ],
    ctaLink: "http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=22457"
};

// =============================================
// APPLICATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    const ctaBtn = document.querySelector('.cta-button');
    const ctaTextEl = ctaBtn.querySelector('.cta-text');
    
    // Set link
    ctaBtn.href = CONFIG.ctaLink;
    
    // CTA text rotation
    let ctaIndex = 0;
    ctaTextEl.textContent = CONFIG.ctaTexts[0];
    
    setInterval(() => {
        ctaTextEl.style.opacity = '0';
        ctaTextEl.style.transition = 'opacity 0.15s ease';
        setTimeout(() => {
            ctaIndex = (ctaIndex + 1) % CONFIG.ctaTexts.length;
            ctaTextEl.textContent = CONFIG.ctaTexts[ctaIndex];
            ctaTextEl.style.opacity = '1';
        }, 150);
    }, 2500);
});
