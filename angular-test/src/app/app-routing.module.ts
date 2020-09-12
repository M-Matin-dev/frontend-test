import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {POSTS_MODULE_ROUTE} from './models/constants';

const routes: Routes = [
  {
    path: POSTS_MODULE_ROUTE,
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
  },
  {path: '**', redirectTo: 'posts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
