import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl, AbstractControl } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import {emailValidator, passwordMatch} from 'src/app/utilities/validators';
import { errors } from 'src/app/utilities/errorsMsg';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(
    private mainService: MainServiceService,
    private fb: FormBuilder,
    private loginService: LoginServiceService

  ) { }

  ngOnInit(): void {

  }

  createForm(){
    return this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      termsAndConditions: ['', [Validators.required]],

    }, {
      validators: emailValidator, passwordMatch
    }
    );
  }
  get email(): AbstractControl {
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

onsubmit({valid, value}: {valid: boolean, value: any}){
  if(valid){
    this.loginService.createUser(value);
  }
}

}




