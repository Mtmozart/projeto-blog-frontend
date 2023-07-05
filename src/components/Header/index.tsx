import * as Styled from './styles';
import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import { StrapiImage } from '../../shared-types/strapi-image';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  showText: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={logo.data.attributes.url}
        text={`${blogName}`}
      />

      {showText && (
        <Styled.Content>
          <Heading size="small" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
