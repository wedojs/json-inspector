import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Electron imports
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { JsonDiffComponent } from './json-diff/json-diff.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalFooterComponent,
    JsonViewerComponent,
    JsonDiffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Electron related imports
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
