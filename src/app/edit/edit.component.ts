import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import Todo from '../Todo';
import {TodoServiceService} from '../todo-service.service';
import {MessageService} from '../message.service';
import * as moment from 'moment'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  todo: Todo = null;
  urlParms: any;

  constructor(private route: ActivatedRoute, private todoService: TodoServiceService,
              private messageService: MessageService, private router: Router) {
    this.route.params.subscribe(params => this.urlParms = params);
  }

  ngOnInit() {
    this.todo = this.todoService.getById(this.urlParms.id);
    this.todo.eventTime = new Date(moment(this.todo.eventTime).toISOString());
  }

  update() {
    this.todoService.update(this.todo).subscribe(res => {
      this.messageService.setMessage(res.message);
      this.router.navigateByUrl('');
    });
  }

}
