import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colorsThemes.primary};
    color: ${theme.colorsThemes.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    cursor: pointer;
    font-weight: bold;
    border-radius: 15px;
  `}
  &:hover {
    background-color: ${theme.colorsThemes.mediumGray};
    color: ${theme.colorsThemes.primary};
    border: 1px solid ${theme.colorsThemes.primary};
  }
  &:disabled {
    background: ${theme.colorsThemes.darkerGray};
  }
`;
