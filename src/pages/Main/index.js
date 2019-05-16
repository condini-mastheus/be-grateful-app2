import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment-timezone';
import Calendar from 'react-calendar';

import { Creators as PostsActions } from '~/store/ducks/posts';

import { Container, Title, Content } from './styles';

import PostList from '~/components/PostList';

function Main({ savePostRequest, posts }) {
  const [post, setPost] = useState('');
  const [date, setDate] = useState(moment());

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const createdAt = moment();
      const dayId = moment(date).format('YYYYMMDD');
      // console.log({ post, createdAt, dayId });
      savePostRequest({ post, createdAt, dayId });
      setPost('');
      event.preventDefault();
    }
  }

  function handleChange(event) {
    setPost(event.target.value);
  }

  function handleDateChange(_date) {
    setDate(_date);
  }

  return (
    <Container>
      <section>
        <header>
          <Title>
            {date && moment().diff(date, 'days') === 0
              ? 'Feeling grateful today?'
              : `Feeling grateful on ${moment(date).format('LL')}?`}
            {!date && 'Choose a day that you are grateful for...'}
          </Title>
        </header>
        {date && (
          <>
            <Content>
              <div className="actions">
                <button type="button" onClick={() => setDate(null)}>
                  ←
                </button>
                <strong>{`${moment(date).format('LL')}`}</strong>
              </div>
              <PostList date={date} />
            </Content>
            <footer>
              <textarea
                name="post"
                id="#post"
                rows="5"
                placeholder={
                  'Type something you are grateful for and press "Enter" to share with everyone'
                }
                value={post}
                onKeyDown={handleEnter}
                onChange={handleChange}
                disabled={posts.isSending}
                autoFocus
              />
            </footer>
          </>
        )}

        {!date && (
          <Content>
            <div className="calendar-wrap">
              <Calendar
                locale="en-us"
                onChange={_date => handleDateChange(_date)}
                value={date}
                activeStartDate={date}
              />
            </div>
          </Content>
        )}
      </section>
    </Container>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
