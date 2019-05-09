import React, { useState } from 'react';

import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PostsActions } from '~/store/ducks/posts';

import { Container, Title, Content } from './styles';

import PostList from '~/components/PostList';

function Main({ savePostRequest }) {
  const [post, setPost] = useState('');
  const [date, setDate] = useState(new Date());
  const today = new Date();

  function handleEnter(event) {
    if (event.keyCode === 13) {
      setPost('');

      savePostRequest({ post, date });
      event.preventDefault();
    }
  }

  function handleChange(event) {
    setPost(event.target.value);
  }

  function handleDateChange(_date) {
    setDate(_date);
    savePostRequest(_date);
  }

  return (
    <Container>
      <section>
        <header>
          <Title>
            {date
              ? today.getUTCDate() === date.getUTCDate() && today.getMonth() === date.getMonth()
                ? 'Feeling grateful today?'
                : `Feeling grateful on ${date.toLocaleString('en-us', {
                  month: 'short',
                })} ${date.getUTCDate()}?`
              : 'Choose a day that you are grateful for...'}
          </Title>
        </header>
        {date && (
          <>
            <Content>
              <div className="actions">
                <button type="button" onClick={() => setDate(null)}>
                  ←
                </button>
                <strong>
                  {`${date.toLocaleString('en-us', {
                    month: 'short',
                  })} ${date.getUTCDate()}`}
                </strong>
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
                disabled={post.isSending}
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
