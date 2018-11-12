import { Component, OnInit } from '@angular/core';
import Todo from '../Todo';
import { TodoServiceService } from '../todo-service.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { UtilService } from '../util.service';
import * as moment from 'moment'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private list: Todo[];

  private ids: number[] = [];

  constructor(private todoService: TodoServiceService,
    private router: Router,
    private messageService: MessageService,
    private util: UtilService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.todoService.fetchTodos().subscribe((reponses) => {
      this.list = reponses.todos;
      this.todoService.setTodos(this.list);
    });
  }

  remove(todo) {
    if (confirm('Are you sure?')) {
      this.todoService.remove(todo.id).subscribe(res => {
        this.refresh();
      });
    }
  }

  edit(todo: Todo) {
    const id = todo.id;
    this.router.navigate(['/edit', id]);
  }

  addToIds(id: number) {
    this.ids.push(id);
  }

  removeFromIds(id: number) {
    const nextlist = this.ids.filter(idItem => idItem != id);
    this.ids = nextlist;
  }

  deleteSelected() {
    if (confirm('Are you sure?')) {
      this.todoService.deleteMultiple(this.ids).subscribe(res => {
        this.messageService.setMessage(res.message);
        this.refresh();
      });
    }
  }

  dateRedable(date) {
    //  console.log(date)
    return moment(date).format('Do MMM YYYY hh:mma')
  }



}
