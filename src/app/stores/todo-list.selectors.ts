import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';

export const selectTodoListState = createFeatureSelector<fromTodoList.State>(
  fromTodoList.todoListFeatureKey
);

export const selectTodoListItems = createSelector(
  selectTodoListState,
  (state: fromTodoList.State) => state.todoItems
)
/**
 * 拿 未完成的 todo list
 */
export const undoneTodoItems = createSelector(
  selectTodoListItems,
  (todoItems: fromTodoList.todoItem[]) => todoItems.filter(item => !item.done)
)