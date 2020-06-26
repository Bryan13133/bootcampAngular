import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoContainerComponent } from './componnents//toDoContainer/to-do-container/to-do-container.component';
import { ToDoItemComponent } from './componnents//toDoItem/to-do-item/to-do-item.component';
import { ToDoFormComponent } from './componnents/toDoForm/to-do-form/to-do-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ToDoContainerComponent,
    ToDoItemComponent,
    ToDoFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
