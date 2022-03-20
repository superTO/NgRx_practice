import { createAction, props } from '@ngrx/store';

export const loadTodoLists = createAction(
  '[TodoList] Load TodoLists'
);

export const loadTodoListsSuccess = createAction(
  '[TodoList] Load TodoLists Success',
  props<{ data: any }>()
);

export const loadTodoListsFailure = createAction(
  '[TodoList] Load TodoLists Failure',
  props<{ error: any }>()
);

export const initTodoList = createAction(
  '[TodoList] Init TodoList'
)

export const addTodoList = createAction(
  '[TodoList] Add TodoList',
  props<{ data: TodoItemCreate }>()
);

export interface queryTodoItems {
  
}
export interface TodoItemCreate {
  text: string;
}

