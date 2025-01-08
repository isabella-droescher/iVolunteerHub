// Skript Detailseite Daten 

const organisations = {
    "Freiwillige Feuerwehr": {
        logo: "/Images/feuerwehr.png",
        name: "Freiwillige Feuerwehr",
        badge: "/Images/feuerwehr-badge.svg",
        description: `Die Freiwillige Feuerwehr ist eine Organisation, die sich aus 
                ehrenamtlichen Mitgliedern zusammensetzt. Diese 
                Bürgerinnen und Bürger stellen ihre Zeit und Fähigkeiten
                 zur Verfügung, um ihre Gemeinschaft vor Bränden, Unfällen 
                 und anderen Notfällen zu schützen. Neben der Brandbekämpfung 
                 gehören auch technische Hilfeleistungen, wie die Rettung bei 
                 Verkehrsunfällen oder die Unterstützung bei Naturkatastrophen, 
                 zu ihren Aufgaben. Freiwillige Feuerwehren sind in vielen 
                 Gemeinden fest verankert und spielen eine entscheidende Rolle 
                 im Zivilschutz.`,

        mission: `Die Mission der Freiwilligen Feuerwehr besteht darin, Menschenleben 
                zu retten, Sachwerte zu schützen und die Umwelt in Notfällen zu 
                bewahren. Sie setzen sich für die Sicherheit und das Wohl der 
                Gemeinschaft ein und bieten schnelle, effiziente Hilfe in 
                Krisensituationen. Zudem engagieren sie sich in der Prävention 
                durch Aufklärung und Schulungen in Brandschutz und Erste Hilfe.`,

        location: "Feuerwehrhaus Gallneukirchen",
        events: [
            { name: "Tag der offenen Tür", date: "20.05.2025" },
            { name: "Brandschutzerklärung in Schulen", date: "21.05.2025" },
            { name: "Feuerwehrfest", date: "22.05.2025" }, 
            { name: "Übung für Katastrophenschutz", date: "23.05.2025" } 
        ],
        tasks: [
            { title: "Aufgabe 1", description: "Brandbekämpfung und Rettungseinsätze" },
            { title: "Aufgabe 2", description: "Technische Hilfeleistung bei Unfällen und Naturkatastrophen" },
            { title: "Aufgabe 3", description: "Wartung und Pflege von Ausrüstung und Fahrzeugen" },
            { title: "und weitere...", description: "Organisation beitreten und mehr erfahren" }
        ],
        tasks2: [
            { id: 1, orgId: 'org1', title: "Aufgabe 1", description: "Brandbekämpfung und Rettungseinsätze" , points: "+200 Punkte pro Einsatz" },
            { id: 2, orgId: 'org1', title: "Aufgabe 2", description: "Technische Hilfeleistung bei Unfällen und Naturkatastrophen", points: "+200 Punkte pro Einsatz" },
            { id: 3, orgId: 'org1', title: "Aufgabe 3", description: "Durchführung von Brandschutzaufklärung und Schulungen in der Gemeinde", points: "+90 Punkte" },
            { id: 4, orgId: 'org1', title: "Aufgabe 4", description: "Wartung und Pflege von Ausrüstung und Fahrzeugen", points: "+80 Punkte"}
        ]
    },
    "Caritas & Du Sozial Senioren": {
        logo: "/Images/caritas.png",
        name: "Caritas & Du",
        badge: "/Images/caritas_badge.svg",
        description: `Caritas & Du ist eine Organisation, die sich der sozialen Unterstützung 
            und Förderung von Senioren, Menschen mit Behinderungen sowie bedürftigen 
            Familien und Einzelpersonen widmet. Sie bietet eine breite Palette an 
            Dienstleistungen, darunter Beratung, Betreuung und Freizeitaktivitäten. 
            Darüber hinaus organisiert Caritas & Du auch Projekte zur Integration von 
            Flüchtlingen und zur Förderung der sozialen Teilhabe.
            `,

        mission: `
            Die Mission von Caritas & Du ist es, Menschen in schwierigen Lebenslagen 
            zu unterstützen, soziale Integration zu fördern und durch freiwillige 
            Helfer Gemeinschaft zu schaffen. Die Organisation setzt sich für mehr 
            Solidarität und Hilfsbereitschaft in der Gesellschaft ein.
        `,
        location: "Caritas & Du Zentrale Linz",
        events: [
            { name: "Weihnachtsessen für Senioren", date: "20.04.2025" },
            { name: "Tag der offenen Tür im Caritas-Zentrum", date: "21.04.2025" },
            { name: "Spendenaktion für bedürftige Familien",date: "22.04.2025" },
            { name: "Workshop für ehrenamtliche Helfer", date: "23.04.2025" },
        ],
        tasks: [
            { title: "Aufgabe 1", description: "Betreuung von Senioren und Hilfestellung bei alltäglichen Aufgaben" },
            { title: "Aufgabe 2", description: "Organisation und Durchführung von Freizeitaktivitäten für Senioren" },
            { title: "Aufgabe 3", description: "Spendenaktionen koordinieren und durchführen" },
            { title: "und weitere...", description: "Organisation beitreten und mehr erfahren" }
        ],
        tasks2: [
            { id: 1, orgId: 'org2', title: "Aufgabe 1", description: "Betreuung von Senioren und Hilfestellung bei alltäglichen Aufgaben", points: "+30 Punkte pro Betreuungseinheit"},
            { id: 2, orgId: 'org2', title: "Aufgabe 2", description: "Organisation und Durchführung von Freizeitaktivitäten für Senioren", points: "+60 Punkte pro Aktivität" },
            { id: 3, orgId: 'org2', title: "Aufgabe 3", description: "Spendenaktionen koordinieren und durchführen", points: "+20 Punkte pro Aktion" },
            { id: 4, orgId: 'org2', title: "Aufgabe 4", description: "Hilfe bei der Integration von Flüchtlingen und Migranten", points: "+100 Punkte pro Projekt" },
            { id: 5, orgId: 'org2', title: "Aufgabe 5", description: "Beratung und Unterstützung von Menschen in finanziellen Notlagen", points: "+80 Punkte pro Beratung" }
        ]
    },
    "Die Tafel Österreich Lebensmittel": {
            logo: "/Images/tafel.png",
            name: "Tafel Österreich",
            badge: "/Images/tafel_badge.svg",
            description: `Die Tafel Österreich ist eine gemeinnützige Organisation, 
                            die sich dafür einsetzt, überschüssige Lebensmittel 
                            zu sammeln und an Bedürftige weiterzugeben. Durch die 
                            Zusammenarbeit mit Supermärkten, Bauernhöfen und 
                            anderen Partnern wird ein wertvoller Beitrag zur 
                            Bekämpfung von Armut und Lebensmittelverschwendung 
                            geleistet. Die Tafel Österreich hilft dabei, Menschen 
                            in schwierigen Lebenssituationen zu unterstützen und 
                            sorgt dafür, dass qualitativ hochwertige Nahrungsmittel 
                            nicht weggeworfen werden.`,
    
            mission: `Die Mission der Tafel Österreich ist es, Bedürftigen 
                        durch die Verteilung von Lebensmittelspenden zu helfen 
                        und gleichzeitig einen aktiven Beitrag gegen 
                        Lebensmittelverschwendung zu leisten. Sie engagiert sich 
                        für eine solidarische Gesellschaft und setzt auf das 
                        Ehrenamt, um die Ressourcen der Gemeinschaft zu bündeln 
                        und effektiv zu nutzen.`,
    
            location: "Zentrale in Wien, verschiedene Ausgabestellen in ganz Österreich",
            events: [
                { name: "Lebensmittelausgabe für Bedürftige", date: "Jeden Fr,10:00-12:00" },
                { name: "Spendenaktion - Lebensmittel für die Tafel", date: "15.05.2025" },
                { name: "Tafel-Tag der offenen Tür", date: "10.06.2025" }
            ],
            tasks: [
                { title: "Aufgabe 1", description: "Lebensmittel sammeln und sortieren" },
                { title: "Aufgabe 2", description: "Lebensmittel an Bedürftige verteilen" },
                { title: "Aufgabe 3", description: "Organisation von Spendenaktionen und Veranstaltungen" },
                { title: "und weitere...", description: "Organisation beitreten und mehr erfahren" }
            ],
            tasks2: [
                { id: 1, orgId: 'org3', title: "Aufgabe 1", description: "Lebensmittel sammeln und sortieren", points: "+100 Punkte pro Einsatz" },
                { id: 2, orgId: 'org3', title: "Aufgabe 2", description: "Lebensmittel an Bedürftige verteilen", points: "+150 Punkte pro Einsatz" },
                { id: 3, orgId: 'org3', title: "Aufgabe 3", description: "Organisation von Spendenaktionen und Veranstaltungen", points: "+120 Punkte" },
                { id: 4, orgId: 'org3', title: "Aufgabe 4", description: "Aufklärung über Lebensmittelverschwendung und Ernährung", points: "+90 Punkte" }
            ]
        },

"Österreichisches Rotes Kreuz Rettung": {
        logo: "/Images/rotes-kreuz.png",
        name: "Österreichisches Rotes Kreuz",
        badge: "/Images/rotes-kreuz_badge.svg",
        description: `Das Österreichische Rote Kreuz ist eine der bekanntesten 
                        humanitären Organisationen weltweit. Es bietet eine 
                        Vielzahl von Dienstleistungen an, wie Notfallrettung, 
                        Katastrophenschutz, Blutspendedienste, soziale Dienste 
                        und internationale Hilfe. Das Rote Kreuz ist in vielen 
                        Bereichen tätig, um Leben zu retten und die Gesellschaft 
                        zu unterstützen, sei es in akuten Notfällen oder in der 
                        langfristigen Betreuung von hilfsbedürftigen Menschen.`,

        mission: `Die Mission des Österreichischen Roten Kreuzes ist es, Menschen 
                    in Not zu helfen, Leben zu retten und die Würde von 
                    hilfsbedürftigen Menschen zu wahren. Die Organisation setzt 
                    sich für den Schutz von Leben und Gesundheit ein und engagiert 
                    sich weltweit für humanitäre Hilfe. Sie verfolgt die Grundsätze 
                    des Roten Kreuzes, wie Neutralität, Unparteilichkeit und 
                    Freiwilligkeit.`,

        location: "Zentrale in Wien, zahlreiche regionalen Organisationen",
        events: [
            { name: "Blutspendeaktion", date: "15.12.2024" },
            { name: "Erste-Hilfe-Kurs", date: "20.01.2025" },
            { name: "Internationaler Tag der Rotkreuzbewegung", date: "08.05.2025" },
            { name: "Katastrophenhilfe-Übung", date: "01.06.2025" }
        ],
        tasks: [
            { title: "Aufgabe 1", description: "Durchführung von Erste-Hilfe-Kursen" },
            { title: "Aufgabe 2", description: "Katastrophenschutz und -hilfe" },
            { title: "Aufgabe 3", description: "Blutspendeaktionen organisieren" },
            { title: "und weitere...", description: "Organisation beitreten und mehr erfahren" }
        ],
        tasks2: [
            { id: 1, orgId: 'org4', title: "Aufgabe 1", description: "Durchführung von Erste-Hilfe-Kursen", points: "+120 Punkte pro Kurs" },
            { id: 2, orgId: 'org4', title: "Aufgabe 2", description: "Katastrophenschutz und -hilfe", points: "+200 Punkte pro Einsatz" },
            { id: 3, orgId: 'org4', title: "Aufgabe 3", description: "Blutspendeaktionen organisieren", points: "+150 Punkte" },
            { id: 4, orgId: 'org4', title: "Aufgabe 4", description: "Betreuung von Menschen in Notlagen", points: "+100 Punkte" },
            { id: 5, orgId: 'org4', title: "Aufgabe 5", description: "Internationale Hilfe in Krisenregionen", points: "+250 Punkte" }
        ]
    },

"Tierheim Linz Tiere Tierschutz": {
    logo: "/Images/tierheim.png",
    name: "Tierheim Linz",
    badge: "/Images/tierheim_badge.svg",
    description: `Das Tierheim Linz ist eine Organisation, die sich dem Schutz und der 
                    Pflege von verlassenen, misshandelten oder herrenlosen Tieren widmet. 
                    Wir bieten Zuflucht für Tiere, die aus unterschiedlichen Gründen 
                    ihre Heimat verloren haben. Unsere Aufgaben umfassen die Pflege, 
                    Adoption und Rehabilitation von Tieren, um ihnen ein neues Zuhause 
                    zu ermöglichen. Wir engagieren uns außerdem in der Aufklärung über 
                    Tierschutz und die Verantwortung im Umgang mit Tieren.`,

    mission: `Die Mission des Tierheim Linz ist es, Tieren zu helfen, die in Not geraten sind, 
                und ihnen eine zweite Chance auf ein besseres Leben zu geben. Durch 
                Aufklärung, Rettungsaktionen und die Vermittlung von Tieren in verantwortungsvolle 
                Hände tragen wir zur Förderung des Tierschutzes bei. Unser Ziel ist es, 
                das Bewusstsein für den Schutz von Tieren zu schärfen und eine positive 
                Veränderung in der Gesellschaft zu bewirken.`,

    location: "Zentrale in Linz",
    events: [
        { name: "Adoptieren statt kaufen Kampagne", date: "10.02.2025" },
        { name: "Tag der offenen Tür", date: "12.04.2025" },
        { name: "Tierwohl-Workshop", date: "18.06.2025" },
        { name: "Spendenlauf für Tiere", date: "01.08.2025" }
    ],
    tasks: [
        { title: "Aufgabe 1", description: "Pflege und Betreuung von Tieren im Tierheim" },
        { title: "Aufgabe 2", description: "Organisation von Adoptionen und Vermittlungen" },
        { title: "Aufgabe 3", description: "Aufklärungsarbeit über Tierschutz" },
        { title: "und weitere...", description: "Organisation beitreten und mehr erfahren" }
    ],
    tasks2: [
        { id: 1, orgId: 'org5', title: "Aufgabe 1", description: "Pflege und Betreuung von Tieren im Tierheim", points: "+50 Punkte" },
        { id: 2, orgId: 'org5', title: "Aufgabe 2", description: "Organisation von Adoptionen und Vermittlungen", points: "+100 Punkte pro Adoption" },
        { id: 3, orgId: 'org5', title: "Aufgabe 3", description: "Aufklärungsarbeit über Tierschutz", points: "+80 Punkte pro Veranstaltung" },
        { id: 4, orgId: 'org5', title: "Aufgabe 4", description: "Spendenaktionen und Fundraising", points: "+120 Punkte pro Event" },
        { id: 5, orgId: 'org5', title: "Aufgabe 5", description: "Rettungsaktionen für misshandelte Tiere", points: "+200 Punkte pro Einsatz" }
    ]
}, 

"Fußball Sportverein Turnier": {
    logo: "/Images/sportverein.png",
    name: "Fußball-Sportverein",
    badge: "/Images/sportverein_badge.svg",
    description: `Der Fußball Sportverein in Traun ist ein dynamischer und engagierter Verein, 
                    der sich der Förderung des Fußballsports auf allen Ebenen widmet. Vom 
                    Nachwuchsbereich bis hin zu den Erwachsenenmannschaften bieten wir allen 
                    Altersgruppen die Möglichkeit, sich sportlich zu betätigen. Der Verein 
                    organisiert regelmäßig Trainingsspiele, Turniere und verschiedene 
                    Veranstaltungen, um den Teamgeist zu fördern und die sportliche Entwicklung 
                    jedes einzelnen Spielers zu unterstützen.`,

    mission: `Die Mission des Fußball Sportvereins ist es, Menschen jeden Alters für den 
                Fußball zu begeistern, den Sport in der Gemeinschaft zu fördern und 
                talentierte Spieler zu entwickeln. Wir bieten eine Plattform für 
                Wettkampf und Teamarbeit und engagieren uns für die Verbesserung der 
                fußballerischen Fähigkeiten sowie für eine faire und respektvolle 
                Atmosphäre auf und neben dem Spielfeld.`,

    location: "Sportplatz in Traun, Trainingsstätten in der Umgebung",
    events: [
        { name: "Freundschaftsspiel", date: "25.01.2025" },
        { name: "Junioren-Turnier", date: "15.02.2025" },
        { name: "Vereinsinterner Pokalwettbewerb", date: "28.03.2025" },
        { name: "Sommer-Sportfest", date: "10.06.2025" }
    ],
    tasks: [
        { title: "Aufgabe 1", description: "Organisation von Trainingsspielen für alle Altersgruppen" },
        { title: "Aufgabe 2", description: "Planung und Durchführung von Turnieren" },
        { title: "Aufgabe 3", description: "Betreuung der Mannschaften und Spieler" },
        { title: "und weitere...", description: "Organisation beitreten und mehr erfahren" }
    ],
    tasks2: [
        { id: 1, orgId: 'org6',title: "Aufgabe 1", description: "Organisation von Trainingsspielen für alle Altersgruppen", points: "+100 Punkte pro Spiel" },
        { id: 2, orgId: 'org6', title: "Aufgabe 2", description: "Planung und Durchführung von Turnieren", points: "+200 Punkte pro Turnier" },
        { id: 3, orgId: 'org6', title: "Aufgabe 3", description: "Betreuung der Mannschaften und Spieler", points: "+150 Punkte pro Saison" },
        { id: 4, orgId: 'org6', title: "Aufgabe 4", description: "Unterstützung bei Vereinsveranstaltungen und Festen", points: "+120 Punkte pro Event" },
        { id: 5, orgId: 'org6', title: "Aufgabe 5", description: "Förderung von Nachwuchstalenten und Trainings" , points: "+180 Punkte pro Talent" }
    ]
}, 

"Alpenverein Wanderungen Outdoor": {
      logo: "/Images/alpenverein.png",
      name: "Alpenverein",
      badge: "/Images/alpenverein_badge.svg",
      description: "Dieser Verein organisiert Wanderungen, Naturerkundungen und Outdoor-Aktivitäten, die es den Teilnehmern ermöglichen, die Schönheit der Natur zu erleben. Vom gemütlichen Spaziergang bis hin zu anspruchsvollen Bergtouren bieten wir für jedes Fitnesslevel passende Veranstaltungen. Der Verein fördert das Bewusstsein für den Umweltschutz und unterstützt eine nachhaltige Nutzung der Natur.",
      mission: "Die Mission des Alpenvereins ist es, Menschen jeden Alters für das Wandern und die Natur zu begeistern, ihre körperliche und geistige Gesundheit zu fördern und den respektvollen Umgang mit der Umwelt zu lehren. Durch unsere Wanderungen und Outdoor-Aktivitäten möchten wir das Bewusstsein für den Naturschutz schärfen und die Bedeutung der Berge als Kulturgut hervorheben.",
      location: "Zentrale in Innsbruck, zahlreiche regionale Wandergruppen",
      events: [
        { name: "Frühjahrs-Wanderung", date: "28.03.2025" },
        { name: "Sommer-Alpenüberquerung", date: "15.07.2025" },
        { name: "Herbst-Naturerkundung", date: "10.09.2025" },
        { name: "Winterwanderung", date: "20.12.2025" }
      ],
      tasks: [
        { title: "Aufgabe 1", description: "Organisation von Wanderungen für verschiedene Altersgruppen und Schwierigkeitsgrade" },
        { title: "Aufgabe 2", description: "Planung und Durchführung von Naturerkundungs-Touren" },
        { title: "Aufgabe 3", description: "Sicherstellung der Teilnehmerbetreuung und -sicherheit während der Touren" },
        { title: "und weitere...", description: "Organisation beitreten und mehr erfahren" }
      ],
      tasks2: [
        { id: 1, orgId: 'org7', title: "Aufgabe 1", description: "Organisation von Wanderungen für verschiedene Altersgruppen und Schwierigkeitsgrade", points: "+50 Punkte pro Wanderung" },
        { id: 2, orgId: 'org7', title: "Aufgabe 2", description: "Planung und Durchführung von Naturerkundungs-Touren", points: "+70 Punkte pro Tour" },
        {id: 3, orgId: 'org7', title: "Aufgabe 3", description: "Sicherstellung der Teilnehmerbetreuung und -sicherheit während der Touren", points: "+80 Punkte pro Tour" },
        {id: 4, orgId: 'org7',title: "Aufgabe 4", description: "Aufklärung über Umweltschutz und nachhaltige Outdoor-Aktivitäten", points: "+70 Punkte pro Veranstaltung" },
        { id: 5, orgId: 'org7',title: "Aufgabe 5", description: "Förderung der Bergrettung und Sicherheitsmaßnahmen", points: "+100 Punkte pro Einsatz" }
      ]
    }
  }
  

  
