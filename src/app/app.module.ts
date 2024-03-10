import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { DetailsComponent } from './components/details/details.component';
import { BlankLayoutComponent } from './layOutComponents/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from"@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TextPipe } from './services/pipeservice/text.pipe';
import { SearchinputPipe } from './services/pipeservice/searchinput.pipe';
import { CountPipe } from './services/pipeservice/count.pipe';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyhttpInterceptor } from './services/interceptor/myhttp.interceptor';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SubcategoriesComponent } from './components/subcategories/subcategories.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LaodingInterceptor } from './services/interceptor/laoding.interceptor';

import { AuthLayoutComponent } from './layOutComponents/auth-layout/auth-layout.component';
import { BlankNavComponent } from './components/blank-nav/blank-nav.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    DetailsComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    NotfoundComponent,
    TextPipe,
    SearchinputPipe,
    CountPipe,
    CheckoutComponent,
    AllordersComponent,
    ForgotpasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    SubcategoriesComponent,
    BlankNavComponent,
    AuthNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,//spinnerLoading

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:MyhttpInterceptor , multi:true},
    {provide: HTTP_INTERCEPTORS , useClass:LaodingInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
