import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChapterService } from 'src/app/services/chapter.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-potrait',
  templateUrl: './potrait.component.html',
  styleUrls: ['./potrait.component.css'],
})
@UntilDestroy()
export class PotraitComponent implements OnInit, AfterViewInit {
  description: string =
    'Ich bin ein erfahrener Softwareentwickler mit über 5 Jahren Berufserfahrung, einschließlich Consulting und fachlicher Führung. Meine Expertise liegt in .NET C# Entwicklung, Angular-Entwicklung und Microsoft Power Platform Entwicklung & Beratung. Ich beherrsche vielfältige Programmiersprachen und Technologien und bin versiert in agilen Methoden sowie Test-Driven Development. Ich habe erfolgreich kaufmännische Prozesse digitalisiert und zeichne mich durch die Fähigkeit aus, mich in unstrukturierte Umgebungen einzuarbeiten und durch methodische Herangehensweisen positive Ergebnisse zu liefern. Klare und offene Kommunikation mit Kunden und Teammitgliedern sind mir wichtig, um absolute Kundenzufriedenheit zu gewährleisten. Ich setze kontinuierliche Weiterbildung in neuen Technologien und Branchen ein, um dieses Ziel zu erreichen.';

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService
  ) {}

  @ViewChild('title') myElement!: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(this.myElement, () => {}, () => {});
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.aboutMe.title);
    });
  }
}
