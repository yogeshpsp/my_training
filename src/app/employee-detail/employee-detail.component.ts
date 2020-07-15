import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employee=[];
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
this.employeeservice.getEmployees()
.subscribe (data => this.employee=data);
  }
}
