import * as Styled from './styles';
import { PrismWrapper } from './prims-vscode-dark';
import { useEffect } from 'react';
import React from 'react';
import Prism from 'prismjs';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <PrismWrapper>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
    </PrismWrapper>
  );
};
