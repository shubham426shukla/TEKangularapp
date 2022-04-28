import { Component, OnInit } from '@angular/core';
import {ShuklaService} from '../shukla.service';
//import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  cakes:any = [
    {name:"Truffle cake", price:520,image:"assets/2.jpeg",special:true},
    {name:"fruit cake", price:880, image:"assets/2.jpeg"},
    {name:"Strawberry cake", price:550,image:"assets/2.jpeg",special:true},
    {name:"Vanilla cake", price:670, image:"assets/2.jpeg"},
    {name:"Black Forest cake", price:450,image:"assets/2.jpeg"},
    {name:"fruit cake", price:100, image:"assets/2.jpeg",special:true},
    {name:"Vanilla cake", price:200,image:"assets/2.jpeg"},
    {name:"fruit cake", price:400, image:"assets/2.jpeg",special:true},
    {name:"Truffle cake", price:900,image:"assets/2.jpeg"},
    {name:"fruit cake", price:600, image:"assets/2.jpeg"},
    {name:"Truffle cake", price:500,image:"assets/2.jpeg",special:true},
    {name:"fruit cake", price:700, image:"assets/2.jpeg"},
  ]

  
  constructor(private shuklaangular: ShuklaService, private http : HttpClient) {

    var url="https://apifromashu.herokuapp.com/api/allcakes"
    this.http.get(url).subscribe({
      next:(response:any)=>{
        console.log("Response from all cakes api", response)
        this.cakes=response.data
      },
      error:(error)=>{
        console.log("Error from all cakes api", error)
      }
    })





   }

  ngOnInit(): void {
  }

  

  ASCsort(){
    alert(this.shuklaangular.PORT)
   this.cakes=this.shuklaangular.ascending(this.cakes)
  }
  DSCsort(){
    this.cakes=this.shuklaangular.descending(this.cakes)

  }
  popularity(){
    this.cakes=this.shuklaangular.descending(this.cakes)

  }

}
