import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  message: any;
  constructor(private activatedroute: ActivatedRoute) {
    this.message = null;
    this.activatedroute.queryParams.subscribe((res: any) => {
      if (res.message) {
        this.message = res.message;
      }
    })
   }
  

  ngOnInit(): void {
  }

}
