import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './pages/post-list/post-list.component';
import {PostsRoutingModule} from './posts-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {postsFeatureEffects} from './store/effects';
import {POSTS_FEATURE_NAME} from '../../models/constants';
import {postsFeatureReducers} from './store/reducers';
import { PostCardComponent } from './components/post-card/post-card.component';
import {SharedModule} from '../shared/shared.module';
import { CreatePostComponent } from './pages/create-post/create-post.component';



@NgModule({
  declarations: [PostListComponent, PostCardComponent, CreatePostComponent],
  imports: [
    CommonModule,

    SharedModule,

    StoreModule.forFeature(POSTS_FEATURE_NAME, postsFeatureReducers),
    EffectsModule.forFeature(postsFeatureEffects),

    PostsRoutingModule
  ]
})
export class PostsModule {}
