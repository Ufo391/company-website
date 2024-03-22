import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../services/chapter.service';
import { STYLES_DSGVO } from './dsgvo.styles';

@Component({
  selector: 'app-dsgvo',
  templateUrl: './dsgvo.component.html',
  styleUrls: ['./dsgvo.component.scss'],
})
export class DsgvoComponent implements OnInit, OnDestroy {
  STYLES = STYLES_DSGVO

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
