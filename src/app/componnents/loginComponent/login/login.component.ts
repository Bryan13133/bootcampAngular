import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private mainService: MainServiceService,
    private fb: FormBuilder
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

function emailValidator(control: FormControl){
  const {value} = control;
  const EMAIL_REGEX  = new RegExp('^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$');
  return EMAIL_REGEX.test(value) ? null :  {
    emailVlid: false
};
  }
