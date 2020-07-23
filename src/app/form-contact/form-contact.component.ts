import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
public visible:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onClick(){
this.visible=false;
}
}
