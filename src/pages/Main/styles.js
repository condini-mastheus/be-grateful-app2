import styled from 'styled-components';

import { colors, medias } from '~/styles';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;

  section {
    background: ${colors.white};
    border-radius: 20px;
    overflow: hidden;

    header {
      padding: 20px;
      border-bottom: 0.3px solid #e9ecef;
    }

    footer {
      input {
        width: 100%;
        padding: 20px;
        border: none;
        font-size: 14px;
        resize: none;
        background: #ffffff;

        @media ${medias.sm} {
          /* height: 100px; */
          padding: 40px 20px;
        }

        &:disabled {
          opacity: 0.2;
        }
      }
      span {
        font-size: 0.7em;
        text-align: center;
        display: block;
        padding: 9px 0;
        color: red;
      }
    }
  }
`;

export const Title = styled.h2`
  color: ${colors.primary};
  font-size: 1.5rem;
`;

export const Content = styled.div`
  .calendar-wrap {
    padding: 10px 0 30px 0;
  }

  .actions {
    padding: 20px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;

    button {
      background: ${colors.lighter};
      border: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-weight: 700;
      font-size: 0.9rem;
      color: ${colors.dark};
      cursor: pointer;
      transition: 0.3s all;

      &:hover {
        background: ${colors.dark};
        color: ${colors.white};
      }
    }

    strong {
      color: ${colors.primary};
      padding: 10px;
      background: ${colors.secundary};
      border-radius: 10px;
      font-size: 0.75rem;

      @media ${medias.sm} {
        font-size: 1rem;
      }
    }
  }
`;
