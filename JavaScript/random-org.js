// ----- Random ausgewählte Organisationen auflisten für Visitor Startseite ----- //

document.addEventListener('DOMContentLoaded', async () => {

    const organizationsSection = document.querySelector('.organizations-section');

    // Dynamisch den 'organizations.js' Modul importieren erst nach dem Laden des DOM
    const { organizations } = await import('/JavaScript/visitor-orglist.js');

    // Funktion zur Auswahl von 3 zufälligen Organisationen
    function getRandomOrganizations(orgs, count = 3) {
        const shuffled = [...orgs].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Dynamisches Rendering von Organisationen
    function renderRandomOrganizations() {
        const randomOrgs = getRandomOrganizations(organizations, 3);

        randomOrgs.forEach(org => {
            const orgElement = `
                <div class="organizations2">
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
                </div>`;
            organizationsSection.innerHTML += orgElement;
        });
    }

    // Initialisierung
    renderRandomOrganizations();
});