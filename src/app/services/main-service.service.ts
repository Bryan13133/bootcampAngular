import { Injectable, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
private email = 'bryanvilla9@mail.com';
private password = 'qwerty12345';
private todoList: Todo[];
private todoItem = new Subject<Todo>();
private invalid: boolean;
currentItem = this.todoItem.asObservable();
lastId: number;
  constructor() { }

  getTodos(){
    if (!this.todoList ) {
      this.todoList = [
        {
        id: 1,
        name: 'This is an example of the first task',
        task: 'Example one',
        completed : false
      },
      {
        id: 2,
        name: 'This is an example of the second task',
        task: 'Example two',
        completed: false
      }
    ];
    }
    return this.todoList;
  }

  addNewTodo(newTodo: Todo){
    this.lastId = (!!this.todoList.length) ? +this.todoList[this.todoList.length - 1].id : 0 ;
    if (!newTodo.id) {
      newTodo.id = ++this.lastId;
    }
    newTodo.task = newTodo.task.trim();
    this.todoList.push(newTodo);
  }

  removeTodoItem(todo: Todo){
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

  sendEditableItem(todoItem: Todo){
    this.todoItem.next(todoItem);
  }

  validateUser(email: string, password: string){
    if (email === this.email && password === this.password) {
      return this.invalid = true;
    }else{
      return this.invalid = false;
    }
  }


}
