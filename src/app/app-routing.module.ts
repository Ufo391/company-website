import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DsgvoComponent } from './dsgvo/dsgvo.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'company-website/imprint', component: ImprintComponent },
  { path: 'company-website/dsgvo', component: DsgvoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
