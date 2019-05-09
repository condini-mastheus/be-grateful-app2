import styled from 'styled-components';

import { colors } from '~/styles';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  max-height: 400px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  background: ${colors.white};
  padding: 10px 20px;
  border-bottom: 0.3px ${colors.lighter} solid;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    background: #f9f9f9;
  }

  p {
    color: #505050;
    font-size: 0.8rem;
    text-align: justify;
    line-height: 1.6em;
  }

  ${props => props.empty
    && `
    p {
      color: ${colors.primary};
    }
  `}
`;

export const Loading = styled.div`
  padding: 20px;
  margin: 0 20px;
  background: #f2f2f2;

  span {
    display: block;
    font-size: 0.8em;
    text-align: center;
    color: ${colors.dark};
  }
`;
