import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './pages/post-list/post-list.component';
import {PostsRoutingModule} from './posts-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {postsFeatureEffects} from './store/effects';
import {postsFeatureReducers} from './store/reducers';
import { PostCardComponent } from './components/post-card/post-card.component';
import {SharedModule} from '../shared/shared.module';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import {MODULE_CONSTANTS} from '../../contstants/module-constants';



@NgModule({
  declarations: [PostListComponent, PostCardComponent, CreatePostComponent, PostDetailsComponent],
  imports: [
    CommonModule,

    SharedModule,

    StoreModule.forFeature(MODULE_CONSTANTS.Post.storeName, postsFeatureReducers),
    EffectsModule.forFeature(postsFeatureEffects),

    PostsRoutingModule
  ]
})
export class PostsModule {}
