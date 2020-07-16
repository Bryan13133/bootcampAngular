import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  API_URI = 'http://localhost:3000';
  constructor( private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`${this.API_URI}/users`);
  }
  createUser(user: User): Observable<User>{
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

     return this.http.post<User>(`${this.API_URI}/newUser`, user);
  }
}
