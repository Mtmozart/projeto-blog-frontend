import * as Styled from './styles';
import { Author } from '../../shared-types/author';
import { Category } from '../../shared-types/category';
import { formatDate } from '../../utils/format-date';
import Link from 'next/link';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  category?: Category;
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  category = undefined,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {author && typeof author !== 'undefined' && (
          <>
            <span>Por: </span>
            <Link href={`/author/${author.data.attributes.slug}`}>
              {author.data.attributes.displayName}
            </Link>
          </>
        )}
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {category && typeof category !== 'undefined' && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              <Link href={`/category/${category.data.attributes.slug}`}>
                {category.data.attributes.displayName}
              </Link>
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
