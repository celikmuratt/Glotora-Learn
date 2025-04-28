// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Mobile menu toggle
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

// Word translation functionality
const modal = document.getElementById('wordModal');
const wordTitle = document.getElementById('wordTitle');
const wordTranslation = document.getElementById('wordTranslation');
const closeModal = document.querySelector('.close-modal');

// Dictionary for word translations
const wordTranslations = {
    'spent': 'harcadı',
    'years': 'yıllar',
    'studying': 'inceleyerek',
    'ancient': 'antik',
    'civilizations': 'uygarlıklar',
    'exploring': 'keşfederken',
    'forgotten': 'unutulmuş',
    'temple': 'tapınak',
    'egypt': 'mısır',
    'discovered': 'buldu',
    'mysterious': 'gizemli',
    'map': 'harita',
    'hidden': 'gizli',
    'behind': 'arkasında',
    'crumbling': 'çökmekte olan',
    'wall': 'duvar',
    'drawn': 'çizilmiş',
    'papyrus': 'papirüs',
    'covered': 'kaplı',
    'strange': 'garip',
    'symbols': 'semboller',
    'seemed': 'görünüyordu',
    'tell': 'anlatıyor',
    'story': 'hikaye',
    'treasure': 'hazine',
    'unlike': 'benzemeyen',
    'writing': 'yazı',
    'system': 'sistem',
    'seen': 'görülmüş',
    'months': 'aylar',
    'decoding': 'çözerek',
    'text': 'metin',
    'using': 'kullanarak',
    'knowledge': 'bilgi',
    'various': 'çeşitli',
    'languages': 'diller',
    'consulting': 'görüşerek',
    'experts': 'uzmanlar',
    'worldwide': 'dünya çapında',
    'finally': 'sonunda',
    'cracked': 'çözdü',
    'code': 'kod',
    'led': 'götürüyordu',
    'remote': 'uzak',
    'island': 'ada',
    'pacific': 'pasifik',
    'ocean': 'okyanus',
    'organized': 'kurdu',
    'expedition': 'keşif',
    'team': 'ekip',
    'archaeologists': 'arkeologlar',
    'adventurers': 'maceracılar',
    'faced': 'karşılaştı',
    'dangerous': 'tehlikeli',
    'storms': 'fırtınalar',
    'treacherous': 'tehlikeli',
    'waters': 'sular',
    'reach': 'ulaşmak',
    'found': 'buldular',
    'ruins': 'kalıntılar',
    'following': 'takip ederek',
    'instructions': 'talimatlar',
    'navigated': 'geçtiler',
    'through': 'boyunca',
    'dark': 'karanlık',
    'caves': 'mağaralar',
    'avoided': 'kaçındılar',
    'deadly': 'ölümcül',
    'traps': 'tuzaklar',
    'journey': 'yolculuk',
    'filled': 'doluydu',
    'excitement': 'heyecan',
    'danger': 'tehlike',
    'last': 'sonunda',
    'reached': 'ulaştılar',
    'chamber': 'oda',
    'inside': 'içeride',
    'discovered': 'buldular',
    'gold': 'altın',
    'jewels': 'mücevherler',
    'artifacts': 'eserler',
    'change': 'değiştirecek',
    'understanding': 'anlayış',
    'human': 'insan',
    'history': 'tarih',
    'discovery': 'keşif',
    'became': 'haline geldi',
    'significant': 'önemli',
    'archaeological': 'arkeolojik',
    'finds': 'buluşlar',
    'century': 'yüzyıl'
};

// Function to wrap words in spans
function wrapWordsInSpans() {
    const paragraphs = document.querySelectorAll('.story-paragraphs p');
    paragraphs.forEach(paragraph => {
        const text = paragraph.textContent;
        const words = text.split(/\s+/);
        paragraph.innerHTML = words.map(word => {
            const cleanWord = word.toLowerCase().replace(/[.,!?]/g, '');
            if (wordTranslations[cleanWord]) {
                return `<span data-word="${cleanWord}" data-original="${word}">${word}</span>`;
            }
            return word;
        }).join(' ');
    });
}

// Add click event listeners to words
function addWordClickListeners() {
    const wordSpans = document.querySelectorAll('.story-paragraphs span');
    wordSpans.forEach(span => {
        span.addEventListener('click', () => {
            const word = span.getAttribute('data-word');
            wordTitle.textContent = word;
            wordTranslation.textContent = wordTranslations[word];
            modal.style.display = 'flex';
        });
    });
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal when clicking close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Translate button functionality
const translateBtn = document.getElementById('translateBtn');
const englishText = document.querySelector('.english-text');
const turkishText = document.querySelector('.turkish-text');
let isTranslated = false;

translateBtn.addEventListener('click', () => {
    isTranslated = !isTranslated;
    englishText.classList.toggle('hide');
    turkishText.classList.toggle('show');
    translateBtn.innerHTML = isTranslated ? 
        '<i class="fas fa-language"></i> İngilizceye Çevir' : 
        '<i class="fas fa-language"></i> Türkçeye Çevir';
});

// Back button functionality
const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', () => {
    window.location.href = 'stories.html';
});

// Initialize word wrapping and click listeners
wrapWordsInSpans();
addWordClickListeners(); 