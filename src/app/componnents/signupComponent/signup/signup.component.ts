import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(
    private mainService: MainServiceService,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {

  }

  createForm(){
    return this.fb.group({
      name: '',
      lastName: '',
      password: '',
      phoneNumber: '',
      birthDate: '',
      termsAndConditions: '',

    }, {
      validators: emailValidator, passwordValidator
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


function passwordValidator(control: FormControl){
const {value} = control;


}
