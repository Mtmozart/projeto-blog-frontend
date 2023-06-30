import * as Styled from './styles';
import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { formatDate } from '../../utils/format-date';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category;
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = undefined,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por: </span>
            <a href={`/author/${author.data.attributes.slug}`}>
              {author.data.attributes.displayName}
            </a>
          </>
        )}
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {typeof categories !== 'undefined' && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              <a href={`/category/${categories.data.attributes.slug}`}>
                {categories.data.attributes.displayName}
              </a>
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};
