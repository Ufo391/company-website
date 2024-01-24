import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IProject } from 'src/app/models/IProject';
import { ChapterService } from 'src/app/services/chapter.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('title') myElement!: ElementRef;
  projects: IProject[] = [];
  selected?: IProject;
  indexer?: number;
  fadeinAnimationStatus: boolean = false;

  constructor(
    private projectsService: ProjectsService,
    private chapterService: ChapterService
  ) {}

  ngOnInit() {
    this.projects = this.projectsService.getAllProjects();
    this.indexer = 0;
    this.selected = this.projects[this.indexer];
  }

  ngAfterViewInit() {
    this.chapterService.addChapter(this.myElement);
  }

  clickNextItemHandler(): void {
    if (this.indexer !== undefined) {
      this.indexer =
        this.indexer === this.projects.length - 1 ? 0 : this.indexer + 1;
      this.selected = this.projects[this.indexer];
    }
    this.fadeinContent();
  }

  clickLastItemHandler(): void {
    if (this.indexer !== undefined) {
      this.indexer =
        this.indexer === 0 ? this.projects.length - 1 : this.indexer - 1;
      this.selected = this.projects[this.indexer];
    }
    this.fadeinContent();
  }

  private fadeinContent(): void {
    this.fadeinAnimationStatus = true;
    setTimeout(() => {
      this.fadeinAnimationStatus = false;
    }, 1000);
  }
}
