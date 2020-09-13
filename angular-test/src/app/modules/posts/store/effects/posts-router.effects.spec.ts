import {provideMockActions} from '@ngrx/effects/testing';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {PostsRouterEffects} from './posts-router.effects';
import {TestBed} from '@angular/core/testing';
import {PostsFacade} from '../posts.facade';
import {ROUTER_NAVIGATED, RouterNavigatedAction} from '@ngrx/router-store';
import * as PostsApiActions from '../actions/post-list-api.actions';
import {getTestScheduler} from 'jasmine-marbles';
import {TestScheduler} from 'rxjs/testing';

class MockPostsFacade {
  initialListLoad$ = new BehaviorSubject(false);
}

function createRouterNavigatedActionToUrl(url: string): Partial<RouterNavigatedAction> {
  return {
    type: ROUTER_NAVIGATED,
    payload: {routerState: {url} as any} as any
  };
}

describe('PostsRouterEffects', () => {

  let scheduler: TestScheduler;
  let actions: ReplaySubject<any>;
  let effects: PostsRouterEffects;
  let mockPostsFacade: MockPostsFacade;

  beforeEach(() => {
    mockPostsFacade = new MockPostsFacade();

    TestBed.configureTestingModule({
      providers: [
        PostsRouterEffects,
        provideMockActions(() => actions),
        {provide: PostsFacade, useValue: mockPostsFacade}
      ]
    });

    scheduler = getTestScheduler();
    effects = TestBed.inject(PostsRouterEffects);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  describe('When Navigated to "/posts" ', () => {

    beforeEach(() => {
      actions = new ReplaySubject(1);
      actions.next(createRouterNavigatedActionToUrl('/posts'));
    });

    it('if initialListLoad$ is false should dispatch "PostsApiActions.loadAll" action', () => {
      scheduler.run(({expectObservable}) => {
        const expectedMarbles = `a`;
        const expectedValues = {a: PostsApiActions.loadAll() };
        expectObservable(effects.initialLoadOfPostList$).toBe(expectedMarbles, expectedValues);
      });
    });

    it('if initialListLoad$ is true should not dispatch anything', () => {
      scheduler.run(({expectObservable}) => {
        mockPostsFacade.initialListLoad$.next(true);
        expectObservable(effects.initialLoadOfPostList$).toBe(``, {});
      });
    });

  });

  it('When Navigated to any path except "/posts" even if initialListLoad$ is false should not dispatch anything', () => {
    actions = new ReplaySubject(1);
    actions.next(createRouterNavigatedActionToUrl('/posts/test-id'));
    scheduler.run(({expectObservable}) => {
      expectObservable(effects.initialLoadOfPostList$).toBe(``, {});
    });
  });

});
