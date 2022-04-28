//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShuklaService} from '../shukla.service';
import {faSearch, faCartShopping, faSignOut} from '@fortawesome/free-solid-svg-icons'
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
 // styleUrls: ['./navbar.component.css'],
  //providers:[ShuklaService]
})
export class NavbarComponent implements OnInit {
  searchtext:any
  isloggedin:any
  length:any
  email: any
  password :any
  adminUsers:any=["shubhamshukla4568@gmail.com"]
   faSearch=faSearch
   faCartShopping=faCartShopping
   faSignOut=faSignOut
  search(){
   // alert(this.shuklaangular.PORT)
   // alert(this.searchtext)

    if(this.searchtext)
    this.router.navigate(["/search"],{queryParams:{q:this.searchtext}})




  }
  constructor(private shuklaangular: ShuklaService,private router:Router) {
      this.isloggedin=localStorage["token"]?true:false
      if(this.isloggedin){
        this.ngDoCheck()
        var url="https://apifromashu.herokuapp.com/api/cakecart"
        var headers=new HttpHeaders()
        headers=headers.append("authtoken",localStorage["token"])
        var body={}
        var options={
          headers:headers
        }
        this.shuklaangular.getCartItems(url,body,options).subscribe({
          next:(response:any)=>{
            console.log("Response from cart items API in navbar", response)
            this.shuklaangular.cartitems=response.data
            this.length=response.data.length
          },
          error:(error:any)=>{
            console.log("Error from cart items API in navbar", error)
          }
        })
      }
  }
  isAdmin:any=false
  ngDoCheck(){
    this.length=this.shuklaangular.cartitems?.length
    if(localStorage["token"]){
      this.isloggedin=true
      this.isAdmin=true


      if(this.adminUsers.includes(localStorage['loggedinUser']))
      {
        this.isAdmin=true
      }
    }
    else{
      this.isloggedin=false
      this.isAdmin=false
    }
  }


  login(){
    var url="https://apifromashu.herokuapp.com/api/login"
    this.shuklaangular.login(this.email,this.password).subscribe({
      next:(response:any)=>{

        this.email==response.email?console.log("Login Succesfull", response.email):console.log("Login UnSuccesfull", response.email)

       // this.cakes=response.data
      //  this.email=this.email
      //  this.name=this.name
      //  this.password=password
      },
      error:(error)=>{
        console.log("Error from login api", error)
      }
    })



  }
  logout(){

    localStorage.clear()
    window.location.href="/"
  // this.ngDoCheck

    //this.isloggedin=false
  }








  ngOnInit(): void {
  }

}
