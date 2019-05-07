import React from 'react';
import { Emoji } from 'emoji-mart';

import { Container } from './styles';

const Brand = () => (
  <Container>
    <Emoji emoji={{ id: 'pray', skin: 1 }} size={36} />
    <h1>BeGrateful 2</h1>
  </Container>
);

export default Brand;
