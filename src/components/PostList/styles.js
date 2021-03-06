import styled from 'styled-components';

import { colors, medias } from '~/styles';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  max-height: 220px;
  @media ${medias.sm} {
    max-height: 400px;
  }
  overflow-y: auto;
`;

export const ListItem = styled.li`
  background: ${colors.white};
  padding: 10px 20px;
  border-bottom: 0.3px ${colors.lighter} solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    background: #f9f9f9;
  }

  p {
    color: #505050;
    font-size: 0.7rem;
    text-align: justify;
    line-height: 1.6em;
    display: flex;
    flex: 1;

    @media ${medias.sm} {
      font-size: 0.8rem;
    }
  }

  small {
    padding-left: 15px;
    font-size: 0.65em;

    color: ${colors.regular};
  }

  ${props => props.empty
    && `
    p {
      color: ${colors.primary};
    }
  `}
  ${props => props.endList
    && `
    padding: 0;
    background: none;
  `}
`;

export const LoadingPlaceholder = styled.div`
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
