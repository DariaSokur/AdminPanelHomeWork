import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article;
  constructor(private route: ActivatedRoute, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      const id = +params.get('id');
      return this.articlesService.getArticle(id)
    }).subscribe((data) => this.article = data);
  }

}
