import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICreatePost, IPost} from '../../../models/posts';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  readonly API_BASE_URL = 'http://127.0.0.1:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_BASE_URL);
  }

  createPost({post}: {post: ICreatePost}): Observable<IPost> {
    return this.http.post<IPost>(this.API_BASE_URL, post);
  }

  uploadPictureOfPost({postId, file}: {postId: string, file: File}): Observable<Required<IPost>> {
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this.http.put<Required<IPost>>(`${this.API_BASE_URL}/${postId}/picture`, formData);
  }

}
