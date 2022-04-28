import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShuklaService {

  PORT=8080
  details:any
  loggedinUser:any
  cartitems:any
  price:any
  userdetails:any
  myorders:any

  signup(url:any, body:any){
    return this.http.post(url,body)
  }
  login(url:any, body:any){
    return this.http.post(url,body)
  }
  // logout(){
  //   return this.http.post()
  // }
  getCakedetails(url:any){
    return this.http.get(url)
  }
  searchCakes(url:any){
    return this.http.get(url)
  }
  addtocart(url:any,body:any,options:any){
    return this.http.post(url,body,options)

  }
  getCartItems(url:any,body:any,options:any){
    return this.http.post(url,body,options)

  }
  placeOrder(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }
  addnewcake(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  inc_quant(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }
  dec_quant(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  uploadImage(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  removeCakeFromCart(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }
  getmyOrders(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }



  ascending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj1.price-obj2.price

    })
    return data
  }

  

  descending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj2.price-obj1.price

    })
    return data
  }

  addPaymentdetails(obj:{cakes:any, price:any,name:any, address:any,city:any,pincode:any,phone:any}){
    this.userdetails=obj;
  }
  getPaymentdetails(){
    return this.userdetails
  }

  constructor(private http:HttpClient) { }
}
