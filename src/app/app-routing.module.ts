import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonViewerComponent } from './components/main/json-viewer/json-viewer.component';

const routes: Routes = [
  {path: "viewer", component: JsonViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
