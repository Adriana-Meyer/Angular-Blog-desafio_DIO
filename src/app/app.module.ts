import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { SideCardComponent } from './components/side-card/side-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainTitleComponent,
    HighlightCardComponent,
    SideCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
