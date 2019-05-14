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

export const LoadingPlaceholder = styled.p`
  height: 20px;
  animation: pulse 1s infinite ease-in-out;


  ${props => props.size === 'lg'
    && `
    width: 100%;
  `}
  ${props => props.size === 'md'
    && `
    width: 50%;
  `}
  ${props => props.size === 'xs'
    && `
    width: 25%;
  `}
  ${props => props.secondLine
    && `
    margin-top: 5px;
  `}
`;

export const ErrorMessage = styled.p`
  padding: 20px;
  background: ${colors.danger};
  color: ${colors.white};
`;
