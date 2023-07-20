import { useContext } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  const themeContext = useContext(BlogThemeContext);
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
};
