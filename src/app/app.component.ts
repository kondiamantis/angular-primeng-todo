import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import {  CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { Todo } from './interfaces/todo';
import { TestCompComponent } from "./test-comp/test-comp.component";
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from './service/app.service';


@Component({
  selector: 'app-root',
  imports: [ 
    ButtonModule, 
    CardModule, 
    TableModule, 
    CheckboxModule, 
    FormsModule,  
    InputTextModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

@ViewChild('todoTask') todoTask: any;

  title = 'angular-primeng-todo';
  task= '';
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

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    // Handle the checkbox change event
    this.appService.updateTodo({...todo, completed: e.checked}).subscribe(
      response => {
        this.getList();
      }
    );
  }

  deleteTodo(id: Todo['id']) {
    this.appService.deleteTodo(id).subscribe(
      response => {
        this.getList();
      }
    )
  }

  addTodo() {
    this.appService.addTodo({
      task: this.task, completed: false
    }).subscribe(
      response => {
        this.todoTask.reset()
        this.getList();
      }
    )
  }

}


