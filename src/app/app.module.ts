import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SingleWineComponent } from './single-wine/single-wine.component';
import { AppRoutingModule } from './app-routing.module';
import { WinelistComponent } from './winelist/winelist.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SingleWineComponent,
    WinelistComponent,
    WarenkorbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
