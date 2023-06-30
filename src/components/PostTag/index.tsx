import * as Styled from './styles';
import { PostTag } from '../../shared-typed/tag';
import Link from 'next/link';

export type PostTagProps = {
  tags?: PostTag[];
};

export const PostTags = ({ tags }: PostTagProps) => {
  return (
    <Styled.Wrapper>
      tags:
      {tags.map((tag) => {
        return (
          <span key={tag.data.attributes.displayName}>
            <Link href={`/tag/${tag.data.attributes.slug}`}>
              {tag.data.attributes.displayName}
            </Link>
          </span>
        );
      })}
    </Styled.Wrapper>
  );
};
