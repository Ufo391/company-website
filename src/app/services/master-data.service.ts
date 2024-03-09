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
            content: {
              title: 'Kooperationsportal',
              value:
                'Entwicklung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 15,
            industry: 'Baubranche (Konzern)',
            role: 'Full-Stack-Entwickler',
            techStack: ['Azure', 'Angular 16', 'ASP.Net 6 Core'],
          },
          {
            content: {
              title: 'Center of Excellence',
              value:
                'Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 9,
            industry: 'Baubranche (Konzern)',
            role: 'Berater',
            techStack: ['-', '-', '-'],
          },
        ],
        duration: 'Monate',
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
            content: {
              title: 'Cooperation portal',
              value:
                'Dev. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 15,
            industry: 'Construction industry',
            role: 'Full stack developer',
            techStack: ['Azure', 'Angular 16', 'ASP.Net 6 Core'],
          },
          {
            content: {
              title: 'Center of Excellence',
              value:
                'Consulting. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 9,
            industry: 'Construction industry',
            role: 'Consultant',
            techStack: ['-', '-', '-'],
          },
        ],
        duration: 'Months',
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
            content: {
              title: 'Portal współpracy',
              value:
                'Portal współpracy. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 15,
            industry: 'Przemysł budowlany',
            role: 'Full stack developer',
            techStack: ['Azure', 'Angular 16', 'ASP.Net 6 Core'],
          },
          {
            content: {
              title: 'Centrum doskonałości',
              value:
                'Centrum doskonałości. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
            },
            durationInMonths: 9,
            industry: 'Przemysł budowlany',
            role: 'Konsultant',
            techStack: ['-', '-', '-'],
          },
        ],
        duration: 'Miesiące',
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
