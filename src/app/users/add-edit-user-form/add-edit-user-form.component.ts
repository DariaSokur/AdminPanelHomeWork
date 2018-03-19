import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-add-edit-user-form',
  templateUrl: './add-edit-user-form.component.html',
  styleUrls: ['./add-edit-user-form.component.css']
})
export class AddEditUserFormComponent implements OnInit {
  users: User[] = [];
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
  }

  addNewUser(name, surname) {
    const id = Date.now();
    const newUser = {
      id,
      name,
      surname
    };
    this.usersService.addUser(newUser).subscribe(data => console.log('New user was added'));
  }

}
