import styled, { DefaultTheme, css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';
//tipamento de função tem no curso
type MenuBehaviorProps = {
  menuVisible: boolean;
};
const wrapperChange = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '0' : '-30rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '0' : '-32rem'};
  }
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colorsThemes.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    overflow-y: auto;
    transition: all 300ms ease-in-out;
    ${wrapperChange(menuVisible, theme)}
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
  `}
`;

export const Logo = styled.div`
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

const wrapperChangeBotton = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26' : '1rem'};
  color: ${menuVisible
    ? theme.colorsThemes.secondary
    : theme.colorsThemes.white};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '0' : '0.5rem'};
  }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colorsThemes.white};
    background: ${theme.colorsThemes.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;
    ${wrapperChangeBotton(menuVisible, theme)}
  `}
`;
