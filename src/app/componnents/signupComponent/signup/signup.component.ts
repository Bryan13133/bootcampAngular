import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl, AbstractControl } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import {emailValidator, passwordMatch} from 'src/app/utilities/validators';
import { errors } from 'src/app/utilities/errorsMsg';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  showPass = false;
  showConfirmPass = false;
  confirmPassword = '';
  constructor(
    private router: Router,
    private mainService: MainServiceService,
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
    const users = this.databaseService.getUsers().subscribe(
      res => console.log(res),
      err => console.log(err)
    );

  }

  canDeactivate() {
    if (this.form.dirty || this.form.touched) {
      return window.confirm('Are you already want to leave this page?');
    }

    return true;
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [emailValidator, Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      birthDate:  ['', [Validators.required]],
      termsAndConditions : [false, [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: [passwordMatch]
    });
  }

  get email(): AbstractControl {
    console.log(this.form.get('email'));
    return this.form.get('email');
  }

  getErrorMessage(control: AbstractControl): string | null {
    for (const propertyErrorName in control.errors) {
      if (control.errors.hasOwnProperty(propertyErrorName)) {
        return errors[propertyErrorName];
      }
    }
    return null;
  }

  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    if (valid) {
      const data = this.loginService.createUser(value);
      this.router.navigate(['login'], {
        queryParams: data
      });
    }
  }
}




