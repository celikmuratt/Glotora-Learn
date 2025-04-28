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
const dictionary = {
    "today": "Bugün",
    "I": "Ben",
    "want": "istiyorum",
    "to": "için",
    "tell": "anlatmak",
    "you": "size",
    "about": "hakkında",
    "a": "bir",
    "day": "gün",
    "I": "ben",
    "spent": "geçirdiğim",
    "in": "içinde",
    "the": "şehri",
    "city": "şehir",
    "woke": "uyandım",
    "up": "yukarı",
    "at": "saat",
    "8": "8",
    "morning": "sabah",
    "and": "ve",
    "got": "hazırlandım",
    "ready": "hazır",
    "For": "için",
    "breakfast": "kahvaltı",
    "had": "yemek",
    "milk": "süt",
    "bread": "ekmek",
    "took": "bindim",
    "bus": "otobüs",
    "go": "gitmek",
    "school": "okul",
    "chatted": "sohbet ettim",
    "with": "ile",
    "an": "bir",
    "elderly": "yaşlı",
    "woman": "kadın",
    "sitting": "oturan",
    "next": "yanımda",
    "me": "benim",
    "She": "O",
    "was": "idi",
    "also": "da",
    "going": "gidiyordu",
    "center": "merkezine",
    "just": "gibi",
    "like": "benim",
    "after": "Sonra",
    "friends": "arkadaşlarım",
    "went": "gittik",
    "mall": "alışveriş merkezi",
    "wanted": "istiyordum",
    "buy": "almak",
    "new": "yeni",
    "book": "kitap",
    "we": "Biz",
    "spent": "geçirdik",
    "hour": "saat",
    "bookstore": "kitapçı",
    "everyone": "herkes",
    "chose": "seçti",
    "their": "kendi",
    "own": "kitabını",
    "lunch": "öğle yemeği",
    "newly": "yeni",
    "opened": "açılan",
    "cafe": "kafe",
    "menu": "menü",
    "pizza": "pizza",
    "hamburgers": "hamburger",
    "ordered": "sipariş ettim",
    "it": "çok",
    "delicious": "lezzetli",
    "then": "Sonra",
    "cinema": "sinema",
    "was": "vardı",
    "action": "aksiyon",
    "movie": "filmi",
    "exciting": "heyecanlı",
    "lasted": "sürdü",
    "two": "iki",
    "hours": "saat",
    "afternoon": "akşamüstü",
    "park": "park",
    "relaxed": "dinlendik",
    "bit": "biraz",
    "there": "Vardı",
    "people": "insanlar",
    "some": "bazıları",
    "exercising": "spor yapıyor",
    "others": "bazıları",
    "reading": "kitap",
    "going": "gitmeden",
    "home": "eve",
    "stopped": "uğradım",
    "market": "market",
    "bought": "aldım",
    "for": "için",
    "mom": "annem",
    "while": "Sıra beklerken",
    "waiting": "beklerken",
    "line": "sıra",
    "cashier": "kasada",
    "talked": "konuştum",
    "child": "çocuk",
    "next": "yanımdaki",
    "When": "Eve",
    "got": "vardığımda",
    "past": "geçiyordu",
    "prepared": "hazırlamıştı",
    "dinner": "akşam yemeği",
    "meal": "yemek",
    "told": "anlattım",
    "family": "ailem",
    "went": "gittim",
    "to": "uyudum",
    "tired": "yorgun",
    "very": "çok",
    "many": "birçok",
    "days": "gün",
    "were": "oldu",
    "books": "kitaplar",
    "before": "önce",
    "when": "Eve",
    "my": "benim",
    "she": "O",
    
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