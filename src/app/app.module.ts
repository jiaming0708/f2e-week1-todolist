import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EditContentComponent } from './edit-content/edit-content.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskItemComponent } from './task-item/task-item.component';


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
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
