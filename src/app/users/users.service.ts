import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UsersService {
  users: User[] = USERS;

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    return of(this.users.find((u) => u.id === id));
  }

  addUser(newUser): Observable<User> {
    this.users = [...this.users, newUser];
    return of(newUser);
  }
  //
  // editUser(user: User) {
  //   this.users = this.users.map(u => u.id === user.id ? user : u);
  //   return of(user);
  // }
}
