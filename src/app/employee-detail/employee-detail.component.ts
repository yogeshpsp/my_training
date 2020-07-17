import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employee: any;
  constructor(
    private employeeservice: EmployeeService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
this.employeeservice.getEmployees()
.subscribe (data => {
  const id = this.activatedRoute.snapshot.params.id;
  const age = this.activatedRoute.snapshot.params.age;
  this.employee=data.find((d) => { return d.id === Number(id) || d.age===age });
  console.log(this.employee);
});
  }
}
