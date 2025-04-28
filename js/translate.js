// DOM Elements
const sourceText = document.getElementById('sourceText');
const targetText = document.getElementById('targetText');
const translateBtn = document.getElementById('translateBtn');
const swapLanguagesBtn = document.getElementById('swapLanguagesBtn');
const sourceLang = document.getElementById('sourceLang');
const targetLang = document.getElementById('targetLang');


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Çeviri fonksiyonu
async function translateText(text, from, to) {
    const API_URL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
    
    try {
        // Yükleniyor durumunu göster
        document.getElementById('loadingSpinner').style.display = 'block';
        
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Yükleniyor durumunu gizle
        document.getElementById('loadingSpinner').style.display = 'none';
        
        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        } else {
            throw new Error('Çeviri yapılamadı');
        }
    } catch (error) {
        console.error('Çeviri hatası:', error);
        document.getElementById('loadingSpinner').style.display = 'none';
        throw error;
    }
}

// Event listener'ları
translateBtn.addEventListener('click', async function() {
    try {
        const text = sourceText.value;
        if (!text) {
            alert('Lütfen çevrilecek metin girin');
            return;
        }

        const translatedText = await translateText(
            text,
            sourceLang.value,
            targetLang.value
        );

        targetText.value = translatedText;
    } catch (error) {
        alert('Çeviri sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    }
});

// Dil değiştirme fonksiyonu
swapLanguagesBtn.addEventListener('click', function() {
    const tempLang = sourceLang.value;
    sourceLang.value = targetLang.value;
    targetLang.value = tempLang;

    const tempText = sourceText.value;
    sourceText.value = targetText.value;
    targetText.value = tempText;
});

// Otomatik çeviri için debounce fonksiyonu
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Otomatik çeviri için event listener
sourceText.addEventListener('input', debounce(async function() {
    if (sourceText.value.trim()) {
        try {
            const translatedText = await translateText(
                sourceText.value,
                sourceLang.value,
                targetLang.value
            );
            targetText.value = translatedText;
        } catch (error) {
            console.error('Otomatik çeviri hatası:', error);
        }
    }
}, 1000));

// Kopyalama butonu ekle
const copyBtn = document.createElement('button');
copyBtn.className = 'copy-btn';
copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
copyBtn.title = 'Çeviriyi Kopyala';
copyBtn.style.cssText = `
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: var(--gradient-1);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    z-index: 10;
`;

// Kopyalama butonunu text-areas div'ine ekle
const textAreas = document.querySelector('.text-areas');
textAreas.style.position = 'relative';
textAreas.appendChild(copyBtn);

copyBtn.addEventListener('click', () => {
    const text = targetText.value;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
            }, 2000);
        });
    }
});

// Mobil cihazlar için optimizasyon
if (window.innerWidth < 768) {
    sourceText.style.height = '150px';
    targetText.style.height = '150px';
}

// Performans optimizasyonu
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.feature').forEach(feature => {
    observer.observe(feature);
}); 