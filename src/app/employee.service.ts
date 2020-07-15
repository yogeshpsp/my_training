import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmployee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string="/assets/data/employee.json";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
  


}
