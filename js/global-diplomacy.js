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
        "my": "benim",
        "twenty": "yirmi",
        "year": "yıl",
        "diplomatic": "diplomatik",
        "career": "kariyer",
        "I": "ben",
        "have": "sahip oldum",
        "closely": "yakından",
        "observed": "gözlemledim",
        "the": "bu",
        "complex": "karmaşık",
        "fabric": "doku",
        "of": "için",
        "international": "uluslararası",
        "relations": "ilişkiler",
        "challenges": "zorluklar",
        "and": "ve",
        "opportunities": "fırsatlar",
        "multilateral": "çok taraflı",
        "diplomacy": "diplomasi",
        "offer": "sunuyor",
        "new": "yeni",
        "perspectives": "perspektifler",
        "every": "her",
        "day": "gün",
        "during": "sırasında",
        "speeches": "konuşmalar",
        "at": "de",
        "United": "Birleşmiş",
        "Nations": "Milletler",
        "General": "Genel",
        "Assembly": "Kurulu",
        "emphasized": "vurguladım",
        "importance": "önem",
        "cooperation": "işbirliği",
        "solving": "çözümlemek",
        "global": "küresel",
        "issues": "sorunlar",
        "problems": "sorunlar",
        "such": "gibi",
        "as": "olarak",
        "climate": "iklim",
        "change": "değişiklik",
        "terrorism": "terörizm",
        "economic": "ekonomik",
        "inequality": "eşitsizlik",
        "require": "gerektiriyor",
        "solutions": "çözümler",
        "that": "o",
        "transcend": "aşan",
        "borders": "sınırlar",
        "Security": "Güvenlik",
        "Council": "Konseyi",
        "negotiations": "müzakereler",
        "witnessed": "gördüm",
        "critical": "kritik",
        "role": "rol",
        "skills": "beceriler",
        "conflict": "çatışma",
        "resolution": "çözüm",
        "peacebuilding": "barış inşası",
        "processes": "süreçler",
        "In": "İçinde",
        "political": "siyasi",
        "scenarios": "senaryolar",
        "compromise": "uzlaşma",
        "dialogue": "diyalog",
        "most": "en",
        "effective": "etkili",
        "tools": "araçlar",
        "field": "alan",
        "economic": "ekonomik",
        "participated": "katıldım",
        "negotiations": "müzakereler",
        "trade": "ticaret",
        "agreements": "anlaşmalar",
        "shaping": "şekillendirmek",
        "order": "düzen",
        "balance": "denge",
        "interests": "çıkarlar",
        "sensitive": "hassas",
        "management": "yönetim",
        "great": "büyük",
        "importance": "önem",
        "intercultural": "kültürlerarası",
        "communication": "iletişim",
        "always": "her zaman",
        "front": "ön",
        "understanding": "anlamak",
        "respecting": "saygı göstermek",
        "different": "farklı",
        "contexts": "bağlamlar",
        "forms": "oluşturur",
        "foundation": "temel",
        "successful": "başarılı",
        "relationships": "ilişkiler",
        "demonstrated": "gösterdi",
        "collaboration": "işbirliği",
        "information": "bilgi",
        "sharing": "paylaşım",
        "play": "oynar",
        "cybersecurity": "siber güvenlik",
        "data": "veri",
        "protection": "koruma",
        "modern": "modern",
        "become": "haline geldi",
        "significant": "önemli",
        "areas": "alanlar",
        "these": "bu",
        "experiences": "deneyimler",
        "illustrate": "gösteriyor",
        "nature": "doğa",
        "evolution": "evrim",
        "successful": "başarılı",
        "must": "olmalı",
        "adapt": "uyum sağlama",
        "changing": "değişen",
        "circumstances": "koşullar",
        "understand": "anlayabilmelidir",
        "perspectives": "perspektifler"

    
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