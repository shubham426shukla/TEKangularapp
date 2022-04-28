import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyAaaaRecord } from 'dns';
import { ShuklaService } from '../shukla.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  body:any={};
  totalprice:any
  cartItems:any=[];
  cakes:any=this.shukla.cartitems.cakes
 // orders:any

  address:any
  cakeorder:any={
   // cakes:this.shukla.cartitems.data,
    price:this.shukla.getPaymentdetails().price,
    name:this.shukla.getPaymentdetails().name,
    address:this.shukla.getPaymentdetails().address,
    city:this.shukla.getPaymentdetails().city,
    pincode:this.shukla.getPaymentdetails().pincode,
    phone:this.shukla.getPaymentdetails().phone

  }

 //console.log(this.cakeorder)


  constructor(private shukla:ShuklaService, private router:Router) {

   // console.log(this.shukla.cartitems)
    console.log(this.cakes);
    var url="https://apifromashu.herokuapp.com/api/cakecart"
    let myheaders=new HttpHeaders()
    myheaders=myheaders.append("authtoken", localStorage["token"])
    var options={
      headers:myheaders
    }
    var body={}
    this.shukla.getCartItems(url,body,options).subscribe({
      next:(response:any)=>{
        console.log(" response from cart items api", response)
        this.cartItems=response.data
        this.cartItems.forEach((each:any)=>{
          this.totalprice=this.totalprice+each.price*each.quantity
        })


      },
      error:(error)=>{
        console.log("Error from add to CART api", error)
      }
    })
  }


  // getAddressDetails():{cakes:any,price:number,name:string,address:string, city:string,pincode:string,phone:number}{
  //   return this.shukla.getPaymentdetails;
  // }


  placeOrder(){
    var url1="https://apifromashu.herokuapp.com/api/addcakeorder"
     let myheaders=new HttpHeaders()
    myheaders=myheaders.append("authtoken", localStorage["token"])
    var options={
      headers:myheaders
    }
    var body={
    name:this.shukla.getPaymentdetails().name,
    address:this.shukla.getPaymentdetails().address,
    city:this.shukla.getPaymentdetails().city,
    pincode:this.shukla.getPaymentdetails().pincode,
    phone:this.shukla.getPaymentdetails().phone,
    cakes:[],
    price:this.totalCost,

    }
    for (var val of this.cartItems) {
      console.log(val);
      body.cakes+=val.name
    }
      console.log(body)
    this.shukla.placeOrder(url1,body,options).subscribe({
    next:(response:any)=>{
      console.log("Response from cakeorder API",response);
      //console.log(response.order)
      this.shukla.myorders=response.order;

      this.ngDoCheck();
      this.router.navigate(["/myorders"])
    },
    error:(error:any)=>{
      console.log("Error Response from cakeorder API",error)
    }
  })
  }
    totalCost:any=0
findTotalCost(){
  this.totalCost=0;
  this.cartItems.forEach( (each:any) =>{
    this.totalCost+=(each.price*each.quantity);
  })

}
// getPaymentdetails(){
//   cakes:any,
//   this.cakeorder.price:number,
//   this.cakeorder.name:string,
//   address:string,
//   city:string,
//   pincode:number,
//   phone:number
// return this.shukla.getPaymentdetails;
// }
// placeOrder(){
//   var url1="https://apifromashu.herokuapp.com/api/addcakeorder"
//   let myheaders=new HttpHeaders()
//     myheaders=myheaders.append("authtoken", localStorage["token"])
//     var options={
//       headers:myheaders
//     }
//   this.shukla.placeOrder(url1,this.cakeorder,options).subscribe({
//     next:(response:any)=>{
//       console.log(response);
//       this.ngDoCheck();
//       this.router.navigate(["/orderplaced"])
//     },
//     error:(error:any)=>{
//       console.log(error)
//     }
//   })
// }

ngDoCheck(){
  this.findTotalCost()
  this.cakeorder.price=this.totalCost

}


   //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// to get all the cakes
// url - /allcakes
// method - get

// to get cake details
// url - /cake/cakeid
// method - get

// to get search results -
// url --- /searchcakes?q=searchtext
// method -- get

// Registration
// url --  /register
// method -- post
// body - {email,name,password}

// Login
// URL - -- /login
// method-- post
// body - {email,password}

// FORgot password----?
// url - /recoverpassword
// method - post
// body - {email}

// Addcaketo cart
// url - /addcaketocart
// method:post
// body - {name,cakeid,price,image,weight}

// For increasing quantity
// url - /addcaketocart
// method:post
// body - {name,cakeid,price,image,weight}

// For remove from cart
// url - /removecakefromcart
// method:post
// body - {cakeid}

// For decreasing quantity
// url - /removeonecakefromcart
// method:post
// body - {cakeid}

// For getting cart items
// url - /cakecart
// method:post
// body - {}
// for placing order

// url - /addcakeorder------?
// method -post
// body - {name,address,city,pincode,phone,cakes,price}



    // console.log(this.cakeorder.name)
    // console.log(this.cakeorder.address)
    // console.log(this.cakeorder.city)
    // console.log(this.cakeorder.pincode)






  ngOnInit(): void {
  }

}
