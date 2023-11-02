import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { BlockImageComponent } from './block-image/block-image.component';
import { PotraitComponent } from './potrait/potrait.component';
import { ServicesComponent } from './services/services.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ContactComponent } from './contact/contact.component';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';

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
