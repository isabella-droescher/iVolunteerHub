// Nicht benutze .js

// Punkte- und Levelsystem: Initialisierung
const levelConfig = {
    1: { role: "Novice", maxPoints: 300, badge: "Einsteiger-Badge" },
    2: { role: "Regular", maxPoints: 300, badge: "Organisationsmitglied-Badge" },
    3: { role: "Regular+", maxPoints: 300, badge: "Erfolgs-Badge" },
};

let userProgress = {
    level: 1,
    points: 0,
    role: levelConfig[1].role,
    badges: [],
    profileCompleted: false,
    profileImageUploaded: false,
    friendsInvited: 0,
    tasksCompleted: 0,
    eventsVisited: 0,
};

// Punkte aktualisieren und Levelaufstieg prüfen
function updatePoints(action, pointsToAdd) {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const remainingPoints = document.getElementById("remaining-points");

    // Punkte hinzufügen
    userProgress.points += pointsToAdd;

    // Maximalpunkte des aktuellen Levels
    const currentLevelConfig = levelConfig[userProgress.level];
    const maxPoints = currentLevelConfig.maxPoints;

    // Fortschrittsanzeige aktualisieren
    const progressPercentage = Math.min((userProgress.points / maxPoints) * 100, 100);
    progressBar.style.width = `${progressPercentage}%`;
    progressText.innerText = `${userProgress.points}/${maxPoints} Punkten erreicht`;

    // Prüfen, ob der Benutzer das Level aufsteigt
    if (userProgress.points >= maxPoints) {
        levelUp();
    }

    // Fortschritt speichern
    sessionStorage.setItem("userProgress", JSON.stringify(userProgress));
}

// Levelaufstieg-Funktion
function levelUp() {
    if (userProgress.level < 3) {
        userProgress.level++;
        userProgress.role = levelConfig[userProgress.level].role;
        const newBadge = levelConfig[userProgress.level].badge;
        userProgress.badges.push(newBadge);

        alert(`🎉 Glückwunsch! Du bist auf Level ${userProgress.level} aufgestiegen! 
        Du hast das Abzeichen "${newBadge}" erhalten.`);

        // Zurücksetzen der Punkte für das neue Level
        userProgress.points = 0;

        // Fortschrittsanzeige aktualisieren
        updatePoints(0, 0);
    }
}

// Profil vervollständigen
function completeProfile(event) {
    event.preventDefault();

    if (!userProgress.profileCompleted) {
        userProgress.profileCompleted = true;
        updatePoints("Profilvervollständigung", 30);
        alert("🎉 Profil erfolgreich vervollständigt! +30 Punkte");
    } else {
        alert("Das Profil wurde bereits vervollständigt.");
    }
}

// Profilbild hochladen
function uploadProfileImage(event) {
    if (!userProgress.profileImageUploaded) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImage").src = e.target.result;
            sessionStorage.setItem("profileImage", e.target.result);
            userProgress.profileImageUploaded = true;
            updatePoints("Profilbild hochladen", 20);
            alert("🎉 Profilbild erfolgreich hochgeladen! +20 Punkte");
        };
        reader.readAsDataURL(event.target.files[0]);
    } else {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImage").src = e.target.result;
            sessionStorage.setItem("profileImage", e.target.result);
            userProgress.profileImageUploaded = true;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}

// Freunde einladen
function inviteFriends() {
    userProgress.friendsInvited++;
    updatePoints("Freunde einladen", 10);
    alert("🎉 Freund erfolgreich eingeladen! +10 Punkte");
}

// Aufgaben abschließen (z.B. durch eine Organisation)
function completeTask(pointsForTask) {
    userProgress.tasksCompleted++;
    updatePoints("Aufgabe abschließen", pointsForTask);
    alert(`🎉 Aufgabe abgeschlossen! +${pointsForTask} Punkte`);
}

// Ereignisse besuchen
function visitEvent(pointsForEvent) {
    userProgress.eventsVisited++;
    updatePoints("Ereignis besuchen", pointsForEvent);
    alert(`🎉 Ereignis besucht! +${pointsForEvent} Punkte`);
}

// Benutzerrolle und Fortschritt beim Laden der Seite wiederherstellen
document.addEventListener("DOMContentLoaded", () => {
    const savedProgress = sessionStorage.getItem("userProgress");
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    }
    updatePoints(0, 0);

    // Profilbild laden, falls vorhanden
    const savedImage = sessionStorage.getItem("profileImage");
    if (savedImage) {
        document.getElementById("profileImage").src = savedImage;
    }
});
