import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';


@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
  }

  addNewArticle(header, userId, body) {
    const id = Date.now();
    const newArticle = {
      id,
      header,
      userId,
      body
    };
    this.articlesService.addArticle(newArticle).subscribe(data => console.log('New article was added'));
  }


}
