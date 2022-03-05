import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { BarsDiameterComponent } from './bars-diameter-select/bars-diameter-select.component';
import { PanelComponent } from './common/panel/panel.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { ConcreteSelectComponent } from './concrete-select/concrete-select.component';
import { ContainerPageComponent } from './container-page/container-page.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReinforcedConcreteContentsComponent } from './reinforced-concrete-contents/reinforced-concrete-contents.component';
import { ReinforcedConcreteComponent } from './reinforced-concrete/reinforced-concrete.component';
import { RouteLinkComponent } from './route-link/route-link.component';
import { SearchComponent } from './search/search.component';
import { SectionBeamComponent } from './section-beam/section-beam.component';
import { SectionDesignComponent } from './section-design/section-design.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SideBarPanelComponent } from './side-bar-panel/side-bar-panel.component';
import { SideBarRCComponent } from './side-bar-rc/side-bar-rc.component';
import { SteelSelectComponent } from './steel-select/steel-select.component';
import { StructuralComponent } from './structural/structural.component';


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
    SideBarComponent,
    SectionDesignComponent,
    SectionBeamComponent,
    SideBarRCComponent,
    SideBarPanelComponent,
    StructuralComponent,
    RouteLinkComponent,
    ContainerPageComponent,
    ReinforcedConcreteComponent,
    ApplicationPageComponent,
    ReinforcedConcreteContentsComponent
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
