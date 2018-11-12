import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { MessagesComponent } from './messages/messages.component';

import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeadComponent,
    FootComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DlDateTimePickerDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
