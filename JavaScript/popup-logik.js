// ---- Google und Facebook Popup beim Anmelden ----- //

document.addEventListener("DOMContentLoaded", () => {
    // Google-Login-Button und Popup
    const googleButton = document.getElementById("google-login");
    const googlePopup = document.getElementById("google-login-popup");
    const googleCancelPopupButton = document.getElementById("google-cancel-popup");

    // Facebook-Login-Button und Popup
    const facebookButton = document.getElementById("facebook-login");
    const facebookPopup = document.getElementById("facebook-login-popup");
    const facebookCancelPopupButton = document.getElementById("facebook-cancel-popup");

    // Funktion: Popup anzeigen
    function showPopup(popup) {
        popup.classList.remove("hidden");
    }

    // Funktion: Popup schließen
    function closePopup(popup) {
        popup.classList.add("hidden");
    }

    //Google-Button: Popup anzeigen
    if (googleButton) {
    googleButton.addEventListener("click", () => showPopup(googlePopup));
    }

    // Facebook-Button: Popup anzeigen
    if (facebookButton) {
    facebookButton.addEventListener("click", () => showPopup(facebookPopup));
    }

    // Abbrechen-Button für Google-Popup
    if(googleCancelPopupButton){
    googleCancelPopupButton.addEventListener("click", () => closePopup(googlePopup));
    }

    // Abbrechen-Button für Facebook-Popup
    if (facebookCancelPopupButton) {
    facebookCancelPopupButton.addEventListener("click", () => closePopup(facebookPopup));
    }

    // Klick-Handler für Google-Konto
    document.querySelectorAll(".google-account-btn").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const email = button.getAttribute("data-email");

            // Simulierte Speicherung von Benutzerdaten
            const user = { name, email, provider: "Google" };
            sessionStorage.setItem("loggedInUser", JSON.stringify(user));

            // Weiterleitung zur Landingpage
            window.location.href = "/Html/landingpage.html";
        });
    });

    // Klick-Handler für Facebook-Konto
    document.querySelectorAll(".facebook-account-btn").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const email = button.getAttribute("data-email");

            // ---- TODO: Freunde mit Organisaitonen dynamisch ----
             // Simulierte Freundesliste 
             const friendsList = [
                { name: "Anna Schmidt", assignedOrganization: "Freiwillige Feuerwehr" },
                { name: "Berta Schmidt", assignedOrganization: "Tierheim Linz Tiere Tierschutz" },
                { name: "Hans Meister", assignedOrganization: "Freiwillige Feuerwehr" },
                { name: "Herbert Ölz", assignedOrganization: "Die Tafel Österreich Lebensmittel" }
            ];
            // Simulierte Speicherung von Benutzerdaten
            const user = { name, email, provider: "Facebook", friends: friendsList };
            sessionStorage.setItem("loggedInUser", JSON.stringify(user));
          

            // Weiterleitung zur Landingpage
            window.location.href = "/Html/landingpage.html";
        });
    });
});

// Mit Google Account anmelden, Facebook Freunde manuell importieren 
document.addEventListener("DOMContentLoaded", () => {
    // Button für Facebook-Verknüpfung
    const facebookLinkButton = document.getElementById("facebook-link-button");
   
    if (facebookLinkButton){
    facebookLinkButton.addEventListener("click", () => {
        // Simulierte Anmeldung bei Facebook
        const facebookFriends = [
            { name: "Julia Müller", assignedOrganization: "Caritas & Du Sozial Senioren" },
            { name: "Kiara Fischer", assignedOrganization: "Fußball Sportverein Turnier" },
            { name: "Maria Korn", assignedOrganization: "Alpenverein Wanderungen Outdoor" }
        ];

        // Bestehenden Google-Benutzer laden
        const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

        // Sicherstellen, dass ein Benutzer mit Google oder Email eingeloggt ist
        if (loggedInUser.provider !== "Facebook") {
            // Facebook-Freunde hinzufügen
            loggedInUser.friends = facebookFriends;

            // Benutzer mit Freunden speichern
            sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

            // Bestätigung anzeigen
            alert("Facebook-Freunde wurden erfolgreich importiert!");
        } else {
            // Benutzer nicht eingeloggt
            alert("Facebook-Freunde wurden bereits automatisch importiert");
        }
    
    });
}
});


export function renderFacebookFriends(containerId, organization) {
    const friendsContainer = document.getElementById(containerId);
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (loggedInUser && loggedInUser.friends && loggedInUser.friends.length > 0) {
        const matchedFriends = loggedInUser.friends.filter(friend => friend.assignedOrganization === organization.name);

        if (matchedFriends.length > 0) {
            const friendNames = matchedFriends.map(friend => friend.name).join(" und ");
            const verb = matchedFriends.length === 1 ? "ist" : "sind";

            friendsContainer.innerHTML = `
                <img src="/Images/Facebook.png" alt="Facebook Logo">
                <p>${friendNames} ${verb} dieser Organisation beigetreten.</p>
            `;
        } else {
            friendsContainer.innerHTML = `<p>Keine Freunde sind dieser Organisation beigetreten.</p>`;
        }
    } else {
        friendsContainer.innerHTML = `<p>Keine Facebook-Freunde verfügbar. Bitte Facebook verbinden, um Freunde zu importieren.</p>`;
    }
}