// ---- Funktion, um URL-Parameter zu lesen ----
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ----- Organisation aus den Parametern laden ----
const orgName = getQueryParam("name");
const orgData = organisations[orgName];

if (orgData) {
    const enteredOrgName = orgData.name;

    /* Status entered auf true setzen, wenn eine Organisaiton betreten wird */
    // ----- Status prüfen -----
    const enteredStatus = sessionStorage.getItem(`organization-entered-${enteredOrgName}`) === "true";

    // Wenn die Organisation bereits betreten wurde, direkt zur Detailseite 2 weiterleiten
    if (enteredStatus && window.location.pathname === "/Html/organisationdetailE1.html" && window.location.search.includes(`name=${encodeURIComponent(orgName)}`)) {
        window.location.href = `/Html/organisationdetailE2.html?name=${encodeURIComponent(orgName)}`;
      
    }

    // ---- Organisation Name anzeigen -----
    document.getElementById('org-name').textContent = orgData.name;

    // ----- Logo dynamisch einfügen -----
    const logoContainer = document.getElementById('org-logo'); // Dein Container für das Logo
    const logoImg = document.createElement('img');
    logoImg.src = orgData.logo;  // Dynamischer Pfad zum Logo
    logoImg.alt = orgData.name + " Logo";  // Alternativtext
    logoContainer.appendChild(logoImg);  // Logo in den Container einfügen

    // ----- Ereignisse dynamisch einfügen ----- 
    document.getElementById('org-name').textContent = orgData.name;
    document.getElementById('org-description').textContent = orgData.description;
    document.getElementById('org-mission').textContent = orgData.mission;
    document.getElementById('org-location').textContent = orgData.location;

    // ----- Bevorstehende Ereignisse dynamisch einfügen ----- 
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = ""; // Alte Ereignisse löschen
    const currentPage = window.location.pathname.includes("organisationdetailE2") ? 2 : 1;

    if (orgData.events && orgData.events.length > 0) {
        orgData.events.forEach((event) => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('button-item');  // Klasse für das Design beibehalten

            if(currentPage === 1 ) {
            // Lock-Symbol für Seite 1
            const img = document.createElement('img');
            img.src = "/Images/lock.png";
            img.alt = "Lock";
            eventDiv.appendChild(img);

            } else if(currentPage === 2) {
             // Spezifisches Datum für Seite 2
            const spanDate = document.createElement('span');
            spanDate.textContent = event.date; 
            eventDiv.appendChild(spanDate);

            }
            const span = document.createElement('span');
            span.textContent = event.name;
            eventDiv.appendChild(span);
            eventsContainer.appendChild(eventDiv);
        });
    } else {
        const noEvents = document.createElement('p');
        noEvents.textContent = "Keine bevorstehenden Ereignisse verfügbar.";
        eventsContainer.appendChild(noEvents);
    }

    // ----- Aufgaben dynamisch einfügen ----- 
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = ""; // Alte Aufgaben löschen
    let tasksToRender = currentPage === 1 ? orgData.tasks : orgData.tasks2;

    if (tasksToRender && tasksToRender.length > 0) {
        tasksToRender.forEach(task => {
            const taskDiv = document.createElement('div');
        
            const taskTitle = document.createElement('h2');
            taskTitle.textContent = task.title + (task.points ? ` ${task.points}` : "");
    
            const taskDescription = document.createElement('p');
            taskDescription.textContent = task.description;
    
            taskDiv.appendChild(taskTitle);
            taskDiv.appendChild(taskDescription);

             // "Annehmen"-Button nur auf Seite 2
        if (currentPage === 2) {
            const acceptButton = document.createElement('a');
            acceptButton.classList.add('task-container-button'); // Klasse für das Styling
            acceptButton.textContent = "Annehmen";

            // Einzigartige ID für jeden Button basierend auf Index oder Task-ID
            const buttonId = `${task.orgId}-${task.id}`;

            // Lade den gespeicherten Zustand
            const taskAccepted = sessionStorage.getItem(buttonId) === 'true';
            if (taskAccepted) {
                acceptButton.textContent = "Angenommen";
                acceptButton.style.backgroundColor = "#4CAF50"; // Grün
            } else {
                acceptButton.style.backgroundColor = "grey"; // Ursprüngliche Farbe
            }

            acceptButton.addEventListener('click', () => toggleText(buttonId, acceptButton)); // Event hinzufügen
            taskDiv.appendChild(acceptButton);
        }
    
            tasksContainer.appendChild(taskDiv);
        });
    } else {
        const noTasks = document.createElement('p');
        noTasks.textContent = "Keine Aufgaben verfügbar.";
        tasksContainer.appendChild(noTasks);
    }


    // ----- Dynamische Links setzen ----- 
    const orgLink = document.getElementById('org-link');
    const orgNameEncoded = encodeURIComponent(orgName);

    // Überprüfen und setzen der URL für den orgLink
    if (orgLink) {
        orgLink.addEventListener('click', (event) => {
            event.preventDefault(); // Verhindert standardmäßiges Verhalten

            // Organisation als "betreten" markieren
            const enteredOrgName = orgData.name; // Organisation ID aus den Daten holen
            sessionStorage.setItem(`organization-entered-${enteredOrgName}`, "true");

            // Organisation in SessionStorage speichern
            saveOrganizationToDashboard(orgData);
            //renderDashboardOrgList(); !! Auch bei dashboard.js implementiert !!

            // Weiterleitung zur Detailseite 2
            window.location.href = `/Html/organisationdetailE2.html?name=${orgNameEncoded}`;
            alert(`🎉 Glückwunsch! Du hast dir ein Abzeichen und +300 Punkte verdient`);

        });
    } 

    // Überprüfen und Hinzufügen des Event Listeners für den orgLinkReturn
    const orgLinkReturn = document.getElementById('org-link-return');

    if (orgLinkReturn) {
        orgLinkReturn.href = `/Html/organisationdetailE1.html?name=${orgNameEncoded}`; // Die URL setzen

        // Event Listener für den Klick auf orgLinkReturn
        orgLinkReturn.addEventListener('click', (event) => {
            event.preventDefault(); // Verhindert das Standard-Verhalten (Seitenreload)

            // Organisation als "verlassen" markieren
            const enteredOrgName = orgData.name; // Organisation ID aus den Daten holen
            sessionStorage.removeItem(`organization-entered-${enteredOrgName}`);

             // Organisation aus SessionStorage entfernen
            removeOrganizationFromDashboard(orgData);
            //renderDashboardOrgList(); Auch bei dashboard.js implementiert !!
            window.location.href = `/Html/organisationdetailE1.html?name=${orgNameEncoded}`; // Weiterleitung zur Detailseite 1
        });
    } 

} else {
    // Fehlerbehandlung: Organisation nicht gefunden
    document.body.innerHTML = "<h1>Organisation nicht gefunden</h1>";
}

