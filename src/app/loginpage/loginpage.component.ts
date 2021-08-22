import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public users = [];
  public user: any;
  logincheck: boolean = false;
  loginpass: boolean = false;
  pass: string;
  firstname: string;
  message: string;
  private uname: string;
  constructor(private router: Router, private userservice: UserService, private activatedroute: ActivatedRoute) { }
  // search() {
  //   this.users = this.users.filter(res => {
  //     return res.username.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());

  //   });
  // }

  ngOnInit() {
    this.userservice.getUser()
      .subscribe(data => this.users = data); //subscribe((data)=>{this.users=data}
  }
  onClick() {
    this.message = '';
    const user = this.users.find((d) => { return d.password === this.pass && d.username === this.firstname });
    if (user) {
      console.log(user);
      localStorage.setItem('role', user.role);
      this.router.navigate(['/header']);
    } else {
      this.message="User Authentication Invalid";
    }
  }
  formpage() {
    this.router.navigate(['formlogin']);
  }
}
