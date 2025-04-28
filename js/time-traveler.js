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
    'found': 'buldu',
    'old': 'eski',
    'diary': 'günlük',
    'grandmother': 'büyükanne',
    'attic': 'tavan arası',
    'leather': 'deri',
    'cover': 'kapak',
    'worn': 'yıpranmış',
    'pages': 'sayfalar',
    'smelled': 'kokuyordu',
    'ancient': 'antik',
    'times': 'zamanlar',
    'opened': 'açtı',
    'noticed': 'fark etti',
    'strange': 'garip',
    'symbols': 'semboller',
    'glowing': 'parlıyordu',
    'first': 'ilk',
    'page': 'sayfa',
    'touched': 'dokundu',
    'room': 'oda',
    'began': 'başladı',
    'spin': 'dönmek',
    'colors': 'renkler',
    'blurred': 'bulanıklaştı',
    'together': 'birlikte',
    'felt': 'hissetti',
    'pulled': 'çekildi',
    'through': 'boyunca',
    'time': 'zaman',
    'stopped': 'durdu',
    'standing': 'duruyordu',
    'medieval': 'ortaçağ',
    'castle': 'kale',
    'bustling': 'hareketli',
    'activity': 'aktivite',
    'knights': 'şövalyeler',
    'shining': 'parlayan',
    'armor': 'zırh',
    'walked': 'yürüdü',
    'past': 'yanından',
    'servants': 'hizmetkarlar',
    'hurried': 'koştu',
    'duties': 'görevler',
    'realized': 'fark etti',
    'invisible': 'görünmez',
    'everyone': 'herkes',
    'around': 'etrafında',
    'explored': 'keşfetti',
    'watching': 'izlerken',
    'historical': 'tarihi',
    'events': 'olaylar',
    'unfold': 'gerçekleşti',
    'eyes': 'gözleri',
    'kings': 'krallar',
    'queens': 'kraliçeler',
    'making': 'alıyor',
    'important': 'önemli',
    'decisions': 'kararlar',
    'witnessed': 'tanık oldu',
    'battles': 'savaşlar',
    'planned': 'planlandı',
    'observed': 'gözlemledi',
    'daily': 'günlük',
    'life': 'yaşam',
    'wanted': 'istedi',
    'return': 'dönmek',
    'home': 'ev',
    'again': 'tekrar',
    'took': 'götürdü',
    'different': 'farklı',
    'periods': 'dönemler',
    'egypt': 'mısır',
    'renaissance': 'rönesans',
    'even': 'bile',
    'future': 'gelecek',
    'always': 'her zaman',
    'came': 'döndü',
    'back': 'geri',
    'where': 'nerede',
    'passed': 'geçmiş',
    'being': 'olduğu',
    'before': 'önce',
    'would': 'yapardı',
    'touch': 'dokundu',
    'each': 'her',



    
    
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