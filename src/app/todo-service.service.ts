import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from './Todo';
import TodoList from './responses/TodoList';
import GenericResponse from './responses/GenericResponse';
import CreateTodoRequest from './requests/CreateTodoRequest';
import RemoveMultipleTodosRequest from './requests/RemoveMultipleTodosRequest';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})


export class TodoServiceService {

  baseUrl = 'http://localhost:8080/todos';

  todos: Todo[];

  constructor(private http: HttpClient) {
  }


  fetchTodos(): Observable<TodoList> {
    return this.http.get<TodoList>(this.baseUrl);
  }

  create(request: CreateTodoRequest): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(this.baseUrl + '/create', request);
  }

  remove(id: number): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(this.baseUrl + '/delete/' + id, {});
  }

  setTodos(todos: Todo[]) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  getById(id: number): Todo {
    const todos = this.getTodos();
    const todoList = this.todos.filter((todo) => todo.id == id);
    return todoList[0];
  }

  update(todo: Todo) {
    const payload = {
      id: todo.id,
      desc: todo.description,
      title: todo.title,
      eventTime: moment(todo.eventTime).format('YYYY-MM-DD HH:mm')
    };
    return this.http.post<GenericResponse>(this.baseUrl + '/edit', payload);
  }

  deleteMultiple(ids) {
    const request = new RemoveMultipleTodosRequest();
    request.todoIds = ids;
    request.mode = 'delete';
    return this.http.post<GenericResponse>(this.baseUrl + '/delete', request);
  }


}
