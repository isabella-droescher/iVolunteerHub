const messageList = document.getElementById('messageList');
const MESSAGES_KEY = 'chatMessages';

// Nachrichten laden und anzeigen
const loadMessages = () => {
    const storedMessages = JSON.parse(sessionStorage.getItem(MESSAGES_KEY)) || [];

    // Lösche alle vorherigen Nachrichten
    messageList.innerHTML = '';

    // Zeige nur die letzte Nachricht an
    if (storedMessages.length > 0) {
        const lastMessage = storedMessages[storedMessages.length - 1]; // Letzte Nachricht
        const messageElement = document.createElement('div');
        messageElement.className = 'message';

        // Logo nur für Org-Admin festlegen
        let logo = '/Images/iVolunteerHub_Logo.png';

        // Erstelle das Layout für die letzte Nachricht
        messageElement.innerHTML = `
            <img src="${logo}" alt="Org-Admin">
            <div class="message-content">
                <h3>${lastMessage.sender}</h3>
                <p>${lastMessage.message}</p>
            </div>
            <span class="timestamp">${new Date(lastMessage.timestamp).toLocaleTimeString()}</span>
        `;
        
        // Füge die Nachricht zur Liste hinzu
        messageList.appendChild(messageElement);
    }
};


// Beim Laden der Seite Nachrichten anzeigen
document.addEventListener('DOMContentLoaded', loadMessages);


