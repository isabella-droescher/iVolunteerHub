//---- Nachrichtenfenster Popup Nachricht senden ----- //

// Elemente auswählen
const openChatButton = document.getElementById('openChat');
const chatPopup = document.getElementById('chatPopup');
const closePopupButton = document.getElementById('closePopup');
const sendMessageButton = document.getElementById('sendMessage');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

const MESSAGES_KEY = 'chatMessages';

// Nachrichten laden
const loadMessages = () => {
    const storedMessages = JSON.parse(sessionStorage.getItem(MESSAGES_KEY)) || [];
    chatMessages.innerHTML = '';
    storedMessages.forEach(({ sender, message }) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(messageElement);
    });
};

// Nachricht speichern
const saveMessage = (sender, message) => {
    const storedMessages = JSON.parse(sessionStorage.getItem(MESSAGES_KEY)) || [];
    const timestamp = new Date().toISOString(); 
    storedMessages.push({ sender, message, timestamp });
    sessionStorage.setItem(MESSAGES_KEY, JSON.stringify(storedMessages));
};

// Pop-up öffnen
openChatButton.addEventListener('click', () => {
    chatPopup.style.display = 'flex';
    loadMessages();
});

// Pop-up schließen
closePopupButton.addEventListener('click', () => {
    chatPopup.style.display = 'none';
});

// Nachricht senden
sendMessageButton.addEventListener('click', () => {
    const message = chatInput.value.trim();

    if (message.toLowerCase() === 'del') {
        sessionStorage.removeItem(MESSAGES_KEY); // Lösche alle gespeicherten Nachrichten
        chatInput.value = ''; // Leere das Eingabefeld
        loadMessages();
        return; // Beende die Funktion hier, da wir nichts weiter tun müssen
    }
        saveMessage('Du', message);
        loadMessages();
           
        // Füge mit Verzögerung die Antwort des "Org-Admin" hinzu
        setTimeout(() => {
            // Array mit verschiedenen Bot-Antworten
        const botResponses = [
            'Vielen Dank für deine Nachricht. Wie können wir dir behilflich sein?',
            'Wir haben deine Nachricht erhalten. Wir werden uns in Kürze bei dir melden!',
            'Danke für dein Interesse. Wie können wir dir weiterhelfen?',
            'Falls du fragen zu unserer Organisation hast, stehen wir dir gerne zur Verfügung',
            'Vielen Dank für deine Anfrage. Wir melden uns in Kürze retour?'
        ];

        // Wähle zufällig eine Antwort aus dem Array
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

        saveMessage('Org-Admin', randomResponse);
        loadMessages(); // Lade die Nachrichten nach der Verzögerung
    }, 2000); // 2 Sekunde Verzögerung
    
    chatInput.value = '';

    

});
