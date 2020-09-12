import {PostsApiEffects} from './post-api.effects';
import {PostsRouterEffects} from './posts-router.effects';
import {CreatePostApiEffects} from './create-post-api.effects';

export const postsFeatureEffects = [
  PostsApiEffects,
  PostsRouterEffects,
  CreatePostApiEffects,
];
