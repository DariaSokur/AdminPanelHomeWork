import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddEditUserFormComponent } from './add-edit-user-form/add-edit-user-form.component';
import { UsersService } from './users.service';

const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'add_new_user', component: AddEditUserFormComponent },
  { path: 'edit_user', component: AddEditUserFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersListComponent, UserDetailsComponent, AddEditUserFormComponent ],
  providers: [UsersService]
})
export class UsersModule { }
