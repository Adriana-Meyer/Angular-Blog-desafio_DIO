import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { SideCardComponent } from './components/side-card/side-card.component';
import { HomeComponent } from './pages/home/home.component';
import { OthersCardComponent } from './components/others-card/others-card.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainTitleComponent,
    HighlightCardComponent,
    SideCardComponent,
    HomeComponent,
    OthersCardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
