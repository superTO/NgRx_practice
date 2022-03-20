import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoListFeatureKey, todoListReducer } from '../stores/todo-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoListEffects } from '../stores/todo-list.effects';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
]

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(todoListFeatureKey, todoListReducer),
    EffectsModule.forFeature([TodoListEffects])
  ]
})
export class TodoListModule { }
