import styled from 'styled-components';

import { colors, medias } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h1 {
    font-size: 1.5rem;
    margin-left: 20px;
    color: ${colors.white};
    text-transform: uppercase;
    letter-spacing: 1.4px;

    @media ${medias.sm} {
      font-size: 2rem;
    }

    @media ${medias.md} {
      font-size: 3rem;
    }
  }
`;
