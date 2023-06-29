import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colorsThemes.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    overflow-y: auto;
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
  `}
`;

export const Logo = styled.nav`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};
      img {
        border: 0.5rem solid ${theme.colorsThemes.secondary};
      }
    }
  `}
`;

export const OpenClose = styled.a`
  ${({ theme }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colorsThemes.white};
    background: ${theme.colorsThemes.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
  `}
`;
