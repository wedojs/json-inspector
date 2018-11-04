import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Electron imports
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabbedNavbarComponent } from './components/main/tabbed-navbar/tabbed-navbar.component';
import { SubappSelectorComponent } from './components/main/subapp-selector/subapp-selector.component';
import { MainComponent } from './components/main/main.component';
import { JsonViewerComponent } from './components/main/json-viewer/json-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TabbedNavbarComponent,
    SubappSelectorComponent,
    MainComponent,
    JsonViewerComponent
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
