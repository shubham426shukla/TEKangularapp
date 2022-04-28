import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShuklaService } from '../shukla.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  myorders:any=[];
  constructor(private shukla:ShuklaService, private http:HttpClient ) {
   
   // this.orders=this.shukla.myorders
    var url="https://apifromashu.herokuapp.com/api/cakeorders";
    let myheaders=new HttpHeaders()
    myheaders=myheaders.append("authtoken", localStorage["token"])
    var options={
      headers:myheaders
    };
    var body={};
  this.shukla.getmyOrders(url,body,options).subscribe({
    next:(response:any)=>{
      console.log("Response from Add my orders api",response);
     // this.ngDoCheck();
      //this.router.navigate(["/orderplaced"])
      this.myorders=response.cakeorders;
      console.log(this.myorders);
    }, 
    error:(error:any)=>{
      console.log(error)
    }
  })


   }

  ngOnInit(): void {
  }

}
