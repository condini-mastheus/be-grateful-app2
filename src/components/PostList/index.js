import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PostsActions } from '~/store/ducks/posts';

import { List, ListItem, Loading } from './styles';

function PostList({ getPostsRequest, posts, date }) {
  useEffect(() => {
    if (date) {
      getPostsRequest(date);
    }
  }, []);

  if (posts.isLoading) {
    return (
      <Loading>
        <span>Loading gratitude messages</span>
      </Loading>
    );
  }

  return (
    <List>
      {posts.data.map(post => (
        <ListItem key={post.id}>
          <p>{post.post}</p>
        </ListItem>
      ))}
    </List>
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
