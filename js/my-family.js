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
const dictionary ={
    "hello": "Merhaba",
    "My": "Benim",
    "name": "adım",
    "is": "dır",
    "Emma": "Emma",
    "and": "ve",
    "I": "ben",
    "want": "istiyorum",
    "to": "için",
    "introduce": "tanıtmak",
    "you": "size",
    "family": "aile",
    "mom": "annem",
    "dad": "babam",
    "brother": "kardeşim",
    "a": "bir",
    "happy": "mutlu",
    "teacher": "öğretmen",
    "wakes": "kalkar",
    "up": "yukarı",
    "early": "erken",
    "every": "her",
    "morning": "sabah",
    "goes": "gider",
    "school": "okul",
    "loves": "sever",
    "cooking": "yemek yapmayı",
    "evenings": "akşamları",
    "prepares": "hazırlar",
    "delicious": "lezzetli",
    "meals": "yemekler",
    "for": "için",
    "all": "hepimiz",
    "of": "olarak",
    "us": "biz",
    "engineer": "mühendis",
    "works": "çalışır",
    "at": "başında",
    "computer": "bilgisayar",
    "weekends": "hafta sonları",
    "go": "gider",
    "park": "parka",
    "with": "ile",
    "plays": "oynar",
    "soccer": "futbol",
    "making": "yapmayı",
    "art": "resim",
    "brother": "kardeşim",
    "Tom": "Tom",
    "five": "beş",
    "years": "yaşında",
    "old": "eski",
    "goes": "gider",
    "kindergarten": "anaokulu",
    "playing": "oynamayı",
    "games": "oyunlar",
    "watching": "izlemeyi",
    "cartoons": "çizgi filmler",
    "Legos": "legolar",
    "am": "ben",
    "eight": "sekiz",
    "third": "üçüncü",
    "grade": "sınıf",
    "really": "gerçekten",
    "love": "seviyorum",
    "school": "okulu",
    "favorite": "favori",
    "subjects": "dersler",
    "math": "matematik",
    "art": "resim",
    "Every": "Her",
    "together": "birlikte",
    "have": "yaparız",
    "breakfast": "kahvaltı",
    "prepares": "hazırlar",
    "milk": "süt",
    "bread": "ekmek",
    "then": "Sonra",
    "work": "çalışmak",
    "In": "İçinde",
    "the": "gün",
    "evening": "akşam",
    "we": "biz",
    "share": "paylaşırız",
    "our": "bizim",
    "day": "günümüz",
    "On": "Hafta",
    "picnics": "piknik",
    "play": "oynarız",
    "games": "oyunlar",
    "eat": "yeriz",
    "food": "yemek",
    "have": "sahip olmak",
    "fun": "eğleniriz",
    "sometimes": "Bazen",
    "grandparents": "büyükannem ve büyükbabam",
    "also": "da",
    "join": "katılır",
    "us": "bize",
    "very": "çok",
    "loving": "sevgi dolu",
    "respect": "saygı",
    "each": "her",
    "other": "diğer",
    "spending": "geçirmeyi",
    "time": "zaman",
    "with": "ile",
    "enjoy": "eğlenmeyi",
};

// Function to wrap words in spans
function wrapWordsInSpans() {
    const paragraphs = document.querySelectorAll('.story-paragraphs p');
    paragraphs.forEach(paragraph => {
        const text = paragraph.textContent;
        const words = text.split(/\s+/);
        paragraph.innerHTML = words.map(word => {
            const cleanWord = word.toLowerCase().replace(/[.,!?]/g, '');
            if (dictionary[cleanWord]) {
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
            wordTranslation.textContent = dictionary[word];
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