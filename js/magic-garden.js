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
        "in": "içinde",
        "a": "bir",
        "small": "küçük",
        "town": "kasaba",
        "there": "orada",
        "was": "vardı",
        "mysterious": "gizemli",
        "garden": "bahçe",
        "that": "o",
        "everyone": "herkes",
        "talked": "konuştu",
        "about": "hakkında",
        "the": "bu",
        "special": "özel",
        "because": "çünkü",
        "trees": "ağaçlar",
        "could": "yapabilirdi",
        "talk": "konuşmak",
        "and": "ve",
        "flowers": "çiçekler",
        "had": "sahipti",
        "secrets": "gizli şeyler",
        "to": "için",
        "share": "paylaşmak",
        "one": "bir",
        "day": "gün",
        "young": "genç",
        "girl": "kız",
        "named": "adında",
        "discovered": "keşfetti",
        "this": "bu",
        "magical": "sihirli",
        "place": "yer",
        "she": "o",
        "walking": "yürüyordu",
        "home": "eve",
        "from": "-den",
        "school": "okul",
        "when": "ne zaman",
        "heard": "duydu",
        "soft": "yumuşak",
        "whispers": "fısıltılar",
        "coming": "gelen",
        "behind": "arkasında",
        "an": "bir",
        "old": "eski",
        "wooden": "ahşap",
        "gate": "kapı",
        "curious": "meraklı",
        "pushed": "itti",
        "open": "açık",
        "stepped": "adım attı",
        "inside": "içeri",
        "what": "ne",
        "saw": "gördü",
        "amazed": "şaşırttı",
        "her": "onu",
        "filled": "dolu",
        "with": "ile",
        "colorful": "renkli",
        "seemed": "görünüyordu",
        "glow": "parlamak",
        "sunlight": "güneş ışığı",
        "tall": "uzun",
        "sunflower": "ayçiçeği",
        "turned": "döndü",
        "face": "yüz",
        "said": "dedi",
        "welcome": "hoş geldin",
        "our": "bizim",
        "spent": "harcadı",
        "many": "birçok",
        "happy": "mutlu",
        "days": "günler",
        "making": "yaparak",
        "friends": "arkadaşlar",
        "learning": "öğrenmek",
        "their": "onların",
        "roses": "güller",
        "told": "anlattı",
        "love": "aşk",
        "daisies": "papatyalar",
        "shared": "paylaştı",
        "stories": "hikayeler",
        "joy": "sevinç",
        "taught": "öğretti",
        "patience": "sabır",
        "growth": "büyüme",
        "as": "gibi",
        "time": "zaman",
        "passed": "geçti",
        "learned": "öğrendi",
        "wasn’t": "değildi",
        "just": "sadece",
        "talking": "konuşan",
        "plants": "bitkiler",
        "but": "ama",
        "wisdom": "bilgelik",
        "they": "onlar",
        "magic": "sihir",
        "wasn't": "değildi",
        "friendship": "arkadaşlık",
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