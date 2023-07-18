import { Author } from '../../shared-types/author';
import { Category } from '../../shared-types/category';
import { StrapiImage } from '../../shared-types/strapi-image';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
  author: Author;
  category: Category;
  createdAt: string;
};

export const ArticleHeader = ({
  id,
  title,
  excerpt,
  cover,
  author,
  category,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover
        src={`http://localhost:1337${cover.data.attributes.url}`}
        alt={title}
      />
      <ArticleMeta category={category} author={author} createdAt={createdAt} />
    </Styled.Wrapper>
  );
};
