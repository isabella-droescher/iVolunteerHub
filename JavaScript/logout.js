// --- Alle Session Daten gelöscht nach dem Ausloggen ---- //

function logout() {
    // Lösche die Session-Daten
    sessionStorage.clear();
    
    // Optional: lokale Daten löschen
    //localStorage.clear();

    // Weiterleitung zur Startseite
    window.location.href = "/index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.getElementById("logout-link");

    if (logoutLink) {
        logoutLink.addEventListener("click", (event) => {
            event.preventDefault(); // Verhindert die Standardaktion
            logout(); // Führt die Logout-Logik aus
        });
    }
});
