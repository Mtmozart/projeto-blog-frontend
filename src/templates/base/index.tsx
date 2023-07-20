import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoToTop } from '../../components/GoToTop';
import { useRouter } from 'next/router';
import { ToggleTheme } from '../../components/ToogleTheme';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  return (
    <Styled.Wrapper>
      <ToggleTheme />
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
      <Styled.SearchContainer>
        <form action="/search" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Buscar posts"
            name="q"
            defaultValue={router?.query?.q || ''}
          />
        </form>
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.data.attributes.text} />
      </Styled.FooterContainer>
      <GoToTop />
    </Styled.Wrapper>
  );
};
