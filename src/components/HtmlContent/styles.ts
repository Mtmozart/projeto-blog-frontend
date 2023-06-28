import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    line-height: 1.5;
    p {
      margin: ${theme.spacings.medium} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colorsThemes.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }
    code {
      font-family: monospace;
      color: ${theme.colorsThemes.secondary};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colorsThemes.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colorsThemes.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colorsThemes.white};
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
      margin: ${theme.spacings.medium} 0;
    }

    pre code {
      color: inherit;
      background: inherit;
    }
    img {
      max-width: 100%;
    }

    .image {
      ${theme.colorsThemes.mediumGray}
      line-height: 0;
      margin: ${theme.spacings.medium} 0;
    }
    .image figcaption {
      font-size: ${theme.font.sizes.small}
      padding: ${theme.spacings.small}
      text-align: center;
      ine-height: 1.3;
    }

    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium} 0;
    }
    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colorsThemes.mediumGray};
    }

    ul,
    ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
    }
    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: ${theme.spacings.medium} 0;
    }
    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colorsThemes.mediumGray};
    }
    blockquote {
      border-left: 0.5rem solid ${theme.colorsThemes.secondary};
      color: ${theme.colorsThemes.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }

      @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        float: none;
        max-width: 100%;
        margin: ${theme.spacings.medium}
      }
    }

  `}
`;
