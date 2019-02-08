import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';
 
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'logreg', component: LogregComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'productinfo/:i', component: ProductinfoComponent},
  {path:'cart', component:CartComponent},
  {path:'productlist/:search', component:ProductlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
