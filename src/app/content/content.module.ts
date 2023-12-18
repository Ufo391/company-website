import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockImageComponent } from './block-image/block-image.component';
import { ContentComponent } from './content.component';
import { PotraitComponent } from './potrait/potrait.component';
import { ServicesComponent } from './services/services.component';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule,
    DividerModule,
    FormsModule
  ],
  declarations: [
    ContentComponent,
    BlockImageComponent,
    PotraitComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  exports: [ContentComponent],
})
export class ContentModule {}
