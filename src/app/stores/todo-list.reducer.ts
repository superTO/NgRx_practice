import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from './todo-list.actions';
export interface todoItem {
  id: string;
  text: string;
  done: string;
}

export const todoListFeatureKey = 'todoList';

export interface State {
  todoItems: todoItem[];
  count: number;
}

export const initialState: State = {
  todoItems: [],
  count: 0
};

export const todoListReducer = createReducer(
  initialState,

  on(TodoListActions.loadTodoLists, state => state),
  on(TodoListActions.loadTodoListsSuccess, (state, action) => state),
  on(TodoListActions.loadTodoListsFailure, (state, action) => state),

);
