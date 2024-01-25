import { Injectable } from '@angular/core';
import { IMasterData } from '../models/IMasterData';
import { ICompany, LanguageCode } from '../models/language/ICompany';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {
  constructor() {}

  public get Content(): IMasterData {
    const data: Map<LanguageCode, ICompany> = new Map<LanguageCode, ICompany>();
    this.mockGerman();
    this.mockEnglisch();
    return { companyData: data };
  }

  private mockGerman(
    d: Map<LanguageCode, ICompany> = new Map<LanguageCode, ICompany>()
  ): void {
    d.set('de', {
      companyName: 'Kloss IT-Solutions',
      langCode: 'de',
      banner: {
        title: 'Meine Erfahrung. Ihr Gewinn!',
        value:
          'Effizienz gestalten.Prozesse beschleunigen.Individuelle Softwarelösungen',
      },
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
      },
      footer: {
        copyright: 'Kloß IT-Solutions. Alle Rechte vorbehalten.',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
      },
      contact: { title: '', values: [] },
      sidebar: { copyright: '', header: '', imprint: '', privacy: '' },
    });
  }
  private mockEnglisch(
    d: Map<LanguageCode, ICompany> = new Map<LanguageCode, ICompany>()
  ): void {
    d.set('en', {
      companyName: 'Kloss IT-Solutions',
      langCode: 'en',
      banner: {
        title: 'My experience. Your profit!',
        value:
          'Design efficiency.accelerate processes.customised software solutions',
      },
      aboutMe: {
        title: 'Background',
        value:
          'I am an experienced software developer with over 5 years of professional experience, including consulting and technical leadership. My expertise lies in .NET C# development, Angular development and Microsoft Power Platform development & consulting. I am proficient in a wide range of programming languages and technologies and am well versed in agile methods and test-driven development. I have successfully digitised commercial processes and excel at working in unstructured environments and delivering positive results through methodical approaches. Clear and open communication with customers and team members is important to me to ensure total customer satisfaction. I utilise continuous training in new technologies and industries to achieve this goal.',
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
      },
      footer: {
        copyright: 'Kloß IT-Solutions. Alle Rechte vorbehalten.',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
      },
      contact: { title: '', values: [] },
      sidebar: { copyright: '', header: '', imprint: '', privacy: '' },
    });
  }
}
