import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LayoutComponent } from './layout/layout.component';
import { EditContentComponent } from './edit-content/edit-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    EditTaskComponent,
    AddTaskComponent,
    LayoutComponent,
    EditContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
