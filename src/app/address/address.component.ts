import { Component, OnInit } from '@angular/core';
import { ShuklaService } from '../shukla.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  userdetails:any={}
  orderDetails:{
    cakes:any,
    price:number,
    name: string,
    address: string,
    city:string,
    pincode:string,
    phone: string
  }={
    cakes:[],
    price:0,
    name:"",
    address:"",
    city:"",
    pincode:"",
    phone:""

  }

  
  constructor(private shukla:ShuklaService,private router:Router) {
    if(!this.shukla.cartitems){
      this.router.navigate(["/cart"])
    }
    
   }
  addAddress(){
    this.shukla.addPaymentdetails(this.orderDetails);
    this.shukla.userdetails=this.userdetails
    console.log(this.shukla.userdetails)
  }

  // addnow(){

  //   this.shukla.addPaymentdetails(this.orderDetails)
  //   console.log(this.orderDetails)
  // }

  // add(obj:{cakes:any, price:any,name:any, address:any,city:any,pincode:any,phone:any}){
  //   this.orderDetails=obj;
  //   this.shukla.addPaymentdetails(this.orderDetails)
  // }

  ngOnInit(): void {
   // console.log(this.orderDetails)
  }

}
