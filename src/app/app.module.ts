import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { ConcreteSelectComponent } from './concrete-select/concrete-select.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeComponent,
    SearchComponent,
    NavBarComponent,
    SelectionListComponent,
    ConcreteSelectComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
