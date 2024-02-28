import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public isHeaderVisible: boolean = true;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const e: NavigationEnd = event as NavigationEnd;
        this.isHeaderVisible = e.url === '/';
      });
  }
}
