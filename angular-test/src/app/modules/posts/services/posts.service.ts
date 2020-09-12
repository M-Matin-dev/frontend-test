import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../../../models/posts';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  readonly baseUrl = 'http://127.0.0.1:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl);
  }

}
