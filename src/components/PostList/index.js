import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment-timezone';

import { Creators as PostsActions } from '~/store/ducks/posts';

import {
  List, ListItem, ErrorMessage, LoadingPlaceholder,
} from './styles';

function PostList({ getPostsRequest, posts, date }) {
  let messages = null;

  useEffect(() => {
    getPostsRequest(moment(date).format('YYYYMMDD'));
  }, [getPostsRequest, date]);

  useEffect(() => {
    if (messages) {
      messages.scrollIntoView({ behavior: 'smooth' });
    }
  });

  if (posts.isLoading) {
    return (
      <List>
        <ListItem>
          <LoadingPlaceholder size="md" />
        </ListItem>
        <ListItem>
          <LoadingPlaceholder size="lg" />
        </ListItem>
        <ListItem>
          <LoadingPlaceholder size="xs" />
        </ListItem>
        <ListItem>
          <LoadingPlaceholder size="lg" />
          <LoadingPlaceholder size="xs" secondLine />
        </ListItem>
        <ListItem>
          <LoadingPlaceholder size="md" />
        </ListItem>
      </List>
    );
  }

  return (
    <>
      {posts.error ? (
        <ErrorMessage>{posts.error}</ErrorMessage>
      ) : (
        <List>
          {posts.data.length === 0 ? (
            <ListItem empty>
              <p>You could the first one to be grateful this day</p>
            </ListItem>
          ) : (
            posts.data.map(post => (
              <ListItem key={post.id}>
                <p>{post.text}</p>
                <small>{post.timestamp}</small>
              </ListItem>
            ))
          )}
          {posts.isSending && (
            <ListItem key={Math.random()}>
              <LoadingPlaceholder size="lg" />
            </ListItem>
          )}
          <ListItem
            endList
            ref={(el) => {
              messages = el;
            }}
          />
        </List>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const tz = moment.tz.guess(true);

  return {
    posts: {
      ...state.posts,
      data: Object.keys(state.posts.data).map(postId => ({
        id: postId,
        text: state.posts.data[postId].post,
        timestamp: moment.tz(state.posts.data[postId].date, tz).fromNow(),
      })),
    },
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
