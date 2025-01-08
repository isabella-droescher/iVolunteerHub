// ---- Abfrage Registrierte Daten im Storage ----- //

document.addEventListener("DOMContentLoaded", () => {
    // Container, um die gespeicherten Benutzerdaten anzuzeigen
    const storedUsersContainer = document.getElementById("stored-users-container");

    // Abfrage der gespeicherten Benutzerdaten aus localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Überprüfen, ob Benutzer gespeichert sind
    if (users.length === 0) {
        storedUsersContainer.innerHTML = "<p>Keine Benutzer im Speicher gefunden.</p>";
    } else {
        // Wenn Benutzer gefunden wurden, diese anzeigen
        const userList = users
            .map(
                (user, index) =>
                    `<li><strong>Benutzer ${index + 1}:</strong> Name: ${user.name}, E-Mail: ${user.email}, Passwort: ${user.password}</li>`
            )
            .join("");

        storedUsersContainer.innerHTML = `
            <h3>Gespeicherte Benutzer:</h3>
            <ul>${userList}</ul>
        `;
    }
});
