import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShuklaService } from '../shukla.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responseError:any
  userdetails:any={}
  constructor(private http:HttpClient, private shuklaservice:ShuklaService,private router:Router) { }

  login(){
    var url="https://apifromashu.herokuapp.com/api/login"
    this.shuklaservice.login(url,this.userdetails).subscribe({
      next:(response:any)=>{
        console.log("Response from login api", response)
        this.userdetails.email==response.email&&this.userdetails.password==response.password?
        console.log("Welcome ",response.email):console.log("This mail id is already taken my friend")
        if(response.token){
          localStorage["token"]=response.token
          this.shuklaservice.loggedinUser=response.email
          this.router.navigate(["/"])
        }
        else{
          this.responseError="Invalid Login"
        }
       // this.cakes=response.data
      //  this.email=this.email
      //  this.name=this.name
      //  this.password=password
      },
      error:(error)=>{
        console.log("Error from register api", error)
      }
    })
  }

  ngOnInit(): void {
  }

}
