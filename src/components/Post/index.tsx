import * as Styled from './styles';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  author,
  category,
  content,
  cover,
  createdAt,
  excerpt,
  id,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          title={title}
          author={author}
          category={category}
          excerpt={excerpt}
          id={id}
          cover={cover}
          createdAt={createdAt}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
