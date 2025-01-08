// --- Dynamische Organisationen Liste Visitor Ansicht ----- //
// --- Liste von /JavaScript/visitor-orglist.js importiert ----- //

document.addEventListener('DOMContentLoaded', async () => {
    // Dynamisch den 'organizations' Modul importieren erst nach dem Laden des DOM
    const { organizations } = await import('/JavaScript/visitor-orglist.js');

    const filterButtons = document.querySelectorAll('.filter-button');
    const searchBar = document.getElementById('search-bar');
    const organizationsSection = document.querySelector('.organizations-section');

    

    let activeFilter = null; // Globale Variable für den aktiven Filter


 // **Organisationen dynamisch rendern**
 function renderOrganizations() {
    organizationsSection.innerHTML = ""; // Bestehende Inhalte leeren

    organizations.forEach(org => {
    
        const orgElement = `
            <div class="organizations2" data-id="${org.id}" data-name="${org.name}" data-marked="${org.marked}" data-category="${org.category}">
                <div class="organization">
                    <a href="${org.detailsPage}">
                        <img 
                            src="${org.image}" 
                            alt="${org.name}" 
                            style="width: ${org.imageWidth}; height: ${org.imageHeight}; margin-left: 20px;">
                    </a>
                    
                    <div>
                        <p>${org.description}</p>
                    </div>

                 <div class="divider">
                        <span class="line"></span>
                    </div>
                </div>
            </div>`;
        organizationsSection.innerHTML += orgElement;
    });
}

// **Filter anwenden**
function applyFilter(category) {
    const organizationsElements = document.querySelectorAll('.organizations2');

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
            const orgCategory = element.getAttribute('data-category');
            const isMarked = element.getAttribute('data-marked') === 'true';

            // Filter anwenden
            const matchesCategory = category === "Markiert" ? isMarked : orgCategory === category;
            element.style.display = matchesCategory ? "block" : "none";
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

// **Suchfunktion TODO: Fehlermeldung aber nur bei Visitor
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