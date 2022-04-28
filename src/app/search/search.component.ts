import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShuklaService } from '../shukla.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchitems:any=[]
  constructor(private route:ActivatedRoute, private shukla:ShuklaService) {
   // var searchtext=this.route.snapshot.queryParams["q"]
    this.route.queryParams.subscribe((query:any)=>{
      var searchtext = query["q"]
      var url = "https://apifromashu.herokuapp.com/api/searchcakes?q="+searchtext
      this.shukla.searchCakes(url).subscribe({
        next:(response:any)=>{
            console.log("Response from search cakes api" , response)
            this.searchitems = response.data
        },
        error:(error)=>{
            console.log("error from search ckesa api" , error)
        }
      })
    })
  }
  //   var url="https://apifromashu.herokuapp.com/api/searchcakes?q="+searchtext
  //   this.shukla.searchCakes(url).subscribe({
  //     next:(response:any)=>{
  //       console.log("Response from search cakes api",response)
  //       this.searchitems=response.data
  //     },
  //     error:(error)=>{
  //       console.log("Error from search api",error)
  //     }
  //   })
  //  }

  ngOnInit(): void {
  }

}
