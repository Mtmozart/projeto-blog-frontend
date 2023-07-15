import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment entityImage on UploadFileEntityResponse {
    data {
      ...image
    }
  }

  fragment image on UploadFileEntity {
    identificador: id
    attributes {
      name
      altText: alternativeText
      url
    }
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment settingEntityResponse on SettingEntityResponse {
    data {
      ...settingEntity
    }
  }

  fragment settingEntity on SettingEntity {
    id
    attributes {
      ...setting
    }
  }
  fragment setting on Setting {
    BlogName
    blogDescription
    logo {
      ...entityImage
    }
    menuLink {
      ...menuLink
    }
    text
  }
  fragment tagEntityCollection on TagRelationResponseCollection {
    data {
      ...tagEntity
    }
  }

  fragment tagEntity on TagEntity {
    id
    attributes {
      ...tag
    }
  }

  fragment tag on Tag {
    displayName
    slug
  }

  fragment authorEntityResponse on AuthorEntityResponse {
    data {
      ...authorEntity
    }
  }

  fragment authorEntity on AuthorEntity {
    id
    attributes {
      displayName
      slug
    }
  }

  fragment CategoryEntityResponse on CategoryEntityResponse {
    data {
      ...categoryEntity
    }
  }

  fragment categoryEntity on CategoryEntity {
    id
    attributes {
      displayName
      slug
    }
  }

  fragment postEntityCollection on PostEntityResponseCollection {
    data {
      ...postEntity
    }
  }

  fragment postEntity on PostEntity {
    id
    attributes {
      ...post
    }
  }

  fragment post on Post {
    title
    slug
    cover {
      ...entityImage
    }
    excerpt
    allowComments
    tags {
      ...tagEntityCollection
    }
    author {
      ...authorEntityResponse
    }
    category {
      ...CategoryEntityResponse
    }
    allowComments
    createdAt
  }
`;
