import {Component, OnInit} from '@angular/core';
import Todo from '../Todo';
import CreateTodoRequest from '../requests/CreateTodoRequest';
import {TodoServiceService} from '../todo-service.service';
import {Router} from '@angular/router';
import {MessageService} from '../message.service';
import {Moment} from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  todo: Todo = {
    title: '',
    description: '',
    id: null,
    eventTime: ''
  };

  constructor(private todoService: TodoServiceService,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  submit() {

    console.log(this.todo)

    const request = new CreateTodoRequest();
    request.title = this.todo.title;
    request.description = this.todo.description;
    request.eventTime = moment(this.todo.eventTime).format('YYYY-MM-DD HH:mm');
    this.todoService.create(request).subscribe(res => {
      this.router.navigateByUrl('/')
        .catch(e => console.log(e));
      this.messageService.setMessage(res.message);
    });
  }

}
