import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NgModel, FormGroup, FormBuilder, Validators, EmailValidator, FormControl, AbstractControl } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';
import {taskValidator, nameValidator, emailValidator} from '../../../utilities/validators';

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
      task: '',
    }, {
      validators: nameValidator, taskValidator
    });
  }

  addNewTask( {valid, value}: {valid: boolean, value: string}){
    console.log(valid);
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

  get task(): AbstractControl{
    return this.form.get('task');
  }

  get name(): AbstractControl{
    console.log(this.form.get('name'));
    return this.form.get('name');
  }
}
