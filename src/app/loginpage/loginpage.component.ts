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
logincheck:boolean=false;
loginpass:boolean=false;
 pass: string;
 firstname:string;
 message:string;
private uname: string;
  constructor(private router: Router, private userservice: UserService, private activatedroute: ActivatedRoute) { }
  search()
  {
    this.users=this.users.filter(res=>{
      return res.username.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
    
    });
  }

  ngOnInit() {
  this.userservice.getUser()
  .subscribe(data => this.users = data); 
  }
onClick(){
if(this.users[0].username==this.firstname && this.users[0].password==this.pass){
    this.router.navigate(['/home']);
}
else{
  this.message="User Authentication Invalid";
}
}


}




