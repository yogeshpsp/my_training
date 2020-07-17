import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent implements OnInit {
public usersdet: any;
  constructor(private userservice: UserService, private activatedroute: ActivatedRoute) {}

  ngOnInit() {

    this.userservice.getUser()
  .subscribe(data => {
    const uname = this.activatedroute.snapshot.params.username;
    this.usersdet=data.find((d) => { return d.username === uname });
    alert(this.usersdet);
    console.log(this.usersdet);
  });
  }

}