// ----- Funktion: Organisation speichern -----
function saveOrganizationToDashboard(org) {
    let enteredOrganizations = [];
    const storedOrganizations = sessionStorage.getItem('enteredOrganizations');

    if (storedOrganizations) {
        try {
            enteredOrganizations = JSON.parse(storedOrganizations);
        } catch (e) {
            console.error("Fehler beim Parsen von enteredOrganizations:", e);
            enteredOrganizations = [];
        }
    }

    // Prüfen, ob die Organisation bereits existiert
    const exists = enteredOrganizations.some((o) => o.name === org.name);
    if (!exists) {
        // Organisation hinzufügen, wenn sie noch nicht existiert
        enteredOrganizations.push(org);
         // Aktualisierte Organisationen in sessionStorage speichern
    sessionStorage.setItem('enteredOrganizations', JSON.stringify(enteredOrganizations));
   
    }

   
      
}

// ----- Funktion: Organisation entfernen -----
function removeOrganizationFromDashboard(org) {
    let enteredOrganizations = [];
    const storedOrganizations = sessionStorage.getItem('enteredOrganizations');

    if (storedOrganizations) {
        try {
            enteredOrganizations = JSON.parse(storedOrganizations);
        } catch (e) {
            console.error("Fehler beim Parsen von enteredOrganizations:", e);
            enteredOrganizations = [];
        }
    }

    // Organisation anhand der ID oder eines anderen eindeutigen Wertes entfernen
    enteredOrganizations = enteredOrganizations.filter((o) => o.name !== org.name);

    // Aktualisierte Organisationen in sessionStorage speichern
    sessionStorage.setItem('enteredOrganizations', JSON.stringify(enteredOrganizations));
}



