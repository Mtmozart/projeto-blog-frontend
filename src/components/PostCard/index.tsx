import Link from 'next/link';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-types/strapi-image';
import config from '../../config';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};
const url = config.url;
export function PostCard({ title, excerpt, cover, slug }: PostCardProps) {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <Styled.Cover
          src={`${url}${cover.data.attributes.url}`}
          alt={title}
        ></Styled.Cover>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>{title}</Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
}
