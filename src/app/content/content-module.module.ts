import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { BlockImageComponent } from './block-image/block-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContentComponent, BlockImageComponent],
  exports: [ContentComponent],
})
export class ContentModule {}
