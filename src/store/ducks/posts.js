import Immutable from 'seamless-immutable';

export const Types = {
  LOAD_REQUEST: 'posts/LOAD_REQUEST',
  LOAD_SUCCESS: 'posts/LOAD_SUCCESS',
  LOAD_FAILURE: 'posts/LOAD_FAILURE',
};

const INITIAL_STATE = Immutable({
  isLoading: true,
  isSending: false,
  data: [],
});

export default function Posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return {
        ...state,
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
      };
    default:
      return state;
  }
}

export const Creators = {
  getPostsRequest: () => ({
    type: Types.LOAD_REQUEST,
  }),
  getPostsSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data },
  }),
  getPostsFailure: () => ({
    type: Types.LOAD_FAILURE,
  }),
};
