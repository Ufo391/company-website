import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChapterService } from '../services/chapter.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild('invisible') myElement!: ElementRef;
  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(this.myElement);
  }
}
