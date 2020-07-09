
import { FormControl, FormGroup } from '@angular/forms';

function taskValidator(control: FormControl): {lengthTaskValid: boolean} | null{
  const {value} = control.get('task') ;
  const lengthRange = new RegExp('^[a-zA-Z0-9!¡"#$%&/()=?¿*+:;@]{3,70}$');
  return lengthRange.test(value) ? null : {
    lengthTaskValid: false
  };
}

function nameValidator(control: FormControl): {lengthNameValid: boolean} | null{
  const {value} = control.get('name') ;
  const lengthRange = new RegExp('^[a-zA-Z0-9!¡"#$%&/()=?¿*+:;@]{3,20}$');
  return lengthRange.test(value) ? null : {
    lengthNameValid: false
  };
}

function emailValidator(control: FormControl){
const {value} = control;
const EMAIL_REGEX  = new RegExp('^[a-z0-9%_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
return EMAIL_REGEX.test(value) ? null :  {
  emailInvalid: true
};
}

function passwordMatch(form: FormGroup): { notequal: boolean } | null {
  const password = form.get('password').value;
  const confirmPassword = form.get('confirmPassword').value;

  return password === confirmPassword ? null : {
    notequal: true
  };
}

export {taskValidator, nameValidator, emailValidator, passwordMatch};
