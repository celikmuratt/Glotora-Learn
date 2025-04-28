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
    'novelist': 'romancı',
    'struggled': 'mücadele etti',
    'words': 'kelimelerle',
    'page': 'sayfa',
    'remained': 'kaldı',
    'blank': 'boş',
    'weeks': 'haftalarca',
    'staring': 'bakarak',
    'screen': 'ekrana',
    'cursor': 'imleç',
    'blinked': 'yanıp söndü',
    'mockingly': 'alaycı',
    'writer': 'yazar',
    'block': 'tıkanıklığı',
    'seemed': 'görünüyordu',
    'insurmountable': 'aşılamaz',
    'mountain': 'dağ',
    'blocking': 'engelleyen',
    'path': 'yolu',
    'creativity': 'yaratıcılığın',
    'desk': 'masa',
    'littered': 'dağınık',
    'notes': 'notlarla',
    'outlines': 'taslaklarla',
    'character': 'karakter',
    'sketches': 'eskizleri',
    'plot': 'olay örgüsü',
    'points': 'noktaları',
    'research': 'araştırma',
    'materials': 'materyalleri',
    'novel': 'roman',
    'explored': 'keşfettiği',
    'complex': 'karmaşık',
    'themes': 'temaları',
    'identity': 'kimlik',
    'reality': 'gerçeklik',
    'perception': 'algı',
    'truth': 'gerçek',
    'fiction': 'kurgu',
    'boundaries': 'sınırları',
    'between': 'arasındaki',
    'blurred': 'bulanıklaştı',
    'protagonist': 'kahramanı',
    'mirror': 'ayna',
    'reflected': 'yansıttı',
    'struggles': 'mücadelelerini',
    'writer': 'yazarın',
    'journey': 'yolculuğunu',
    'became': 'dönüştü',
    'metaphor': 'metafor',
    'creation': 'yaratılışın',
    'process': 'sürecinin',
    'itself': 'kendisinin',
    'characters': 'karakterler',
    'began': 'başladı',
    'speak': 'konuşmaya',
    'voices': 'sesleri',
    'echoed': 'yankılandı',
    'mind': 'zihninde',
    'stories': 'hikayeler',
    'unfolded': 'gelişti',
    'naturally': 'doğal',
    'flow': 'akışıyla',
    'words': 'kelimeler',
    'poured': 'döküldü',
    'page': 'sayfaya',
    'like': 'gibi',
    'water': 'su',
    'finding': 'bulan',
    'channel': 'kanalını',
    'creativity': 'yaratıcılığın',
    'novel': 'roman',
    'evolved': 'evrildi',
    'living': 'yaşayan',
    'entity': 'varlığa',
    'own': 'kendi',
    'momentum': 'momentumuna',
    'direction': 'yönüne',
    'sahip': 'sahip',
    'writer': 'yazar',
    'became': 'dönüştü',
    'observer': 'gözlemci',
    'witness': 'tanık',
    'story': 'hikayenin',
    'unfold': 'gelişmesine',
    'characters': 'karakterler',
    'took': 'aldı',
    'control': 'kontrolü',
    'narrative': 'anlatının',
    'twisted': 'büküldü',
    'turned': 'döndü',
    'unexpected': 'beklenmedik',
    'directions': 'yönlere',
    'writer': 'yazar',
    'followed': 'takip etti',
    'fascination': 'büyülenme',
    'watching': 'izleyerek',
    'creation': 'yaratının',
    'come': 'gelişmesine',
    'life': 'hayat',
    'novel': 'roman',
    'challenged': 'sorguladı',
    'conventional': 'geleneksel',
    'notions': 'kavramlarını',
    'authorship': 'yazarlığın',
    'creativity': 'yaratıcılığın',
    'control': 'kontrolün',
    'revealed': 'ortaya çıkardı',
    'truth': 'gerçeği',
    'stories': 'hikayelerin',
    'power': 'gücünü',
    'transcend': 'aşma',
    'creator': 'yaratıcısını',
    'become': 'olma',
    'force': 'güç',
    'their': 'kendi',
    'own': 'kendi',
    'right': 'hakkına',
    'sahip': 'sahip',
    'novel': 'roman',
    'finally': 'sonunda',
    'completed': 'tamamlandı',
    'stood': 'durdu',
    'testament': 'kanıtı',
    'power': 'gücüne',
    'stories': 'hikayelerin',
    'transform': 'dönüştürme',
    'both': 'hem',
    'creator': 'yaratıcısını',
    'reader': 'okuyucusunu',
    'reminding': 'hatırlatan',
    'us': 'bize',
    'magic': 'sihrini',
    'words': 'kelimelerin',
    'ability': 'yeteneğini',
    'create': 'yaratma',
    'worlds': 'dünyalar',
    'transcend': 'aşan',
    'boundaries': 'sınırları',
    'reality': 'gerçeğin'
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