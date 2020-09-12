import {PostsApiEffects} from './post-api.effects';
import {PostsRouterEffects} from './posts-router.effects';

export const postsFeatureEffects = [
  PostsApiEffects,
  PostsRouterEffects
];
