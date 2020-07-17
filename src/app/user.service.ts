import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUser} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string="/assets/data/userlist.json";
  constructor(private http: HttpClient) { }

  getUser(): Observable<IUser[]>{
   console.log(this.http.get<IUser[]>(this._url));
    return this.http.get<IUser[]>(this._url);
    
  }
}
