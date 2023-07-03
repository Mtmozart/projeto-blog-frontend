import { PostCardProps, PostCard } from '../PostCard';
import * as Styled from './styles';
import postsApi from './mock';

/*Observação -- Provavelmente tambem terrei que corrigir quando for chamar a api*/
const postsApiStrapi = postsApi;
export type PostGridProps = {
  posts?: PostCardProps[];
};

export function PostGrid({ posts = [] }: PostGridProps) {
  return (
    <Styled.Wrapper>
      {postsApiStrapi.length === 0 && (
        <Styled.NotFound>Nenhum post</Styled.NotFound>
      )}
      <Styled.Grid>
        {postsApiStrapi.length > 0 &&
          postsApiStrapi.map((post) => (
            <PostCard
              key={`post-card-${post.id}`}
              title={post.attributes.title}
              cover={post.attributes.cover}
              excerpt={post.attributes.excerpt}
              slug={post.attributes.slug}
              id={post.id}
            />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
}
