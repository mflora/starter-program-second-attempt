import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  changePasswordForm;
  myStorage;
  // @Input() username = this.router.snapshot.paramMap.get("username").subscribe();
  @Input() username = '';
  // @Input() username = this.myStorage.getItem('username');
  hide = true;

  constructor(private userService: UserService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: '',
      newPassword: ''
    });

    this.myStorage = window.localStorage;

    console.log('token');
    console.log(this.myStorage.getItem('token'));
    console.log('endtoken');

  }

  ngOnInit(): void {
    console.log(this.userService.username);
    this.myStorage = window.localStorage;
    this.username = this.myStorage.getItem('username');

    // tslint:disable-next-line:variable-name
    this.httpClient.get<User>('http://localhost:3000/userInfo/').subscribe(value => {
      this.username = value.username;
    });
  }

  onDelete() {
    this.deleteUser({username: this.username});
  }

  deleteUser(body) {
    console.log('DELETE USER: ' + body.username + ' ' + body.password);
    console.log(this.myStorage.getItem('token'));
    console.log('**************************');
    this.httpClient.delete('http://localhost:3000/deleteUser/').subscribe(value => {
      console.log('VALUE: ' + value);
      if (value) {
        this.onLogOut();
      }
    });
  }

  onChangePassword(changePasswordData) {
    this.changePassword({username: this.username, password: changePasswordData.oldPassword, newPassword: changePasswordData.newPassword});
  }

  changePassword(body) {
    console.log('CHANGE PASSWORD: ' + body.username + ' ' + body.password);
    this.httpClient.put('http://localhost:3000/changePassword', body).subscribe(value => {
      console.log(value);
    });
  }

  onLogOut() {
    this.router.navigateByUrl('/');
    this.clearStorage();
  }

  clearStorage() {
    this.myStorage.setItem('username', '');
    this.myStorage.setItem('password', '');
    this.myStorage.setItem('token', '');
  }
}

interface User {
  username: string;
}
