import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodoList, initTodoList } from '../stores/todo-list.actions';
import { selectTodoListItems } from '../stores/todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public text: string = '';


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectTodoListItems).subscribe(data => console.log(data));

    this.store.dispatch(initTodoList());
  }

  add(){
    this.store.dispatch(addTodoList({ data: { text: this.text } }));
    this.text = '';
  }

}
