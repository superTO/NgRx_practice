import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-practice';

  constructor(private stores: Store) { }

  ngOnInit(): void {
    this.stores.subscribe(data => console.log(data))
  }

}
