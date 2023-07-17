import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { OfflinePreferencesComponent } from './offline-preferences/offline-preferences.component';
import { DirectoryComponent } from './employees-directory/directory/directory.component';



@NgModule({
  declarations: [
    TodoListComponent,
    OfflinePreferencesComponent,
    DirectoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainSectionModule { }
