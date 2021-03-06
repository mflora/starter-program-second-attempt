import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {RegisterReplyModalComponent} from '../../smarts/register-reply-modal/register-reply-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {AppComponent} from '../../../app.component';
import {HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  checkoutForm;
  public registerBoolean = false;
  username = '';
  password = '';
  myStorage;

  hide = true;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private httpClient: HttpClient, private router: Router,
              private userService: UserService) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.myStorage = window.localStorage;
  }

  onSubmit(loginData) {
    this.username = loginData.username;
    this.password = loginData.password;

    console.log('submit: ' + this.username + ' ' + this.password);
    console.log('register: ' + this.registerBoolean);

    const body = {username: this.username, password: this.password};
    if (this.registerBoolean) {
      this.register(body);
      this.openDialog(this.username);
    } else {
      this.login(body);
    }

    this.registerBoolean = false;
  }


  openDialog(username): void {
    const dialogRef = this.dialog.open(RegisterReplyModalComponent, {
      width: '2500px',
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    });
  }

  login(body) {
    this.httpClient.post<{access_token: string}>('http://localhost:3000/auth/login', body).subscribe(({access_token}) => {
      console.log(access_token);
      if (access_token){
        this.myStorage.setItem('token', access_token);
        this.router.navigateByUrl('/profile/' + this.username);
      }
    });
  }

  register(body) {
    this.httpClient.post('http://localhost:3000/register', body).subscribe(value => {
      console.log(value);
    });
  }
}
