// Funktion zum Öffnen des Popups
document.getElementById('openInvite').addEventListener('click', function() {
    document.getElementById('invitePopup').style.display = 'block';
});

// Funktion zum Schließen des Popups
document.getElementById('closeInvitePopup').addEventListener('click', function() {
    document.getElementById('invitePopup').style.display = 'none';
});

// Funktion zum Einladen eines Freundes
function sendInvite() {
    var friendEmail = document.getElementById('friendEmail').value;
    var inviteMessages = document.getElementById('inviteMessages');

    if (friendEmail) {
        // Hier könnte die Logik zum Einladen des Freundes hinzugefügt werden
        inviteMessages.innerHTML = "Freundeseinladung wurde an " + friendEmail + " gesendet!";
        document.getElementById('friendEmail').value = ""; // Eingabefeld leeren
    } else {
        inviteMessages.innerHTML = "Bitte gib die E-Mail des Freundes ein ... ";
    }
}

