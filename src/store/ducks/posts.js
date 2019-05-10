import Immutable from 'seamless-immutable';

export const Types = {
  LOAD_REQUEST: 'posts/LOAD_REQUEST',
  LOAD_SUCCESS: 'posts/LOAD_SUCCESS',
  LOAD_FAILURE: 'posts/LOAD_FAILURE',
  SAVE_REQUEST: 'posts/SAVE_REQUEST',
  SAVE_SUCCESS: 'posts/SAVE_SUCCESS',
  SAVE_FAILURE: 'posts/SAVE_FAILURE',
};

const INITIAL_STATE = Immutable({
  isLoading: true,
  isSending: false,
  data: {},
  error: '',
});

export default function Posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case Types.LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case Types.SAVE_REQUEST:
      return {
        ...state,
        isSending: true,
      };
    case Types.SAVE_SUCCESS: {
      const { data } = action.payload;
      const posts = { data, ...state.data };

      return {
        ...state,
        isLoading: false,
        isSending: false,
        data: posts,
      };
    }
    case Types.SAVE_FAILURE:
      return {
        ...state,
        isSending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  getPostsRequest: date => ({
    type: Types.LOAD_REQUEST,
    payload: { date },
  }),
  getPostsSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),
  getPostsFailure: error => ({
    type: Types.LOAD_FAILURE,
    payload: { error },
  }),
  savePostRequest: newPost => ({
    type: Types.SAVE_REQUEST,
    payload: { newPost },
  }),
  savePostSuccess: data => ({
    type: Types.SAVE_SUCCESS,
    payload: { data },
  }),
  savePostFailure: error => ({
    type: Types.SAVE_FAILURE,
    payload: { error },
  }),
};
