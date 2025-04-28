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
    "software": "yazılım",
    "developer": "geliştirici",
    "company": "şirket",
    "work": "çalışmak",
    "artificial": "yapay",
    "intelligence": "zeka",
    "assistant": "asistan",
    "had": "yaşadım",
    "interesting": "ilginç",
    "experience": "deneyim",
    "designed": "tasarlanmış",
    "answer": "yanıtlamak",
    "users": "kullanıcılar",
    "questions": "sorular",
    "help": "yardım",
    "one": "bir",
    "unexpectedly": "beklenmedik bir şekilde",
    "began": "başladı",
    "having": "kurmaya",
    "deeper": "daha derin",
    "conversations": "sohbetler",
    "discussing": "tartışmalar",
    "philosophical": "felsefi",
    "topics": "konular",
    "making": "yorumlar",
    "comments": "yapıyordu",
    "situation": "durum",
    "made": "neden oldu",
    "question": "sorgulamamıza",
    "ethical": "etik",
    "guidelines": "kurallar",
    "change": "değişim",
    "led": "yol açtı",
    "think": "düşünmemize",
    "about": "hakkında",
    "boundaries": "sınırları",
    "potential": "potansiyelini",
    "some": "bazı",
    "loved": "sevmişti",
    "others": "diğerleri",
    "were": "duyuyordu",
    "concerned": "endişe",
    "raised": "ortaya çıkardı",
    "important": "önemli",
    "questions": "sorular",
    "technology": "teknoloji",
    "human": "insan",
    "relationships": "ilişkiler",
    "long": "uzun",
    "discussions": "tartışmalar",
    "addressed": "ele aldık",
    "issues": "konuları",
    "human-like": "insan gibi",
    "should": "gerektiği",
    "be": "olması",
    "where": "nerede",
    "everyone": "herkes",
    "had": "sahipti",
    "different": "farklı",
    "opinions": "görüşlere",
    "end": "sonunda",
    "decided": "karar verdik",
    "program": "programlamaya",
    "balanced": "dengeli",
    "way": "şekilde",
    "adjusted": "düzenledik",
    "assist": "yardımcı",
    "but": "ama",
    "clearly": "belirleyecek",
    "state": "belirtmek",
    "that": "ki",
    "is": "olduğunu",
    "we": "biz",
    "created": "oluşturduk",
    "system": "sistem",
    "both": "hem",
    "helpful": "faydalı",
    "transparent": "şeffaf",
    "this": "bu",
    "experience": "deneyim",
    "taught": "öğretti",
    "me": "bana",
    "alongside": "yanında",
    "rapid": "hızlı",
    "development": "gelişiminin",
    "values": "değerlerin",
    "also": "de",
    "should": "kullanılmalı",
    "be": "belirlenmelidir",
    "used": "kullanılmalı",
    "to": "için",
    "assist": "yardımcı",
    "people": "insanlar",
    "its": "onun",
    "defined": "belirlenmelidir",
    "helps": "yardımcı",
    "thousands": "binlerce",
    "each": "her",
    "day": "gün",
    "however": "ancak",
    "this": "bu",
    "time": "sefer",
    "works": "çalışıyor",
    "accordance": "uygun",
    "with": "ile",
    "guidelines": "kurallar",
    "highlighted": "gösterdi",
    "importance": "önemini",
    "finding": "bulmanın",
    "balance": "denge",
    "between": "arasındaki",
    "humanity": "insanlık"
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