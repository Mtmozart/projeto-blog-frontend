import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoToTop } from '../../components/GoToTop';
import { useRouter } from 'next/router';
import { ToggleTheme } from '../../components/ToogleTheme';
import { useState, useRef, useEffect } from 'react';
/*Icons */
import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) {
      return;
    }
    const q = searchValue;

    if (!q || q.length < 3) {
      return;
    }

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);
    return () => {
      clearTimeout(inputTimeout.current);
    };
  }, [searchValue, router]);

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
        <Styled.SearchInput
          type="search"
          placeholder="Buscar posts"
          name="q"
          value={searchValue}
          disabled={searchDisabled}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="Input Disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="Input enabled"
          />
        )}
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.data.attributes.text} />
      </Styled.FooterContainer>
      <GoToTop />
    </Styled.Wrapper>
  );
};
