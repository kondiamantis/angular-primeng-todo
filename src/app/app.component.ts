import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { Todo } from './interfaces/todo';
import { TestCompComponent } from "./test-comp/test-comp.component";
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from './service/app.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    ButtonModule, 
    CardModule, 
    TableModule, 
    CheckboxModule, 
    FormsModule, 
    TestCompComponent, 
    InputTextModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  title = 'angular-primeng-todo';
  task='';
  todos: Todo[] = [];

  constructor(private appService: AppService) { }
  
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.appService.getTodoList().subscribe(response => {
      this.todos = response;
    })
  }

  updateTodo(e: unknown, todo: Todo) {
    console.log(e, todo);
  }

  deleteTodo(id: Todo['id']) {
    console.log( id);
  }

  addTodo() {
    console.log('New task: ', this.task);
    // if (this.task.trim()) {
    //   const newTodo: Todo = {
    //     id: this.todos.length ? Math.max(...this.todos.map(t => t.id)) + 1 : 1,
    //     task: this.task,
    //     completed: false
    //   };
    //   this.todos.push(newTodo);
    //   this.task = ''; // Clear input field
    // }
  }

}


