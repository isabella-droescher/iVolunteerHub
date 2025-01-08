 // Funktion, um die gespeicherten Daten zu laden und in die Eingabefelder einzufügen
 function loadProfileData() {
    const profileData = JSON.parse(sessionStorage.getItem('profileData')) || {};
    
    // Eingabefelder mit vorhandenen Werten füllen
    document.getElementById('name').value = profileData.name || '';
    document.getElementById('interests').value = profileData.interests || '';
    document.getElementById('skills').value = profileData.skills || '';
    document.getElementById('availability').value = profileData.availability || '';
}

document.addEventListener('DOMContentLoaded', loadProfileData);

// Funktion changeprofil bei vollständigen Profil werden Punkte vergeben, Profildaten gespeichert und beim Dashboard anzeigen 
function saveProfileData(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    // Formularfelder auslesen und trimmen
    const name = document.getElementById("name").value.trim();
    const interests = document.getElementById("interests").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const availability = document.getElementById("availability").value.trim();

    // Bestehende Daten und Fortschritt aus sessionStorage abrufen oder initialisieren
    let profileData = JSON.parse(sessionStorage.getItem("profileData")) || {};
    let userProgress = JSON.parse(sessionStorage.getItem("userProgress")) || {
        points: 0,
        profileCompleted: false,
    };

    // Profilinformationen aktualisieren (auch wenn sie unvollständig sind)
    profileData.name = name || profileData.name || "";
    profileData.interests = interests || profileData.interests || "";
    profileData.skills = skills || profileData.skills || "";
    profileData.availability = availability || profileData.availability || "";

    sessionStorage.setItem("profileData", JSON.stringify(profileData));

    // Prüfen, ob alle Felder ausgefüllt sind
    const allFieldsFilled = name && interests && skills && availability;

    // Punktevergabe nur, wenn das Profil vollständig ausgefüllt wurde und noch keine Punkte vergeben wurden
    if (allFieldsFilled && !userProgress.profileCompleted) {
        userProgress.profileCompleted = true; // Profil als vollständig markieren
        userProgress.points += 30; // Einmalig 30 Punkte hinzufügen
        sessionStorage.setItem("userProgress", JSON.stringify(userProgress));

        alert("🎉 Profil vollständig ergänzt! +30 Punkte");
    } else if (!allFieldsFilled) {
        alert("Das Profil ist noch nicht vollständig. Punkte werden erst vergeben, wenn alle Felder ausgefüllt sind.");
    } else {
        alert("Profil aktualisiert. Punkte wurden bereits vergeben.");
    }

    // Weiterleitung zum Dashboard
    window.location.href = "/Html/dashboard.html";
}

// Event Listener für das Formular hinzufügen
document.getElementById("register-form").addEventListener("submit", saveProfileData);
