function showPopup(message) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const messageElement = document.getElementById('popup-message');

    messageElement.textContent = message;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.classList.remove('active');
    overlay.classList.remove('active');
}

function confirmDeletion() {
    if (confirm('Bist du sicher, dass du die Organisation löschen möchtest?')) {
        showPopup('Organisation wurde gelöscht!');
    }
}