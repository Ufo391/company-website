import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { ViewportService } from './services/viewport.service';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ViewportModes } from './models/viewportModes_';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content') content!: ElementRef;

  public isHeaderVisible: boolean = true;
  private currentUri: string = '';

  constructor(private router: Router, private vpService: ViewportService) {}

  ngAfterViewInit(): void {
    this.registerEventListeners();
  }

  private registerEventListeners(): void {
    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const e: NavigationEnd = event as NavigationEnd;
        this.currentUri = e.url;
        this.isHeaderVisible = e.url === '/';
        this.bodyScrollLocker(
          this.vpService.breakPoint$.value,
          e.url,
          this.content.nativeElement
        );
      });

    this.vpService.breakPoint$.pipe(untilDestroyed(this)).subscribe((v) => {
      this.bodyScrollLocker(
        this.vpService.breakPoint$.value,
        this.currentUri,
        this.content.nativeElement
      );
    });
  }

  private bodyScrollLocker(
    mode: ViewportModes,
    uri: string,
    e: HTMLElement | Element
  ): void {
    if (mode === 'xl') {
      if (uri === '/') {
        disableBodyScroll(e);
      } else {
        enableBodyScroll(e);
      }
    } else {
      enableBodyScroll(e);
    }
  }
}
