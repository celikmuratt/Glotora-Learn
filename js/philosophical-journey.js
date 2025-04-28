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
    "epistemology": "epistemoloji",
    "boundaries": "sınırları",
    "between": "arasında",
    "and": "ve",
    "ethics": "ahlak",
    "value": "değer",
    "theory": "teorisi",
    "games": "oyunları",
    "meaning": "anlam",
    "communication": "iletişim",
    "academic": "akademik",
    "philosophical": "felsefi",
    "pursuit": "arzusu",
    "given": "verilen",
    "have": "var",
    "come": "gelen",
    "most": "en",
        "during": "sırasında",
        "doctoral": "doktora",
        "studies": "çalışmalar",
        "philosophy": "felsefe",
        "department": "bölümünde",
        "delved": "daldım",
        "into": "için",
        "deep": "derin",
        "reflections": "düşüncelere",
        "on": "üzerine",
        "the": "bir",
        "nature": "doğası",
        "of": "ve",
        "existence": "varoluşun",
        "limits": "sınırları",
        "knowledge": "bilginin",
        "this": "bu",
        "journey": "yolculuk",
        "led": "yönlendirdi",
        "me": "beni",
        "an": "bir",
        "exploration": "keşfe",
        "spanning": "uzanan",
        "from": "itibaren",
        "ancient": "antik",
        "greek": "Yunan",
        "philosophers": "filozoflarından",
        "to": "kadar",
        "modern": "modern",
        "thinkers": "düşünürlere",
        "plato": "Platon",
        "allegory": "mağara",
        "cave": "alegorisi",
        "shaped": "şekillendirdi",
        "my": "benim",
        "fundamental": "temel",
        "questions": "sorularımı",
        "about": "hakkında",
        "perception": "algılanması",
        "reality": "gerçekliğin",
        "as": "gibi",
        "tried": "çalışırken",
        "see": "görmeye",
        "behind": "arkasında",
        "shadows": "gölgelerin",
        "became": "fark ettim",
        "aware": "farkında",
        "own": "kendi",
        "perceptions": "algılarımızın",
        "limitations": "sınırlarını",
        "this": "bu",
        "idea": "düşünce",
        "also": "aynı zamanda",
        "guided": "yön verdi",
        "descartes": "Descartes'in",
        "proposition": "önermesi",
        "i": "ben",
        "think": "düşünüyorum",
        "therefore": "öyleyse",
        "am": "varım",
        "deepened": "derinleştirdi",
        "inquiries": "sorgulamalarımı",
        "into": "hakkındaki",
        "self": "benliğin",
        "the": "doğası",
        "mind": "zihin",
        "body": "beden",
        "dualism": "ikiliği",
        "consciousness": "bilincin",
        "became": "oldu",
        "central": "ana",
        "themes": "temaları",
        "thesis": "tez",
        "kant": "Kant'ın",
        "thoughts": "düşünceleri",
        "reason": "aklın",
        "provided": "sağladı",
        "new": "yeni",
        "perspectives": "perspektifler",
        "possibility": "mümkünlüğü",
        "a": "bir",
        "posteriori": "sonrası",
        "distinction": "ayrımı",
        "helped": "yardımcı oldu",
        "me": "bana",
        "understand": "anlamama",
        "scientific": "bilimsel",
        "nature": "doğasını",
        "nietzsche": "Nietzsche'nin",
        "statement": "söylemi",
        "god": "Tanrı",
        "dead": "öldü",
        "values": "değerlerin",
        "reevaluation": "yeniden",
        "led": "sağladı",
        "question": "sorgulamamı",
        "moral": "ahlaki",
        "foundations": "temellerini",
        "society": "toplumun",
        "inquiry": "sorgulama",
        "added": "ekledi",
        "dimensions": "boyutlar",
        "wittgenstein": "Wittgenstein'ın",
        "theory": "teorisi",
        "games": "oyunları",
        "meaning": "anlam",
        "communication": "iletişim",
        "shaped": "şekillendirdi",
        "language": "dilin",
        "limits": "sınırlarının",
        "thought": "düşüncenin",
        "determined": "belirledi",
        "direction": "yönü",
        "research": "araştırmalarım",
        "journey": "yolculuk",
        "gave": "verdi",
        "not": "değil",
        "only": "sadece",
        "knowledge": "bilgi",
        "but": "ama",
        "also": "aynı zamanda",
        "critical": "eleştirel",
        "thinking": "düşünme",
        "skills": "yetkinlikleri",
        "understood": "anladım",
        "philosophy": "Felsefe",
        "search": "arama",
        "for": "için",
        "answers": "cevaplar",
        "life's": "hayatın",
        "questions": "soruları"
    
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