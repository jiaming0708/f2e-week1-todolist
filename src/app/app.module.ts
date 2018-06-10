import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EditTaskComponent,
    AddTaskComponent,
    LayoutComponent,
    TaskListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
