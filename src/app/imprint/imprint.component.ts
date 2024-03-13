import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../services/chapter.service';
import { STYLES_IMPRINT as STYLE } from './imprint.styles';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit, OnDestroy {
  buttonStyle: object = STYLE.BUTTON;

  constructor(private chapterService: ChapterService, private router: Router) {}

  ngOnInit(): void {
    this.chapterService.disableSkipScroll(true);
  }

  ngOnDestroy(): void {
    this.chapterService.disableSkipScroll(false);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
