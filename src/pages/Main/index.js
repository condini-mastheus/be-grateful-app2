import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment-timezone';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Calendar from 'react-calendar';

import { Creators as PostsActions } from '~/store/ducks/posts';

import { Container, Title, Content } from './styles';

import PostList from '~/components/PostList';

const schema = Yup.object().shape({
  post: Yup.string()
    .max(280, 'Limit is 280 characters')
    .required('Please, type something'),
});

function Main({ savePostRequest, posts }) {
  const [date, setDate] = useState(moment());

  function handleSubmit(data, { resetForm }) {
    const { post } = data;
    const createdAt = moment();
    const dayId = moment(date).format('YYYYMMDD');
    savePostRequest({ post, createdAt, dayId });
    resetForm();
  }

  return (
    <Container>
      <section>
        <header>
          <Title>
            {date
              && (moment()
                .startOf('day')
                .diff(date, 'days') === 0
                ? 'Feeling grateful today?'
                : `Feeling grateful on ${moment(date).format('LL')}?`)}
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
              <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="post"
                  placeholder={
                    'Type something you are grateful for and press "Enter" to share with everyone'
                  }
                  autoComplete="off"
                  disabled={posts.isSending}
                  autoFocus
                />
              </Form>
            </footer>
          </>
        )}

        {!date && (
          <Content>
            <div className="calendar-wrap">
              <Calendar
                locale="en-us"
                onChange={_date => setDate(_date)}
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
