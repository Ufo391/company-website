import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { ViewportService } from './services/viewport.service';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('content') content!: ElementRef;

  public isHeaderVisible: boolean = true;

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
        this.isHeaderVisible = e.url === '/';
      });

    this.vpService.breakPoint$.pipe(untilDestroyed(this)).subscribe((v) => {
      if (v === 'xl') {
        disableBodyScroll(this.content.nativeElement);
      } else {
        enableBodyScroll(this.content.nativeElement);
      }
    });
  }
}
