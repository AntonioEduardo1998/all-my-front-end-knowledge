import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from '@root/src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this._http.get<User[]>(environment.baseUrl).pipe(pluck('users'));
  }
}
