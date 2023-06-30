import { PostCardProps, PostCard } from '../PostCard';
import * as Styled from './styles';

/*Observação -- Provavelmente tambem terrei que corrigir quando for chamar a api*/
export type PostGridProps = {
  posts?: PostCardProps[];
};
export function PostGrid({ posts = [] }: PostGridProps) {
  console.log(posts);
  return (
    <Styled.Wrapper>
      {posts.length === 0 && (
        <Styled.NotFound>Nenhum post encontrado aqui!</Styled.NotFound>
      )}

      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard key={`post-card-${post.id}`} {...post} />
          ))}
      </Styled.Grid>
    </Styled.Wrapper>
  );
}
