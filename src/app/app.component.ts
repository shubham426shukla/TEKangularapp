import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {faSearch, faCartShopping, faSignOut} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tekangularapp';
  faSearch:any=faSearch
  faCartShopping=faCartShopping
  faSignOut=faSignOut

  name = 'NGX-UI-LOADER';

  constructor(private http: HttpClient,
    private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxLoader.start();
    this.http.get(`https://api.npmjs.org/downloads/range/last-year/ngx-ui-loader`).subscribe((res: any) => {
      console.log(res);
      this.ngxLoader.stop();
    });
  }
}
