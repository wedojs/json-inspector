import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { JsonDiffComponent } from './json-diff/json-diff.component';

const routes: Routes = [
  { path: "json-viewer", component: JsonViewerComponent },
  { path: "json-diff", component: JsonDiffComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
