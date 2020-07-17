import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl:'./loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
public users=[];
public user: any;
 name: string;
 pass: string;
private uname: string;
  constructor(private router: Router, private userservice: UserService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
  this.userservice.getUser()
  .subscribe(data => this.users = data); 
  }
onClick(){
 this.router.navigate(['/logindetails']);
}
OnInput(event: any) {
  this.name = event.target.value;
 }
onkeypass(event: any){
  this.pass=event.target.value;
}
}
