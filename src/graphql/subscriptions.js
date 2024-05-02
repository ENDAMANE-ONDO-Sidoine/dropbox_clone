/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile(
    $filter: ModelSubscriptionFileFilterInput
    $owner: String
  ) {
    onCreateFile(filter: $filter, owner: $owner) {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile(
    $filter: ModelSubscriptionFileFilterInput
    $owner: String
  ) {
    onUpdateFile(filter: $filter, owner: $owner) {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile(
    $filter: ModelSubscriptionFileFilterInput
    $owner: String
  ) {
    onDeleteFile(filter: $filter, owner: $owner) {
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
export const onCreateFileVersion = /* GraphQL */ `
  subscription OnCreateFileVersion(
    $filter: ModelSubscriptionFileVersionFilterInput
    $owner: String
  ) {
    onCreateFileVersion(filter: $filter, owner: $owner) {
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
export const onUpdateFileVersion = /* GraphQL */ `
  subscription OnUpdateFileVersion(
    $filter: ModelSubscriptionFileVersionFilterInput
    $owner: String
  ) {
    onUpdateFileVersion(filter: $filter, owner: $owner) {
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
export const onDeleteFileVersion = /* GraphQL */ `
  subscription OnDeleteFileVersion(
    $filter: ModelSubscriptionFileVersionFilterInput
    $owner: String
  ) {
    onDeleteFileVersion(filter: $filter, owner: $owner) {
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
