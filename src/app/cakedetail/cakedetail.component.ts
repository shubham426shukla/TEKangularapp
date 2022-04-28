import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShuklaService } from '../shukla.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit {
  cakeid:any
  isloggedin:any
  cake:any={}
  isadding:any=false
  name:any
  price:any
  image:any
  weight:any
  cakedetails:any=[]
  constructor(private route:ActivatedRoute, private shukla:ShuklaService,private http: HttpClient,private router:Router) {
    this.isloggedin=localStorage["token"]?true:false
    this.cakeid=this.route.snapshot.params["cakeid"]
    //lets hit the apiiii
    var url="https://apifromashu.herokuapp.com/api/cake/"+this.cakeid
    this.shukla.getCakedetails(url).subscribe({
      next:(response:any)=>{
        console.log("Response from cake details api", response)
        this.cake=response.data
      },
      error:(error:any)=>{
        console.log("Error from cake details api", error)
      }
    })
   }


   //*****     ADD TO CART   @@@@@@@@@   
   addToCart(){
     let myheaders=new HttpHeaders()
     myheaders=myheaders.append("authtoken",localStorage["token"])
     if(!localStorage['token'])
     this.router.navigate(["/login"])
     else{
       this.cakedetails={id:this.cake.cakeid,name:this.cake.name,price:this.cake.price,image:this.cake.image,weight:this.cake.weight}
      var url="https://apifromashu.herokuapp.com/api/addcaketocart"
      var options={headers:myheaders}
      var body= {
        cakeid:this.cake.cakeid,
        name:this.cake.name,
        price:this.cake.price,
        image:this.cake.image,
        weight:this.cake.weight

      }
      this.shukla.addtocart(url,body,options).subscribe({
        next:(response:any)=>{
          console.log(" ADDTOCART api", response)
          if(response.data){
            this.router.navigate(["/cart"])
          }
        
         
        },
        error:(error)=>{
          console.log("Error from ADDTOCART api", error)
        }
      })
     }


   }
  ngOnInit(): void {
  }

}
