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
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-potrait',
  templateUrl: './potrait.component.html',
  styleUrls: ['./potrait.component.scss'],
})
@UntilDestroy()
export class PotraitComponent implements OnInit, AfterViewInit {
  isFoldOut: boolean = false;

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService,
    public vpService: ViewportService
  ) {}

  @ViewChild('title') myElement!: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      () => {},
      this.resetComponent.bind(this)
    );
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.aboutMe.title);
    });
    this.vpService.breakPoint$.pipe(untilDestroyed(this)).subscribe((v) => {
      this.isFoldOut = v === 'xl';
    });
  }

  toggleFoldOut(): void {
    this.isFoldOut = !this.isFoldOut;
  }

  resetComponent(): void {
    this.isFoldOut = this.vpService.breakPoint$.value === 'xl';
  }
}
