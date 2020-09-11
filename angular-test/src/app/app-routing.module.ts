import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {POSTS_MODULE_ROUTE} from './constants';

const routes: Routes = [
  {
    path: POSTS_MODULE_ROUTE,
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {path: '**', redirectTo: 'posts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
