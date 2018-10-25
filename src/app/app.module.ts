import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular material related imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

// Electron imports
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Angular material related imports
    BrowserAnimationsModule,
    MatButtonModule,

    // Electron related imports
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
