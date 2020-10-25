import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  changePasswordForm;
  myStorage;
  @Input() username = '';
  hide = true;

  constructor(private userService: UserService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: '',
      newPassword: ''
    });

    this.myStorage = window.localStorage;

  }

  ngOnInit(): void {
    this.myStorage = window.localStorage;
    this.username = this.myStorage.getItem('username');

    this.httpClient.get<User>('http://localhost:3000/userInfo/').subscribe(value => {
      this.username = value.username;
    });
  }

  onDelete() {
    this.deleteUser({username: this.username});
  }

  deleteUser(body) {
    this.httpClient.delete('http://localhost:3000/deleteUser/').subscribe(value => {
      if (value) {
        this.onLogOut();
      }
    });
  }

  onChangePassword(changePasswordData) {
    this.changePassword({username: this.username, password: changePasswordData.oldPassword, newPassword: changePasswordData.newPassword});
  }

  changePassword(body) {
    this.httpClient.put('http://localhost:3000/changePassword', body).subscribe(value => {
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
