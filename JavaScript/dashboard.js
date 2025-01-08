// Profilinformationen laden und anzeigen
function loadProfileData() {
    const profileData = JSON.parse(sessionStorage.getItem('profileData'));
    if (profileData) {
        document.querySelector('.profile p:nth-child(2)').innerHTML = `<b>Name:</b> ${profileData.name}`;
        document.querySelector('.profile p:nth-child(3)').innerHTML = `<b>Interessen:</b> ${profileData.interests}`;
        document.querySelector('.profile p:nth-child(4)').innerHTML = `<b>Fähigkeiten:</b> ${profileData.skills}`;
        document.querySelector('.profile p:nth-child(5)').innerHTML = `<b>Verfügbarkeit:</b> ${profileData.availability}`;
    }
}

// Beim Laden der Seite Profilinformationen aktualisieren
document.addEventListener('DOMContentLoaded', loadProfileData);

/* Punkte- und Levelsystem: Initialisierung
const levelConfig = {
    1: { role: "Novice", badge: "Einsteiger-Badge" },
    2: { role: "Regular", badge: "Organisationsmitglied-Badge" },
    3: { role: "Regular+", badge: "Erfolgs-Badge" },
};
*/

// --> Profilbild aktualisieren <---

// Funktion zum Öffnen des Datei-Upload-Felds
function changeProfileImage() {
    document.getElementById('fileInput').click();
}

// Funktion zum Aktualisieren des Profilbilds und Speichern im LocalStorage
function updateProfileImage(event) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result; // Das Bild in Base64
            document.getElementById('profileImage').src = imageData; // Profilbild anzeigen
            
            // Das Bild im sessionStorage speichern
            sessionStorage.setItem('profileImage', imageData);

            // Fortschritt laden oder initialisieren
            let userProgress = initializeProgress();

            // Prüfen, ob das Profilbild schon einmal geändert wurde
            if (!sessionStorage.getItem("profileImageChanged")) {
                // Punkte erhöhen
                userProgress.points += 20; 
                saveProgress(userProgress); // Beispiel: 20 Punkte für das Erstellen des Profilbildes
                sessionStorage.setItem("profileImageChanged", "true"); // Markiere, dass das Profilbild geändert wurde

                updatePoints(0);
            }
        };
        reader.readAsDataURL(event.target.files[0]);  // Bild in Base64 umwandeln
    }
}



// Beim Laden der Seite gespeicherte Punkte und Fortschritt laden
document.addEventListener("DOMContentLoaded", () => {
    updatePoints(0); // Lädt den aktuellen Stand der Punkte aus dem SessionStorage
});


// Beim Laden der Seite das gespeicherte Profilbild laden
window.onload = function() {
    const savedImage = sessionStorage.getItem('profileImage');
    if (savedImage) {
        document.getElementById('profileImage').src = savedImage; // Gespeichertes Bild anzeigen
    } else {
        // Wenn kein Bild gespeichert ist, verwenden wir das Standardbild
        document.getElementById('profileImage').src = '../Images/iVolunteerHub_Logo.png'; 
    }
};


// --> RESET Function <--
//Das Profilbild auf das Standardbild zurücksetzen
//document.getElementById('profileImage').src = '../Images/iVolunteerHub_Logo.png';

// Das Profilbild aus dem LocalStorage löschen
// localStorage.removeItem('profileImage');

// Alle Daten im LocalStorage löschen
// localStorage.clear();

// Fortschritt initialisieren oder laden
function initializeProgress() {
    const defaultProgress = { level: 1, points: 0, maxPoints: 300 };
    const storedProgress = sessionStorage.getItem('userProgress');
    return storedProgress ? JSON.parse(storedProgress) : defaultProgress;
}

// Fortschritt speichern
function saveProgress(userProgress) {
    sessionStorage.setItem('userProgress', JSON.stringify(userProgress));
}

// Punkte und Fortschrittsbalken aktualisieren
function updatePoints(pointsToAdd) {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const remainingPoints = document.getElementById("remaining-points");

    /* Aktuelle Punkte und Level aus SessionStorage laden oder initialisieren
    let userProgress = JSON.parse(sessionStorage.getItem("userProgress")) || {
        level: 1,
        points: 0,
        maxPoints: 300,
    };
    */
    let userProgress = initializeProgress();

    // Punkte hinzufügen
    userProgress.points += pointsToAdd;

    // Fortschrittsbalken berechnen und aktualisieren
    const progressPercentage = Math.min((userProgress.points / userProgress.maxPoints) * 100, 100);
    progressBar.style.width = `${progressPercentage}%`;
    progressText.innerText = `${userProgress.points}/${userProgress.maxPoints} Punkten erreicht`;

    

    // Prüfen, ob das nächste Level erreicht wurde
    if (userProgress.points >= userProgress.maxPoints) {
        levelUp(userProgress); // Funktion für Levelaufstieg
    } else {
        const pointsRemaining = userProgress.maxPoints - userProgress.points;
        remainingPoints.innerText = `Noch ${pointsRemaining} Punkte bis Level ${userProgress.level + 1}`;
    }

    // Fortschritt speichern
   saveProgress(userProgress);
}

// Funktion die auf level 1 zurücksetzt: Level-Abstufung bei Austritt aus allen Gruppen
// Nicht weiter relevant für Onboarding, daher nicht weiter implementiert. 
function downgradeToLevel1() {
    const userProgress = initializeProgress(); // Fortschritt laden oder initialisieren
    userProgress.level = 1;
    //userProgress.points = 0; // Punkte zurücksetzen
    userProgress.maxPoints = 300;

    // Entferne alle Belohnungen/Badges
    sessionStorage.removeItem('rewardedBadges');
    
    // UI aktualisieren
    document.querySelector(".role h2").innerText = `Level ${userProgress.level}`;
    document.querySelector(".role b").innerText = "Novice";
    updatePoints(0); // Fortschritt aktualisieren
    saveProgress(userProgress); // Fortschritt speichern
}


