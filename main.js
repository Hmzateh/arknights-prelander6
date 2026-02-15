// =============================================
// CONFIGURATION
// =============================================

const CONFIG = {
    ctaTexts: [
        "PLAY NOW",
        "DOWNLOAD FREE"
    ],
    ctaLink: "http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=22457"
};

// =============================================
// APPLICATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Swiper with coverflow effect
    const swiper = new Swiper(".scene-swiper", {
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.6,
        coverflowEffect: {
            rotate: 35,
            stretch: 150,
            depth: 400,
            modifier: 1,
            slideShadows: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                coverflowEffect: {
                    stretch: 50,
                    depth: 200,
                    rotate: 25,
                }
            },
            640: {
                slidesPerView: 1.4,
                coverflowEffect: {
                    stretch: 100,
                    depth: 300,
                    rotate: 30,
                }
            },
            1024: {
                slidesPerView: 1.6,
                coverflowEffect: {
                    stretch: 150,
                    depth: 400,
                    rotate: 35,
                }
            }
        }
    });
    
    // CTA Button
    const ctaBtn = document.querySelector('.cta-button');
    const ctaTextEl = ctaBtn.querySelector('.cta-text');
    
    ctaBtn.href = CONFIG.ctaLink;
    
    // CTA text rotation
    let ctaIndex = 0;
    ctaTextEl.textContent = CONFIG.ctaTexts[0];
    
    setInterval(() => {
        ctaTextEl.style.opacity = '0';
        setTimeout(() => {
            ctaIndex = (ctaIndex + 1) % CONFIG.ctaTexts.length;
            ctaTextEl.textContent = CONFIG.ctaTexts[ctaIndex];
            ctaTextEl.style.opacity = '1';
        }, 150);
    }, 2500);
});
