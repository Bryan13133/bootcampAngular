import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';
import {emailValidator} from 'src/app/utilities/validators';
import { DatabaseService } from 'src/app/services/database/database.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;
  success: string;
  constructor(
    private mainService: MainServiceService,
    private fb: FormBuilder,
    private databaseService: DatabaseService,
    private loginService: LoginServiceService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.error = this.route.snapshot.queryParamMap.get('error');
    this.success = this.route.snapshot.queryParamMap.get('success');
    this.form = this.createForm();
    this.form = this.createForm();
  }

  validateUser({valid, value}: {valid: boolean, value: string}){

  //  const isValid = this.mainService.validateUser(value.email, value.password);
  //  console.log(isValid);
  }
  createForm(){
    return this.fb.group({
      email: ['', [emailValidator, Validators.required]],
      password: ['', [ Validators.required]]
    }, {
      validators: emailValidator
    }
    );
  }

  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    if (valid) {
      const user = this.loginService.getUser(value);
      this.loginService.isAuthenticated = !!user.length;

      if (user.length) {
        this.router.navigate(['todolist']);
      }
    }
  }


}
