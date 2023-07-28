import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { OfflinePreferencesComponent } from './offline-preferences/offline-preferences.component';
import { DirectoryComponent } from './employees-directory/directory/directory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeListComponent } from './employees-directory/employee-list/employee-list.component'



@NgModule({
  declarations: [
    TodoListComponent,
    OfflinePreferencesComponent,
    DirectoryComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[]
})
export class MainSectionModule { }
