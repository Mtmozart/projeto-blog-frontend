import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    /* Insira seu código CSS aqui */
    margin: ${theme.spacings.medium} auto;
    max-width: 0 ${theme.sizes.content};
    padding: 0 ${theme.spacings.large} 0;

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
