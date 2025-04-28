// Initialize AOS
AOS.init({
    duration: 800,
    once: true
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

// Story Filtering
const levelButtons = document.querySelectorAll('.level-btn');
const storyCards = document.querySelectorAll('.story-card');

levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        levelButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const selectedLevel = button.getAttribute('data-level');

        storyCards.forEach(card => {
            if (selectedLevel === 'all' || card.getAttribute('data-level') === selectedLevel) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add hover effect to story cards
storyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 