import React from 'react';

import { Container, Title, Content } from './styles';

import PostList from '~/components/PostList';

const Main = () => (
  <Container>
    <section>
      <header>
        <Title>Feeling grateful today?</Title>
      </header>
      <Content>
        <div className="actions">
          <button type="button">←</button>
          <strong>24th set</strong>
        </div>
        <PostList />
      </Content>
      <footer>
        <form>
          <textarea
            name=""
            id=""
            rows="5"
            placeholder={'Type something you are grateful for and press "Enter" to share with everyone'}
          />
        </form>
      </footer>
    </section>
  </Container>
);

export default Main;
