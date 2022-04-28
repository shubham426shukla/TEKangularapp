import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ShuklaService } from '../shukla.service';
@Component({
  selector: 'app-addnewcake',
  templateUrl: './addnewcake.component.html',
  styleUrls: ['./addnewcake.component.css']
})
export class AddnewcakeComponent implements OnInit {
  file:any 
  imageUrl:any
 
  constructor(private shukla:ShuklaService) {
    
    
  }
  addnewcake(){
    var url="https://apifromashu.herokuapp.com/api/addcake"
    var body={
      name:"Strawberry",
      price:400,
      description:"strawberry",
      ingredients:["wheat","bread"],
      image:"https://res.cloudinary.com/lekhisahabdev/image/upload/v1650950881/ujtmidb83fcpkahyhmvr.jpg",
      type:"Strawberry Cake",
      weight:3,
      eggless:true


    }
    let myheaders=new HttpHeaders()
    myheaders=myheaders.append("authtoken", localStorage["token"])
    var options={
      headers:myheaders
    }
    this.shukla.addnewcake(url,body,options).subscribe({
      next:(response:any)=>{
        console.log(response)
       

      },
      error:(error)=>{
        console.log("Cart Item error", error)
      }
    })
  }

    getFile(event:any){
      this.file = event.target.files[0]
    }
    upload(){
      // hit the api
      var url = "https://apifromashu.herokuapp.com/api/upload"
      var formdata = new FormData()
     formdata.append("file",this.file)
     let myheaders =  new HttpHeaders()
     myheaders = myheaders.append("authtoken",localStorage["token"])
     var options = {
       headers:myheaders
     }
     this.shukla.uploadImage(url,formdata,options).subscribe({
       next:(response:any)=>{
         console.log("Response from image upload api", response)
         this.imageUrl = response.imageUrl
       },
       error:(error:any)=>{
         console.log("Error from image upload api" , error)
       }
     })
   }


   

  ngOnInit(): void {
  }

}
