import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
    path: 'search',
    component: SearchComponent,
    children: [
      { path: 'kati', component: StructuralComponent }
    ]
  },
  { path: 'section-design', component: SectionDesignComponent },
  { path: 'structural', component: StructuralComponent },

  { path: 'reinforced-concrete', component: ReinforcedConcreteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
