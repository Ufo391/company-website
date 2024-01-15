import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-potrait',
  templateUrl: './potrait.component.html',
  styleUrls: ['./potrait.component.css'],
})
export class PotraitComponent implements OnInit, AfterViewInit {
  description: string =
    'Ich bin ein erfahrener Softwareentwickler mit über 5 Jahren Berufserfahrung, einschließlich Consulting und fachlicher Führung. Meine Expertise liegt in .NET C# Entwicklung, Angular-Entwicklung und Microsoft Power Platform Entwicklung & Beratung. Ich beherrsche vielfältige Programmiersprachen und Technologien und bin versiert in agilen Methoden sowie Test-Driven Development. Ich habe erfolgreich kaufmännische Prozesse digitalisiert und zeichne mich durch die Fähigkeit aus, mich in unstrukturierte Umgebungen einzuarbeiten und durch methodische Herangehensweisen positive Ergebnisse zu liefern. Klare und offene Kommunikation mit Kunden und Teammitgliedern sind mir wichtig, um absolute Kundenzufriedenheit zu gewährleisten. Ich setze kontinuierliche Weiterbildung in neuen Technologien und Branchen ein, um dieses Ziel zu erreichen.';

  constructor(private chapterService: ChapterService) {}

  @ViewChild('title') myElement!: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(this.myElement);
  }
}
