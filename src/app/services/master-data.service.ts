import { Injectable } from '@angular/core';
import { IMasterData } from '../models/IMasterData';
import { ICompany, LanguageCode } from '../models/language/ICompany';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {
  currentYear: string = '';
  readonly companyName: string = 'Kloss IT-Solutions';
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
              'Expertise. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
          },
          {
            title: 'Entwicklung',
            value:
              'Entwicklung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
          },
          {
            title: 'Beratung',
            value:
              'Beratung. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
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
        values: [
          {
            type: 'phone',
            value: { title: 'Mobil:', value: this.phone },
            description: 'Anrufen',
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
            description: 'Mailen',
          },
          {
            type: 'location',
            value: { title: 'Ort:', value: this.location },
            description: 'Zeigen',
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
              'Expertise. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
          },
          {
            title: 'Development',
            value:
              'Dev. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
          },
          {
            title: 'Consulting',
            value:
              'Con. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
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
        values: [
          {
            type: 'phone',
            value: { title: 'Mobile:', value: this.phone },
            description: 'Call',
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
            description: 'Mail',
          },
          {
            type: 'location',
            value: { title: 'Location:', value: this.location },
            description: 'Visit',
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
              'Wiedza specjalistyczna. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
          },
          {
            title: 'Rozwój',
            value:
              'Rozwój. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
          },
          {
            title: 'Doradztwo',
            value:
              'Doradztwo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditateneque quas! lkjasdlkjasdklda!',
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
        values: [
          {
            type: 'phone',
            value: { title: 'Mobilny:', value: this.phone },
            description: 'Połącz',
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
            description: 'Mail',
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
