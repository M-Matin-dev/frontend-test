import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './pages/post-list/post-list.component';
import {PostsRoutingModule} from './posts-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {postsFeatureEffects} from './store/effects';
import {POSTS_FEATURE_NAME} from '../constants';
import {postsFeatureReducers} from './store/reducers';



@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,

    StoreModule.forFeature(POSTS_FEATURE_NAME, postsFeatureReducers),
    EffectsModule.forFeature(postsFeatureEffects),

    PostsRoutingModule
  ]
})
export class PostsModule {}
