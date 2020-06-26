import { Component, OnInit, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent implements OnInit {
todoList: Todo[] = [];

  constructor(private mainService: MainServiceService ) { }

  ngOnInit(): void {
    this.getTodoList();
  }


    getTodoList(){
      this.todoList = this.mainService.getTodos();
    }
}
