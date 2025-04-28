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
    'detective': 'dedektif',
    'stared': 'bakıyor',
    'computer': 'bilgisayar',
    'screen': 'ekran',
    'fingers': 'parmakları',
    'flying': 'uçuşurken',
    'keyboard': 'klavye',
    'analyzed': 'analiz ediyordu',
    'complex': 'karmaşık',
    'network': 'ağ',
    'digital': 'dijital',
    'footprints': 'izler',
    'left': 'bıraktığı',
    'behind': 'geride',
    'elusive': 'illüzyonist',
    'hacker': 'hacker',
    'known': 'bilinen',
    'case': 'dava',
    'consuming': 'meşgul ediyordu',
    'weeks': 'haftalardır',
    'determined': 'kararlıydı',
    'crack': 'çözmeye',
    'pattern': 'örüntü',
    'muttered': 'mırıldandı',
    'eyes': 'gözleri',
    'scanning': 'tararken',
    'lines': 'satırlarını',
    'code': 'kod',
    'hack': 'hack',
    'follows': 'takip ediyor',
    'sequence': 'sırayı',
    'different': 'farklı',
    'latest': 'son',
    'victim': 'kurban',
    'major': 'büyük',
    'financial': 'finans',
    'institution': 'kuruluşu',
    'breach': 'ihlal',
    'exposed': 'açığa çıkarmıştı',
    'sensitive': 'hassas',
    'customer': 'müşteri',
    'data': 'verilerini',
    'company': 'şirketin',
    'security': 'güvenlik',
    'team': 'ekibi',
    'completely': 'tamamen',
    'baffled': 'şaşkına dönmüştü',
    'sophisticated': 'sofistike',
    'attack': 'saldırı',
    'bypassed': 'atlayan',
    'multiple': 'birden fazla',
    'layers': 'katmanını',
    'encryption': 'şifreleme',
    'investigation': 'soruşturması',
    'led': 'dolaştırmıştı',
    'maze': 'labirent',
    'trails': 'izler',
    'encrypted': 'şifrelenmiş',
    'chat': 'sohbet',
    'rooms': 'odalarından',
    'anonymous': 'anonim',
    'forums': 'forumlara',
    'discovered': 'keşfetmişti',
    'ghost': 'hayalet',
    'faintest': 'en hafif',
    'traces': 'izlerini',
    'presence': 'varlık',
    'delved': 'inceledikçe',
    'deeper': 'derinlemesine',
    'notice': 'fark etmeye',
    'unusual': 'olağandışı',
    'random': 'rastgele',
    'acts': 'eylemleri',
    'cyber': 'siber',
    'vandalism': 'vandalizm',
    'carefully': 'dikkatle',
    'orchestrated': 'planlanmıştı',
    'expose': 'açığa çıkarmak',
    'corporate': 'kurumsal',
    'corruption': 'yolsuzluğu',
    'target': 'hedef',
    'involved': 'karışmış',
    'questionable': 'şüpheli',
    'business': 'iş',
    'practices': 'uygulamalarına',
    'escaped': 'kaçmış',
    'public': 'kamuoyunun',
    'scrutiny': 'dikkatinden',
    'realized': 'fark etti',
    'justice': 'adalet',
    'breakthrough': 'çığır açıcı',
    'came': 'geldi',
    'discovered': 'keşfettiğinde',
    'hidden': 'gizli',
    'signature': 'imza',
    'reference': 'referans',
    'worked': 'çalıştığı',
    'years': 'yıllar',
    'ago': 'önce',
    'involving': 'ilgili',
    'espionage': 'casusluk',
    'timing': 'zamanlama',
    'perfect': 'mükemmel',
    'coincidence': 'tesadüf',
    'thought': 'düşündü',
    'knows': 'tanıyor',
    'trying': 'çalışıyor',
    'tell': 'anlatmaya',
    'following': 'takip ederek',
    'lead': 'ipucunu',
    'uncovered': 'ortaya çıkardı',
    'whistleblowers': 'muhbir',
    'feeding': 'sızdıran',
    'information': 'bilgi',
    'building': 'oluşturuyordu',
    'against': 'karşı',
    'powerful': 'güçlü',
    'syndicate': 'sendika',
    'operating': 'faaliyet gösteren',
    'shadows': 'gölgelerde',
    'decades': 'on yıllardır',
    'bigger': 'daha büyük',
    'thought': 'düşündüğümden',
    'chasing': 'kovalıyoruz',
    'taking': 'çökertiyoruz',
    'entire': 'tüm',
    'criminal': 'suç',
    'enterprise': 'örgütünü',
    'dramatic': 'dramatik',
    'confrontation': 'yüzleşmede',
    'played': 'oynandı',
    'across': 'boyunca',
    'fronts': 'cephede',
    'finally': 'sonunda',
    'caught': 'yetişti',
    'turned': 'çıktı',
    'former': 'eski',
    'employee': 'çalışanı',
    'witnessed': 'tanık olmuş',
    'firsthand': 'bizzat',
    'explained': 'açıkladı',
    'system': 'sistem',
    'broken': 'bozuktu',
    'listening': 'dinlemiyordu',
    'sometimes': 'bazen',
    'rules': 'kuralları',
    'fix': 'düzeltmek',
    'wrong': 'yanlış',
    'understood': 'anladı',
    'condone': 'onaylayamazdı',
    'illegal': 'yasadışı',
    'methods': 'yöntemleri',
    'recognized': 'tanıdı',
    'truth': 'gerçeği',
    'words': 'sözlerindeki',
    'together': 'birlikte',
    'worked': 'çalıştı',
    'bring': 'çıkarmak',
    'evidence': 'kanıtları',
    'light': 'ışığına',
    'through': 'aracılığıyla',
    'proper': 'uygun',
    'legal': 'yasal',
    'channels': 'kanallar',
    'ensuring': 'sağlamak',
    'served': 'yerine getirilmesini',
    'maintaining': 'korurken',
    'integrity': 'bütünlüğünü',
    'closed': 'kapattı',
    'reflected': 'düşündü',
    'nature': 'doğasını',
    'age': 'çağında',
    'line': 'çizgi',
    'between': 'arasındaki',
    'right': 'doğru',
    'seemed': 'göründüğü',
    'effective': 'etkili',
    'solutions': 'çözümler',
    'unexpected': 'beklenmedik',
    'places': 'yerlerden'
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