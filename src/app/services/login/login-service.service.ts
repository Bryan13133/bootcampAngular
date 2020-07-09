import { User } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  _isAuthenticated: boolean;
  users: User[] = [
    {
      name: 'Javier ',
      lastName: 'Ruiz',
      email: 'java.rv87@gmail.com',
      password: '123',
      phoneNumber: '6141234567',
      birthDate: '09/10/1998',
      termsAndConditions: true

    }
  ];

  constructor(
    private databaseService: DatabaseService
    ) { }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  set isAuthenticated(value) {
    this._isAuthenticated = value;
  }

  getUser(user: User) {
    return this.users.filter((data) => data.email === user.email);
  }

  createUser(user: User) {
    let result;
    const userExists = this.getUser(user).length;

    if (user.email !== 'alex@gmail.com' && !userExists) {
      const r = this.databaseService.createUser(user);
      console.log('***** ' + r);

      result = {
        success: 'User created successfully!'
      };
    } else {
      const msg = (userExists) ? 'User already exists!' : 'User can not be created!';
      result = { error: msg };
    }

    return result;
  }
}
