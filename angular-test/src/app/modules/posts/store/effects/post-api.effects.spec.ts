import {provideMockActions} from '@ngrx/effects/testing';
import {of, ReplaySubject, throwError} from 'rxjs';
import {TestBed} from '@angular/core/testing';
import * as PostsApiActions from '../actions/post-list-api.actions';
import {getTestScheduler} from 'jasmine-marbles';
import {TestScheduler} from 'rxjs/testing';
import {PostsApiEffects} from './post-api.effects';
import {PostsService} from '../../services/posts.service';
import {IPost} from '../../../../models/posts';
import {Action} from '@ngrx/store';

const testPosts: IPost[] = [
  {title: 'title 1', description: 'description 1', id: 'test-id-1', tags: ['a', 'b', 'c']}
];

class MockPostsService {
  getPosts(): void {}
}

describe('PostsRouterEffects', () => {

  let scheduler: TestScheduler;
  let actions: ReplaySubject<Action>;
  let effects: PostsApiEffects;
  let getPostsSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsApiEffects,
        provideMockActions(() => actions),
        {provide: PostsService, useClass: MockPostsService}
      ]
    });

    scheduler = getTestScheduler();
    effects = TestBed.inject(PostsApiEffects);
    getPostsSpy = spyOn(effects.postsService, 'getPosts');

    actions = new ReplaySubject(1);
    actions.next(PostsApiActions.loadAll());
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  it('Should dispatch loadAllSuccess after getting list of posts from PostsService successfully', () => {
    getPostsSpy.and.returnValue(of(testPosts));
    scheduler.run(({expectObservable}) => {
      const expectedMarbles = `a`;
      const expectedValues = {a: PostsApiActions.loadAllSuccess({posts: testPosts})};
      expectObservable(effects.loadPosts$).toBe(expectedMarbles, expectedValues);
    });
  });

  it('Should dispatch loadAllFail after failing to get list of posts from PostsService', () => {
    getPostsSpy.and.returnValue(throwError({error: 'Test Error'}));
    scheduler.run(({expectObservable}) => {
      const expectedMarbles = `(a|)`;
      const expectedValues = {a: PostsApiActions.loadAllFail({error: 'Test Error'})};
      expectObservable(effects.loadPosts$).toBe(expectedMarbles, expectedValues);
    });
  });

});
