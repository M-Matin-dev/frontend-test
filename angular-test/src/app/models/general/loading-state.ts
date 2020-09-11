export interface ILoadState {
  loading: boolean;
  loadError: string | null;
}

export const LOAD_STATE_LOADING: ILoadState = {
  loading: true,
  loadError: null,
};

export const LOAD_STATE_LOADED: ILoadState = {
  loading: false,
  loadError: null,
};
