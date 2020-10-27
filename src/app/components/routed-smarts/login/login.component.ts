import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {RegisterReplyModalComponent} from '../../smarts/register-reply-modal/register-reply-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {ErrorModalComponent} from '../../smarts/error-modal/error-modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  checkoutForm;
  username = '';
  password = '';
  myStorage;

  hide = true;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, public errorDialog: MatDialog, private httpClient: HttpClient, private router: Router,
              private userService: UserService) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.myStorage = window.localStorage;
  }

  onLogin(loginData) {
      this.login({username: loginData.username, password: loginData.password});
  }

  onRegister(registerData) {
    this.myStorage.setItem('username', registerData.username);
    this.register({username: registerData.username, password: registerData.password});
  }


  openDialog(username): void {
    const dialogRef = this.dialog.open(RegisterReplyModalComponent, {
      width: '2500px',
      data: {username: this.myStorage.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.username = result;
    });
  }

  openErrorDialog(message): void {
    const dialogRef = this.errorDialog.open(ErrorModalComponent, {
      width: '2500px',
      data: {errorMessage: message}
    });
  }

  login(body) {
      this.httpClient.post<{ access_token: string }>('http://localhost:3000/auth/login', body).subscribe(({access_token}) => {
          this.myStorage.setItem('token', access_token);
          this.myStorage.setItem('username', body.username);
          this.router.navigateByUrl('/profile/' + this.myStorage.username);
      }, (error => {
        this.openErrorDialog(error.error.message);
      })
);
  }

  register(body) {
    this.httpClient.post('http://localhost:3000/register', body).subscribe(value => {
      this.openDialog(this.myStorage.username);
    }, (error => {
      this.myStorage.clear();
      this.openErrorDialog(error.error.message);
    }));
  }
}
