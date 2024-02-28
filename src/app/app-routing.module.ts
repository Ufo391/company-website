import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DsgvoComponent } from './dsgvo/dsgvo.component';

const routes: Routes = [
  { path: '', redirectTo: 'company-website', pathMatch: 'full' },
  { path: 'company-website', component: ContentComponent },
  { path: 'company-website/imprint', component: ImprintComponent },
  { path: 'company-website/privacy', component: DsgvoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
