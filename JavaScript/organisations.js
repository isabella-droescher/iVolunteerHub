// ---- Organisationen dynamisch erstellen für Überblick Organisationen ---- //
// inklusive Stern und Freunde Funktion
// erweiterte Filterung
// Organisationen von '/JavaScript/orglist.js' importiert


import { renderFacebookFriends } from '/JavaScript/popup-logik.js'; // Import der Funktion

document.addEventListener('DOMContentLoaded', async () => {

    const { organizations } = await import('/JavaScript/orglist.js');
    const filterButtons = document.querySelectorAll('.filter-button');
    const searchBar = document.getElementById('search-bar');
    const organizationsSection = document.querySelector('.organizations-section');

    let activeFilter = null; // Aktiver Filter-Status
    let organizationsNew = JSON.parse(sessionStorage.getItem("organizationsNew")) || [];
    
    if (organizationsNew.length > 0) {
        organizationsNew.forEach(newOrg => {
            if (!organizations.some(existingOrg => existingOrg.id === newOrg.id)) {
                organizations.push(newOrg);
            }
        });
    }
    



 // **Organisationen dynamisch rendern**
 // * funktion benötigt --> import { renderFacebookFriends } from '/JavaScript/popup-logik.js'; 

 function renderOrganizations() {
    organizationsSection.innerHTML = ""; // Bestehende Inhalte leeren

    organizations.forEach(org => {
        const orgNameEncoded = encodeURIComponent(org.name);


        /* Prüfen, ob Organisation "betreten" wurde--- 
        sessionStorage.setItem(`organization-entered-${orgData.name}`, "true");
        */
        const isEntered = sessionStorage.getItem(`organization-entered-${org.name}`) === "true";
        const detailsPage = isEntered ? `/Html/organisationdetailE2.html?name=${orgNameEncoded}` : org.detailsPage;
        
    
        const friendsContainerId = `facebook-freunde-${org.name}`; // Dynamischer Container für Freunde
    
        
        const orgElement = `
            <div class="organizations" data-id="${org.id}" data-name="${org.name}" data-marked="${org.marked}" data-category="${org.category}">
                <div class="organization">
                    <a href="${detailsPage}">
                        <img 
                            src="${org.image}" 
                            alt="${org.name}" 
                            style="width: ${org.imageWidth}; height: ${org.imageHeight}; margin-left: 20px;">
                    </a>
                    
                <div>
                    <p>${org.description}</p>
                </div>
                    <div class="fb_star">
                        <div class="star">
                            <img src="/Images/${org.marked ? "star-full.svg" : "star-empty.svg"}" alt="Stern Icon" class="star-icon">
                            <p>${org.marked ? "Interesse gespeichert" : "Interessiert"}</p>
                        </div>
                       
                    </div>
                     <div id="${friendsContainerId }" class="facebook-freunde">
                        <!-- Dynamisch durch renderFacebookFriends befüllt -->
                     </div>
                      </div>
                    
                     <div class="divider">
                        <span class="line"></span>
                    </div>
                </div>
            </div>`;
        organizationsSection.innerHTML += orgElement;

        renderFacebookFriends(friendsContainerId, org);
    });

    // Button zum Erstellen einer neuen Organisation
    const createOrgButton = `
        <div class="create-org-container">
            <button id="create-org-btn">Organisation erstellen</button>
        </div>
    `;
    organizationsSection.innerHTML += createOrgButton;

    // Event Listener für den Button zum Erstellen einer Organisation
    const createOrgBtn = document.getElementById("create-org-btn");
    createOrgBtn.addEventListener("click", () => {
        showCreateOrganizationForm();
    });

}

// Funktion zum Anzeigen des Formulars zur Erstellung einer neuen Organisation
function showCreateOrganizationForm() {
    const formHtml = `
        <div class="create-org-form">
            <h2>Neue Organisation erstellen</h2>
            <form id="organization-form">
                <label for="org-name">Name der Organisation:</label>
                <input type="text" id="org-name" required>

                <label for="org-description">Beschreibung:</label>
                <textarea id="org-description" required></textarea>

                <label for="org-image">Bild URL:</label>
                <input type="text" id="org-image" required>

                <label for="org-category">Kategorie:</label>
                <select id="org-category" required>
                <option value="" disabled selected>Bitte wählen...</option>
                <option value="Sport">Sport</option>
                <option value="Tiere">Tiere</option>
                <option value="Freizeit">Freizeit</option>
                </select>

                <button type="submit">Erstellen</button>
                <button type="button" id="cancel-create">Abbrechen</button>
            </form>
        </div>
    `;

    organizationsSection.innerHTML = formHtml;

    // Event Listener für das Absenden des Formulars
    const form = document.getElementById("organization-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("org-name").value;
        const description = document.getElementById("org-description").value;
        const image = document.getElementById("org-image").value;
        const category = document.getElementById("org-category").value;

        const newOrgId = generateNextOrgId();

        const newOrg = {
            id: newOrgId, // Eindeutige ID (org"fortlaufend")
            name: name,
            description: description,
            image: image,
            category: category,
            imageWidth: "195px",
            imageHeight: "60px",
            marked: false, // Standardmäßig nicht markiert
            detailsPage: `/Html/newOrg.html`
        };

        organizations.push(newOrg); // Neue Organisation zur Liste hinzufügen
        sessionStorage.setItem("organizationsNew", JSON.stringify(organizations));
        renderOrganizations(); // Organisationen neu rendern
    });

    // Event Listener für Abbrechen
    const cancelBtn = document.getElementById("cancel-create");
    cancelBtn.addEventListener("click", () => {
        renderOrganizations(); // Formular verwerfen und die Organisationen neu rendern
    });
}

// Event-Delegation für Sterne
organizationsSection.addEventListener('click', event => {
    const star = event.target.closest('.star');
    if (star) {
        const parentOrganization = star.closest('.organizations');
        const orgId = parentOrganization.getAttribute('data-id');
        toggleStar(orgId);
    }
});

// **Interesse an Organisation toggeln, Status speichern bei Seitenwechsel **
function toggleStar(orgId) {
    const org = organizations.find(o => o.id === orgId);
    
    if (org) {
        org.marked = !org.marked; // Status wechseln
        saveStarredOrganization(org); // Speichern
        renderOrganizations(); // Neu rendern
    }
}

// **Markierte Organisationen speichern, Status beibehalten nach Seitenwechsel **
function saveStarredOrganization(org) {
    const starredOrganizations = organizations.filter(o => o.marked); // Nur markierte
    sessionStorage.setItem('starredOrganizations', JSON.stringify(starredOrganizations));
}

// Funktion zum Ermitteln der höchsten ID und zur Erstellung der nächsten fortlaufenden ID
function generateNextOrgId() {
    // Hole alle IDs der bestehenden Organisationen
    const existingIds = organizations.map(org => parseInt(org.id.replace("org", "")));
    
    // Finde die höchste ID und erhöhe sie um 1
    const nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;  // Falls keine Organisationen vorhanden sind, starte bei 1
    
    return `org${nextId}`;
}

// **Filter anwenden**
function applyFilter(category) {
    const organizationsElements = document.querySelectorAll('.organizations');

    if (activeFilter === category) {
        // Wenn derselbe Filter erneut gewählt wird, deaktivieren
        activeFilter = null;
        organizationsElements.forEach(element => {
            element.style.display = "block"; // Alle anzeigen
        });
        // Filter-Buttons-Status zurücksetzen
        document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
    } else {
        // Neuen Filter aktivieren
        activeFilter = category;
        organizationsElements.forEach(element => {
            const orgId = element.getAttribute('data-id');
            const organization = organizations.find(o => o.id === orgId);
            const isMarked = element.getAttribute('data-marked') === 'true';

            let matchesFilter = false;

            if (category === "Markiert") {
                matchesFilter = isMarked;
            } else if (category === "Freunde") {
                const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
                if (loggedInUser ) {
                    const friends = loggedInUser.friends || [];
                    matchesFilter = friends.some(friend => friend.assignedOrganization === organization.name);
                }
            } else {
                matchesFilter = organization.category === category;
            }

            element.style.display = matchesFilter ? "block" : "none";
        });

        // Filter-Buttons-Status aktualisieren
        document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
        const activeButton = document.querySelector(`.filter-button[data-category="${category}"]`);
        if (activeButton) activeButton.classList.add('active'); // Aktiven Button hervorheben
    }
}

// **Filter-Buttons**
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        applyFilter(category); // Filter anwenden
    });
});

// **Suchfunktion**
searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    organizations.forEach(org => {
        const element = document.querySelector(`.organizations[data-id="${org.id}"]`);
        const matchesSearch = org.name.toLowerCase().includes(searchTerm);
        element.style.display = matchesSearch ? "block" : "none";
    });
});

// **Markierungen beim Laden wiederherstellen**
function restoreStarredStatus() {
    const starredOrganizations = JSON.parse(sessionStorage.getItem('starredOrganizations')) || [];
    starredOrganizations.forEach(savedOrg => {
        const org = organizations.find(o => o.id === savedOrg.id);
        if (org) org.marked = true;
    });
}

// **Initialisierung**
restoreStarredStatus();
renderOrganizations();
});