function levelUp(userProgress) {

    // Berechnung: Punkte, die über das Maximum hinausgehen
    const overflowPoints = userProgress.points - levelConfig[userProgress.level]?.maxPoints || 0;

    alert(`🎉 Glückwunsch! Du hast Level ${userProgress.level + 1} erreicht!`);

    // Level und Maximalpunkte erhöhen
    userProgress.level++;

    // Punkte aktualisieren: Differenz übernehmen, falls vorhanden
    userProgress.points = overflowPoints > 0 ? overflowPoints : 0;

   
    // Benutzeroberfläche aktualisieren
    document.querySelector(".role h2").innerText = `Level ${userProgress.level}`;
    document.querySelector(".role b").innerText = `${levelConfig[userProgress.level]?.role || "Regular+"}`;
    updatePoints(0); // UI neu berechnen

      // Fortschritt speichern
      saveProgress(userProgress);
}

// Badges laden
function loadBadges() {
    const badgeContainer = document.querySelector('.badge-container');
    const enteredOrganizations = JSON.parse(sessionStorage.getItem('enteredOrganizations')) || [];

    // Container leeren
    badgeContainer.innerHTML = '';

    // Standard-Badge hinzufügen
    const defaultBadgeElement = document.createElement('div');
    defaultBadgeElement.classList.add('badge');
    defaultBadgeElement.innerHTML = `
        <img src="/Images/einsteiger-badge.svg" alt="Einsteiger Badge">
        <p>Einsteiger Badge</p>
    `;
    badgeContainer.appendChild(defaultBadgeElement);

    // Benutzer-spezifische Badges hinzufügen
    enteredOrganizations.forEach(org => {
        if (org.badge) {
            const badgeElement = document.createElement('div');
            badgeElement.classList.add('badge');
            badgeElement.innerHTML = `
                <img src="${org.badge}" alt="${org.name} Badge">
                <p>${org.name}</p>
            `;
            badgeContainer.appendChild(badgeElement);
        }
    });
}



// Seite initialisieren
document.addEventListener("DOMContentLoaded", () => {
    const userProgress = initializeProgress();

    // UI mit gespeicherten Werten initialisieren
    document.querySelector(".role h2").innerText = `Level ${userProgress.level}`;
    document.querySelector(".role b").innerText = `${levelConfig[userProgress.level]?.role || "Regular+"}`;
    updatePoints(0); // Punkte und Fortschritt aktualisieren

});

// Levelkonfiguration
const levelConfig = {
    1: { role: "Novice", badge: "Einsteiger-Badge" },
    2: { role: "Regular", badge: "Organisationsmitglied-Badge" },
    3: { role: "Regular+", badge: "Erfolgs-Badge" }
};


/* Interessiert an Section */
document.addEventListener('DOMContentLoaded', () => {
    const starSection = document.querySelector('.star-section');
    const starSectionContent = document.createElement('div');
    starSectionContent.classList.add('star-section-content');
    starSection.appendChild(starSectionContent);

    // Markierte Organisationen aus localStorage laden
    const markedOrganizations = JSON.parse(sessionStorage.getItem('starredOrganizations')) || [];

    if (markedOrganizations.length === 0) {
        starSectionContent.innerHTML = '<p>Keine markierten Organisationen vorhanden.</p>';
    } else {
        markedOrganizations.forEach(org => {
            const orgElement = document.createElement('div');
            orgElement.classList.add('organizations');
            
            // HTML-Struktur mit allen Details
            orgElement.innerHTML = `
                <img src="${org.image}" alt="${org.name}" width="${org.imageWidth}" height="${org.imageHeight}" class="organization-image">
                <p>${org.description}</p>
            `;

            starSectionContent.appendChild(orgElement);
        });
    }
});

/* Deine Organisationen Section */
document.addEventListener('DOMContentLoaded', () => {
    const orgSection = document.querySelector('.org-section');
    const orgSectionContent = document.createElement('div');
    orgSectionContent.classList.add('org-section-content');
    orgSection.appendChild(orgSectionContent);

    // Markierte Organisationen aus localStorage laden
    const enteredOrganizations = JSON.parse(sessionStorage.getItem('enteredOrganizations')) || [];
    const rewardedOrganizations = JSON.parse(sessionStorage.getItem('rewardedOrganizations')) || [];
   

    if (enteredOrganizations.length === 0) {
        orgSectionContent.innerHTML = '<p>Keinen Organisationen beigetreten</p>';
        downgradeToLevel1();
    } else {
        enteredOrganizations.forEach(org => {
           
            const orgElem = document.createElement('div');
            orgElem.classList.add('orgs');
            
            // HTML-Struktur mit allen Details
            orgElem.innerHTML = `
                <img src="${org.logo}" alt="${org.name}" width="${org.imageWidth}" height="${org.imageHeight}" class="organization-image">
            `;

            orgSectionContent.appendChild(orgElem);

            // Punkte nur vergeben, wenn Organisation noch nicht belohnt wurde
            if (!rewardedOrganizations.includes(org.name)) {
                updatePoints(300);
                rewardedOrganizations.push(org.name); // Organisation als belohnt markieren
            }
        
        });

         // Aktualisierte belohnte Organisationen in sessionStorage speichern
         sessionStorage.setItem('rewardedOrganizations', JSON.stringify(rewardedOrganizations));
    }

    loadBadges();
    
});

