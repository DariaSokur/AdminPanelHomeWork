import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticlesService {
  articles: Article[] = ARTICLES;

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticle(id: number): Observable<Article> {
    return of(this.articles.find((a) => a.id === id));
  }

  addArticle(newArticle): Observable<Article> {
    this.articles = [...this.articles, newArticle];
    return of(newArticle);
  }

}
