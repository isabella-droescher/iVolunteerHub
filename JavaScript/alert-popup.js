function showPopup(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const messageElement = document.getElementById('popup-message');

    messageElement.innerHTML = message;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.classList.remove('active');
    overlay.classList.remove('active');
}

function closePopupwithMessage() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    alert("Facebook Freunde wurden importiert");

    popup.classList.remove('active');
    overlay.classList.remove('active');
}

function confirmDeletion() {
    if (confirm('Bist du sicher, dass du die Organisation löschen möchtest?')) {
        showPopup('Organisation wurde gelöscht!');
    }
}

function showPopupFacebook(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const messageElement = document.getElementById('popup-message');
    const popupFields = document.getElementById('popup-fields');

    // Setze die Nachricht im Popup
    messageElement.innerHTML = message;

    popupFields.innerHTML = '';  // Dies entfernt alle vorherigen Felder

    // Erstelle Beispiel-Eingabefelder
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'E-Mail-Adresse:';

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('placeholder', 'E-Mail-Adresse');

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Passwort:';

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('placeholder', 'Passwort eingeben');
  
    // Füge die Felder zum Popup hinzu
    popupFields.appendChild(emailLabel);
    popupFields.appendChild(emailInput);
    popupFields.appendChild(passwordLabel);
    popupFields.appendChild(passwordInput);

    // Zeige das Popup an
    popup.classList.add('active');
    overlay.classList.add('active');
    
}
