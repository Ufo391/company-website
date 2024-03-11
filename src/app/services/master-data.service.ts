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
      bannerTitle: 'Meine Erfahrung. Ihr Gewinn!',
      bannerSubtitles: [
        'Effizienz gestalten.',
        'Prozesse beschleunigen.',
        'Individuelle Softwarelösungen.',
      ],
      aboutMe: {
        title: 'Hintergrund',
        value:
          '"Softwareingenieure lösen Probleme". In meiner 5-jährigen Berufserfahrung habe ich gelernt, dass es keine Probleme gibt - sondern lediglich Lösungen. Durch diese Denkweise konnte ich erfolgreich zahlreiche Prozesse digitalisieren und automatisieren. Mein Schwerpunkt liegt dabei auf Konzept- und Implementierungsarbeiten im Bereich der kaufmännischen Datenverarbeitung. \nAls Full-Stack-Developer zeichne ich mich durch die Fähigkeit aus, mich problemlos in unstrukturierte Umgebungen einzuarbeiten und durch methodische Ansätze stets positive Ergebnisse zu erzielen. Eine klare und offene Kommunikation ist für mich von zentraler Bedeutung, sowohl im Umgang mit geschätzten Kunden als auch in einem engagierten Team. \nUm stets auf dem neuesten Stand zu bleiben, investiere ich kontinuierlich in meine Weiterbildung. Mein Ziel ist es, durch diese fortlaufende Entwicklung hochwertige Lösungen zu bieten und langfristige Erfolge zu sichern.',
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
              'Ich setze auf test-getriebene Entwicklung mit C# und Angular, um Ihnen qualitativ hochwertige Softwarelösungen zu liefern. Meine Leistungen umfassen die Realisierung von Backend-Anwendungen in .Net Core, Desktopanwendungen in WPF, Low-Code-Lösungen mit der Microsoft Power-Plattform sowie die Entwicklung und Umsetzung von Datenbanken.',
          },
          {
            title: 'Beratung',
            value:
              'Gemeinsam mit Ihnen entdecke ich neue Möglichkeiten, Ihr Tagesgeschäft effizienter zu gestalten. Meine Erfahrung und Expertise ermöglichen die schnelle Erstellung von Konzepten für komplexe Unternehmensabläufe und die dazugehörigen Softwarearchitekturen.',
          },
        ],
      },
      projects: {
        title: 'Projekte',
        values: [
          {
            description: {
              title: 'Kooperationsportal',
              value:
                'In diesem Softwareprojekt lag das Hauptziel darin, potenziellen Kooperationspartnern die Option zu bieten, sich über eine webbasierte Plattform für Zusammenarbeiten zu bewerben, wobei sämtliche erforderlichen Genehmigungsverfahren implementiert wurden. Die erledigten Aufgaben umfassten:',
            },
            durationInMonths: 8,
            industry: 'Baubranche (Konzern)',
            role: 'Full-Stack-Entwickler',
            techStack: ['Angular 16', 'ASP.Net 6 Core', 'Azure'],
            listing: [
              'Aktive Teilnahme an regelmäßigen Teamabstimmungen innerhalb eines 5-köpfigen Teams, um Architekturentscheidungen zu treffen und den agilen Entwicklungsprozess zu gestalten.',
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
            industry: 'Baubranche (Konzern)',
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
            industry: 'Baubranche (Konzern)',
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
            industry: 'Baubranche (Konzern)',
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
            'Profitieren Sie von meiner Expertise und bringen Sie Ihr Unternehmen mit maßgeschneiderten Lösungen auf die nächste Stufe. Lukrativer Stundensatz für die ersten 2-3 Aufträge.',
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
        title: 'Background',
        value:
          '"Software engineers solve problems". In my 5 years of professional experience, I have learnt that there are no problems - only solutions. This way of thinking has enabled me to successfully digitalise and automate numerous processes. My focus is on concept and implementation work in the area of commercial data processing. \nMy strengths lie in my ability to familiarise myself with unstructured environments and in methodical approaches that produce positive results. Clear and open communication with both clients and team members is key for me to ensure total customer satisfaction. \nIn order to stay up to date, I continuously invest in my further training. My aim is to offer high-quality solutions and ensure long-term success through this ongoing development.',
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
              'I rely on test-driven development with C# and Angular to provide you with high-quality software solutions. My services include the realisation of backend applications in .Net Core, desktop applications in WPF, low-code solutions with the Microsoft Power platform as well as the development and implementation of databases.',
          },
          {
            title: 'Consulting',
            value:
              'Together with you, I will discover new ways to organise your day-to-day business more efficiently. My experience and expertise enable me to quickly create concepts for complex business processes and the associated software architectures.',
          },
        ],
      },
      projects: {
        title: 'Projects',
        values: [
          {
            description: {
              title: 'Cooperation portal',
              value:
                'Dev. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 15,
            industry: 'Construction industry',
            role: 'Full stack developer',
            techStack: ['Azure', 'Angular 16', 'ASP.Net 6 Core'],
            listing: [],
            conclusion: '',
          },
          {
            description: {
              title: 'Center of Excellence',
              value:
                'Consulting. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 9,
            industry: 'Construction industry',
            role: 'Consultant',
            techStack: ['-', '-', '-'],
            listing: [],
            conclusion: '',
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
            'Benefit from my expertise and take your company to the next level with customised solutions. Lucrative hourly rate for the first 2-3 orders.',
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
        title: 'Kontekst',
        value:
          '"Inżynierowie oprogramowania rozwiązują problemy". W ciągu mojego 5-letniego doświadczenia zawodowego nauczyłem się, że nie ma problemów - są tylko rozwiązania. Ten sposób myślenia umożliwił mi skuteczną cyfryzację i automatyzację wielu procesów. Koncentruję się na pracach koncepcyjnych i wdrożeniowych w obszarze komercyjnego przetwarzania danych. \nMoje mocne strony to umiejętność odnajdywania się w nieustrukturyzowanych środowiskach i metodyczne podejście, które przynosi pozytywne rezultaty. Jasna i otwarta komunikacja zarówno z klientami, jak i członkami zespołu jest dla mnie kluczem do zapewnienia pełnej satysfakcji klienta. \nAby być na bieżąco, stale inwestuję w swoje dalsze szkolenia. Moim celem jest oferowanie wysokiej jakości rozwiązań i zapewnienie długoterminowego sukcesu poprzez ciągły rozwój.',
      },
      services: {
        title: 'usługi',
        values: [
          {
            title: 'Wiedza specjalistyczna',
            value:
              'Skorzystaj z mojego doświadczenia w zakresie cyfryzacji procesów handlowych, opracowywania nowoczesnych rozwiązań programowych i optymalizacji procesów handlowych. Znajdę optymalne rozwiązanie dla Twojej cyfryzacji - niezależnie od tego, czy chodzi o nowy rozwój, czy rozbudowę istniejących systemów.',
          },
          {
            title: 'Rozwój',
            value:
              'Polegam na rozwoju opartym na testach przy użyciu C# i Angular, aby zapewnić wysokiej jakości rozwiązania programistyczne. Moje usługi obejmują realizację aplikacji backendowych w .Net Core, aplikacji desktopowych w WPF, rozwiązań low-code z platformą Microsoft Power, a także rozwój i wdrażanie baz danych.',
          },
          {
            title: 'Doradztwo',
            value:
              'Wspólnie z Tobą odkryję nowe sposoby na bardziej efektywną organizację Twojej codziennej działalności. Moje doświadczenie i wiedza pozwalają mi szybko tworzyć koncepcje złożonych procesów biznesowych i związanych z nimi architektur oprogramowania.',
          },
        ],
      },
      projects: {
        title: 'Projekty',
        values: [
          {
            description: {
              title: 'Portal współpracy',
              value:
                'Portal współpracy. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 15,
            industry: 'Przemysł budowlany',
            role: 'Full stack developer',
            techStack: ['Azure', 'Angular 16', 'ASP.Net 6 Core'],
            listing: [],
            conclusion: '',
          },
          {
            description: {
              title: 'Centrum doskonałości',
              value:
                'Centrum doskonałości. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 9,
            industry: 'Przemysł budowlany',
            role: 'Konsultant',
            techStack: ['-', '-', '-'],
            listing: [],
            conclusion: '',
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
            'Skorzystaj z mojej wiedzy i przenieś swoją firmę na wyższy poziom dzięki niestandardowym rozwiązaniom. Lukratywna stawka godzinowa za pierwsze 2-3 zlecenia.',
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
