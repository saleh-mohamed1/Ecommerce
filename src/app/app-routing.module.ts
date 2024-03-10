import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandsComponent } from './components/brands/brands.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BlankLayoutComponent } from './layOutComponents/blank-layout/blank-layout.component';
import { authguardGuard } from './services/guard/authguard.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthLayoutComponent } from './layOutComponents/auth-layout/auth-layout.component';

const routes: Routes = [

  {path:'' ,
  canActivate:[authguardGuard] ,
  component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'checkOut/:idCart',component:CheckoutComponent},
    {path:'allorders',component:AllordersComponent},
    {path:'products',component:ProductsComponent},
    {path:'wish-list',component:WishlistComponent},
    {path:'brands',component:BrandsComponent},
    {path:'categories',component:CategoriesComponent},
  ]},
  {path:'' , component:AuthLayoutComponent,children:[
    {path:'login', component:LoginComponent},
    {path:'forgotpassword', component:ForgotpasswordComponent},
    {path:'verify-code', component:VerifyCodeComponent},
    {path:'reset-password', component:ResetPasswordComponent},
    {path:'register', component:RegisterComponent}
  ]},
  {path:'**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
