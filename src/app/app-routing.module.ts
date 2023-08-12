import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ProudctDetailsComponent } from './components/proudct-details/proudct-details.component';
import { ProudctRatingComponent } from './components/proudct-rating/proudct-rating.component';
import { ProudctOffersComponent } from './components/proudct-offers/proudct-offers.component';

const routes: Routes = [
  {path: '', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'products', component:ProductListComponent, canActivate: [AuthGuard]},
  {path: 'products', component:ProductListComponent, canActivate: [AuthGuard]},
  {
    path: 'product/:id', component: ProudctDetailsComponent,canActivateChild: [AuthGuard],
    children: [
      { path: 'rating', component: ProudctRatingComponent, canDeactivate: [AuthGuard] },
      { path: 'offers', component: ProudctOffersComponent }
    ]
  },
  {
    path: 'service',
    loadChildren: () => import('./modules/product-service/product-service.module').then(m => m.ProductServiceModule),
    canLoad: [AuthGuard]
  },
  {path: '**', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
