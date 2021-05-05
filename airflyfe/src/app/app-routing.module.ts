import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {FlightsComponent} from './pages/flights/flights.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'airfly', pathMatch: 'full' },
  {
    path: 'airfly',
    component: LandingComponent,
    children: [
      {
        path: 'letovi',
        component: FlightsComponent,
      },
      {
        path: 'destinacije',
        component: FlightsComponent,
      },
      {
        path: 'informacije',
        component: FlightsComponent,
      },
      {
        path: 'kontakt',
        component: FlightsComponent,
      },

      {
        path: 'registracija',
        component: FlightsComponent,
      },
      {
        path: 'prijava',
        component: FlightsComponent,
      },
    ],
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
