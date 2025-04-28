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
        
        // Identity related questions
        if (lowerMessage.match(/(kimsin|kimsin sen|sen nesin|what are you|who are you)/)) {
            return 'Ben Glotora\'nın yapay zeka destekli asistanıyım. İngilizce öğrenme yolculuğunuzda size yardımcı olmak için tasarlandım. Çeviri, kelime öğrenme, dilbilgisi ve daha birçok konuda size destek olabilirim.';
        }
        
        // Creator related questions
        if (lowerMessage.match(/(seni kim yaptı|kim yaptı seni|who created you|who made you|yapay zeka mısın|ai|artificial intelligence)/)) {
            return 'Ben Glotora ekibi tarafından geliştirilen bir yapay zeka asistanıyım. Amacım, İngilizce öğrenme sürecinizi daha eğlenceli ve etkili hale getirmek. Sürekli öğreniyor ve gelişiyorum, böylece size daha iyi yardımcı olabiliyorum.';
        }
        
        // Capability related questions
        if (lowerMessage.match(/(neler yapabilirsin|ne yapabilirsin|what can you do|abilities|özellikler)/)) {
            return 'Size şu konularda yardımcı olabilirim:\n1. İngilizce çeviri yapma\n2. Kelime öğrenme önerileri\n3. Dilbilgisi konularında yardım\n4. Seviyenize uygun hikaye önerileri\n5. İngilizce öğrenme stratejileri\n6. Genel sorularınızı yanıtlama\nHangi konuda yardıma ihtiyacınız var?';
        }
        
        // Greetings
        if (lowerMessage.match(/(merhaba|selam|hey|hi|hello)/)) {
            return 'Merhaba! Ben Glotora asistanıyım. İngilizce öğrenme konusunda size yardımcı olmaktan mutluluk duyarım. Ne yapmak istersiniz?';
        }
        
        // How are you
        if (lowerMessage.match(/(nasılsın|naber|naberler|how are you)/)) {
            return 'İyiyim, teşekkür ederim! Siz nasılsınız? İngilizce öğrenme yolculuğunuzda size nasıl yardımcı olabilirim?';
        }
        
        // Translation related
        if (lowerMessage.match(/(çeviri|translate|çevirmek|translation)/)) {
            return 'Çeviri yapmak için sayfanın üst kısmındaki çeviri bölümünü kullanabilirsiniz. Size çeviri konusunda yardımcı olmamı ister misiniz?';
        }
        
        // Help requests
        if (lowerMessage.match(/(yardım|help|nasıl|how to|öğrenmek|learn)/)) {
            if (lowerMessage.includes('ingilizce')) {
                return 'İngilizce öğrenmek için size birkaç öneri sunabilirim:\n1. Hikayeler bölümünden seviyenize uygun hikayeler okuyun\n2. Çeviri aracını kullanarak pratik yapın\n3. Her gün yeni kelimeler öğrenin\nHangi konuda daha detaylı bilgi istersiniz?';
            }
            return 'Size yardımcı olmaktan mutluluk duyarım! Hangi konuda yardıma ihtiyacınız var? İngilizce öğrenme, çeviri yapma veya başka bir konuda yardımcı olabilirim.';
        }
        
        // Stories related
        if (lowerMessage.match(/(hikaye|story|hikayeler|stories)/)) {
            return 'Hikayeler bölümünde her seviyeye uygun, eğlenceli ve öğretici hikayeler bulabilirsiniz. Hikayeleri okurken hem İngilizce pratik yapabilir hem de yeni kelimeler öğrenebilirsiniz. Hikayeler bölümüne gitmek ister misiniz?';
        }
        
        // Vocabulary related
        if (lowerMessage.match(/(kelime|vocabulary|words|vocab)/)) {
            return 'Kelime öğrenmek için birkaç önerim var:\n1. Hikayeleri okuyarak bağlam içinde kelimeler öğrenin\n2. Her gün yeni kelimeler yazın ve tekrar edin\n3. Çeviri yaparken bilmediğiniz kelimeleri not alın\nKelime öğrenme konusunda başka öneriler ister misiniz?';
        }
        
        // Grammar related
        if (lowerMessage.match(/(dilbilgisi|grammar|gramer|tenses)/)) {
            return 'Dilbilgisi öğrenmek için hikayelerimizdeki örnekleri inceleyebilirsiniz. Her hikaye, belirli dilbilgisi yapılarını içerecek şekilde hazırlanmıştır. Hangi dilbilgisi konusunda yardıma ihtiyacınız var?';
        }
        
        // Level related
        if (lowerMessage.match(/(seviye|level|beginner|intermediate|advanced)/)) {
            return 'Glotora\'da her seviyeye uygun içerikler bulabilirsiniz:\n- Başlangıç (A1-A2)\n- Orta (B1-B2)\n- İleri (C1-C2)\nHangi seviyede olduğunuzu söylerseniz, size uygun içerikler önerebilirim.';
        }
        
        // Thanks
        if (lowerMessage.match(/(teşekkür|thanks|thank you|sağol|eyvallah)/)) {
            return 'Rica ederim! Başka bir konuda yardıma ihtiyacınız olursa bana sorabilirsiniz. İngilizce öğrenme yolculuğunuzda size yardımcı olmaktan mutluluk duyarım!';
        }
        
        // Goodbye
        if (lowerMessage.match(/(görüşürüz|hoşçakal|bye|goodbye|güle güle)/)) {
            return 'Görüşmek üzere! İngilizce öğrenme yolculuğunuzda başarılar dilerim. Tekrar yardıma ihtiyacınız olursa buradayım!';
        }
        
        // Default response
        return 'Üzgünüm, mesajınızı tam olarak anlayamadım. Lütfen başka bir şekilde ifade eder misiniz? Size şu konularda yardımcı olabilirim:\n- İngilizce öğrenme\n- Çeviri yapma\n- Hikayeler\n- Kelime öğrenme\n- Dilbilgisi';
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