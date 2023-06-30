import Link from 'next/link';
import { PostProps } from '../Post';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-typed/strapi-image';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export function PostCard({ title, cover, excerpt, slug }: PostCardProps) {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <Styled.Cover
          src={cover.data.attributes.url}
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
