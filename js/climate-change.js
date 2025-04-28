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
        "find": "bulmak",
        "changes": "değişiklikler",
        "we": "biz",
        "fulfill": "yerine getirmek",
        "leave": "bırakmak",
        "all": "tüm",
        "for": "için",
        "in": "içinde",
        "my": "benim",
        "twenty-year": "yirmi yıllık",
        "career": "kariyer",
        "as": "olarak",
        "an": "bir",
        "environmental": "çevre",
        "scientist": "bilimci",
        "have": "sahip olmak",
        "closely": "yakından",
        "observed": "gözlemledim",
        "effects": "etkiler",
        "of": "nin",
        "climate": "iklim",
        "change": "değişiklik",
        "recent": "son",
        "years": "yıllar",
        "caused": "neden olan",
        "by": "tarafından",
        "global": "küresel",
        "temperature": "sıcaklık",
        "rise": "artış",
        "become": "olmak",
        "increasingly": "giderek",
        "evident": "belirgin",
        "during": "sırasında",
        "research": "araştırma",
        "arctic": "arktik",
        "region": "bölge",
        "discovered": "keşfedildi",
        "that": "o",
        "rate": "oran",
        "glacier": "buzul",
        "melting": "erime",
        "is": "dır",
        "much": "çok",
        "faster": "daha hızlı",
        "than": "den",
        "previous": "önceki",
        "predictions": "tahminler",
        "this": "bu",
        "situation": "durum",
        "leads": "neden olur",
        "to": "e",
        "rising": "yükselen",
        "sea": "deniz",
        "levels": "seviyeler",
        "and": "ve",
        "deterioration": "bozulma",
        "coastal": "kıyı",
        "ecosystems": "ekosistemler",
        "studies": "çalışmalar",
        "rainforests": "yağmur ormanları",
        "south": "güney",
        "america": "amerika",
        "revealed": "ortaya çıkardı",
        "deforestation": "ormansızlaşma",
        "every": "her",
        "year": "yıl",
        "thousands": "binlerce",
        "hectares": "hektar",
        "forest": "orman",
        "disappear": "kaybolmak",
        "contributing": "katkıda bulunuyor",
        "increase": "artış",
        "carbon": "karbon",
        "emissions": "emisyonlar",
        "asia": "asya",
        "rising": "artan",
        "temperatures": "sıcaklıklar",
        "changing": "değişen",
        "rainfall": "yağış",
        "patterns": "desenler",
        "seriously": "ciddi şekilde",
        "affecting": "etkileyen",
        "agricultural": "tarımsal",
        "systems": "sistemler",
        "farmers": "çiftçiler",
        "are": "dir",
        "forced": "zorlanmak",
        "change": "değiştirmek",
        "traditional": "geleneksel",
        "farming": "tarım",
        "methods": "yöntemler",
        "which": "hangi",
        "threatens": "tehdit eder",
        "food": "gıda",
        "security": "güvenlik",
        "europe": "avrupa",
        "frequency": "sıklık",
        "intensity": "şiddet",
        "extreme": "aşırı",
        "weather": "hava durumu",
        "events": "olaylar",
        "increasing": "artıyor",
        "floods": "seller",
        "droughts": "kuraklıklar",
        "heatwaves": "sıcak dalgaları",
        "putting": "baskı yapıyor",
        "pressure": "baskı",
        "on": "üzerinde",
        "communities": "topluluklar",
        "infrastructure": "altyapı",
        "highlights": "vurgular",
        "need": "ihtiyaç",
        "cities": "şehirler",
        "adapt": "uyum sağlamak",
        "solutions": "çözümler",
        "measures": "önlemler",
        "such": "gibi",
        "as": "olarak",
        "transitioning": "geçiş yapmak",
        "renewable": "yenilenebilir",
        "energy": "enerji",
        "sources": "kaynaklar",
        "improving": "geliştirmek",
        "efficiency": "verimlilik",
        "developing": "geliştirmek",
        "sustainable": "sürdürülebilir",
        "transportation": "ulaşım",
        "must": "gereklidir",
        "be": "olmak",
        "taken": "alınmış",
        "additionally": "ek olarak",
        "individual": "bireysel",
        "societal": "toplumsal",
        "behaviors": "davranışlar",
        "great": "büyük",
        "importance": "önem",
        "future": "gelecek",
        "generations": "nesiller",
        "livable": "yaşanabilir",
        "world": "dünya",
        "leaving": "bırakmak",
        "responsibilities": "sorumluluklar",
        "fulfilled": "yerine getirilmek",
        "combating": "mücadele",
        "only": "sadece",
        "possible": "mümkün",
        "through": "aracılığıyla",
        "international": "uluslararası",
        "cooperation": "işbirliği",
        "decisive": "kararlı",
        "measures": "önlemler"
    
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