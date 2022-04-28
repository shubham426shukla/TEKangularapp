import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SearchComponent } from './search/search.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { AddnewcakeComponent } from './addnewcake/addnewcake.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { MyordersComponent } from './myorders/myorders.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"forgot", component:ForgotComponent},
  {path:"search", component:SearchComponent},
  {path:"addcake", component:AddcakeComponent},
  {path:"addnewcake",component:AddnewcakeComponent},
  {path:"cart", component:CartComponent},
  {path:"checkout", component:CheckoutComponent, children:[
    {path:"", component:CheckoutComponent},
    {path:"address", component:AddressComponent},
    {path:"payment", component:PaymentComponent},
  ]},
  {path:"orderplaced", component:OrderplacedComponent},
  {path:"payment", component:PaymentComponent},
  {path:"myorders", component:MyordersComponent},
  {path:"detail/:cakeid",component:CakedetailComponent},
  {path:"**", component:PagenotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
