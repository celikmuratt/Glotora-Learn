// Initialize AOS
AOS.init({
    duration: 1000,
    offset: 100,
    once: true,
    easing: 'ease-in-out'
});

// Mobile Menu Toggle
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
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Parallax Effect for Shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Ripple Effect for Buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add Ripple Effect Styles
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Image Loading Animation
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
        this.style.transform = 'translateY(0)';
    });
});

// Hover Effect for Feature Cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Hover Effect for Steps
document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    step.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Stats Counter Animation
const stats = document.querySelectorAll('.stat-number');
const progressBars = document.querySelectorAll('.progress-bar');

const animateStats = () => {
    stats.forEach((stat, index) => {
        const isPercentage = stat.textContent.startsWith('%');
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        let current = 0;
        const increment = target / 100;
        const duration = 2000; // 2 seconds
        const interval = duration / 100;

        const updateStat = () => {
            current += increment;
            if (current < target) {
                stat.textContent = isPercentage ? '%' + Math.round(current) : '+' + Math.round(current);
                setTimeout(updateStat, interval);
            } else {
                stat.textContent = isPercentage ? '%' + target : '+' + target;
                progressBars[index].style.width = '100%';
            }
        };

        updateStat();
    });
};

// Intersection Observer for Stats
const statsSection = document.querySelector('.hero-stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// Search Box Focus Effect
const searchInput = document.querySelector('.search-box input');
if (searchInput) {
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = 'var(--shadow-2)';
        this.parentElement.style.borderColor = 'var(--accent-color)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = 'none';
        this.parentElement.style.borderColor = 'rgba(44, 62, 80, 0.1)';
    });
}

// Language Switch Animation
const langSwitch = document.querySelector('.lang-switch');
if (langSwitch) {
    langSwitch.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Add hover effect to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Chat Bot Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.querySelector('.chat-toggle');
    const chatContainer = document.querySelector('.chat-container');
    const closeChat = document.querySelector('.close-chat');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input textarea');
    const sendButton = document.querySelector('.chat-input button');
    const chatBadge = document.querySelector('.chat-badge');

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.add('active');
        chatBadge.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });

    // Handle message sending
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 1000);
        }
    }

    // Add message to chat
    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Get bot response based on user message
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Basic response patterns
        if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam')) {
            return 'Merhaba! Size nasıl yardımcı olabilirim?';
        }
        else if (lowerMessage.includes('nasılsın')) {
            return 'İyiyim, teşekkür ederim! Siz nasılsınız?';
        }
        else if (lowerMessage.includes('çeviri') || lowerMessage.includes('translate')) {
            return 'Çeviri yapmak için sayfanın üst kısmındaki çeviri bölümünü kullanabilirsiniz. Size yardımcı olmamı ister misiniz?';
        }
        else if (lowerMessage.includes('yardım') || lowerMessage.includes('help')) {
            return 'Size yardımcı olmaktan mutluluk duyarım! Hangi konuda yardıma ihtiyacınız var?';
        }
        else if (lowerMessage.includes('teşekkür') || lowerMessage.includes('thanks')) {
            return 'Rica ederim! Başka bir konuda yardıma ihtiyacınız olursa bana sorabilirsiniz.';
        }
        else {
            return 'Üzgünüm, mesajınızı tam olarak anlayamadım. Lütfen başka bir şekilde ifade eder misiniz?';
        }
    }

    // Event listeners for sending messages
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Auto-resize textarea
    chatInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
}); 