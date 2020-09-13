import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICreatePost, IPost} from '../../../models/posts';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly API_URL = `${environment.apiBaseUrl}/posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.API_URL);
  }

  getPost({postId}: {postId: string}): Observable<IPost> {
    return this.http.get<IPost>(`${this.API_URL}/${postId}`);
  }

  createPost({post}: {post: ICreatePost}): Observable<IPost> {
    return this.http.post<IPost>(this.API_URL, post);
  }

  uploadPictureOfPost({postId, file}: {postId: string, file: File}): Observable<Required<IPost>> {
    const formData = new FormData();
    formData.append('image', file, file.name);
    return this.http.put<Required<IPost>>(`${this.API_URL}/${postId}/picture`, formData);
  }

}
