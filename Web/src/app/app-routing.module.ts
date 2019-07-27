import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CareerComponent } from './pages/career/career.component';
import { InformationClauseComponent } from './pages/information-clause/information-clause.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WacGeneralComponent } from './pages/wac-general/wac-general.component';
import { WacOffersComponent } from './pages/wac-offers/wac-offers.component';
import { WacCommandComponent } from './pages/wac-command/wac-command.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'career', component: CareerComponent,
    children: [
      {path: 'general', component: WacGeneralComponent},
      {path: 'offers', component: WacOffersComponent},
      {path: 'command', component: WacCommandComponent},
    ]
  },
  { path: 'information_clause', component: InformationClauseComponent},
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: '**', redirectTo: 'index', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
