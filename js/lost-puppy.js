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
    'rainy': 'yağmurlu',
    'afternoon': 'öğleden sonra',
    'walking': 'yürüyordu',
    'heard': 'duydu',
    'soft': 'yumuşak',
    'whimpering': 'inleme',
    'sound': 'ses',
    'coming': 'geliyordu',
    'behind': 'arkasından',
    'bushes': 'çalıların',
    'carefully': 'dikkatle',
    'approached': 'yaklaştı',
    'found': 'buldu',
    'small': 'küçük',
    'wet': 'ıslak',
    'puppy': 'yavru köpek',
    'shivering': 'titreyen',
    'cold': 'soğukta',
    'whispered': 'fısıldadı',
    'gently': 'nazikçe',
    'picked': 'kaldırdı',
    'wrapped': 'sardı',
    'jacket': 'ceket',
    'took': 'götürdü',
    'helped': 'yardım etti',
    'warm': 'sıcak',
    'bath': 'banyo',
    'food': 'yemek',
    'hungry': 'açtı',
    'ate': 'yedi',
    'quickly': 'hızlıca',
    'posters': 'ilanlar',
    'neighborhood': 'mahalle',
    'suggested': 'önerdi',
    'sweet': 'tatlı',
    'spent': 'geçirdi',
    'taking': 'bakarak',
    'care': 'bakım',
    'named': 'adını verdi',
    'taught': 'öğretti',
    'basic': 'temel',
    'commands': 'komutları',
    'smart': 'zekiydi',
    'learned': 'öğrendi',
    'followed': 'takip etti',
    'everywhere': 'her yerde',
    'became': 'oldu',
    'friend': 'arkadaşı',
    'morning': 'sabah',
    'walking': 'gezdirirken',
    'park': 'parkta',
    'met': 'karşılaştı',
    'elderly': 'yaşlı',
    'man': 'adam',
    'putting': 'asan',
    'dog': 'köpek',
    'eyes': 'gözleri',
    'lit': 'parladı',
    'saw': 'görünce',
    'exclaimed': 'haykırdı',
    'looking': 'arıyordum',
    'everywhere': 'her yerde',
    'felt': 'hissetti',
    'mix': 'karışımı',
    'happiness': 'mutluluk',
    'sadness': 'üzüntü',
    'glad': 'seviniyordu',
    'reunited': 'birleşeceğine',
    'owner': 'sahibiyle',
    'miss': 'özleyecekti',
    'thank': 'teşekkür',
    'good': 'iyi',
    'visit': 'ziyaret etmek',
    'sometimes': 'bazen',
    'think': 'sanırım',
    'like': 'ister',
    'smiled': 'gülümsedi',
    'tears': 'gözyaşları',
    'love': 'isterim',
    'from': 'günden',
    'on': 'sonra',
    'every': 'her',
    'weekend': 'hafta sonu',
    'learned': 'öğrendi',
    'helping': 'yardım etmenin',
    'others': 'başkalarına',
    'lead': 'yol açabileceğini',
    'wonderful': 'harika',
    'friendships': 'dostluklara',
    'even': 'bile',
    'don\'t': 'beklemediğimiz',
    'turn': 'sonuçlansa',
    'out': 'bile',
    'exactly': 'şekilde',
    'expect': 'beklemediğimiz'
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