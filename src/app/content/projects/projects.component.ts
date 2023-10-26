import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/IProject';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  selected?: IProject;
  indexer?: number;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.getAllProjects();
    this.indexer = 0;
    this.selected = this.projects[this.indexer];
  }

  clickNextItemHandler(): void {
    if (this.indexer !== undefined) {
      this.indexer =
        this.indexer === this.projects.length - 1 ? 0 : this.indexer + 1;
      this.selected = this.projects[this.indexer];
    }
  }

  clickLastItemHandler(): void {
    if (this.indexer !== undefined) {
      this.indexer =
        this.indexer === 0 ? this.projects.length - 1 : this.indexer - 1;
      this.selected = this.projects[this.indexer];
    }
  }
}
