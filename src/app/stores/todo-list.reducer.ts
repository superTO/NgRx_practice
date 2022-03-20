import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from './todo-list.actions';
export interface todoItem {
  id: number;
  text: string;
  done: boolean;
}

export const todoListFeatureKey = 'todoList';

export interface State {
  todoItems: todoItem[];
  count: number;
}

export const initialState: State = {
  todoItems: [
    {
      id: 1,
      text: 'todo 1',
      done: false
    },
    {
      id: 2,
      text: 'todo 2',
      done: true
    }
  ],
  count: 0
};

export const todoListReducer = createReducer(
  initialState,

  on(TodoListActions.loadTodoLists, state => state),
  on(TodoListActions.loadTodoListsSuccess, (state, action) => state),
  on(TodoListActions.loadTodoListsFailure, (state, action) => state),

  on(TodoListActions.initTodoList, (state, action) => ({
    ...state,
    todoItems: [
      {
        id: 1,
        text: 'todo 1',
        done: false
      },
      {
        id: 2,
        text: 'todo 2',
        done: true
      }
    ]
  })),

  on(TodoListActions.addTodoList, (state, action) => ({
    ...state,
    todoItems: [
      ...state.todoItems,
      {
        id: (new Date()).getTime(),
        text: action.data.text,
        done: false
      }
    ]
  })),
);