/* Auch bei dashboard.js implementiert !! --> nicht sicher ob gebrauch wird
/* function renderDashboardOrgList() {

    const orgSection = document.querySelector('.org-section');
    
    // Sicherstellen, dass orgSection existiert
    if (!orgSection) {
        console.error("Das Element '.org-section' wurde nicht gefunden.");
        return;
    }

    // Dashboard leeren
    orgSection.innerHTML = "";

    const enteredOrganizations = JSON.parse(sessionStorage.getItem('enteredOrganizations')) || [];

    if (enteredOrganizations.length === 0) {
        orgSection.innerHTML = '<p>Keinen Organisationen beigetreten</p>';
    } else {
        enteredOrganizations.forEach(org => {
            const orgElem = document.createElement('div');
            orgElem.classList.add('orgs');
            
            // HTML-Struktur mit allen Details
            orgElem.innerHTML = `
                <img src="${org.logo}" alt="${org.name}" width="${org.imageWidth}" height="${org.imageHeight}" class="organization-image">
            `;

            orgSection.appendChild(orgElem);
        });
    }

    
}

*/ 


/* Aufgaben Button Text wechseln und Status speichern */
function toggleText(buttonId, button) {

    const taskAccepted = sessionStorage.getItem(buttonId) === 'true';

    if (taskAccepted) {
        button.textContent = "Annehmen";
        button.style.backgroundColor = "grey"; // Ursprüngliche Farbe
        sessionStorage.setItem(buttonId, 'false');
    } else {
        button.textContent = "Angenommen";
        button.style.backgroundColor = "#4CAF50"; // Grün
        sessionStorage.setItem(buttonId, 'true');
    }
}


