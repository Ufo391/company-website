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
  styleUrls: ['./potrait.component.scss'],
})
@UntilDestroy()
export class PotraitComponent implements OnInit, AfterViewInit {
  isFoldOut: boolean = false;
  foldOutIcon: string = 'pi pi-arrow-down';

  constructor(
    private chapterService: ChapterService,
    public lService: LanguageService
  ) {}

  @ViewChild('title') myElement!: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    this.chapterService.addChapter(
      this.myElement,
      () => {},
      () => {}
    );
    this.lService.MasterData$.pipe(untilDestroyed(this)).subscribe((c) => {
      this.chapterService.translateChapter(this.myElement, c.aboutMe.title);
    });
  }

  toggleFoldOut(): void {
    this.isFoldOut = !this.isFoldOut;
    this.foldOutIcon = this.isFoldOut ? 'pi pi-arrow-up' : 'pi pi-arrow-down';
  }
}
