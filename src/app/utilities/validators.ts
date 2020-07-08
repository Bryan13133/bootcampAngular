
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
const EMAIL_REGEX  = new RegExp('^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$');
return EMAIL_REGEX.test(value) ? null :  {
  emailVlid: false
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
