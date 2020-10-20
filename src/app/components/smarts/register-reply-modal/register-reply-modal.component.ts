import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from '../../routed-smarts/login/login.component';


export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-register-reply-modal',
  templateUrl: './register-reply-modal.component.html',
  styleUrls: ['./register-reply-modal.component.css']
})
export class RegisterReplyModalComponent implements OnInit {
  @Input() username: string = 'n/a';

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
