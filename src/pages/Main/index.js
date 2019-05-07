import React, { useState } from 'react';

import Calendar from 'react-calendar';

import { Container, Title, Content } from './styles';

import PostList from '~/components/PostList';

function Main() {
  const [post, setPost] = useState('');
  const [isDateSelected, setDate] = useState(true);

  function handleEnter(event) {
    if (event.keyCode === 13) {
      setPost('');
      event.preventDefault();
    }
  }

  function handleChange(event) {
    setPost(event.target.value);
  }

  return (
    <Container>
      <section>
        <header>
          <Title>Feeling grateful today?</Title>
        </header>
        {isDateSelected && (
          <>
            <Content>
              <div className="actions">
                <button type="button" onClick={() => setDate(false)}>
                  ←
                </button>
                <strong>24th set</strong>
              </div>
              <PostList />
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
              />
            </footer>
          </>
        )}

        {!isDateSelected && (
          <Content>
            <div className="calendar-wrap">
              <Calendar />
            </div>
          </Content>
        )}
      </section>
    </Container>
  );
}

export default Main;
