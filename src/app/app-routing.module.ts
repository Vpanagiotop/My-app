import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { HomeComponent } from './home/home.component';
import { ReinforcedConcreteContentsComponent } from './reinforced-concrete-contents/reinforced-concrete-contents.component';
import { ReinforcedConcreteComponent } from './reinforced-concrete/reinforced-concrete.component';
import { SearchComponent } from './search/search.component';
import { SectionDesignComponent } from './section-design/section-design.component';
import { StructuralComponent } from './structural/structural.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'application', component: ApplicationPageComponent,
    children: [
      { path: 'structural', component: StructuralComponent }
    ]
  },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      { path: 'kati', component: StructuralComponent }
    ]
  },
  { path: 'section-design', component: SectionDesignComponent },
  {
    path: 'structural',
    component: StructuralComponent
  },

  {
    path: 'reinforced-concrete', component: ReinforcedConcreteComponent,
    children: [
      { path: 'contents', component: ReinforcedConcreteContentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
