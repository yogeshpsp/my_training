import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employee=[];

  constructor(private _employeeservice: EmployeeService, private router: Router) { }

  ngOnInit() {
    this._employeeservice.getEmployees()
      .subscribe(data => this.employee = data);
  }
  onClick(employeeId: number){
    this.router.navigate(['/details', employeeId]);
  }
}
