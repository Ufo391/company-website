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
          'Ich bin ein erfahrener Softwareentwickler mit über 5 Jahren Berufserfahrung, einschließlich Consulting und fachlicher Führung. Meine Expertise liegt in .NET C# Entwicklung, Angular-Entwicklung und Microsoft Power Platform Entwicklung & Beratung. Ich beherrsche vielfältige Programmiersprachen und Technologien und bin versiert in agilen Methoden sowie Test-Driven Development. Ich habe erfolgreich kaufmännische Prozesse digitalisiert und zeichne mich durch die Fähigkeit aus, mich in unstrukturierte Umgebungen einzuarbeiten und durch methodische Herangehensweisen positive Ergebnisse zu liefern. Klare und offene Kommunikation mit Kunden und Teammitgliedern sind mir wichtig, um absolute Kundenzufriedenheit zu gewährleisten. Ich setze kontinuierliche Weiterbildung in neuen Technologien und Branchen ein, um dieses Ziel zu erreichen.',
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
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
          },
          {
            type: 'location',
            value: { title: 'Ort:', value: this.location },
          },
        ],
      },
      sidebar: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        header: this.companyName,
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        langauge: 'Deutsch'
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
          'I am an experienced software developer with over 5 years of professional experience, including consulting and technical leadership. My expertise lies in .NET C# development, Angular development and Microsoft Power Platform development & consulting. I am proficient in a wide range of programming languages and technologies and am well versed in agile methods and test-driven development. I have successfully digitised commercial processes and excel at working in unstructured environments and delivering positive results through methodical approaches. Clear and open communication with customers and team members is important to me to ensure total customer satisfaction. I utilise continuous training in new technologies and industries to achieve this goal.',
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
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
          },
          {
            type: 'location',
            value: { title: 'Location:', value: this.location },
          },
        ],
      },
      sidebar: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        header: this.companyName,
        imprint: 'Imprint',
        privacy: 'Privacy',
        langauge: 'English'
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
          'Jestem doświadczonym programistą z ponad 5-letnim doświadczeniem zawodowym, w tym w zakresie doradztwa i przywództwa technicznego. Specjalizuję się w rozwoju .NET C#, rozwoju Angular oraz rozwoju i doradztwie Microsoft Power Platform. Jestem biegły w szerokiej gamie języków programowania i technologii oraz dobrze zorientowany w metodach zwinnych i rozwoju opartym na testach. Z powodzeniem digitalizowałem procesy komercyjne i wyróżniam się w pracy w nieustrukturyzowanych środowiskach i dostarczaniu pozytywnych wyników dzięki metodycznemu podejściu. Jasna i otwarta komunikacja z klientami i członkami zespołu jest dla mnie ważna, aby zapewnić pełną satysfakcję klienta. Wykorzystuję ciągłe szkolenia w zakresie nowych technologii i branż, aby osiągnąć ten cel.',
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
          },
          {
            type: 'mail',
            value: { title: 'E-Mail:', value: this.mail },
          },
          {
            type: 'location',
            value: { title: 'Lokalizacja:', value: this.location },
          },
        ],
      },
      sidebar: {
        copyright: `©${this.currentYear} ${this.companyName}.`,
        header: this.companyName,
        imprint: 'Impressum',
        privacy: 'Ochrona danych',
        langauge: 'Polski'
      },
    });
  }
}
