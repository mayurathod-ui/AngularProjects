import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { OfflinePreferencesComponent } from './offline-preferences/offline-preferences.component';
import { DirectoryComponent } from './employees-directory/directory/directory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';




@NgModule({
  declarations: [
    TodoListComponent,
    OfflinePreferencesComponent,
    DirectoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule
  ],
  exports:[]
})
export class MainSectionModule { }
