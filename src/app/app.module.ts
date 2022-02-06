import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarsDiameterComponent } from './bars-diameter-select/bars-diameter-select.component';
import { ConcreteSelectComponent } from './concrete-select/concrete-select.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PanelComponent } from './panel/panel.component';
import { SearchComponent } from './search/search.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SteelSelectComponent } from './steel-select/steel-select.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeComponent,
    SearchComponent,
    NavBarComponent,
    SelectionListComponent,
    ConcreteSelectComponent,
    SteelSelectComponent,
    BarsDiameterComponent,
    SideBarComponent
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
