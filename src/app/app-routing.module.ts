import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './main-section/todo-list/todo-list.component';
import { OfflinePreferencesComponent } from './main-section/offline-preferences/offline-preferences.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path:'todo-list', component: TodoListComponent},
  {path:'offline-preferences', component: OfflinePreferencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
