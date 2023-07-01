import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoToTop } from '../../components/GoToTop';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.data.attributes.menuLink}
        blogName={settings.data.attributes.BlogName}
        logo={settings.data.attributes.logo}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={settings.data.attributes.BlogName}
          blogDescription={settings.data.attributes.blogDescription}
          logo={settings.data.attributes.logo}
          showText={true}
        />
      </Styled.HeaderContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={settings.data.attributes.text} />
      </Styled.FooterContainer>
      <GoToTop />
    </Styled.Wrapper>
  );
};
