// --- Benutzername als persönliche Willkommensgruß ---- //

document.addEventListener("DOMContentLoaded", () => {
    // Benutzer aus dem sessionStorage abrufen
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        // Benutzername anzeigen
        const usernameElement = document.getElementById("username");
        usernameElement.textContent = loggedInUser.name;
    } else {
        // Weiterleitung zur Anmeldeseite, wenn kein Benutzer angemeldet ist
        alert("Bitte melden Sie sich an.");
        window.location.href = "/Html/Visitor/anmelden.html";
    }
});
