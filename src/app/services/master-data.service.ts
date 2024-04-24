import { Injectable } from '@angular/core';
import { IMasterData } from '../models/IMasterData';
import { ICompany, LanguageCode } from '../models/language/ICompany';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {
  currentYear: string = '';
  readonly companyName: string = 'Kloß IT-Solutions';
  readonly phone: string = '+491523 5834040';
  readonly mail: string = 'info@klossitsolutions.com';
  readonly location: string = 'Gütersloh';

  constructor() {
    let d: Date = new Date(Date.now());
    this.currentYear = d.getFullYear().toString();
  }

  public get Content(): IMasterData {
    const data: Map<LanguageCode, ICompany> = new Map<LanguageCode, ICompany>();
    this.mockDE(data);
    this.mockEN(data);
    this.mockPL(data);
    return { companyData: data };
  }

  private mockDE(d: Map<LanguageCode, ICompany>): void {
    d.set('de', {
      companyName: this.companyName,
      langCode: 'de',
      bannerTitle: 'Meine Erfahrung. Ihr Gewinn.',
      bannerSubtitles: [
        'Effizienz gestalten.',
        'Prozesse beschleunigen.',
        'Individuelle Softwarelösungen.',
      ],
      aboutMe: {
        title: 'Über mich',
        value:
          '"Softwareingenieure lösen Probleme". In meiner 5-jährigen Berufserfahrung habe ich gelernt, dass es keine Probleme gibt - nur Lösungen. Durch diese Denkweise konnte ich erfolgreich zahlreiche Prozesse digitalisieren und automatisieren. Mein Schwerpunkt liegt dabei auf Konzept- und Implementierungsarbeiten im Bereich der kaufmännischen Datenverarbeitung. \nAls Full-Stack-Developer zeichne ich mich durch die Fähigkeit aus, mich problemlos in unstrukturierte Umgebungen einzuarbeiten und durch methodische Ansätze stets positive Ergebnisse zu erzielen. Eine klare und offene Kommunikation ist für mich von zentraler Bedeutung, sowohl im Umgang mit geschätzten Kunden als auch in einem engagierten Team. \nUm stets auf dem neuesten Stand zu bleiben, investiere ich kontinuierlich in meine Weiterbildung. Mein Ziel ist es, durch diese fortlaufende Entwicklung hochwertige Lösungen zu bieten und langfristige Erfolge zu sichern.',
      },
      services: {
        title: 'Dienstleistungen',
        values: [
          {
            title: 'Expertise',
            value:
              'Profitieren Sie von meiner Expertise in der Digitalisierung von kaufmännischen Prozessen, der Entwicklung moderner Softwarelösungen und der Optimierung kaufmännischer Prozesse. Ich finde die optimale Lösung für Ihre Digitalisierung - ob Neuentwicklung oder Erweiterung bestehender Systeme.',
          },
          {
            title: 'Entwicklung',
            value:
              'Ich setze auf test-getriebene Entwicklung mit |F-C#-| und |F-Angular-|, um Ihnen qualitativ hochwertige Softwarelösungen zu liefern. Meine Leistungen umfassen die Realisierung von Backend-Anwendungen in |F-.Net Core-|, Desktopanwendungen in |F-WPF-|, Low-Code-Lösungen mit der |F-Microsoft Power Plattform-| sowie die Entwicklung und Umsetzung von |F-Datenbanken-|.',
          },
          {
            title: 'Beratung',
            value:
              'Gemeinsam mit Ihnen entdecke ich neue Möglichkeiten, Ihr Tagesgeschäft effizienter zu gestalten. Meine Erfahrung und Expertise ermöglichen die schnelle Erstellung von Konzepten für komplexe Unternehmensabläufe und die dazugehörigen Softwarearchitekturen.',
          },
        ],
      },
      projects: {
        title: 'Erfahrungen',
        values: [
          {
            description: {
              title: 'Visitenkarte',
              value:
                'Das Ziel dieses Projekts war die Entwicklung dieser digitalen Visitenkarte für meine freiberufliche Selbstständigkeit. Die folgenden Aufgaben wurden erfolgreich abgeschlossen:',
            },
            durationInMonths: 6,
            industry: '-',
            role: 'Frontend Entwickler',
            techStack: ['Angular 16', 'PrimeNG', 'Azure'],
            listing: [
              'Entwurf von UI-Mockups für Desktop- und mobile Ansichten',
              'Umsetzung und Optimierung der mobilen Ansicht für Smartphones',
              'Implementierung und Optimierung der Desktop-Ansicht mit einem speziellen Step-Scroll-Feature',
              'Integration von künstlicher Intelligenz zur Generierung von visuellen Assets',
              'Entwurf und Implementierung von Animationen',
              'Implementierung der Übersetzungsfunktionalität',
              'Umsetzung der Wischfunktion in der mobilen Ansicht für die Komponenten "Dienstleistungen" und "Erfahrungen"',
              'Einrichtung der Azure-Infrastruktur und CI/CD zum Hosting',
            ],
            conclusion:
              'Die Umsetzung dieses Projekts war erfolgreich. Die entwickelte Website wurde bereits ausgerollt und steht nun zur Verfügung.',
          },
          {
            description: {
              title: 'Kooperationsportal',
              value:
                'In diesem Softwareprojekt lag das Hauptziel darin, potenziellen Kooperationspartnern die Option zu bieten, sich über eine webbasierte Plattform für Zusammenarbeiten zu bewerben, wobei sämtliche erforderlichen Genehmigungsverfahren implementiert wurden. Die erledigten Aufgaben umfassten:',
            },
            durationInMonths: 8,
            industry: 'Baubranche',
            role: 'Full-Stack-Entwickler',
            techStack: ['Angular 16', 'ASP.Net 6 Core', 'Azure'],
            listing: [
              'Aktive Teilnahme an regelmäßigen Teamabstimmungen innerhalb eines mehrköpfigen Teams, um Architekturentscheidungen zu treffen und den agilen Entwicklungsprozess zu gestalten.',
              'Umsetzung des Autorisierungsprozesses mithilfe eines Rollenmodells, Einbindung von Azure AD und MSAL für erhöhte Sicherheit.',
              'Realisierung des Genehmigungsprozesses und der Verwaltung von Stammdaten für potenzielle Kooperationspartner auf der Frontend-Ebene.',
              'Implementierung von Frontend-Komponenten zur Visualisierung von aktualisierten Stammdaten nach Änderungen und zur Validierung von Eingaben beim Hochladen von PDF-Dokumenten.',
              'Einbindung von Frontend-Komponenten zur Anzeige von hochgeladenen PDF-Dokumenten innerhalb der Anwendung zur Genehmigung und Korrektur.',
              'Umsetzung der Funktionen zum Genehmigen und Ablehnen von Dokumenten direkt im Frontend.',
              'Implementierung des State-Managements mittels einer Redux-Bibliothek auf der Frontend-Ebene.',
              'Unterstützung des Backend-Teams bei auftretenden Problemen.',
              'Entwurf von Layoutkonzepten für das Frontend und deren Umsetzung in Abstimmung mit den Teammitgliedern.',
              'Implementierung der Internationalisierung mithilfe einer i18n-Bibliothek, um die Anwendung mehrsprachig nutzbar zu machen.',
            ],
            conclusion:
              'Das Projekt resultierte in einer erfolgreichen webbasierten Plattform, die eine reibungslose Bewerbung und Genehmigung von Kooperationen ermöglichte und somit den Arbeitsablauf für potenzielle Partner optimierte.',
          },
          {
            description: {
              title: 'Kundenfeedback',
              value:
                'Das Projektziel bestand darin, eine mobile Anwendung zu entwickeln, die es ermöglicht, vor Ort beim Kunden Feedbackinterviews durchzuführen. Dabei sollte der Fragenkatalog flexibel an jedes Produkt und jeden Kunden angepasst werden können. Die Aufgaben und Ergebnisse des Projekts umfassen:',
            },
            durationInMonths: 12,
            industry: 'Baubranche',
            role: 'Full-Stack-Entwickler',
            techStack: ['MS-Power-Apps', 'ASP.Net Core 6', 'MS-SQL'],
            listing: [
              'Alleinige Entwicklertätigkeit in enger Zusammenarbeit mit dem Product Owner und dem Fachbereich.',
              'Entwurf und Umsetzung der Softwarearchitektur, inklusive Datenbankarchitektur im Code-First-Ansatz mit dem Entity Framework.',
              'Aufbau, Konfiguration und Versionierung der Azure-Infrastruktur (Entwicklungs- und Produktivumgebung) mittels Terraform.',
              'Konfiguration von Azure CI/CD über ein YAML-Skript.',
              'Implementierung der Authentifizierung und Autorisierung mittels des Client Credentials Flow.',
              'Realisierung der Client-Server-Kommunikation durch MS Power Platform Custom Connectors und ASP.NET Core 6 API.',
              'Integration und Aggregation von Daten aus ERP- und CRM-Systemen über Schnittstellen, die Bauprojekt- und Kundeninformationen enthalten. Später wurde eine separate API entwickelt, um diesen Schritt zu vereinfachen.',
              'Import des initialen Fragenkatalogs aus einer Excel-Datei unter Verwendung von "Data Seeding".',
              'Anzeige von Fragen abhängig vom adaptiven Antwortverlauf.',
              'Verwaltung von Fragensammlungen, inklusive Hinzufügen, Ändern und Löschen von Fragen und Clustern.',
              'Klassifizierung von Fragen durch Zuordnung zu Gebäude- und Fragentypen.',
              'Individuelle Konfiguration der Reihenfolge und Erscheinung von Fragen für jedes Bauprojekt.',
              'Umsetzung adaptiver Fragenverläufe basierend auf vorherigen Antworten.',
              'Abstimmung und Realisierung von eigenen Schnittstellen für das Auswertungsteam.',
            ],
            conclusion:
              'Insgesamt führte das Projekt zur erfolgreichen Entwicklung einer mobilen Anwendung, die effiziente Feedbackinterviews vor Ort ermöglicht, die Anpassung von Fragebögen und eine nahtlose Integration von Datenquellen für fundierte Auswertungen gewährleistet.',
          },
          {
            description: {
              title: 'Kanban-Tool-API',
              value:
                'Das Projekt hatte das Ziel, einen Ausschreibungsprozess durch die automatisierte Erstellung von Kanban-Karten zu beschleunigen. Dies wurde durch die Erweiterung einer bestehenden Backend-Anwendung erreicht. Dabei griff die Anwendung über REST auf die API eines externen Kanban-Tools zu und legte automatisch Kanban-Karten für neue Produkte an, wobei Produktinformationen aus ERP-Datenquellen verwendet wurden. Die Hauptaufgaben und Ergebnisse des Projekts sind:',
            },
            durationInMonths: 3,
            industry: 'Baubranche',
            role: 'Full-Stack-Entwickler',
            techStack: ['ASP.Net Core 6', 'Kanban-Tool-DLL', 'MS-SQL'],
            listing: [
              'Zusammenarbeit an einem bestehendem Backend mit zwei weiteren Entwicklern und einem Product Owner',
              'API-Zugriffe auf das Kanban-Tool über den Client Credentials Flow.',
              'Automatische Erstellung von Kanban-Karten basierend auf Vorlagen.',
              'Neue Karten wurden vorab gemäß der Tagesgeschäftspraxis vorbefüllt, verknüpft und erstellt.',
              'Integration von Bauprojekt-ERP-Daten in die Kanban-Karten zur verbesserten Informationsbasis.',
              'Design des Datenmodells und Integration in die Anwendung mittels Entity Framework.',
              'Umsetzung von Data Seeding zur Initialbefüllung von Daten.',
              'Entwicklung von Komponententests für die neuen Funktionalitäten.',
              'Optimierung der RAM-Auslastung, um die Leistungsfähigkeit der Anwendung zu verbessern.',
            ],
            conclusion:
              'Das Ergebnis des Projekts war eine erweiterte Backend-Anwendung, die in der Lage war, den Ausschreibungsprozess durch die automatisierte Erstellung von Kanban-Karten erheblich zu beschleunigen. Die Integration von ERP-Datenquellen und die Vorlagenbasierte Erstellung der Karten trugen dazu bei, die Effizienz und Genauigkeit des Prozesses zu steigern.',
          },
          {
            description: {
              title: 'Center of excellence',
              value:
                'Das Projektziel bestand darin, ein Center of Excellence für die Microsoft Power Platform aufzubauen. Dieses Low-Code Framework ermöglichte es nicht-IT-Mitarbeitern, Prozessautomatisierungen in den Geschäftsabläufen eigenständig umzusetzen. Die Hauptaufgaben und Ergebnisse des Projekts waren:',
            },
            durationInMonths: 13,
            industry: 'Baubranche',
            role: 'Berater',
            techStack: ['MS-Power-Platform', '-', '-'],
            listing: [
              'Alleinige Entwicklung und Umstrukturierung von Prozessen im Zusammenhang mit der weitverbreiteten Power Platform.',
              'Berücksichtigung von Low-Code-Entwicklern außerhalb der zentralen IT-Abteilung.',
              'Erreichen von Zielen wie Datenschutz, Lizenzkostenminimierung, Vermeidung redundanter Entwicklungen und juristischer Fallstricke.',
              'Integration der Bedürfnisse der Low-Code-Entwickler durch Interviews.',
              'Definition der Struktur von Entwicklungs- und Produktivumgebungen sowie Berechtigungskonzepten für Low-Code-Entwickler.',
              'Gestaltung von Prozessen für die Umsetzung und Freigabe neuer Low-Code-Softwareprojekte.',
              'Konzept für ein Support/Ticketsystem, einschließlich Wissensdatenbank und Kommunikationspfaden.',
              'Präsentationen zu Richtlinien, Regeländerungen und Technologieinnovationen.',
              'Aufbau einer Community mit Kommunikationskanälen für fortlaufendes Feedback.',
              'Vernetzung der Entwickler und Etablierung einer Lösungs- und Austauschplattform.',
              'Durchführung von Workshops für Low-Code-Entwickler, um ihnen Einblicke in die Möglichkeiten und Grenzen der Technologie zu vermitteln, State-of-the-Art-Wissen für angehende Entwickler zu präsentieren und Lösungskonzepte für individuelle Herausforderungen vorzustellen.',
              'Consulting-Tätigkeiten, einschließlich Beratung vor und während der Projektumsetzung sowie Unterstützung bei dringenden Problemen, inklusive Kontaktaufnahme mit Microsoft.',
              'Betreuung der Einführung der Technologie an internationalen Standorten außerhalb Deutschlands.',
              'Monitoring und Verwaltung des Center of Excellence Dashboards, Überwachung der Kosten, Abstimmung mit verschiedenen Abteilungen wie Datenschutz, juristische Abteilung und IT-Infrastruktur.',
              'Diplomatische Handlungen zur Bewältigung von Interessenskonflikten zwischen Low-Code-Entwicklern und der IT-Abteilung, wobei durch Unterstützung und Hilfestellungen eine höhere Akzeptanz der neuen Konzepte erreicht wurde.',
            ],
            conclusion:
              'Aktuell werden die von mir entwickelten Konzepte und Prozesse umgesetzt, allerdings nicht mehr unter meiner direkten Verantwortung. Die erfolgreiche Implementierung ermöglicht es nicht-IT-Mitarbeitern, die Power Platform effektiv für Prozessautomatisierungen zu nutzen und die Geschäftsabläufe zu optimieren.',
          },
        ],
        durationType: 'Monate',
      },
      footer: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        imprint: 'Impressum',
        privacy: 'Datenschutz',
      },
      contact: {
        title: 'Kontakt',
        description: {
          title: 'JETZT STARTEN',
          value:
            'Profitieren Sie von meiner Expertise und bringen Sie Ihr Unternehmen mit maßgeschneiderten Lösungen auf die nächste Stufe.',
        },
        offerDesc: 'Einführungsaktion sichern!',
        offerName: 'ANGEBOT',
        offerDialog: {
          title: 'ERÖFFNUNGSANGEBOT',
          value:
            'Starten Sie Ihr Softwareprojekt mit einem exklusiven Einführungsangebot! Als Teil meiner Eröffnungsaktion biete ich einen |F-vergünstigten Stundensatz für meine ersten Aufträge an.-| Profitieren Sie von meiner Expertise zu einem besonders attraktiven Preis, um Ihr Projekt kosteneffizient umzusetzen. |F-Diese Aktion ist zeitlich begrenzt-|, also zögern Sie nicht, mich jetzt zu kontaktieren!',
        },
        values: [
          {
            type: 'phone',
            value: { title: 'Mobil:', value: this.phone },
            description: 'Jetzt anrufen',
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
            description: 'Jetzt mailen',
          },
          {
            type: 'location',
            value: { title: 'Ort:', value: this.location },
            description: 'Anzeigen',
          },
        ],
      },
      sidebar: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        header: this.companyName,
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        langauge: 'Deutsch',
      },
    });
  }

  private mockEN(d: Map<LanguageCode, ICompany>): void {
    d.set('en', {
      companyName: this.companyName,
      langCode: 'en',
      bannerTitle: 'My experience. Your profit!',
      bannerSubtitles: [
        'Design efficiency.',
        'Accelerate processes.',
        'Customised software solutions.',
      ],
      aboutMe: {
        title: 'About me',
        value:
          '"Software engineers solve problems". In my 5 years of professional experience, I have learnt that there are no problems - only solutions. This way of thinking has enabled me to successfully digitalise and automate numerous processes. My focus is on concept and implementation work in the area of commercial data processing. \nAs a full-stack developer, I am characterised by my ability to easily familiarise myself with unstructured environments and always achieve positive results through methodical approaches. Clear and open communication is key for me, both when dealing with valued customers and in a dedicated team. \nIn order to stay up to date, I continuously invest in my further training. My aim is to offer high-quality solutions and ensure long-term success through this ongoing development.',
      },
      services: {
        title: 'Services',
        values: [
          {
            title: 'Expertise',
            value:
              "Benefit from my expertise in the digitalisation of commercial processes, the development of modern software solutions and the optimisation of commercial processes. I will find the optimal solution for your digitalisation - whether it's a new development or an expansion of existing systems.",
          },
          {
            title: 'Development',
            value:
              'I rely on test-driven development with |F-C#-| and |F-Angular-| to provide you with high-quality software solutions. My services include the realisation of backend applications in |F-.Net Core-|, desktop applications in |F-WPF-|, low-code solutions with the |F-Microsoft Power Platform-| as well as the development and implementation of |F-Databases-|.',
          },
          {
            title: 'Consulting',
            value:
              'Together with you, I will discover new ways to organise your day-to-day business more efficiently. My experience and expertise enable me to quickly create concepts for complex business processes and the associated software architectures.',
          },
        ],
      },
      projects: {
        title: 'Experience',
        values: [
          {
            description: {
              title: 'Business card',
              value:
                'The aim of this project was to develop this digital business card for my freelance business. The following tasks were successfully completed:',
            },
            durationInMonths: 6,
            industry: '-',
            role: 'Frontend  developer',
            techStack: ['Angular 16', 'PrimeNG', 'Azure'],
            listing: [
              'Design of UI mockups for desktop and mobile views',
              'Implementation and optimisation of the mobile view for smartphones',
              'Implementation and optimisation of the desktop view with a special step-scroll feature',
              'Integration of artificial intelligence to generate visual assets',
              'Design and implementation of animations',
              'Implementation of the translation functionality',
              'Implementation of the swipe function in the mobile view for the "Services" and "Experiences" components',
              'Setting up the Azure infrastructure and CI/CD for hosting',
            ],
            conclusion:
              'The realisation of this project was successful. The developed website has already been rolled out and is now available.',
          }
          ,{
            description: {
              title: 'Cooperation portal',
              value:
                'In this software project, the main objective was to offer potential cooperation partners the option to apply for collaborations via a web-based platform, implementing all the necessary approval procedures. The tasks completed included:',
            },
            durationInMonths: 8,
            industry: 'Construction industry',
            role: 'Full stack developer',
            techStack: ['Angular 16', 'ASP.Net 6 Core', 'Azure'],
            listing: [
              'Active participation in regular team meetings within a multi-member team to make architectural decisions and shape the agile development process.',
              'Implementation of the authorisation process using a role model, integration of Azure AD and MSAL for increased security.',
              'Realisation of the approval process and management of master data for potential cooperation partners at the front-end level.',
              'Implementation of front-end components to visualise updated master data after changes and to validate entries when uploading PDF documents.',
              'Integration of front-end components to display uploaded PDF documents within the application for approval and correction.',
              'Implementation of the functions for approving and rejecting documents directly in the front end.',
              'Implementation of state management using a Redux library at the front-end level.',
              'Supporting the backend team in the event of problems.',
              'Design of layout concepts for the front end and their realisation in coordination with the team members.',
              'Implementation of internationalisation using an i18n library to make the application usable in multiple languages.',
            ],
            conclusion:
              'The project resulted in a successful web-based platform that facilitated the smooth application and approval of collaborations, optimising the workflow for potential partners.',
          },
          {
            description: {
              title: 'Customer feedback',
              value:
                "The aim of the project was to develop a mobile application that makes it possible to conduct feedback interviews on site at the customer's premises. The catalogue of questions was to be flexibly adaptable to every product and every customer. The tasks and results of the project include",
            },
            durationInMonths: 12,
            industry: 'Construction industry',
            role: 'Full stack developer',
            techStack: ['MS-Power-Apps', 'ASP.Net Core 6', 'MS-SQL'],
            listing: [
              'Sole developer activity in close co-operation with the product owner and the specialist department.',
              'Design and implementation of the software architecture, including database architecture in a code-first approach with the Entity Framework.',
              'Setup, configuration and versioning of the Azure infrastructure (development and production environment) using Terraform.',
              'Configuration of Azure CI/CD via a YAML script.',
              'Implementation of authentication and authorisation using the Client Credentials Flow.',
              'Realisation of client-server communication using MS Power Platform Custom Connectors and ASP.NET Core 6 API.',
              'Integration and aggregation of data from ERP and CRM systems via interfaces containing construction project and customer information. A separate API was later developed to simplify this step.',
              'Import of the initial question catalogue from an Excel file using "Data Seeding".',
              'Display of questions depending on the adaptive answer history.',
              'Management of question collections, including adding, changing and deleting questions and clusters.',
              'Classification of questions by assigning them to building and question types.',
              'Customised configuration of the sequence and appearance of questions for each construction project.',
              'Implementation of adaptive question sequences based on previous answers.',
              'Coordination and realisation of own interfaces for the evaluation team.',
            ],
            conclusion:
              'Overall, the project led to the successful development of a mobile application that enables efficient on-site feedback interviews, the customisation of questionnaires and the seamless integration of data sources for in-depth analyses.',
          },
          {
            description: {
              title: 'Kanban Tool API',
              value:
                'The aim of the project was to speed up a tendering process by automating the creation of Kanban cards. This was achieved by extending an existing backend application. The application accessed the API of an external Kanban tool via REST and automatically created Kanban cards for new products using product information from ERP data sources. The main tasks and results of the project are:',
            },
            durationInMonths: 3,
            industry: 'Construction industry',
            role: 'Full stack developer',
            techStack: ['ASP.Net Core 6', 'Kanban-Tool-DLL', 'MS-SQL'],
            listing: [
              'Collaboration on an existing backend with two other developers and a product owner',
              'API access to the Kanban tool via the Client Credentials Flow.',
              'Automatic creation of Kanban cards based on templates.',
              'New cards were prefilled, linked and created in advance according to daily business practice.',
              'Integration of construction project ERP data into the Kanban cards for an improved information base.',
              'Design of the data model and integration into the application using Entity Framework.',
              'Realisation of data seeding for the initial filling of data.',
              'Development of component tests for the new functionalities.',
              'Optimisation of RAM utilisation to improve the performance of the application.',
            ],
            conclusion:
              'The result of the project was an advanced backend application that was able to significantly speed up the tendering process by automating the creation of Kanban cards. The integration of ERP data sources and the template-based creation of the cards helped to increase the efficiency and accuracy of the process.',
          },
          {
            description: {
              title: 'Center of excellence',
              value:
                'The project objective was to establish a centre of excellence for the Microsoft Power Platform. This low-code framework enabled non-IT employees to implement process automation in the business processes independently. The main tasks and results of the project were',
            },
            durationInMonths: 13,
            industry: 'Construction industry',
            role: 'Consultant',
            techStack: ['MS-Power-Platform', '-', '-'],
            listing: [
              'Sole development and reorganisation of processes in connection with the widely used Power Platform.',
              'Consideration of low-code developers outside the central IT department.',
              'Achieving goals such as data protection, minimising licensing costs, avoiding redundant developments and legal pitfalls.',
              'Integration of the needs of low-code developers through interviews.',
              'Definition of the structure of development and production environments as well as authorisation concepts for low-code developers.',
              'Design of processes for the implementation and release of new low-code software projects.',
              'Concept for a support/ticket system, including knowledge database and communication channels.',
              'Presentations on guidelines, rule changes and technology innovations.',
              'Development of a community with communication channels for ongoing feedback.',
              'Networking of developers and establishment of a solution and exchange platform.',
              'Organisation of workshops for low-code developers to give them an insight into the possibilities and limitations of the technology, present state-of-the-art knowledge for prospective developers and introduce solution concepts for individual challenges.',
              'Consulting activities, including advice before and during project implementation and support in the event of urgent problems, including liaising with Microsoft.',
              'Support for the introduction of the technology at international locations outside Germany.',
              'Monitoring and management of the Centre of Excellence dashboard, monitoring of costs, coordination with various departments such as data protection, legal department and IT infrastructure.',
              'Diplomatic actions to overcome conflicts of interest between low-code developers and the IT department, whereby greater acceptance of the new concepts was achieved through support and assistance.',
            ],
            conclusion:
              'The concepts and processes I developed are currently being implemented, although no longer under my direct responsibility. The successful implementation enables non-IT employees to use the Power Platform effectively for process automation and to optimise business processes.',
          },
        ],
        durationType: 'Months',
      },
      footer: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        imprint: 'Imprint',
        privacy: 'Privacy',
      },
      contact: {
        title: 'Contact',
        description: {
          title: 'START NOW',
          value:
            'Benefit from my expertise and take your company to the next level with customised solutions.',
        },
        offerDesc: 'Get the introductory offer!',
        offerName: 'OFFER',
        offerDialog: {
          title: 'OPENING OFFER',
          value:
            "Start your software project with an exclusive introductory offer! As part of my launch promotion, I am offering a |F-discounted hourly rate for my first assignments-| Benefit from my expertise at a particularly attractive price to implement your project cost-effectively. |F-This promotion is limited in time-|, so don't hesitate to contact me now!",
        },
        values: [
          {
            type: 'phone',
            value: { title: 'Mobile:', value: this.phone },
            description: 'Call now',
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
            description: 'Mail now',
          },
          {
            type: 'location',
            value: { title: 'Location:', value: this.location },
            description: 'Show',
          },
        ],
      },
      sidebar: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        header: this.companyName,
        imprint: 'Imprint',
        privacy: 'Privacy',
        langauge: 'English',
      },
    });
  }

  private mockPL(d: Map<LanguageCode, ICompany>): void {
    d.set('pl', {
      companyName: this.companyName,
      langCode: 'pl',
      bannerTitle: 'Moje doświadczenie. Twój zysk!',
      bannerSubtitles: [
        'Kształtowanie wydajności.',
        'Przyspieszenie procesów.',
        'Indywidualne rozwiązania programowe.',
      ],
      aboutMe: {
        title: 'O mnie',
        value:
          '"Inżynierowie oprogramowania rozwiązują problemy". W ciągu mojego 5-letniego doświadczenia zawodowego nauczyłem się, że nie ma problemów - są tylko rozwiązania. Ten sposób myślenia umożliwił mi skuteczną cyfryzację i automatyzację wielu procesów. Skupiam się na pracach koncepcyjnych i wdrożeniowych w obszarze komercyjnego przetwarzania danych. \nJako programista full-stack charakteryzuję się umiejętnością łatwego zaznajamiania się z nieustrukturyzowanymi środowiskami i zawsze osiągam pozytywne wyniki dzięki metodycznemu podejściu. Jasna i otwarta komunikacja jest dla mnie kluczowa, zarówno w kontaktach z cenionymi klientami, jak i w dedykowanym zespole. \nAby być na bieżąco, stale inwestuję w swoje dalsze szkolenia. Moim celem jest oferowanie wysokiej jakości rozwiązań i zapewnienie długoterminowego sukcesu poprzez ciągły rozwój.',
      },
      services: {
        title: 'usługi',
        values: [
          {
            title: 'Ekspertyza',
            value:
              'Skorzystaj z mojego doświadczenia w zakresie cyfryzacji procesów handlowych, opracowywania nowoczesnych rozwiązań programowych i optymalizacji procesów handlowych. Znajdę optymalne rozwiązanie dla Twojej cyfryzacji - niezależnie od tego, czy chodzi o nowy rozwój, czy rozbudowę istniejących systemów.',
          },
          {
            title: 'Rozwój',
            value:
              'Opieram się na rozwoju opartym na testach z |F-C#-| i |F-Angular-|, aby zapewnić wysokiej jakości rozwiązania programistyczne. Moje usługi obejmują realizację aplikacji backendowych w |F-.Net Core-|, aplikacji desktopowych w |F-WPF-|, rozwiązań low-code z |F-Microsoft Power Platform-| oraz rozwój i implementację |F-Databases-|.',
          },
          {
            title: 'Doradztwo',
            value:
              'Wspólnie z Tobą odkryję nowe sposoby na bardziej efektywną organizację Twojej codziennej działalności. Moje doświadczenie i wiedza pozwalają mi szybko tworzyć koncepcje złożonych procesów biznesowych i związanych z nimi architektur oprogramowania.',
          },
        ],
      },
      projects: {
        title: 'Doświadczenie',
        values: [
          {
            description: {
              title: 'Wizytówka',
              value:
                'Celem tego projektu było opracowanie cyfrowej wizytówki dla mojej niezależnej firmy. Następujące zadania zostały pomyślnie ukończone:',
            },
            durationInMonths: 6,
            industry: '-',
            role: 'Frontend Developer',
            techStack: ['Angular 16', 'PrimeNG', 'Azure'],
            listing: [
              'Projektowanie makiet interfejsu użytkownika dla komputerów stacjonarnych i urządzeń mobilnych',
              'Wdrożenie i optymalizacja widoku mobilnego dla smartfonów',
              'Wdrożenie i optymalizacja widoku pulpitu ze specjalną funkcją przewijania krokowego',
              'Integracja sztucznej inteligencji w celu generowania zasobów wizualnych',
              'Projektowanie i wdrażanie animacji',
              'Wdrożenie funkcji tłumaczenia',
              'Wdrożenie funkcji przesuwania w widoku mobilnym dla komponentów "Usługi" i "Doświadczenia".',
              'Konfigurowanie infrastruktury Azure i CI/CD na potrzeby hostingu',
            ],
            conclusion:
              'Realizacja tego projektu zakończyła się sukcesem. Opracowana strona internetowa została już wdrożona i jest obecnie dostępna.',
          },
          {
            description: {
              title: 'Portal współpracy',
              value:
                'W tym projekcie oprogramowania głównym celem było zaoferowanie potencjalnym partnerom możliwości ubiegania się o współpracę za pośrednictwem platformy internetowej, wdrażając wszystkie niezbędne procedury zatwierdzania. Zrealizowane zadania obejmowały:',
            },
            durationInMonths: 8,
            industry: 'Przemysł budowlany',
            role: 'Full stack developer',
            techStack: ['Angular 16', 'ASP.Net 6 Core', 'Azure'],
            listing: [
              'Aktywny udział w regularnych spotkaniach zespołu wieloosobowego w celu podejmowania decyzji architektonicznych i kształtowania zwinnego procesu rozwoju.',
              'Wdrożenie procesu autoryzacji przy użyciu modelu ról, integracja Azure AD i MSAL w celu zwiększenia bezpieczeństwa.',
              'Realizacja procesu zatwierdzania i zarządzania danymi podstawowymi dla potencjalnych partnerów do współpracy na poziomie front-end.',
              'Wdrożenie komponentów front-end do wizualizacji zaktualizowanych danych podstawowych po zmianach i do sprawdzania poprawności wpisów podczas przesyłania dokumentów PDF.',
              'Integracja komponentów front-end do wyświetlania przesłanych dokumentów PDF w aplikacji w celu zatwierdzenia i korekty.',
              'Wdrożenie funkcji zatwierdzania i odrzucania dokumentów bezpośrednio w interfejsie użytkownika.',
              'Implementacja zarządzania stanem przy użyciu biblioteki Redux na poziomie front-endu.',
              'Wspieranie zespołu backendowego w przypadku problemów.',
              'Projektowanie koncepcji układu dla front-endu i ich realizacja we współpracy z członkami zespołu.',
              'Wdrożenie internacjonalizacji przy użyciu biblioteki i18n w celu umożliwienia korzystania z aplikacji w wielu językach.',
            ],
            conclusion:
              'Projekt zaowocował udaną platformą internetową, która ułatwiła sprawne składanie wniosków i zatwierdzanie współpracy, optymalizując przepływ pracy dla potencjalnych partnerów.',
          },
          {
            description: {
              title: 'Opinie klientów',
              value:
                'Celem projektu było opracowanie aplikacji mobilnej umożliwiającej przeprowadzanie wywiadów zwrotnych na miejscu w siedzibie klienta. Katalog pytań miał być elastycznie dostosowywany do każdego produktu i każdego klienta. Zadania i wyniki projektu obejmują',
            },
            durationInMonths: 12,
            industry: 'Przemysł budowlany',
            role: 'Full stack developer',
            techStack: ['MS-Power-Apps', 'ASP.Net Core 6', 'MS-SQL'],
            listing: [
              'Wyłączna działalność deweloperska w ścisłej współpracy z właścicielem produktu i działem specjalistycznym.',
              'Projektowanie i wdrażanie architektury oprogramowania, w tym architektury bazy danych w podejściu code-first z wykorzystaniem Entity Framework.',
              'Konfiguracja, konfiguracja i wersjonowanie infrastruktury Azure (środowisko programistyczne i produkcyjne) przy użyciu Terraform.',
              'Konfiguracja Azure CI/CD za pomocą skryptu YAML.',
              'Implementacja uwierzytelniania i autoryzacji przy użyciu Client Credentials Flow.',
              'Realizacja komunikacji klient-serwer z wykorzystaniem MS Power Platform Custom Connectors i ASP.NET Core 6 API.',
              'Integracja i agregacja danych z systemów ERP i CRM za pośrednictwem interfejsów zawierających informacje o projektach budowlanych i klientach. W celu uproszczenia tego etapu opracowano później oddzielny interfejs API.',
              'Import początkowego katalogu pytań z pliku Excel przy użyciu funkcji "Data Seeding".',
              'Wyświetlanie pytań w zależności od historii odpowiedzi adaptacyjnych.',
              'Zarządzanie zbiorami pytań, w tym dodawanie, zmienianie i usuwanie pytań i klastrów.',
              'Klasyfikacja pytań poprzez przypisanie ich do budynków i typów pytań.',
              'Indywidualna konfiguracja kolejności i wyglądu pytań dla każdego projektu budowlanego.',
              'Implementacja adaptacyjnych sekwencji pytań opartych na poprzednich odpowiedziach.',
              'Koordynacja i realizacja własnych interfejsów dla zespołu oceniającego.',
            ],
            conclusion:
              'Ogólnie rzecz biorąc, projekt doprowadził do pomyślnego opracowania aplikacji mobilnej, która umożliwia efektywne przeprowadzanie wywiadów zwrotnych na miejscu, dostosowywanie kwestionariuszy i płynną integrację źródeł danych w celu przeprowadzenia dogłębnych analiz.',
          },
          {
            description: {
              title: 'API narzędzia Kanban',
              value:
                'Celem projektu było przyspieszenie procesu przetargowego poprzez automatyzację tworzenia kart Kanban. Osiągnięto to poprzez rozszerzenie istniejącej aplikacji backendowej. Aplikacja uzyskała dostęp do API zewnętrznego narzędzia Kanban za pośrednictwem REST i automatycznie utworzyła karty Kanban dla nowych produktów, wykorzystując informacje o produktach ze źródeł danych ERP. Główne zadania i wyniki projektu to:',
            },
            durationInMonths: 3,
            industry: 'Przemysł budowlany',
            role: 'Full stack developer',
            techStack: ['ASP.Net Core 6', 'Kanban-Tool-DLL', 'MS-SQL'],
            listing: [
              'Współpraca nad istniejącym backendem z dwoma innymi deweloperami i właścicielem produktu.',
              'Dostęp API do narzędzia Kanban poprzez Client Credentials Flow.',
              'Automatyczne tworzenie kart Kanban na podstawie szablonów.',
              'Nowe karty były wstępnie wypełniane, łączone i tworzone z wyprzedzeniem zgodnie z codzienną praktyką biznesową.',
              'Integracja danych ERP projektu budowlanego z kartami Kanban w celu ulepszenia bazy informacji.',
              'Projektowanie modelu danych i integracja z aplikacją przy użyciu Entity Framework.',
              'Realizacja rozsiewania danych w celu wstępnego wypełnienia danych.',
              'Opracowanie testów komponentów dla nowych funkcjonalności.',
              'Optymalizacja wykorzystania pamięci RAM w celu poprawy wydajności aplikacji.',
            ],
            conclusion:
              'Rezultatem projektu była zaawansowana aplikacja backendowa, która była w stanie znacznie przyspieszyć proces przetargowy poprzez automatyzację tworzenia kart Kanban. Integracja źródeł danych ERP i tworzenie kart w oparciu o szablony pomogły zwiększyć wydajność i dokładność procesu.',
          },
          {
            description: {
              title: 'Center of excellence',
              value:
                'Celem projektu było stworzenie centrum doskonałości dla Microsoft Power Platform. Ten niskokodowy framework umożliwił pracownikom spoza IT samodzielne wdrażanie automatyzacji procesów biznesowych. Główne zadania i wyniki projektu były następujące',
            },
            durationInMonths: 13,
            industry: 'Przemysł budowlany',
            role: 'Konsultant',
            techStack: ['MS-Power-Platform', '-', '-'],
            listing: [
              'Wyłączny rozwój i reorganizacja procesów w związku z szeroko stosowaną platformą Power Platform.',
              'Uwzględnienie programistów niskokodowych spoza centralnego działu IT.',
              'Osiąganie celów takich jak ochrona danych, minimalizacja kosztów licencji, unikanie zbędnych zmian i pułapek prawnych.',
              'Integracja potrzeb programistów niskokodowych poprzez wywiady.',
              'Definicja struktury środowisk programistycznych i produkcyjnych, a także koncepcje autoryzacji dla programistów niskokodowych.',
              'Projektowanie procesów wdrażania i wydawania nowych projektów oprogramowania niskokodowego.',
              'Koncepcja systemu wsparcia/biletów, w tym bazy wiedzy i kanałów komunikacji.',
              'Prezentacje dotyczące wytycznych, zmian zasad i innowacji technologicznych.',
              'Rozwój społeczności z kanałami komunikacji umożliwiającymi bieżące przekazywanie informacji zwrotnych.',
              'Tworzenie sieci deweloperów i ustanowienie platformy rozwiązań i wymiany.',
              'Organizacja warsztatów dla programistów niskokodowych, aby dać im wgląd w możliwości i ograniczenia technologii, zaprezentować najnowszą wiedzę dla przyszłych programistów i przedstawić koncepcje rozwiązań dla indywidualnych wyzwań.',
              'Działania konsultingowe, w tym doradztwo przed i w trakcie realizacji projektu oraz wsparcie w przypadku nagłych problemów, w tym współpraca z firmą Microsoft.',
              'Wsparcie przy wprowadzaniu technologii w międzynarodowych lokalizacjach poza Niemcami.',
              'Monitorowanie i zarządzanie pulpitem Centrum Doskonałości, monitorowanie kosztów, koordynacja z różnymi działami, takimi jak ochrona danych, dział prawny i infrastruktura IT.',
              'Działania dyplomatyczne mające na celu przezwyciężenie konfliktu interesów między programistami niskokodowymi a działem IT, dzięki którym osiągnięto większą akceptację nowych koncepcji poprzez wsparcie i pomoc.',
            ],
            conclusion:
              'Opracowane przeze mnie koncepcje i procesy są obecnie wdrażane, choć nie jestem już za nie bezpośrednio odpowiedzialny. Pomyślne wdrożenie umożliwia pracownikom spoza IT efektywne wykorzystanie Power Platform do automatyzacji procesów i optymalizacji procesów biznesowych.',
          },
        ],
        durationType: 'Miesiące',
      },
      footer: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        imprint: 'Impressum',
        privacy: 'Ochrona danych',
      },
      contact: {
        title: 'Skontaktuj się z nami',
        description: {
          title: 'START TERAZ',
          value:
            'Skorzystaj z mojej wiedzy i przenieś swoją firmę na wyższy poziom dzięki niestandardowym rozwiązaniom.',
        },
        offerDesc: 'Bezpieczna kampania wprowadzająca!',
        offerName: 'OFERTA',
        offerDialog: {
          title: 'OFERTA OTWARCIA',
          value:
            'Rozpocznij swój projekt oprogramowania z ekskluzywną ofertą wstępną! |F-W ramach mojej promocji startowej oferuję obniżoną stawkę godzinową za moje pierwsze zadania-| Skorzystaj z mojej wiedzy w wyjątkowo atrakcyjnej cenie, aby efektywnie wdrożyć swój projekt. |F-Ta promocja jest ograniczona w czasie-|, więc nie wahaj się i skontaktuj się ze mną już teraz!',
        },

        values: [
          {
            type: 'phone',
            value: { title: 'Mobilny:', value: this.phone },
            description: 'Zadzwoń teraz',
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
            description: 'Poczta teraz',
          },
          {
            type: 'location',
            value: { title: 'Lokalizacja:', value: this.location },
            description: 'Pokaż',
          },
        ],
      },
      sidebar: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        header: this.companyName,
        imprint: 'Impressum',
        privacy: 'Ochrona danych',
        langauge: 'Polski',
      },
    });
  }
}
