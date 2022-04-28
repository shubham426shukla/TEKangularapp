import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShuklaService } from '../shukla.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:any=[]
  totalprice:any=0
  constructor(private shukla:ShuklaService,private router:Router) { 

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
        this.cartitems=response.data
        this.cartitems.forEach((each:any)=>{
          this.totalprice=this.totalprice+each.price*each.quantity
        })
      
       
      },
      error:(error)=>{
        console.log("Error from add to CART api", error)
      }
    })

  }
  del(index:any){
    //this.cartitems.index.quantity-=1
    var url="https://apifromashu.herokuapp.com/api/removeonecakefromcart"
    let myheaders=new HttpHeaders()
    myheaders=myheaders.append("authtoken",localStorage["token"])      
    var options={
      headers:myheaders
    }
    var body={
      name:this.cartitems[index].name,
      cakeid:this.cartitems[index].cakeid,
      price:this.cartitems[index].price,
      image:this.cartitems[index].image,
      weight:this.cartitems[index].weight        
    }
    console.log(body)
    this.shukla.dec_quant(url,body,options).subscribe({
      next:(response:any)=>{
        console.log("Response from increase quantity api", response)
        if(response.data){
          //window.location.reload();
          this.cartitems[index].quantity-=1
          this.updatetotalprice()
        }
      },error(error:any){
        console.log("Error from increase quantity api",error)
      }
    })
    this.router.navigate(['/cart']).then(() => {
      window.location.reload();
    });

  }

  increase_quantity(index:any){
    var url="https://apifromashu.herokuapp.com/api/addcaketocart"
      let myheaders=new HttpHeaders()
      myheaders=myheaders.append("authtoken",localStorage["token"])      
      var options={
        headers:myheaders
      }
      var body={
        name:this.cartitems[index].name,
        cakeid:this.cartitems[index].cakeid,
        price:this.cartitems[index].price,
        image:this.cartitems[index].image,
        weight:this.cartitems[index].weight        
      }
      console.log(body)
      this.shukla.inc_quant(url,body,options).subscribe({
        next:(response:any)=>{
          console.log("Response from increase quantity api", response)
          if(response.data){
            //window.location.reload();
            this.cartitems[index].quantity+=1
            this.updatetotalprice()
          }
        },error(error:any){
          console.log("Error from increase quantity api",error)
        }
      })
  }
  updatetotalprice() {
    this.totalprice = 0;
    for (const iterator of this.cartitems) {
      this.totalprice += (iterator.price * iterator.quantity);
    }
  }


  removeFromCart(index:any){
    //this.cartitems.index.quantity-=1
    var url="https://apifromashu.herokuapp.com/api/removecakefromcart"
    let myheaders=new HttpHeaders()
    myheaders=myheaders.append("authtoken",localStorage["token"])      
    var options={
      headers:myheaders
    }
    var body={
     // name:this.cartitems[index].name,
      cakeid:this.cartitems[index].cakeid,
      //price:this.cartitems[index].price,
      //image:this.cartitems[index].image,
      //weight:this.cartitems[index].weight        
    }
    console.log(body)
    this.shukla.removeCakeFromCart(url,body,options).subscribe({
      next:(response:any)=>{
        console.log("Response from remove cake from cart api", response)
        if(response.data){
          //window.location.reload();
          //this.cartitems[index].quantity-=1
          if(response.message=="Remove whole cake item from cart")
          this.updatetotalprice()
        }
      },error(error:any){
        console.log("Error from remove cake from cart api",error)
      }
    })
    this.router.navigate(['/cart']).then(() => {
      window.location.reload();
    });

  }

  checkout(){
    this.shukla.cartitems=this.cartitems
    this.shukla.price=this.totalprice
    this.router.navigate(["/checkout"])
  }



  ngOnInit(): void {
  }

}
