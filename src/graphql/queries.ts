import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}
  query GET_POSTS(
    $start: Int = 0
    $limit: Int = 10
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $sort: [String] = "createdAt:desc"
  ) {
    setting {
      ...settingEntityResponse
    }
    posts(
      sort: $sort
      pagination: { start: $start, limit: $limit }
      filters: {
        slug: { eq: $postSlug }
        or: [
          { title: { containsi: $postSearch } }
          { content: { containsi: $postSearch } }
          { excerpt: { containsi: $postSearch } }
        ]
        title: { eq: $postSearch }
        category: { slug: { eq: $categorySlug } }
        author: { slug: { eq: $authorSlug } }
        tags: { slug: { eq: $tagSlug } }
      }
    ) {
      ...postEntityCollection
    }
  }
`;
