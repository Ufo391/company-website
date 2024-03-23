import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../services/chapter.service';
import { STYLES_IMPRINT } from './imprint.styles';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit, OnDestroy {
  STYLES = STYLES_IMPRINT;

  constructor(private chapterService: ChapterService, private router: Router) {}

  ngOnInit(): void {
    this.chapterService.disableSkipScroll(true);
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }

  ngOnDestroy(): void {
    this.chapterService.disableSkipScroll(false);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
