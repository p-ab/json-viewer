import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonViewerComponent } from './json-viewer/json-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: '/json-view', pathMatch: 'full' },
  { path: 'json-view', component: JsonViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
