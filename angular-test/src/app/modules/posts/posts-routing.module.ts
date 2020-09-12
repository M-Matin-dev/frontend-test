import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './pages/post-list/post-list.component';
import {CreatePostComponent} from './pages/create-post/create-post.component';


const routes: Routes = [
  {path: 'create', component: CreatePostComponent},
  {path: '', component: PostListComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
