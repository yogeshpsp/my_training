import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router){

  }
  title = 'my-training';
  message: string;
  user: string;
   _userlog: boolean;
  get userlog(): boolean{
    return this._userlog;
  }
  set userlog(value:boolean){
    this._userlog=value;
  if(value===true) {
    this.message='You are in home page';
  }
    else{
      this.message='you are in contact page';
    }
  }
  footer(): void{
this._router.navigate(['/footer']);
this.message='you are in footer section';
  }
  home(): void{
    this._router.navigate(['/home']);
  }
}
