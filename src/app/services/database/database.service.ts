import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  API_URI = 'http://localhost:3000';
  constructor( private http: HttpClient) { }

  getUsers(){
    console.log(this.http.get(`${this.API_URI}/users`));
    return this.http.get(`${this.API_URI}/users`);
  }
  createUser(user: User){
    console.log(JSON.stringify(user));
    return this.http.post<any>(`${this.API_URI}/newUser`, user);
  }
}
