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
    'small': 'küçük',
    'village': 'köy',
    'lived': 'yaşıyordu',
    'friendly': 'arkadaş canlısı',
    'dragon': 'ejderha',
    'named': 'adında',
    'different': 'farklıydı',
    'other': 'diğer',
    'dragons': 'ejderhalardan',
    'because': 'çünkü',
    'didn\'t': 'sevmiyordu',
    'like': 'sevmiyordu',
    'scare': 'korkutmayı',
    'people': 'insanları',
    'instead': 'bunun yerine',
    'wanted': 'istiyordu',
    'make': 'edinmek',
    'friends': 'arkadaş',
    'villagers': 'köylüler',
    'afraid': 'korkuyorlardı',
    'first': 'başta',
    'never': 'hiç',
    'seen': 'görmemişlerdi',
    'kind': 'nazikti',
    'helped': 'yardım ediyor',
    'farmers': 'çiftçilere',
    'work': 'işlerinde',
    'played': 'oynuyordu',
    'children': 'çocuklarla',
    'little': 'küçük',
    'girl': 'kız',
    'came': 'geldi',
    'cave': 'mağarasına',
    'brought': 'getirdi',
    'flowers': 'çiçekler',
    'cookies': 'kurabiyeler',
    'happy': 'mutluydu',
    'new': 'yeni',
    'friend': 'arkadaş',
    'soon': 'kısa sürede',
    'more': 'daha fazla',
    'visit': 'ziyaret etmeye',
    'games': 'oyunlar',
    'together': 'birlikte',
    'fun': 'eğlendiler',
    'taught': 'öğretti',
    'how': 'nasıl',
    'fly': 'uçacaklarını',
    'back': 'sırtında',
    'hide': 'saklambaç',
    'seek': 'oynamayı',
    'learned': 'öğrendi',
    'being': 'olmanın',
    'bad': 'kötü',
    'accept': 'kabul etmeyi',
    'who': 'olduğu',
    'everyone': 'herkes',
    'loves': 'seviyor'
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