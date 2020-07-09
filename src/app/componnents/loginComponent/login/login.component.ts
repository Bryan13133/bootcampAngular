import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';
import {emailValidator} from 'src/app/utilities/validators';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private mainService: MainServiceService,
    private fb: FormBuilder,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  validateUser({valid, value}: {valid: boolean, value: string}){

  //  const isValid = this.mainService.validateUser(value.email, value.password);
  //  console.log(isValid);
  }
  createForm(){
    return this.fb.group({
      email: '',
      password: ''
    }, {
      validators: emailValidator
    }
    );
  }


}
