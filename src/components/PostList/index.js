import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PostsActions } from '~/store/ducks/posts';

import {
  List, ListItem, Loading, ErrorMessage,
} from './styles';

function PostList({ getPostsRequest, posts, date }) {
  useEffect(() => {
    getPostsRequest(date);
  }, [getPostsRequest, date]);

  if (posts.isLoading) {
    return (
      <Loading>
        <span>Loading gratitude messages</span>
      </Loading>
    );
  }

  return (
    <>
      {posts.error ? (
        <ErrorMessage>{posts.error}</ErrorMessage>
      ) : (
        <List>
          {posts.isSending && (
            <ListItem key={Math.random()}>
              <p>...</p>
            </ListItem>
          )}
          {Object.keys(posts.data).length === 0 ? (
            <ListItem empty>
              <p>You could the first one to be grateful this day</p>
            </ListItem>
          ) : (
            Object.keys(posts.data).map(postId => (
              <ListItem key={postId}>
                <p>{posts.data[postId].post}</p>
              </ListItem>
            ))
          )}
        </List>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
