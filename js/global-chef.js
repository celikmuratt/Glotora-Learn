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
    'chef': 'şef',
    'believed': 'inanmıştı',
    'food': 'yemek',
    'sustenance': 'besin',
    'window': 'pencere',
    'soul': 'ruh',
    'culture': 'kültür',
    'prestigious': 'prestijli',
    'restaurants': 'restoranlarda',
    'across': 'boyunca',
    'decided': 'karar verdi',
    'embark': 'çıkmaya',
    'culinary': 'mutfak',
    'journey': 'yolculuğuna',
    'farthest': 'en uzak',
    'corners': 'köşelerine',
    'first': 'ilk',
    'stop': 'durağı',
    'spent': 'öğrendi',
    'months': 'aylarca',
    'learning': 'öğrenme',
    'delicate': 'inceliklerini',
    'art': 'sanatının',
    'sushi-making': 'sushi yapma',
    'master': 'usta',
    'precision': 'hassasiyet',
    'dedication': 'özveri',
    'required': 'gereken',
    'piece': 'parçası',
    'opened': 'görmesini',
    'eyes': 'gözlerini',
    'whole': 'yeni',
    'dimension': 'boyutunu',
    'excellence': 'mükemmelliğin',
    'traveled': 'gitti',
    'immersed': 'kaptırdı',
    'complex': 'karmaşık',
    'spices': 'baharatların',
    'traditional': 'geleneksel',
    'cooking': 'pişirme',
    'methods': 'yöntemlerinin',
    'vibrant': 'canlı',
    'colors': 'renkleri',
    'intense': 'yoğun',
    'flavors': 'lezzetleri',
    'taught': 'öğretti',
    'importance': 'önemini',
    'balance': 'denge',
    'harmony': 'uyum',
    'ancient': 'antik',
    'techniques': 'tekniklerini',
    'tagine': 'tagine',
    'slow-cooking': 'yavaş pişirme',
    'meats': 'etleri',
    'perfection': 'mükemmel',
    'communal': 'toplumsal',
    'aspect': 'yönü',
    'dining': 'yemek yemenin',
    'showed': 'gösterdi',
    'bring': 'getirebileceğini',
    'together': 'bir araya',
    'lasting': 'kalıcı',
    'bonds': 'bağlar',
    'discovered': 'keşfetti',
    'perfect': 'mükemmel',
    'sweet': 'tatlı',
    'sour': 'ekşi',
    'salty': 'tuzlu',
    'spicy': 'baharatlı',
    'distinctive': 'özgün',
    'street': 'sokak',
    'revealed': 'ortaya çıkardı',
    'delicious': 'lezzetli',
    'dishes': 'yemekler',
    'often': 'sık sık',
    'come': 'geliyor',
    'simplest': 'en basit',
    'ingredients': 'malzemelerden',
    'studied': 'inceledi',
    'tortillas': 'tortilla',
    'process': 'süreç',
    'preparing': 'hazırlama',
    'authentic': 'otantik',
    'mole': 'mole',
    'sauce': 'sos',
    'rich': 'zengin',
    'history': 'tarih',
    'fascinated': 'büyüledi',
    'recipes': 'tarifler',
    'passed': 'aktarıldığını',
    'generations': 'nesiller',
    'throughout': 'boyunca',
    'kept': 'kaydetti',
    'detailed': 'detaylı',
    'journals': 'günlüklerde',
    'experiences': 'deneyimlerini',
    'documenting': 'belgeledi',
    'stories': 'hikayeleri',
    'behind': 'arkalarındaki',
    'purpose': 'amacı',
    'evolved': 'evrildiğini',
    'centuries': 'yüzyıllar',
    'finally': 'sonunda',
    'returned': 'döndüğünde',
    'opened': 'açtı',
    'celebrated': 'kutlayan',
    'diversity': 'çeşitliliğini',
    'cuisines': 'mutfaklarının',
    'featured': 'vardı',
    'countries': 'ülkelerden',
    'visited': 'ziyaret ettiği',
    'telling': 'anlatıyordu',
    'through': 'aracılığıyla',
    'presentation': 'sunum',
    'universal': 'evrensel',
    'language': 'dil',
    'connects': 'bağlar',
    'regardless': 'rağmen',
    'differences': 'farklılıklarımıza',
    'serve': 'servis ettiğim',
    'piece': 'parçası',
    'someone': 'birinin',
    'heart': 'kalbinin',
    'became': 'dönüştü',
    'place': 'yer',
    'cultural': 'kültür',
    'hub': 'merkezi',
    'experience': 'deneyimleyebilecekleri',
    'taste': 'damak',
    'buds': 'tatlarıyla',
    'discovered': 'keşfetmişti',
    'cooking': 'pişirmekle',
    'storyteller': 'hikaye anlatıcısı',
    'ambassador': 'elçisi',
    'bridge': 'köprü',
    'between': 'arası',
    'worlds': 'dünyalar'
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