import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }
  title = 'my-training';
  message: string;
  user: string;
  val:boolean;
  check:boolean;
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
  header(){
    this._router.navigate(['/header']);
  } 
  logout(){
    localStorage.clear();
    this._router.navigate(['/']);
  }
  
  ngOnInit(): void {
    if(localStorage.getItem('role')=="user" || localStorage.getItem('role')=="admin"){
      this.check=true;
    }
    if(localStorage.getItem('role')=="executive" || localStorage.getItem('role')=="user"){
      this.val=false;
    }
    else if(localStorage.getItem('role')=="admin"){
      this.val=true;
    }
  }

}
