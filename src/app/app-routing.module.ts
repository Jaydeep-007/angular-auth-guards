import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'products', component:ProductListComponent, canActivate: [AuthGuard]},
  {path: 'products', component:ProductListComponent, canActivate: [AuthGuard]},
  {path: '**', component:ProductListComponent, pathMatch:'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
