import Immutable from 'seamless-immutable';

export const Types = {};

const INITIAL_STATE = Immutable({
  isLoading: true,
  isSending: false,
  data: [],
});

export default function Posts(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {};
