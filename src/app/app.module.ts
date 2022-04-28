import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CakelistComponent } from './cakelist/cakelist.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ForgotComponent } from './forgot/forgot.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { AddnewcakeComponent } from './addnewcake/addnewcake.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyordersComponent } from './myorders/myorders.component';
//import {}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CarouselComponent,
    CakeComponent,
    SignupComponent,
    CakelistComponent,
    HomeComponent,
    SearchComponent,
    ForgotComponent,
    AddcakeComponent,
    PagenotfoundComponent,
    CakedetailComponent,
    CartComponent,
    CheckoutComponent,
    AddressComponent,
    PaymentComponent,
    OrderplacedComponent,
    AddnewcakeComponent,
    MyordersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    HttpClientModule,
    NgxUiLoaderModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
