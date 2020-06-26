import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  form: FormGroup;
  isEditable: boolean;
  constructor(
    private mainService: MainServiceService,
    private fb: FormBuilder) { }
  ngOnInit(): void {


    this.form = this.createForm();

    // this.mainService.currentItem
    // .subscribe(
    //   todoItem => {
    //     this.form = todoItem;
    //     this.isEditable = true;
    //   }
    // );

  }

  createForm(){
    return this.fb.group({
      name: '',
      task: ['', [Validators.maxLength(20), Validators.required]],
      email: ['']

    }, {
      validators: emailValidator
    });
  }

  addNewTask( {valid, value}: {valid: boolean, value: string}){
    if (valid) {
      if (!this.isEditable){
        const todo = new Todo(value);
        this.mainService.addNewTodo(todo);
        this.form.reset();
      }
    }

  }
  editTask(){
    this.isEditable = false;
    this.form.reset();
  }

}
function nameVlidator(){

}

function emailValidator(control: FormControl){
const {value} = control;
const EMAIL_REGEX  = new RegExp('^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$');
return EMAIL_REGEX.test(value) ? null :  {
  emailVlid: false
};
}
