import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username;
  password;
  token;

  constructor() { }
}
