import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { ShuklaService } from '../shukla.service';
import { FormBuilder,FormGroup,Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  searchtext:any
  userdetails:any ={}
  name:any
  email:any
  password:any

  users:any = []
  signupForm:any

  constructor(private shuklaservice:ShuklaService, private formbuilder:FormBuilder) {
    this.signupForm=this.formbuilder.group({
      shukla:['',[Validators.required, Validators.email]],
      shubham:['',[Validators.required]],
      thor:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }


  responseError:any
  signup(){
    if(this.signupForm.valid){
      alert()
    }
    else{
      return
    }
    // var url="https://apifromashu.herokuapp.com/api/register"
    // this.shuklaservice.signup(url,this.userdetails).subscribe({
    //   next:(response:any)=>{
    //     console.log("Response from registers api", response)
    //     if(response.message=="User Already Exists"){
    //       this.responseError="Email Already exsists"
    //     }

    //     //checking for duplicates
    //     this.userdetails.email==response.email?
    //     console.log("This mail id is already taken my friend",response.email):console.log("Welcome",this.userdetails.name)




    //     this.userdetails.email=response.email
    //     this.userdetails.name=response.name
    //     this.userdetails.password=response.password
      
    //   },
    //   error:(error)=>{
    //     console.log("Error from register api", error)
    //   }
    // })




   
    console.log(this.userdetails)

   var temp={...this.userdetails}
     this.users.push(temp)
  }


  search(){
    alert(this.searchtext)
  }
  
  deleteUser(index:any){
    alert(index)

  }

}
