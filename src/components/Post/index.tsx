import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  author,
  categories,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader
        title={title}
        author={author}
        categories={categories}
        excerpt={excerpt}
        id={id}
        cover={cover}
        createdAt={createdAt}
      />
      <HtmlContent html={content} />
    </Styled.Wrapper>
  );
};
