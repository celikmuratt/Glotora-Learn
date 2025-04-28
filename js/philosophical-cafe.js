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
    'philosopher': 'filozof',
    'cafe': 'kafe',
    'corner': 'köşesinde',
    'quiet': 'sakin',
    'street': 'sokak',
    'gathered': 'toplanırdı',
    'thinkers': 'düşünürler',
    'seekers': 'arayıcılar',
    'truth': 'gerçeği',
    'meaning': 'anlamı',
    'life': 'yaşamın',
    'discussions': 'tartışmalar',
    'ranged': 'değişirdi',
    'existence': 'varoluş',
    'consciousness': 'bilinç',
    'morality': 'ahlak',
    'purpose': 'amaç',
    'universe': 'evren',
    'coffee': 'kahve',
    'steam': 'buharı',
    'curled': 'kıvrılırdı',
    'ceiling': 'tavan',
    'ideas': 'fikirler',
    'floated': 'süzülürdü',
    'air': 'havada',
    'like': 'gibi',
    'clouds': 'bulutlar',
    'waiting': 'bekleyen',
    'rain': 'yağmur',
    'wisdom': 'bilgelik',
    'regular': 'düzenli',
    'visitor': 'ziyaretçi',
    'professor': 'profesör',
    'retired': 'emekli',
    'university': 'üniversite',
    'specialized': 'uzmanlaşmış',
    'ancient': 'antik',
    'philosophy': 'felsefe',
    'often': 'sık sık',
    'brought': 'getirirdi',
    'scrolls': 'parşömenler',
    'containing': 'içeren',
    'writings': 'yazılar',
    'stoics': 'stoacılar',
    'plato': 'platon',
    'aristotle': 'aristoteles',
    'discussed': 'tartışırdı',
    'relevance': 'güncelliğini',
    'modern': 'modern',
    'world': 'dünyada',
    'young': 'genç',
    'artist': 'sanatçı',
    'questioned': 'sorgulardı',
    'nature': 'doğa',
    'beauty': 'güzellik',
    'reality': 'gerçeklik',
    'perception': 'algı',
    'doctor': 'doktor',
    'explored': 'keşfederdi',
    'ethics': 'etik',
    'medicine': 'tıp',
    'human': 'insan',
    'condition': 'durumu',
    'meaningful': 'anlamlı',
    'conversations': 'konuşmalar',
    'lasted': 'sürerdi',
    'hours': 'saatlerce',
    'sometimes': 'bazen',
    'dawn': 'şafağa',
    'until': 'kadar',
    'participants': 'katılımcılar',
    'left': 'ayrılırdı',
    'minds': 'zihinleri',
    'expanded': 'genişlemiş',
    'hearts': 'kalpleri',
    'enriched': 'zenginleşmiş',
    'new': 'yeni',
    'perspectives': 'bakış açılarıyla',
    'cafe': 'kafe',
    'became': 'dönüştü',
    'sanctuary': 'sığınağı',
    'intellectual': 'entelektüel',
    'exploration': 'keşfin',
    'place': 'yeri',
    'where': 'oldu',
    'questions': 'sorular',
    'valued': 'değer görürdü',
    'answers': 'cevaplardan',
    'more': 'daha',
    'where': 'nerede',
    'curiosity': 'merak',
    'celebrated': 'kutlanırdı',
    'doubt': 'şüphe',
    'embraced': 'kucaklanırdı',
    'certainty': 'kesinlik',
    'challenged': 'sorgulanırdı',
    'through': 'aracılığıyla',
    'dialogue': 'diyalog',
    'understanding': 'anlayış',
    'deepened': 'derinleşirdi',
    'bonds': 'bağlar',
    'formed': 'oluşurdu',
    'shared': 'paylaşılan',
    'pursuit': 'arayış',
    'knowledge': 'bilginin',
    'truth': 'gerçeğin',
    'cafe': 'kafe',
    'remains': 'kalır',
    'testament': 'kanıtı',
    'power': 'gücüne',
    'ideas': 'fikirlerin',
    'transform': 'dönüştürme',
    'lives': 'yaşamları',
    'enrich': 'zenginleştirme',
    'human': 'insan',
    'experience': 'deneyimini'
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