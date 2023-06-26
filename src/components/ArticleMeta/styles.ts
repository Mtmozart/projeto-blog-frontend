import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colorsThemes.darkerGray};
    font-style: italic;
    .categories span::after {
      content: ', ';
    }
    .categories span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colorsThemes.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }
    &:hover {
      filter: brightness(50%);
    }
  `}
`;
