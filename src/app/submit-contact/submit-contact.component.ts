import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-submit-contact',
  templateUrl: './submit-contact.component.html',
  styleUrls: ['./submit-contact.component.css']
})
export class SubmitContactComponent implements OnChanges {
  constructor() { }
  public val:boolean;
  @Input() visi: boolean;
  
  ngOnChanges(changes:SimpleChanges) {
   const newval=changes['visi'];
   if(newval.currentValue==true){
     this.val=false;
   }
   else{
     this.val=true;
   }
  }

}
