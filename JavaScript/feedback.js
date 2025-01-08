// Feedback Formular Dashboard
 // Pinnt Feedback und zeigt es an
 document.getElementById('pin-feedback').addEventListener('click', () => {
    const author = document.getElementById('author-input').value;
    const organization = document.getElementById('organization-input').value;
    const feedback = document.getElementById('feedback-input').value;

    // Überprüfen, ob alle Felder ausgefüllt sind
    if (author.trim() && organization.trim() && feedback.trim()) {
        const feedbackData = {
            author,
            organization,
            feedback,
            date: new Date().toLocaleDateString()
        };

        // Holen der bestehenden angepinnten Feedbacks aus sessionStorage
        let pinnedFeedbacks = JSON.parse(sessionStorage.getItem('pinnedFeedbacks')) || [];

        // Neues Feedback zur Liste hinzufügen
        pinnedFeedbacks.push(feedbackData);

        // Speichern der erweiterten Liste im sessionStorage
        sessionStorage.setItem('pinnedFeedbacks', JSON.stringify(pinnedFeedbacks));

        // Anzeige der angepinnten Feedbacks aktualisieren
        displayPinnedFeedbacks();

        // Leert die Eingabefelder nach dem Anpinnen
        document.getElementById('author-input').value = '';
        document.getElementById('organization-input').value = '';
        document.getElementById('feedback-input').value = '';
    } else {
        alert('Bitte füllen Sie alle Felder aus, bevor Sie anpinnen.');
    }
});

// Funktion zur Anzeige aller angepinnten Feedbacks
function displayPinnedFeedbacks() {
    const pinnedFeedbacks = JSON.parse(sessionStorage.getItem('pinnedFeedbacks')) || [];
    const feedbackList = document.getElementById('pinned-feedback-list');
    
    // Leert den angepinnten Bereich, um die aktuellen Feedbacks anzuzeigen
    feedbackList.innerHTML = '';

    if (pinnedFeedbacks.length === 0) {
        feedbackList.innerHTML = '<p>Es gibt noch keine angepinnten Feedbacks.</p>';
    }

    pinnedFeedbacks.forEach(feedbackData => {
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('pinned-feedback-item');

        feedbackItem.innerHTML = `
            <div class="header">
                <span class="date">[${feedbackData.date}]</span>
                <span class="author">${feedbackData.author}</span>
                <span class="organization">(${feedbackData.organization})</span>
                <span>hat ein Feedback abgegeben:</span>
            </div>
            <p class="message">${feedbackData.feedback}</p>
        `;
        feedbackList.appendChild(feedbackItem);
    });
}

// Lädt die angepinnten Feedbacks aus sessionStorage, wenn die Seite geladen wird
document.addEventListener('DOMContentLoaded', () => {
    displayPinnedFeedbacks();
});