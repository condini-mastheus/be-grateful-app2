import React, { useState } from 'react';

import Calendar from 'react-calendar';

import { Container, Title, Content } from './styles';

import PostList from '~/components/PostList';

function Main() {
  const [post, setPost] = useState('');
  const [date, setDate] = useState(new Date());
  const today = new Date();

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
          <Title>
            {date
              ? today.getUTCDate() === date.getUTCDate() && today.getMonth() === date.getMonth()
                ? 'Feeling grateful today?'
                : `Feeling grateful on  ${date.getUTCDate()}  ${date.toLocaleString('en-us', {
                  month: 'short',
                })}?`
              : 'Choose a day that you are grateful for'}
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
                  {`${date.getUTCDate()}  ${date.toLocaleString('en-us', {
                    month: 'short',
                  })}`}
                </strong>
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

        {!date && (
          <Content>
            <div className="calendar-wrap">
              <Calendar locale="en-us" onChange={_date => setDate(_date)} value={date} />
            </div>
          </Content>
        )}
      </section>
    </Container>
  );
}

export default Main;
