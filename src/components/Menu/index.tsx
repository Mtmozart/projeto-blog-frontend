import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};
/*Aqui há um erro, eu coloque na api como menu link,
provavelmente vou ter que ajeitar mais tarde, escrevendo para
lembrar,mas é melhor seguir o curso --- menuLink é o nome da fera*/
export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};
export const Menu = ({ links, blogName, logo }: MenuProps) => {
  return (
    <>
      <Styled.OpenClose
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
      >
        <MenuIcon aria-label="Open menu" />
      </Styled.OpenClose>
      <Styled.Wrapper>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} srcImg={logo} />
          </Styled.Logo>
          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
