import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { Todo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, CardModule, TableModule, CheckboxModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-primeng-todo';
  todos = [
    { id: 1,
      task: 'first todo',
      completed: true
    },
    { id: 2,
      task: 'second todo',
      completed: false
    }
  ]

  updateTodo(e: unknown, todo: Todo) {
    console.log(e);
    console.log(todo);
  }

}


