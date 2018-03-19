import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { ArticlesService } from './articles.service';

import { UserIdToUserNamePipe } from '../users/user-id-to-user-name.pipe';

const routes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleDetailsComponent },
  { path: 'add_new_article', component: AddEditFormComponent },
  { path: 'edit_article', component: AddEditFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticlesListComponent, ArticleDetailsComponent, AddEditFormComponent, UserIdToUserNamePipe],
  providers: [ArticlesService]
})
export class ArticlesModule { }
