import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})

export class CakeComponent implements OnInit {
  

 @Input() name:any
  @Input() price:any

  @Input() cakedata:any//={
    //name:"Choco Truffle",
    //price:"Rs 800",
    //image:"assets/2.jpeg"
 // }

 //toast(){
   //alert("Thanks")
 //}

 constructor(private toastr: ToastrService, private router:Router) {
   console.log(">>>>>>>>>>>>>>>>>>>",this.cakedata)
 }

 showCakedetails(){
   this.router.navigate(['/detail',this.cakedata.cakeid])

 }


  toast() {
    this.toastr.success('Thanks for Purchase', 'Tasty Cake');
  }


  ngOnInit(): void {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>",this.cakedata)
  }

}
