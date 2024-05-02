/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      ownedFiles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      name
      storagePath
      ownerId
      owner {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      versions {
        nextToken
        __typename
      }
      userOwnedFilesId
      __typename
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        storagePath
        ownerId
        createdAt
        updatedAt
        userOwnedFilesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFileVersion = /* GraphQL */ `
  query GetFileVersion($id: ID!) {
    getFileVersion(id: $id) {
      id
      fileId
      file {
        id
        name
        storagePath
        ownerId
        createdAt
        updatedAt
        userOwnedFilesId
        __typename
      }
      versionNumber
      url
      createdAt
      updatedAt
      fileVersionsId
      owner
      __typename
    }
  }
`;
export const listFileVersions = /* GraphQL */ `
  query ListFileVersions(
    $filter: ModelFileVersionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileVersions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fileId
        versionNumber
        url
        createdAt
        updatedAt
        fileVersionsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
