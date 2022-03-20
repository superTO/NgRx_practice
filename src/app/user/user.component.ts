import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodoListItems, undoneTodoItems } from '../stores/todo-list.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.store.select(undoneTodoItems).subscribe(data => console.log(data))
  }

}
