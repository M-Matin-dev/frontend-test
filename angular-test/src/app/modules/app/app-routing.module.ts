import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MODULE_CONSTANTS} from '../../contstants/module-constants';

const routes: Routes = [
  {
    path: MODULE_CONSTANTS.Post.basePath,
    loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)
  },
  {path: '**', redirectTo: 'posts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
