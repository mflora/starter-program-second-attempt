import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ErrorModalComponent} from '../../smarts/error-modal/error-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  changePasswordForm;
  myStorage;
  @Input() username = '';
  hidePassword = true;
  hideNewPassword = true;

  constructor(private userService: UserService, private httpClient: HttpClient, private router: Router,
              private formBuilder: FormBuilder, private route: ActivatedRoute, public errorDialog: MatDialog) {
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
    }, (error => {
      this.openErrorDialog(error.error.message);
    }));
  }

  onDelete() {
    this.deleteUser({username: this.username});
  }

  deleteUser(body) {
    this.httpClient.delete('http://localhost:3000/deleteUser/').subscribe(value => {
      if (value) {
        this.onLogOut();
      }
    }, (error => {
      this.openErrorDialog(error.error.message);
    }));
  }

  onChangePassword(changePasswordData) {
    this.changePassword({username: this.username, password: changePasswordData.oldPassword, newPassword: changePasswordData.newPassword});
  }

  changePassword(body) {
    this.httpClient.put('http://localhost:3000/changePassword', body).subscribe(value => {
    }, (error => {
      this.openErrorDialog(error.error.message);
    }));
  }

  onLogOut() {
    this.router.navigateByUrl('/');
    this.myStorage.clear();
  }

  openErrorDialog(message): void {
    const dialogRef = this.errorDialog.open(ErrorModalComponent, {
      width: '2500px',
      data: {errorMessage: message}
    });
  }
}

interface User {
  username: string;
}
