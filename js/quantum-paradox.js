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
    'stood': 'duruyordu',
    'quantum': 'kuantum',
    'computer': 'bilgisayar',
    'mind': 'zihin',
    'racing': 'doluyor',
    'possibilities': 'olasılıklarla',
    'equations': 'denklemler',
    'working': 'çalıştığı',
    'years': 'yıllardır',
    'finally': 'sonunda',
    'led': 'yol açmıştı',
    'breakthrough': 'buluş',
    'discovered': 'keşfetmişti',
    'observe': 'gözlemlemenin',
    'entanglement': 'dolanıklığı',
    'without': 'olmadan',
    'collapsing': 'çökertmeden',
    'wave': 'dalga',
    'function': 'fonksiyonu',
    'implications': 'etkileri',
    'staggering': 'çarpıcıydı',
    'theory': 'teorisi',
    'correct': 'doğruysa',
    'revolutionize': 'değiştirecek',
    'understanding': 'anlayışımızı',
    'mechanics': 'mekaniğine',
    'potentially': 'potansiyel olarak',
    'unlock': 'açığa çıkaracaktı',
    'secrets': 'sırlarını',
    'teleportation': 'ışınlanmanın',
    'paradox': 'paradoks',
    'heart': 'merkezinde',
    'discovery': 'keşfinin',
    'challenged': 'sorgulayan',
    'foundations': 'temellerini',
    'physics': 'fiziğin',
    'experiments': 'deneylerini',
    'noticed': 'fark etti',
    'extraordinary': 'olağanüstü',
    'states': 'durumları',
    'influenced': 'etkileniyor',
    'consciousness': 'bilincinden',
    'particles': 'parçacıklar',
    'appeared': 'görünüyordu',
    'respond': 'tepki veriyordu',
    'expectations': 'beklentilerine',
    'aware': 'farkındaymış',
    'watched': 'izlendiğinin',
    'observation': 'gözlem',
    'led': 'götürdü',
    'profound': 'derin',
    'realization': 'farkındalığa',
    'boundary': 'sınır',
    'observer': 'gözlemci',
    'observed': 'gözlemlenen',
    'fluid': 'akışkandı',
    'imagined': 'hayal ettiğinden',
    'strange': 'tuhaf',
    'intimately': 'yakından',
    'connected': 'bağlantılıydı',
    'human': 'insan',
    'defied': 'aşan',
    'classical': 'klasik',
    'findings': 'bulguları',
    'sparked': 'yol açtı',
    'intense': 'yoğun',
    'debate': 'tartışmalara',
    'scientific': 'bilim',
    'community': 'dünyasında',
    'hailed': 'selamlarken',
    'visionary': 'vizyoner',
    'dismissed': 'reddetti',
    'pseudoscience': 'sözde bilim',
    'glimpsed': 'gördüğünü',
    'fundamental': 'temel',
    'nature': 'doğası',
    'reality': 'gerçeklik'
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