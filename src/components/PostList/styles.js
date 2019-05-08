import styled from 'styled-components';

import { colors, metrics } from '~/styles';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  background: ${colors.white};
  padding: 10px 20px;
  border-bottom: 0.3px ${colors.lighter} solid;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(even) {
    background: #f9f9f9;
  }

  p {
    color: #505050;
    font-size: 0.8rem;
    text-align: justify;
    line-height: 1.6em;
  }
`;
