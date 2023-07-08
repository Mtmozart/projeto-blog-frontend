import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
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
      ...imageEntityResponse
    }
    menuLink {
      ...menuLink
    }
    text
  }

  fragment imageEntityResponse on UploadFileRelationResponseCollection {
    data {
      ...imageEntity
    }
  }

  fragment imageEntity on UploadFileEntity {
    id
    attributes {
      ...image
    }
  }

  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment postEntityResponse on PostEntityResponse {
    data {
      ...postEntity
    }
  }

  fragment postEntityResponseCollection on PostEntityResponseCollection {
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
  }
`;
