import { Pipe, PipeTransform } from '@angular/core';

import {UsersService} from './users.service';


@Pipe({
  name: 'userIdToUserName'
})
export class UserIdToUserNamePipe implements PipeTransform {

  constructor (private usersService: UsersService) {}

  transform(id: number, userFullName?: string): string {
    this.usersService.getUser(id).subscribe(data => userFullName = (data.name + ' ' + data.surname));
    return `${userFullName}`;
  }

}
