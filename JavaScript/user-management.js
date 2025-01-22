// ---- Login und Register Management ---- //
// Benutzerdaten speichern und verwalten //

document.addEventListener("DOMContentLoaded", () => {
    // Formular-Handling
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        // Registrierungshandling
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!name || !email || !password) {
                alert("Bitte alle Felder ausfüllen.");
                return;
            }

            // Benutzer speichern
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = users.some((user) => user.email === email);

            if (userExists) {
                alert("Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.");
            } else {
                const newUser = { name, email, password };
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));

                // Automatische Anmeldung nach Registrierung
                sessionStorage.setItem("loggedInUser", JSON.stringify(newUser)); // Speichere die Benutzerdaten in der Session Storage

                alert("Registrierung erfolgreich! Sie werden weitergeleitet.");
                window.location.href = "/Html/landingpage.html"; // Weiterleitung zur Landing Page
            }
        });
    }

    if (loginForm) {
        // Login-Handling
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("Bitte alle Felder ausfüllen.");
                return;
            }

            // Benutzerprüfung
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                // Weiterleitung zur Landing Page
                sessionStorage.setItem("loggedInUser", JSON.stringify(user)); // Speichere die Benutzerdaten
                window.location.href = "/Html/landingpage.html";
            } else {
                alert("E-Mail-Adresse oder Passwort ist falsch.");
            }
        });
    }
});
