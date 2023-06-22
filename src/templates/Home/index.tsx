import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global-styles.css';

import { CloneMe } from '../../components/CloneMe';

const container = document.getElementById('root');
const root = createRoot(container!); //  if you use TypeScript
root.render(<CloneMe title="Clone-me" />);

/*

import * as Styled from './styles';

export function Home() {
  return (
    <Styled.Wrapper>
      <CloneMe title="Clone-me" />
    </Styled.Wrapper>
  );
}*/
