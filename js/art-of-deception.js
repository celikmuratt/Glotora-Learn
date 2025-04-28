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
    'prestigious': 'prestijli',
    'gallery': 'galeri',
    'abuzz': 'dolmuş',
    'anticipation': 'heyecan',
    'elite': 'seçkinler',
    'gathered': 'toplanmıştı',
    'unveiling': 'açılış',
    'hailed': 'ilan edilen',
    'discovery': 'keşif',
    'century': 'yüzyıl',
    'previously': 'daha önce',
    'unknown': 'bilinmeyen',
    'masterpiece': 'başyapıt',
    'enigmatic': 'gizemli',
    'renaissance': 'rönesans',
    'master': 'usta',
    'chief': 'baş',
    'curator': 'küratör',
    'stood': 'duruyordu',
    'crowd': 'kalabalık',
    'mixture': 'karışım',
    'pride': 'gurur',
    'apprehension': 'endişe',
    'stunning': 'etkileyici',
    'portrait': 'portre',
    'mysterious': 'gizemli',
    'woman': 'kadın',
    'passed': 'geçmişti',
    'conceivable': 'düşünülebilir',
    'test': 'test',
    'authenticity': 'gerçeklik',
    'nagged': 'rahatsız eden',
    'professional': 'profesyonel',
    'instincts': 'içgüdüler',
    'progressed': 'ilerledikçe',
    'whispers': 'fısıldamalar',
    'doubt': 'şüphe',
    'circulate': 'dolaşmaya',
    'experts': 'uzmanlar',
    'brushstrokes': 'fırça darbeleri',
    'masterful': 'ustaca',
    'perfect': 'mükemmel',
    'aging': 'yaşlanması',
    'convincingly': 'ikna edici',
    'simulated': 'simüle edilmiş',
    'inconsistencies': 'tutarsızlıklar',
    'ultraviolet': 'ultraviyole',
    'provenance': 'köken belgesi',
    'meticulously': 'dikkatle',
    'documented': 'hazırlanmış',
    'subtle': 'ince',
    'anomalies': 'anormallikler',
    'truth': 'gerçek',
    'emerged': 'belirdi',
    'gradually': 'yavaşça',
    'stroke': 'fırça darbesi',
    'contemporary': 'çağdaş',
    'forger': 'sahteci',
    'unprecedented': 'benzeri görülmemiş',
    'skill': 'beceri',
    'decades': 'onlarca yıl',
    'perfecting': 'mükemmelleştirmek',
    'deception': 'aldatma',
    'elaborate': 'karmaşık',
    'web': 'ağ',
    'lies': 'yalanlar',
    'reputation': 'itibar',
    'tarnished': 'lekelenmek',
    'enhanced': 'artmıştı',
    'exhibition': 'sergi',
    'groundbreaking': 'çığır açıcı',
    'exploration': 'keşif',
    'fine': 'ince',
    'line': 'çizgi',
    'between': 'arasında',
    'artistic': 'sanatsal',
    'genius': 'deha',
    'challenging': 'teşvik eden',
    'visitors': 'ziyaretçiler',
    'question': 'sorgulamaya',
    'saw': 'gördüklerini',
    'how': 'nasıl'
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