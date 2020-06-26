import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { MainServiceService } from 'src/app/services/main-service.service';




@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
@Input() todoItem: Todo;

isChecked: boolean;
  constructor(private mainService: MainServiceService) { }

  ngOnInit(): void {
    this.isChecked = false;
  }

  removeItem(todoItem: Todo){
    if (this.isChecked) {
      this.mainService.removeTodoItem(todoItem);
    }

  }
  sendItem(todoItem: Todo){
    this.mainService.sendEditableItem(todoItem);
  }
}
