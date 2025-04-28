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
    'quiet': 'sakin',
    'corner': 'köşe',
    'cozy': 'rahat',
    'cafe': 'kafe',
    'steam': 'buhar',
    'coffee': 'kahve',
    'cups': 'fincanlar',
    'curled': 'kıvrıldı',
    'ceiling': 'tavan',
    'clouds': 'bulutlar',
    'waiting': 'bekleyen',
    'rain': 'yağmur',
    'thinkers': 'düşünürler',
    'truth-seekers': 'gerçek arayıcıları',
    'gathered': 'toplandı',
    'regularly': 'düzenli olarak',
    'discussions': 'tartışmalar',
    'ranged': 'değişti',
    'fundamental': 'temel',
    'questions': 'sorular',
    'existence': 'varoluş',
    'nature': 'doğa',
    'consciousness': 'bilinç',
    'morality': 'ahlak',
    'purpose': 'amaç',
    'universe': 'evren',
    'meaning': 'anlam',
    'sanctuary': 'sığınak',
    'intellectual': 'entelektüel',
    'exploration': 'keşif',
    'valued': 'değer verildi',
    'curiosity': 'merak',
    'celebrated': 'kutlandı',
    'doubt': 'şüphe',
    'embraced': 'kucaklandı',
    'certainty': 'kesinlik',
    'challenged': 'sorgulandı',
    'dialogue': 'diyalog',
    'understanding': 'anlayış',
    'deepened': 'derinleşti',
    'bonds': 'bağlar',
    'formed': 'oluştu',
    'shared': 'paylaşılan',
    'pursuit': 'arayış',
    'knowledge': 'bilgi',
    'truth': 'gerçek',
    'regular': 'düzenli',
    'visitors': 'ziyaretçiler',
    'retired': 'emekli',
    'university': 'üniversite',
    'professor': 'profesör',
    'specialized': 'uzmanlaşmış',
    'ancient': 'antik',
    'philosophy': 'felsefe',
    'brought': 'getirdi',
    'scrolls': 'parşömenler',
    'containing': 'içeren',
    'writings': 'yazılar',
    'stoics': 'stoacılar',
    'plato': 'platon',
    'aristotle': 'aristoteles',
    'discussing': 'tartışarak',
    'relevance': 'güncellik',
    'modern': 'modern',
    'world': 'dünya',
    'young': 'genç',
    'artist': 'sanatçı',
    'questioned': 'sorguladı',
    'beauty': 'güzellik',
    'reality': 'gerçeklik',
    'doctor': 'doktor',
    'explored': 'keşfetti',
    'ethics': 'etik',
    'medicine': 'tıp',
    'human': 'insan',
    'condition': 'durum',
    'meaningful': 'anlamlı',
    'conversations': 'konuşmalar',
    'lasted': 'sürdü',
    'dawn': 'şafak',
    'participants': 'katılımcılar',
    'left': 'ayrıldı',
    'expanded': 'genişlemiş',
    'minds': 'zihinler',
    'enriched': 'zenginleşmiş',
    'hearts': 'kalpler',
    'carrying': 'taşıyarak',
    'perspectives': 'bakış açıları',
    'shape': 'şekillendirmek',
    'understanding': 'anlayış',
    'biggest': 'en büyük',
    'remained': 'kaldı',
    'testament': 'kanıt',
    'power': 'güç',
    'ideas': 'fikirler',
    'transform': 'dönüştürme',
    'lives': 'yaşamlar',
    'enrich': 'zenginleştirme',
    'experience': 'deneyim'
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