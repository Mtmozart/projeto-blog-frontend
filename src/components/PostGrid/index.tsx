import { PostCardProps, PostCard } from '../PostCard';
import * as Styled from './styles';

/*Observação -- Provavelmente tambem terrei que corrigir quando for chamar a api*/

export type PostGridProps = {
  posts?: PostCardProps[];
};

export function PostGrid({ posts = [] }: PostGridProps) {
  return (
    <Styled.Wrapper>
      {posts.length === 0 && (
        <Styled.NotFound>Nenhum encontrado</Styled.NotFound>
      )}
      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard
              key={`post-card-${post.id}`}
              title={post.title}
              cover={post.cover}
              excerpt={post.excerpt}
              slug={post.slug}
              id={post.id}
            />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
}
