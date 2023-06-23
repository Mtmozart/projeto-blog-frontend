import * as Styled from './styles';
import React from 'react';
//import ReactMarkdown from 'react-markdown';
export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
  /*return <ReactMarkdown>{html}</ReactMarkdown>;*/
};
