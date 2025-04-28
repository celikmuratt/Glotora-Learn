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
    'today': 'bugün',
    'is': 'dır',
    'my': 'benim',
    'first': 'ilk',
    'day': 'gün',
    'at': 'da',
    'school': 'okul',
    'i': 'ben',
    'wake': 'uyanmak',
    'up': 'yukarı',
    'early': 'erken',
    'in': 'içinde',
    'the': 'belirli',
    'morning': 'sabah',
    'mother': 'anne',
    'makes': 'yapmak',
    'breakfast': 'kahvaltı',
    'for': '-için',
    'eat': 'yemek',
    'bread': 'ekmek',
    'and': 've',
    'drink': 'içmek',
    'milk': 'süt',
    'put': 'koymak',
    'on': '-e',
    'new': 'yeni',
    'uniform': 'forması',
    'it': 'o',
    'blue': 'mavi',
    'white': 'beyaz',
    'take': 'almak',
    'bag': 'çanta',
    'books': 'kitaplar',
    'father': 'baba',
    'drives': 'araba sürmek',
    'me': 'beni',
    'to': '-e doğru',
    'meet': 'tanışmak',
    'teacher': 'öğretmen',
    'she': 'o (kadın)',
    'very': 'çok',
    'nice': 'nazik',
    'shows': 'göstermek',
    'classroom': 'sınıf',
    'see': 'görmek',
    'many': 'birçok',
    'students': 'öğrenciler',
    'they': 'onlar',
    'are': '-dir',
    'friendly': 'dostça',
    'learn': 'öğrenmek',
    'numbers': 'sayilar',
    'colors': 'renkler',
    'sing': 'şarkı söylemek',
    'songs': 'şarkılar',
    'play': 'oynamak',
    'games': 'oyunlar',
    'make': 'yapmak',
    'friends': 'arkadaşlar',
    'fun': 'eğlenceli',
    'when': 'ne zaman',
    'ends': 'bitmek',
    'picks': 'almak',
    'tell': 'anlatmak',
    'about': '-hakkında',
    'happy': 'mutlu',
    'go': 'gitmek',
    'back': 'geri',
    'tomorrow': 'yarın'
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