import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.content};
    width: 100%;
    margin: 0 ${theme.spacings.large};
  `}
`;
