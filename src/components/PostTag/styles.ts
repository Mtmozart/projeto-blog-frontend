import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    /* Insira seu código CSS aqui */
    margin: ${theme.spacings.medium};

    span {
      margin: 0 0 0 0.5rem;
    }
    span::before {
      content: ' ';
    }
    span::after {
      content: ', ';
    }
    span:last-child::after {
      content: '.';
    }
    a {
      color: ${theme.colorsThemes.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
